const express       = require('express'),
      path          = require('path'),
      favicon       = require('serve-favicon'),
      logger        = require('morgan'),
      cookieParser  = require('cookie-parser'),
      bodyParser    = require('body-parser'),
      mongoose      = require('mongoose');

// Routes
const users   = require('./routes/users'),
      index   = require('./routes/index'),
      skills  = require('./routes/skills');

const app = express();

const db_config = {
  development: 'mongodb://localhost/test_dev',
  test: 'mongodb://localhost/test'
}

mongoose.connect(db_config[app.settings.env], function(err, res) {
  if(err) {
    console.log('error connection ' + err);
  } else {
    console.log('Connected db: ' + db_config[app.settings.env]);
  }
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);
app.use('/skills', skills)

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
