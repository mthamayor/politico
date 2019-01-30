import express from 'express';
import bodyParser from 'body-parser';
import partyRouter from './partyRouter';

const index = express.Router();

// Configure the middleware to accept both JSON and URL encoded data
index.use(bodyParser.json());
index.use(bodyParser.urlencoded({
  extended: false,
}));

index.use('/api/v1/parties', partyRouter);

export default index;
