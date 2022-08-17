## requisitos: Mongo db, NodeJs

Recomendado `MongoDB shell version v4.4.13`

Recomendado `Node v12.19.0`

# App Properties Sell

Para Correr la APP en un entorno local, por favor seguir los siguientes [PASOS]:

1) Configurar Mongo

## Inicie el interprete de mongo con: `mongo`;

## cree la base de datos con: `use propertySales`;

## configure los permisos con el siguiente comando :

`db.createUser({ user: "admin", pwd: "admin",  roles: [ { role:"dbAdmin", db: "propertySales" } ] });`

2) configuracion del proyecto: 

Ingrese a la raíz del proyecto

 ### Ejectuete  `npm i`

Ingrese a la carpeta frontend con `cd frontend`

 ### Ejectute  `npm i`

 Luego retrosceda a la carpeta raíz `cd ../`

 ### Ejectute `npm run all`
 ## Asegurese de que el servidor este corriendo en el puerto `8001`


 3)Acceda a la APP:
## http://localhost:8001

Para acceder y administrar sus propiedades acceda por la barra de navegacion `Post`

valla a login y acceda con: 

Ya hay un usuario previo creado con propiedades

## email : `wilmeraular16@gmail.com`
## password : `1234`

Para crear un usuario valla a register y cree un usuario y administre sus propiedades.