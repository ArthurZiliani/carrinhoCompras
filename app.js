const express = require('express')
const path = require('path')
// const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongo = require('mongoose')

const app = express()

// conecta ao banco de dados
mongo.connect('mongodb://root:root@ds251598.mlab.com:51598/teste')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// carrega os models
require('./models/produtos')
require('./models/usuarios')
require('./models/pedidos')

// carregas as rotas
const index = require('./routes/index.js')
// const carrinho = require('./routes/carrinho')
const produtos = require('./routes/produtos')
const usuarios = require('./routes/usuarios')

app.use('/', index)
// app.use('/carrinho', carrinho)
app.use('/produtos', produtos)
app.use('/usuarios', usuarios)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
