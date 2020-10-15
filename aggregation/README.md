Autor: Ing. Martin Acosta - 2020

# Ejercitación MongoDB - Aggregation Framework
## Gestión de Grandes Volúmenes de Datos - CEIoT - FIUBA
### Realizar una consulta que devuelva la siguiente información: Región y cantidad total de productos vendidos a clientes de esa Región.
```sh
db.facturas.aggregate([
    {
        $unwind : "$item"
    },
    {
    $project:{
            _id:0,     
            region: "$cliente.region",
            cantidad: "$item.cantidad"
         }
    },
    {
     $group:{
        _id:"$region",
        totalProd: {$sum:"$cantidad"},
        }
    }
])
```
```sh
{ "_id" : "CENTRO", "totalProd" : 110160 }
{ "_id" : "NOA", "totalProd" : 8760 }
{ "_id" : "CABA", "totalProd" : 175200 }
{ "_id" : "NEA", "totalProd" : 262800 }
```
### Basado en la consulta del punto 1, mostrar sólo la región que tenga el menor ingreso.
```sh

```
### Basado en la consulta del punto 1, mostrar sólo las regiones que tengan una cantidad de productos vendidos superior a 10000.
```sh

```
### Se requiere obtener un reporte que contenga la siguiente información, nro. cuit, apellido y nombre y región y cantidad de facturas, ordenado por apellido.
```sh

```
### Basados en la consulta del punto 4 informar sólo los clientes con número de CUIT mayor a 27000000000.
```sh

```
### Basados en la consulta del punto 5 informar solamente la cantidad de clientes que cumplen con esta condición.
```sh

```
### Se requiere realizar una consulta que devuelva la siguiente información: producto y cantidad de facturas en las que lo compraron, ordenado por cantidad de facturas descendente.
```sh

```
### Obtener la cantidad total comprada así como también los ingresos totales para cada producto.
```sh

```
### Idem el punto anterior, ordenar por ingresos en forma ascendente, saltear el 1ro y mostrar 2do y 3ro.
```sh

```
### Obtener todos productos junto con un array de las personas que lo compraron. En este array deberá haber solo strings con el nombre completo de la persona. Los documentos entregados como resultado deberán tener la siguiente forma: {producto: “<nombre>”, personas:[“...”, ...]}
```sh

```
### Obtener los productos ordenados en forma descendente por la cantidad de diferentes personas que los compraron.
```sh

```
### Obtener el total gastado por persona y mostrar solo los que gastaron más de 3100000. Los documentos devueltos deben tener el nombre completo del cliente y el total gastado: {cliente:”<nombreCompleto>”,total:<num>}
```sh

```
### Obtener el promedio de gasto por factura por cada región.
```sh

```
### Obtener la factura en la que se haya gastado más. En caso de que sean varias obtener la que tenga el número de factura menor.
```sh

```
### Obtener a los clientes indicando cuánto fue lo que más gastó en una única factura.
```sh

```
### Utilizando MapReduce, indicar la cantidad total comprada de cada ítem. Comparar el resultado con el ejercicio 8.
```sh

```
### Obtener la información de los clientes que hayan gastado 100000 en una orden junto con el número de orden.
```sh

```
### En base a la localidad de los clientes, obtener el total facturado por localidad.
```sh

```
