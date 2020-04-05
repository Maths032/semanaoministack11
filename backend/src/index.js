
const express = require('express');
const routes = require('./routes.js')
const cors = require('cors')
const app = express();
const { errors } = require('celebrate')

app.use(cors({
  // origin: 'sitepermitido para acesso'
}))
app.use(routes);
app.use(errors());
app.listen(3333);

