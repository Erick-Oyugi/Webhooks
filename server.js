const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();


connectDB();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', require('./routes/apiroute'));



// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Webhook Server running on port ${port}`);
});
