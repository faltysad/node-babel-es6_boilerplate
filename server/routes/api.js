import express from 'express';

//controller imports
import testController from './../controllers/testController';

const api = express();

//testController routes
api.get("/", testController.get);

export default api;
