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
db.facturas.aggregate([
    {
        $unwind : "$item"
    },
    {
        $project: {
            "producto": "$item.producto",
            "persona": {$concat: ["$cliente.apellido"," ", "$cliente.nombre"]}
        }
    },
    {
        $group:{
            _id:"$producto",
            personas: {$addToSet: "$persona"}
        }
    },
    {
        $addFields: {
            producto: "$_id"
        }
    },
    {
        $project: {
            _id: 0
        }
    }
])
```
```sh
{ "personas" : [ "Lavagno Soledad", "Manoni Juan Manuel" ], "producto" : "SET HERRAMIENTAS" }
{ "personas" : [ "Manoni Juan Manuel" ], "producto" : "TUERCA 5mm" }
{ "personas" : [ "Manoni Juan Manuel", "Zavasi Martin" ], "producto" : "TUERCA 2mm" }
{ "personas" : [ "Zavasi Martin" ], "producto" : "CORREA 10mm" }
{ "personas" : [ "Manoni Juan Manuel", "Malinez Marina" ], "producto" : "TALADRO 12mm" }
{ "personas" : [ "Malinez Marina" ], "producto" : " CORREA 12mm" }
```
### Obtener los productos ordenados en forma descendente por la cantidad de diferentes personas que los compraron.
```sh
db.facturas.aggregate([
    {
        $unwind : "$item"
    },
    {
        $project: {
            "producto": "$item.producto",
            "persona": {$concat: ["$cliente.apellido"," ", "$cliente.nombre"]},
        }
    },
    {
        $group:{
            _id:"$producto",
            personas: {$addToSet: "$persona"}
        }
    },
    {
        $addFields: {
            count: {$size: "$personas"}
        }
    },
    {
        $sort: {"count": -1}
    }
])
```
```sh
{ "_id" : "SET HERRAMIENTAS", "personas" : [ "Lavagno Soledad", "Manoni Juan Manuel" ], "count" : 2 }
{ "_id" : "TUERCA 2mm", "personas" : [ "Manoni Juan Manuel", "Zavasi Martin" ], "count" : 2 }
{ "_id" : "TALADRO 12mm", "personas" : [ "Manoni Juan Manuel", "Malinez Marina" ], "count" : 2 }
{ "_id" : "TUERCA 5mm", "personas" : [ "Manoni Juan Manuel" ], "count" : 1 }
{ "_id" : "CORREA 10mm", "personas" : [ "Zavasi Martin" ], "count" : 1 }
{ "_id" : " CORREA 12mm", "personas" : [ "Malinez Marina" ], "count" : 1 }
```
### Obtener el total gastado por persona y mostrar solo los que gastaron más de 28000000. Los documentos devueltos deben tener el nombre completo del cliente y el total gastado: {cliente:”<nombreCompleto>”,total:<num>}
```sh
db.facturas.aggregate([
    {
        $unwind : "$item"
    },
    {
        $project: {
            "persona": {$concat: ["$cliente.apellido"," ", "$cliente.nombre"]},
            "gastado": {$multiply: ["$item.cantidad","$item.precio"]}
        }
    },
    {
        $group:{
            _id:"$persona",
            totalGastado: {$sum: "$gastado"}
        }
    },
    {
        $addFields: {
            cliente: "$_id",
            total: "$totalGastado"
        }
    },
    {
        $project: {
            _id: 0,
            totalGastado: 0
        }
    },
    {
        $match: {
            total: {$gt: 28000000}
        }
    },
])
```
```sh
{ "cliente" : "Manoni Juan Manuel", "total" : 28476000 }
```
### Obtener el promedio de gasto por factura por cada región.
```sh
db.facturas.aggregate([
    {
        $unwind: "$item"
    },
    {
        $project: {
            "region": "$cliente.region",
            "gastado": {$multiply: ["$item.precio","$item.cantidad"]}
        }
    },
    {
        $group: {
            _id: "$region",
            promedio: {$avg: "$gastado"}
        }
    }
])
```
```sh
{ "_id" : "NEA", "promedio" : 674.4031830238727 }
{ "_id" : "CABA", "promedio" : 745.3333333333334 }
{ "_id" : "NOA", "promedio" : 700 }
{ "_id" : "CENTRO", "promedio" : 344 }
```
### Obtener la factura en la que se haya gastado más. En caso de que sean varias obtener la que tenga el número de factura menor.
```sh
db.facturas.aggregate([
    {
        $unwind: "$item"
    },
    {
        $project: {
            "nroFactura": "$nroFactura",
            "gasto": {$multiply: ["$item.precio","$item.cantidad"]}
        }
    },
    {
        $group: {
            _id: "$nroFactura",
            gastado: {$sum: "$gasto"}
        }
    },
    {
        $sort: {"gastado": -1, "_id": 1}
    },
    {
        $limit: 1
    }
])
```
```sh
{ "_id" : 1002, "gastado" : 220416 }
```
### Obtener a los clientes indicando cuánto fue lo que más gastó en una única factura.
```sh
db.facturas.aggregate([
    {
        $unwind: "$item"
    },
    {
        $project: {
            cliente: {
                $concat: ["$cliente.nombre", " ", "$cliente.apellido"]
            },
            nroFactura: "$nroFactura",
            gastado: {
                $multiply: ["$item.precio", "$item.cantidad"]
            }
        }
    },
    {
        $group: {
            _id: {
                cliente: "$cliente",
                nroFactura: "$nroFactura"
            },
            totalGastado: {
                $sum: "$gastado"
            }
        }
    },
    {
        $group: {
            _id: "$_id.cliente",
            maxGastado: {
                $max: "$totalGastado"
            }
        }
    }
])
```
```sh
{ "_id" : "Soledad Lavagno", "maxGastado" : 78400 }
{ "_id" : "Juan Manuel Manoni", "maxGastado" : 219520 }
{ "_id" : "Marina Malinez", "maxGastado" : 77056 }
{ "_id" : "Martin Zavasi", "maxGastado" : 220416 }
```
### Utilizando MapReduce, indicar la cantidad total comprada de cada ítem. Comparar el resultado con el ejercicio 8.
```sh
map = function() {
    this.item.forEach(
        function(item){
            emit(item.producto, item.cantidad);
        }
    )
}

