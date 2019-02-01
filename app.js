/* eslint-disable no-console */
import express from 'express';
import index from './src/routes/index';
// Initialize express
const app = express();

// index module used handle routes;
app.use(index);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
