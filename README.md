## requisitos: Mongo db, NodeJs

Recomendado `MongoDB shell version v4.4.13`

Recomendado `Node v14.17.6`

# App Properties Sell

Para Correr la APP en un entorno local, por favor seguir los siguientes [PASOS]:

1) Configurar Mongo

## Inicie el interprete de mongo;

## Crear la base de datos con: `use propertySales`;

## Configurar los permisos con el siguiente comando :

`db.createUser({ user: "admin", pwd: "admin",  roles: [ { role:"dbAdmin", db: "propertySales" } ] });`

2) Configuracion del proyecto: 

Ingrese a la raíz del proyecto

 ### Ejectuetar  `mkdir build`
 ### Ejectuetar  `npm i`

Ingrese a la carpeta frontend con `cd frontend`

 ### Ejectutar  `npm i`

 Luego retroceder a la carpeta raíz `cd ../`

 ### Ejectute `npm run all`
 ## Asegurese de que el servidor este corriendo en el puerto `8001`


 3)Acceder a la APP con:
## http://localhost:8001

Para administrar las propiedades acceda desde barra de navegacion `Post`

clickee en login y acceda con: 

## email : `wilmeraular16@gmail.com`
## password : `1234`