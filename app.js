import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';

// Initialize express
const app = express();


// Configure the middleware to accept both JSON and URL encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Module used to route the files
app.use(router);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
