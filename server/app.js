import express from 'express';
import bodyParser from 'body-parser';
import api from './routes/api';

const app = express();

//Middleware
app.use(bodyParser.json());


app.use("/api", api);

export default app;
