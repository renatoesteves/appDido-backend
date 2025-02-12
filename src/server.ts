import express, { Request, Response, NextFunction } from 'express';
//Sempre importar express error na segunda linha, recomendação da biblioteca 
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import { router } from './routes'
import fileUpload from 'express-fileupload';

const app = express();

app.use(express.json())
app.use(cors());
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 } //No maximo 50mb
}))

app.use(router);

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    //Se for uma instancia do tipo error
    if (err instanceof Error) {
        res.status(400).json({
            error: err.message
        })
    }

    res.status(500).json({
        status: 'error',
        message: 'Erro no servidor interno.'
    })
})

app.listen(process.env.PORT, () => console.log('Servidor Online!'));