
require('dotenv').config();
const express     = require( 'express'); 
const bodyParser  = require( 'body-parser');
const app         = express(); 
const path        = require('path');
const cors        = require('cors');
const helmet      = require('helmet')
const limiter     = require('express-rate-limit');

const { sequelize, Sequelize } = require('./models');
const db = require("./models");
db.role = require("./models/Role.js")(sequelize, Sequelize);

const authRoutes    = require('./routes/auth.routes.js')
const userRoutes    = require('./routes/user.routes.js')
const photoRoutes   = require('./routes/photo.routes.js')
const adminRoutes   = require('./routes/admin.routes.js')

app.use(helmet())
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, x-acces-token');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use(limiter ({
  windowMs: 5000,
  max: 200, 
  message: {code: 429, message: 'Too many connection; Try later !' }
}))

// ----------------------------------------------------------------------
db.sequelize.sync( /*{force:true}*/)
.then(() => {
  console.log('Resync database : success !');
  console.log('   ===  Connected to Groupomania:  localhost 4200 !  === ')
})
.catch( err=> console.log(err.message));
// -----------------------------------------------------------------------

app.get ('/', (req, res, next) => {
  res.json({ message: "Groupomania development server !" })
});

app.use('/images', express.static(path.join(__dirname, 'images')));

// routes
app.use('/api/auths' , authRoutes )
app.use('/api/users' , userRoutes )
app.use('/api/photos', photoRoutes)
app.use('/api/admin' , adminRoutes)

module.exports = app;  



