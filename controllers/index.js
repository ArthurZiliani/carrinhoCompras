const express = require('express');

exports.bemVindo = (req, res, next) => {
  res.status(201).send({
    title: 'Seja bem vindo!',
    status: 'Ok!'
  })
}
