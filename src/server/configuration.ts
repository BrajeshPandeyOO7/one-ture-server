import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { PORT } from '../utility/const';
import { globalRoutes } from '../routes';

export const bootStrap = async () => {
    const app = express();
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE OPTIONS",
        exposedHeaders: 'Content-Type, Authorization',
        preflightContinue: true,
        optionsSuccessStatus: 204
    }));

    globalRoutes(app);
    app.get('/', (req: Request, res:Response) => res.send('Server Running!')); // indicate user that server running
    app.use((req: Request, res:Response, next:NextFunction) => res.send('Given Url does not exist!')); // handle not found routes
    app.listen(PORT, () => {
        console.log(`Server running on Port:${PORT}`);
    })
}