reduce = function(key, values) {
    var total = 0;
    for(i=0; i<values.length; i++){
        total += values[i];
    }
    return total;
}

db.facturas.mapReduce(map, reduce, {out:{inline: 1}})
```
```sh
{
        "results" : [
                {
                        "_id" : " CORREA 12mm",
                        "value" : 81312
                },
                {
                        "_id" : "CORREA 10mm",
                        "value" : 98784
                },
                {
                        "_id" : "SET HERRAMIENTAS",
                        "value" : 14112
                },
                {
                        "_id" : "TALADRO 12mm",
                        "value" : 21504
                },
                {
                        "_id" : "TUERCA 2mm",
                        "value" : 56448
                },
                {
                        "_id" : "TUERCA 5mm",
                        "value" : 175280
                }
        ],
        "timeMillis" : 663,
        "counts" : {
                "input" : 49616,
                "emit" : 85232,
                "reduce" : 2982,
                "output" : 6
        },
        "ok" : 1
}
```
Se aprecia que los resutados obtenidos mediante *mapReduce* y *aggregation framework* coinciden.
### Obtener la información de los clientes que hayan gastado 100000 en una orden junto con el número de orden.
```sh
db.facturas.aggregate([
    {
        $unwind : "$item"
    },
    {
        $project: {
            cliente: {
                $concat: ["$cliente.apellido"," ", "$cliente.nombre"]
            },
            nroFactura: "$nroFactura",
            gastado: {
                $multiply: ["$item.cantidad","$item.precio"]
            }
        }
    },
    {
        $group:{
            _id: {
                cliente: "$cliente",
                nroFactura: "$nroFactura"
            },
            totalGastado: {
                $sum: "$gastado"
            }
        }
    },
    {
        $match: {
            totalGastado: {$eq:  100000}
        }
    },
    {
        $project: {
            cliente: "$cliente",
            nroFactura: "$nroFactura"
        }
    }
])
```
```sh

```
No se encontraron clientes que hallan gastado la cantidad mencionada en una factura.
### En base a la localidad de los clientes, obtener el total facturado por localidad.
```sh
db.facturas.aggregate([
    {
        $unwind : "$item"
    },
    {
        $project: {
            localidad: "$cliente.region",
            gastado: {
                $multiply: ["$item.cantidad","$item.precio"]
            }
        }
    },
    {
        $group:{
            _id: "$localidad",
            totalGastado: {
                $sum: "$gastado"
            }
        }
    },
    {
        $project: {
            localidad: "$localidad",
            facturado: "$totalGastado"
        }
    }
])
```
```sh
{ "_id" : "NEA", "facturado" : 28476000 }
{ "_id" : "CABA", "facturado" : 15777216 }
{ "_id" : "NOA", "facturado" : 4939200 }
{ "_id" : "CENTRO", "facturado" : 5085696 }
```
