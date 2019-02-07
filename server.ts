import * as express from 'express';
import { eventContext } from 'aws-serverless-express/middleware';
import { Validator, ValidationError } from 'express-json-validator-middleware';

import './services/db';

import createImageSchema from './controllers/json-schema/create-image.json';
import * as imageController from './controllers/image';

// Initialize a Validator instance first
const validate = new Validator({ allErrors: true, removeAdditional: true }).validate; // pass in options to the Ajv instance

const app = express();

// load all the middlewares
app.use(eventContext());
app.use(express.json());

// declare routes
app.post('/images', validate({ body: createImageSchema }), imageController.createImageEntry);
app.get('/images/:id', imageController.getImageEntry);

app.use((err, req, res, next) => { // error handler
    // console.log(JSON.stringify(err));
    if (err instanceof ValidationError) {
        return res.status(400).json(err.validationErrors);
    }
    console.log(err);
    return res.sendStatus(500);
});

export { app };
