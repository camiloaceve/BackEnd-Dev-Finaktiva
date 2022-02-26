# Desafío BackEnd Dev Finaktiva

el reto estuvo desarrollado con node js, manejando funciones asincronas, manejo de jsonwebtoken para el inicio de sesion se trabajaron con middlewares y funciones reutilizabes para no repetir codigo, encriptacion para las cntraseñas y configuracion del eslint y prettier para el manejo de un buen codigo con practicas como error por variables declaradas si utilizar. Estos nos ayuda no dejar codigo suelto y no se vea codigo organizado. manejo de pruebas y configuraciones para el llamado de las variables de entorno, todo lo externo

Se debe clonar el repositorio e instalar las dependencias antes de correrlo de manera local.

#NPM INSTALL

Luego de ejecutar agregar las variables de entorno en el .env

Despues de lo anterior ejecutar el comando de npm para correr la api de
#npm run dev

# Ejecución de la API POSTMAN

URL= http://localhost:4000/api/usuario

##Peticion POST registros de usuarios:

URL=http://localhost:4000/api/usuario/register

Recibe
{
"rol": "Operativo",
"name": "test",
"email": "test@test.com",
}

se envia por headers el TOKEN tiene la validacion si el operativo o Administrativopara la creacion

##Peticion GET Consulta de los usuarios:

URL=http://localhost:4000/api/usuario/listUser

Esta solo recibe el TOKEN por el header para verificar que el usuario esta loguedo

##Peticion PUT Actulizar usuario:

URL=http://localhost:4000/api/usuario/update/:id
recibe el id del usuario por parametro

Recibe
{
"rol":"Operativo",
"name":"test",
"email":"test@gmail.com",
"password":"test12"
}

se envia por headers el TOKEN para validar solo el admin puede actulzar info

##Peticion DELETE borrar usuarios:

URL=http://localhost:4000/api/usuario/deleteUser/:id

recibe el id del usuario por parametro para identificar el que se va a borrar, se envia por headers el TOKEN
para validar solo el admin puede borrar usuarios.

##Peticion POST logueo de usuarios:

URL=http://localhost:4000/api/usuario/login

recibe

{
"email": "test@test.com",
"password": "tests"
}
retorna usuario y token
