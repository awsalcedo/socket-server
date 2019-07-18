import {Router, Request, Response} from 'express';
import { request } from 'https';

//Si se exporta desde aquí export const router = Router(); al importar en otro archivo quedará así:
// import {router} from './routes/router';
const router = Router();

router.get('/mensajes', (req: Request, res: Response) =>{
    res.json({
        ok: true,
        mensaje: 'Todo está bien!!!!'
    });
});

//Para recibir los parámetros y leer los parámetros por POST se necesita body-parser para 
//serializar y generar un objeto de javascript  
router.post('/mensajes', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        cuerpo,
        de
    });
});

router.post('/mensajes/:id', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo; // cuerpo -> es lo que se envió en el body desde el cliente
    const de = req.body.de;  // de -> es lo que se envió en el body desde el cliente
    const id = req.params.id; // debe ir el nombre del parametro como le puse en el método

    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});

// al exportar así donde se importe quedará así import router from './routes/router'
export default router; 