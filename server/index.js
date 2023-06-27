const path = require('path');
require('dotenv').config();
const express = require('express');
let app = express();

app.use(express.static('client/dist'));
app.use(express.json());

// app.post('/repos', function (req, res) {
// });

// app.get('/repos', function (req, res) {
// });

let PORT = process.env.PORT;

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});