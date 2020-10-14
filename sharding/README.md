Autor: Ing. Martin Acosta - 2020

# Ejercitación MongoDB - Sharding
## Gestión de Grandes Volúmenes de Datos - CEIoT - FIUBA
Basados en la colección de facturas en la base de datos finanzas.
### Levantar todas las instancias necesarias para tener un cluster distribuido con un único Shard.
Levanto el servidor de configuración
```sh
mongod --dbpath sh/c --configsvr --replSet c --port 27500
```
Creo el replica set del servidor de configuración
```sh
mongo --port 27500
```
```sh
conf = {
    "_id" : "c",
    "members" : [
        {
            "_id" : 0,
            "host" : "localhost:27500"
        }
    ]
}
rs.initiate(conf)
```
Levanto las instancias con --shardsvr
```sh
mongod --shardsvr --dbpath sh/0 --port 27060 --nojournal
mongod --shardsvr --dbpath sh/1 --port 27061 --nojournal
mongod --shardsvr --dbpath sh/2 --port 27062 --nojournal
```
Añado el shard al mongos
```sh
mongo
```
```sh
sh.addShard("p1/localhost:27060")
```
### Pensar las consultas que podrían realizarse a esta colección y definir una clave acorde para implementar Sharding.
Cambio a la DB "finanzas" y creo la shard key
```sh
use finanzas
db.facturas.createIndex({"cliente.region":1,condPago:1,_id:1})
```
![alt text](https://i.ibb.co/0mkj4Sr/create-Index.png)
### Implementar Sharding en la db finanzas sobre la colección facturas. Consultar la metadata del cluster.
Indico la DB que será shardeada e indico la colección a particionar junto con la shard key
```sh
sh.enableSharding("finanzas")
sh.shardCollection("finanzas.facturas",{"cliente.region":1,condPago:1,_id:1})
```
![alt text](https://i.ibb.co/yPmnDXW/shard-Collection.png)
![alt text](https://i.ibb.co/kcT3735/status-previo.png)
### Agregar 2 nuevos Shards al cluster.
Añado los 2 shards restantes al mongos
```sh
mongo
```
```sh
sh.addShard("p2/localhost:27061")
sh.addShard("p3/localhost:27062")
```
### Ejecutar el script facts.js 5 veces para crear volumen de datos.
```sh
for(var i = 0; i<3000; i++){load("facts3.js")}
```
![alt text](https://i.ibb.co/Ss7wfpW/load-Facts.png)
### Consultar nuevamente la metadata del cluster: Ver los shards disponibles, los chunks creados y en que shard están estos.
![alt text](https://i.ibb.co/px3w6Dw/status-Shards.png)
![alt text](https://i.ibb.co/b2wXVsJ/status-Databases.png)
### Definir dos consultas que obtengan cierta información de la BD e informar la salida del explain. Una debe poder obtener la información de un único shard y la otra debe tener que consultarlos a todos.
```sh
db.facturas.find({"cliente.region":"CABA","condPago":"30 Ds FF"}).explain()
```
![alt text](https://i.ibb.co/sg0fFr8/consultar2.png)
```sh
db.facturas.find({"cliente.apellido":"Manoni"}).explain()
```
![alt text](https://i.ibb.co/7RsKryR/consulta-Todos2.png)