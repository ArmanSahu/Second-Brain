import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouter from '../routes/auth-routes.js'
import contentRouter from '../routes/content-routes.js';
import shareRouter from '../routes/share-routes.js';
import MeRouter from '../routes/me-routes.js'
export const app = express();

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: '*',
    credentials: true
}));


app.use('/api/v1/auth',authRouter);
app.use('/api/v1/me',MeRouter);
app.use('/api/v1/content',contentRouter);
app.use('/api/v1/brain',shareRouter);




