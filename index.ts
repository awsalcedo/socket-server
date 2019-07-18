import Server from './clases/server';
import router  from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

//Configurar body-parser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json());

//Configurar cors esto sirve para cuando exsita peticiones a nuestro server desde otro dominio y las mismas
//no sean rechazadas para ello se deben instalar las ayudas las cuales son dependencias de desarrollo
//mediante el comando npm install @types/cors --save -dev

server.app.use( cors({ origin: true, credentials: true }) );


//Configurar rutas
server.app.use('/', router);

server.iniciarServer( ()=>{
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});
