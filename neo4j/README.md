Autor: Ing. Martin Acosta - 2020

# Ejercitación Neo4J
## Gestión de Grandes Volúmenes de Datos - CEIoT - FIUBA
### Se desea modelar la información de alumnos de la facultad en Neo4j, de modo tal que se puedan resolver las siguientes consultas:
1. Listado de alumnos que cursaron materias juntos, pero en esta materia son de distintos grupos.
2. Listado de docentes que dictaron más de una materia.
3. Tu propio promedio de calificaciones.
4. Listado para recomendación de alumnos que cursaron en el mismo curso y cuatrimestre pero no se conocen entre sí.
5. Listado de los conocidos de tus conocidos, hasta longitud 2, e indefinida.
6. Apellido y nombre de alumnos que también son docentes (ver pedido adicional para esta 
consulta).
7. Dado un alumno en particular, recomendación de materias electivas que no haya cursado, en base al criterio de haber sido cursadas por otros alumnos que cursaron por lo menos una en común con él.
8. Hacer una variante del ítem anterior, recomendando sólo si el otro alumno es un contacto 
(directo o indirecto).
9. Consulta adicional, decidida por el alumno.

### Tareas:
* Diseñar el modelo para soportar las consultas.
* Armar el gráfico de dominio, indicando las propiedades contempladas para nodos y relaciones.
* Justificar las decisiones tomadas para armar el modelo (sobre tipos de nodos, relaciones, etc.)
* Cargar los datos correspondientes al dominio.
* Resolver las consultas solicitadas en Cypher.

### Se pide entregar:
* Gráfico de dominio reflejando el modelo armado, con sus justificaciones correspondientes.
* Código cypher de las cargas de datos.
* Enunciado de última consulta.
* Para cada consulta, código cypher correspondiente, y screenshots de las pantallas, una con el grafo y otra con la lista de valores obtenidos.
* Para la consulta del ítem nro. 6, además de su resolución, indicar una variante en el modelado (puntualmente pensando en esta consulta) que también permita obtener el resultado, cómo sería la estrategia y el código de la variante.
* Impresión de pantalla del grafo completo correspondiente a la base de datos generada.

### Resolución

Para la resolución del ejercicio diseñé un esquema de nodos **persona** con sus atributos *nombre* y *apellido*, y nodos **materia** con atributos *nombre*, *modalidad* y *bimestre*.
Las relaciones posibles entre los nodos serán **cursó** con atributos *anio* y *nota*, la relación **enseñó** y la relación **conoce**. Las primeras dos relaciones se darán entre un nodo *persona* y un nodo *materia*, mientras que la última relación existirá entre nodos *persona*.
![](https://i.ibb.co/QN0rJd0/Diagrama-tp-neo4j-1.png)

![](./photos/schema.png)

1. Listado de alumnos que cursaron materias juntos, pero en esta materia son de distintos grupos.
```sh
MATCH (a:Persona)-[:CURSO]->()<-[:CURSO]-(b:Persona)
WHERE (a)-[:CURSO]->(:Materia{nombre:"GVD"})<-[:CURSO]-(b)
AND NOT (a)-[:CURSO$anio]->(:Materia{nombre:"GVD"})<-[:CURSO$anio]-(b)
RETURN DISTINCT a.apellido,b.apellido
```
![](./photos/1.png)
![](./photos/1g.png)
2. Listado de docentes que dictaron más de una materia.
```sh
MATCH (a)-[r:ENSEÑO]->()
WITH a, count(r) AS dio
WHERE dio > 1
RETURN DISTINCT a, dio
```
![](./photos/2.png)
![](./photos/2g.png)
3. Tu propio promedio de calificaciones.
Suponiendo que mi nombre es 'Gustavo Corrado', el cálculo del promedio resulta:
```sh
MATCH (a:Persona { apellido:"Corrado", nombre:"Gustavo" })-[ r:CURSO ]->(b:Materia)
WITH toInteger(r.nota) AS calif
RETURN avg(calif)
```
![](./photos/3.png)
4. Listado para recomendación de alumnos que cursaron en el mismo curso y cuatrimestre pero no se conocen entre sí.
```sh
MATCH (a:Persona)-[:CURSO]->(m:Materia)<-[:CURSO]-(b:Persona)
WHERE NOT (a)-[:CONOCE_A]->(b)
AND NOT (b)-[:CONOCE_A]->(a)
RETURN a, b
```
![](./photos/4.png)
![](./photos/4g.png)
5. Listado de los conocidos de tus conocidos, hasta longitud 2, e indefinida.
Listado de conocidos hasta longitud 2
```sh
MATCH (a:Persona{apellido:"Corrado",nombre:"Gustavo"})-[:CONOCE_A*2..]->(b:Persona)
RETURN b
```
![](./photos/5.png)
![](./photos/5g.png)
6. Apellido y nombre de alumnos que también son docentes (ver pedido adicional para esta 
consulta).
```sh
MATCH (a:Persona)-[:ENSEÑO]->(b:Materia),(a)-[:CURSO]->(c:Materia)
RETURN DISTINCT a.apellido, a.nombre
```
![](./photos/6.png)
![](./photos/6g.png)
7. Dado un alumno en particular, recomendación de materias electivas que no haya cursado, en base al criterio de haber sido cursadas por otros alumnos que cursaron por lo menos una en común con él.
```sh
MATCH (a:Persona{apellido:"Corrado",nombre:"Gustavo"}), (m:Materia{modalidad:"Optativa"})
WHERE NOT (a)-[:CURSO]->(m)
MATCH (b:Persona)-[:CURSO]->(m)
WHERE (a)-[:CURSO]->()<-[:CURSO]-(b)
RETURN DISTINCT m.nombre
```
![](./photos/7.png)
![](./photos/7g.png)
8. Hacer una variante del ítem anterior, recomendando sólo si el otro alumno es un contacto 
(directo o indirecto).
```sh
MATCH (a:Persona{apellido:"Corrado",nombre:"Gustavo"}), (m:Materia{modalidad:"Optativa"})
WHERE NOT (a)-[:CURSO]->(m)
MATCH (b:Persona)-[:CURSO]->(m)
WHERE (a)-[:CONOCE_A*]->(b)
RETURN DISTINCT m.nombre
```
![](./photos/8.png)
![](./photos/8g.png)
9. Consulta adicional, decidida por el alumno:
**Consulto los alumnos que están cursando al menos una materia optativa**
```sh
MATCH (a:Persona)-[:CURSO]->(m:Materia{modalidad:"Optativa"})
RETURN a
```
![](./photos/9.png)
![](./photos/9g.png)