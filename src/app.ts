import express, {
    type NextFunction,
    type Request,
    type Response,
} from 'express';
import logger from './config/logger';
import type { HttpError } from 'http-errors';

const app = express();

app.get('/', (req, res) => {
    res.send('welcome to auth service');
});

//global error Handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.info(err.message);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    });
});
export default app;
