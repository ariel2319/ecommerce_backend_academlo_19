1.- iniciar proyecto 
   =>> npm init -y
2.- instalar dependencias 
   =>> npm i express sequelize pg pg-hstore cors dotenv
3.- instalar dependencias de desarrollo
   =>> npm i morgan nodemon -D
4.- estructura de carpetas
   =>> /src
      ___ /services
      ___ /models
      ___ /controllers
      ___ /routes
      ___ /seeders
      ___ /middlewares
      ___ /tests
      ___ /utils
      ___ /templates
      ___ app.js
      ___ server.js
5.- crear Scripts en package.json
   =>> START =>"start": "node ./src/server.js"
   =>> DEV => "dev": "nodemon ./src/server.js"
6.- crear un SERVER básico
7.- crear una DB pequeña
   =>> users
8.- autenticar la DB en app.js
   =>> db.authenticate()
9.- creaer un modelo genérico de usuarios
   =>> users.model.js => id, username, email, password, isConfirmed
10.- crear el InitModels
   =>> initModels.js
11.- sincronizar la base de datos
   =>> db.sync({ force: false })
12.- registar usuario
   =>> creación de usuarios 
   => encriptar contraseñas
          nodeJS  bcrypt 
13.- autenticación con el login