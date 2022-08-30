var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var exlayout = require('express-ejs-layouts');
var indexRouter = require('./routes/index');
var HistoryRouter = require('./routes/History');
var englishRouter = require('./routes/english');
var islamicRouter = require('./routes/islamic');

var BooksRouter = require('./routes/Books')
var serviceRouter  = require('./routes/service');
var contactRouter  = require('./routes/contact');
var helpRouter   = require('./routes/help');
var mongoose = require('mongoose')

var app = express();



//database code
mongoose.connect('mongodb://localhost/salabDB');
var contactmodel = require('./model/contact');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout' ,'./layout')

app.use(exlayout)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/History', HistoryRouter);
app.use('/english', englishRouter);
app.use('/islamic' , islamicRouter);
app.use('/Books' ,BooksRouter);
app.use('/service' ,serviceRouter);
app.use('/contact' ,contactRouter);
app.use('/help' ,helpRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
