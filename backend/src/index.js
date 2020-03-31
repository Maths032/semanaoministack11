
const express = require('express');
const routes = require('./routes.js')
const cors = require('cors')
const app = express();

app.use(cors({
  // origin: 'sitepermitido para acesso'
}))
app.listen(3333);
app.use(routes)