const express=require('express');

const OngController =require('./controllers/OngController'); 
const IncidentController =require('./controllers/IncidentController'); 
const ProfileController =require('./controllers/ProfileController'); 

const SessionController =require('./controllers/SessionController'); 

const routes = express.Router();
/*
* Metodos http
* Get:buscar/listar informações do backend
* Get:criar informações do backend
* Get:alterar informações do backend
* Get:deletar informações do backend
*/

/** Tipos de parametros
* Query Params: Parametros nomeados enviados após "?" utilizados para filtros, pagiação...
* Ex: ( const param = request.query; console.log(param);)
* Route Params: parametros utilizados para identificar recursos (...com/:id) a rota precisa exata.
* Ex:(app.get('/teste/:carro', (request, response) => {
    const param = request.params;)......Vai coltar o carro id 1
* Request Body: é o corpo da requisição, utilizado pra criar ou alterrar recursos 

 */

/**
 * Request = guarda os dados que vem atravez da requisição
 * Response = Resposnsavel de retornar a resposta do usuario
 */

 /**
  * Banco de dados relacional con knexjs
  */

    routes.get('/ongs', OngController.index);
    routes.post('/ongs', OngController.create);

    routes.post('/sessions', SessionController.create);

    routes.get('/profile', ProfileController.index);

    routes.get('/incidents', IncidentController.index);
    routes.post('/incidents', IncidentController.create);
    routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;