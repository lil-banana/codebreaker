const express = require('express');
const app = express();
const cb = require('./codebreaker');
const morgan = require('morgan')
const cors = require('cors')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

var codebreaker = new cb.CodeBreaker();

app.get('/guess', (req, res) => {
  res.json({
    result: codebreaker.guess(req.query.newCode)
  });
});

app.get('/generate', (req, res) => {
  res.json({
    result: 'Numero generado'
  });
});

app.post('/guess', (req, res) => {
  res.json({ secret: codebreaker.setSecret(req.body.secret) })
});

module.exports = app;


