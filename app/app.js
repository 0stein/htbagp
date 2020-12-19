var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var articleRouter = require('./routes/article');
var loginRouter = require('./routes/login');

var app = express();

// view engine setup
// eslint-disable-next-line no-undef
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// eslint-disable-next-line no-undef
app.use(lessMiddleware(path.join(__dirname, 'public')));
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, 'public')));

//routing
app.use('/list', indexRouter);
app.use('/article', articleRouter);
app.use('/', loginRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
