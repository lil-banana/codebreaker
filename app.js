const express = require('express');
const app = express();
const cb = require('./codebreaker');

app.get('/guess', (req, res) => {
  var codebreaker = new cb.CodeBreaker('1234');
  res.json({
    result: codebreaker.guess(req.query.newCode)
  });
});

module.exports = app;