import { createServer, proxy } from 'aws-serverless-express';

import { app } from './server';

const awsServer = createServer(app);

export const server = (event, context) => {
    proxy(awsServer, event, context);
};
