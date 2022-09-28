# iSante-API
API pour l'application i-santé

Application Web et mobile pour traiter les données médicales des différents patients (stocker leurs données + suivies médicales + prise de rendez vous + fiches des médecins...)

$ sudo npm i -g @nestjs/cli => install nestjs
$ nest new isante-api => create new project isante-api
$ sudo npm install --save @nestjs/mongoose mongoose => install mongoose

$ nest g resource => Crud generator - command not only generates all the NestJS building blocks (module, service, controller classes) but also an entity class, DTO classes as well as the testing (.spec) files.

$ nest g mo : Generate a module
$ nest g co : Generate a controller
$ nest g s : Generate a service 

$ npm i --save @nestjs/swagger => to install swagger

$ npm install -g win-node-env => to fix error : 'NODE_ENV' n’est pas reconnu en tant que commande interne

### RUNNING THE APP ###

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

### SWAGGER ###
# The app provides a Swagger client to try the note REST API at :
  http://localhost:3000/swagger

### TEST  ###

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

### DOCUMENTATION ###

# Compodoc
$ npx compodoc -p tsconfig.json -s

# ----------- DOC
- https://www.typescriptlang.org/
- https://docs.nestjs.com/
- https://github.com/nestjs/swagger
- ##https://docs.mongodb.com/manual/crud/
- https://www.npmjs.com/package/postgres
- https://github.com/saadsabir/iSante/
# -----------

--exemple : https://github.com/corbig/nest-notes-api-example