var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passportConfig = require('./config/passport');
var passport = require('passport');
var session = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');
var authentication = require('./routes/authentication');
var authorform = require('./routes/authorform');
var betas = require('./routes/betas');
var api = require('./routes/api');
var apply = require('./routes/apply');
var howitworks = require('./routes/howitworks');

var app = express();

mongoose.connect('mongodb://localhost/bookbeta');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({secret: 'secret'}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/auth', authentication);
app.use('/betas', betas);
app.use('/api', api);
app.use('/apply', apply);
app.use('/howitworks', howitworks);

app.use(passportConfig.ensureAuthenticated);
app.use('/users', users);
app.use('/authorform', authorform);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
