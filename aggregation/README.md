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
        $group:{
            _id:"$cliente.region",
            totalProd: {$sum:"$item.cantidad"},
        }
    }
])
```
```sh
{ "_id" : "NEA", "totalProd" : 210560 }
{ "_id" : "CABA", "totalProd" : 141120 }
{ "_id" : "NOA", "totalProd" : 7056 }
{ "_id" : "CENTRO", "totalProd" : 88704 }
```
### Basado en la consulta del punto 1, mostrar sólo la región que tenga el menor ingreso.
```sh
db.facturas.aggregate([
    {
        $unwind : "$item"
    },
    {
        $group:{
            _id:"$cliente.region",
            totalProd: {$sum:"$item.cantidad"},
        }
    },
    {
        $sort: {totalProd: 1}
    },
    {
        $limit: 1
    }
])
```
```sh
{ "_id" : "NOA", "totalProd" : 7056 }
```
### Basado en la consulta del punto 1, mostrar sólo las regiones que tengan una cantidad de productos vendidos superior a 10000.
```sh
db.facturas.aggregate([
    {
        $unwind : "$item"
    },
    {
        $group:{
            _id:"$cliente.region",
            totalProd: {$sum:"$item.cantidad"},
        }
    },
    {
        $match: {
            totalProd: {$gt: 10000}
        }
    }
])
```
```sh
{ "_id" : "NEA", "totalProd" : 210560 }
{ "_id" : "CABA", "totalProd" : 141120 }
{ "_id" : "CENTRO", "totalProd" : 88704 }
```
### Se requiere obtener un reporte que contenga la siguiente información, nro. cuit, apellido y nombre y región y cantidad de facturas, ordenado por apellido.
```sh
db.facturas.aggregate([
    {
        $group: {
            _id: "$cliente",
            nFacturas: {$sum: 1}
        }
    },
    {
        $sort: {
            "_id.apellido": 1
        }
    }
])
```
```sh
{ "_id" : { "apellido" : "Lavagno", "cuit" : 2729887543, "nombre" : "Soledad", "region" : "NOA" }, "nFacturas" : 7056 }
{ "_id" : { "apellido" : "Malinez", "cuit" : 2740488484, "nombre" : "Marina", "region" : "CENTRO" }, "nFacturas" : 7392 }
{ "_id" : { "apellido" : "Manoni", "cuit" : 2029889382, "nombre" : "Juan Manuel", "region" : "NEA" }, "nFacturas" : 21056 }
{ "_id" : { "apellido" : "Zavasi", "cuit" : 2038373771, "nombre" : "Martin", "region" : "CABA" }, "nFacturas" : 14112 }
```
### Basados en la consulta del punto 4 informar sólo los clientes con número de CUIT mayor a 2700000000.
```sh
db.facturas.aggregate([
    {
        $group: {
            _id: "$cliente",
            nFacturas: {$sum: 1}
        }
    },
    {
        $match: {
            "_id.cuit": {$gt:  2700000000}
        }
    },
    {
        $sort: {"_id.apellido": 1}
    }
])
```
```sh
{ "_id" : { "apellido" : "Lavagno", "cuit" : 2729887543, "nombre" : "Soledad", "region" : "NOA" }, "nFacturas" : 7056 }
{ "_id" : { "apellido" : "Malinez", "cuit" : 2740488484, "nombre" : "Marina", "region" : "CENTRO" }, "nFacturas" : 7392 }
```
### Basados en la consulta del punto 5 informar solamente la cantidad de clientes que cumplen con esta condición.
```sh
db.facturas.aggregate([
    {
        $group: {
            _id: "$cliente",
            nFacturas: {$sum: 1}
        }
    },
    {
        $match: {
            "_id.cuit": {$gt:  2700000000}
        }
    },
    {
        $group: {
            _id:null,
            nCuitMayor: {$sum:1}
        }
    }
])
```
```sh
{ "_id" : null, "nCuitMayor" : 2 }
```
### Se requiere realizar una consulta que devuelva la siguiente información: producto y cantidad de facturas en las que lo compraron, ordenado por cantidad de facturas descendente.
```sh
db.facturas.aggregate([
    {
        $unwind : "$item"
    },
    {
        $group:{
            _id:"$item.producto",
            nFacturas: {$sum:1},
        }
    },
    {
        $sort: {"nFacturas":-1}
    }
])
```
```sh
{ "_id" : "TALADRO 12mm", "nFacturas" : 21504 }
{ "_id" : "SET HERRAMIENTAS", "nFacturas" : 14112 }
{ "_id" : "TUERCA 2mm", "nFacturas" : 14112 }
{ "_id" : "CORREA 10mm", "nFacturas" : 14112 }
{ "_id" : "TUERCA 5mm", "nFacturas" : 14000 }
{ "_id" : " CORREA 12mm", "nFacturas" : 7392 }
```
### Obtener la cantidad total comprada así como también los ingresos totales para cada producto.
```sh
db.facturas.aggregate([
    {
        $unwind : "$item"
    },
    {
        $project: {
            "producto": "$item.producto",
            "cantidad": "$item.cantidad",
            "ingreso": {$multiply: ["$item.cantidad","$item.precio"]}
        }
    },
    {
        $group:{
            _id:"$producto",
            nComprado: {$sum: "$cantidad"},
            ingresoTotal: {$sum: "$ingreso"}
        }
    },
    {
        $sort: {"ingresoTotal":-1}
    }
])
```
```sh
{ "_id" : "TUERCA 5mm", "nComprado" : 175280, "ingresoTotal" : 15775200 }
{ "_id" : "CORREA 10mm", "nComprado" : 98784, "ingresoTotal" : 13237056 }
{ "_id" : "TALADRO 12mm", "nComprado" : 21504, "ingresoTotal" : 10536960 }
{ "_id" : "SET HERRAMIENTAS", "nComprado" : 14112, "ingresoTotal" : 9878400 }
{ "_id" : "TUERCA 2mm", "nComprado" : 56448, "ingresoTotal" : 3386880 }
{ "_id" : " CORREA 12mm", "nComprado" : 81312, "ingresoTotal" : 1463616 }
```
### Idem el punto anterior, ordenar por ingresos en forma ascendente, saltear el 1ro y mostrar 2do y 3ro.
```sh
db.facturas.aggregate([
    {
        $unwind : "$item"
    },
    {
        $project: {
            "producto": "$item.producto",
            "cantidad": "$item.cantidad",
            "ingreso": {$multiply: ["$item.cantidad","$item.precio"]}
        }
    },
    {
        $group:{
            _id:"$producto",
            nComprado: {$sum: "$cantidad"},
            ingresoTotal: {$sum: "$ingreso"}
        }
    },
    {
        $sort: {"ingresoTotal":1}
    },
    {
        $skip: 1
    },
    {
        $limit: 2
    }
])
```
```sh
{ "_id" : "TUERCA 2mm", "nComprado" : 56448, "ingresoTotal" : 3386880 }
{ "_id" : "SET HERRAMIENTAS", "nComprado" : 14112, "ingresoTotal" : 9878400 }
```
### Obtener todos productos junto con un array de las personas que lo compraron. En este array deberá haber solo strings con el nombre completo de la persona. Los documentos entregados como resultado deberán tener la siguiente forma: {producto: “<nombre>”, personas:[“...”, ...]}
```sh

```
```sh

```
### Obtener los productos ordenados en forma descendente por la cantidad de diferentes personas que los compraron.
```sh

```
```sh

```
### Obtener el total gastado por persona y mostrar solo los que gastaron más de 3100000. Los documentos devueltos deben tener el nombre completo del cliente y el total gastado: {cliente:”<nombreCompleto>”,total:<num>}
```sh

```
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
