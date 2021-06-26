const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tokenRouter = require('./routes/token');
var paperRouter = require('./routes/whitepaper');
var hardwareRouter = require('./routes/hardware');
var apiRoot = require('./routes/api');


var app = express();



// applicaiton setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin: /http:\/\/localhost/}));
app.options('*', cors());
app.use(express.static('public'));  
app.use('/images', express.static('images'));

app.use(express.static(path.join(__dirname, 'public')));
 


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRoot);
app.use('/whitepaper', paperRouter);
app.use('/token', tokenRouter);
app.use('/hardware', hardwareRouter);

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
