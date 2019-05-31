const express            = require('express');
const path               = require('path');
const favicon            = require('serve-favicon');
const logger             = require('morgan');
const cookieParser       = require('cookie-parser');
const bodyParser         = require('body-parser');
const passport           = require('passport');
const LocalStrategy      = require('passport-local').Strategy;
const User               = require('./models/user');
const bcrypt             = require('bcrypt');
const session            = require('express-session');
const MongoStore         = require('connect-mongo')(session);
const mongoose           = require('mongoose');
const flash              = require('connect-flash');
const hbs                = require('hbs')
require('dotenv').config()


mongoose.connect(process.env.DB, {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});

const app = express();


app.locals.googleKey = process.env.GOOGLEKEY


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(session({
  secret: 'artGallery project',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore( { mongooseConnection: mongoose.connection })
}))

passport.serializeUser((user, cb) => {
  console.log("serializeUser")
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  console.log("deserializeUser")
  User.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

passport.use('local-login', new LocalStrategy((username, password, next) => {
  console.log("LOGIN")
  User.findOne({ username }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(null, false, { message: "Usuario incorrecto" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return next(null, false, { message: "Contraseña incorrecta" });
    }

    return next(null, user);
  });
}));



  



passport.use('local-signup',  new LocalStrategy(
  { passReqToCallback: true },
  (req, username, password, next) => {
    // To avoid race conditions
    process.nextTick(() => {
      console.log("entrasss!!!")
        User.findOne({
            'username': username
        }, (err, user) => {
            if (err){console.log(err); return next(err); }

            if (user) {
                return next(null, false);
            } else {
                // Destructure the body
                const {  email, role } = req.body;
                console.log(req.file)
                const imgPath = req.file.url
                const imgName = req.file.originalname
                const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
                const newUser = new User({
                  username,
                  email,
                  password: hashPass,
                  imgPath,
                  imgName,
                  role,
                });

                newUser.save((err) => {
                    if (err){ console.log(err);next(null, false, { message: newUser.errors }) }
                    return next(null, newUser);
                });
            }
        });
    });
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(__dirname + '/views/partials')

const index = require('./routes/index.routes')
const authRoutes = require('./routes/authentication.routes')
const artistRoutes = require('./routes/artists.routes')
const galleriesRoutes = require('./routes/galleries.routes')
const privateRoutes = require('./routes/private.routes')
const apiRoutes = require('./routes/api.routes')
const artworksRoutes = require('./routes/artworks.routes')

app.use('/api', apiRoutes)
app.use('/', index)
app.use('/', authRoutes)
app.use('/artist', artistRoutes)
app.use('/galleries', galleriesRoutes)
app.use('/artworks', artworksRoutes)
app.use('/private', privateRoutes)


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app
