//dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const db = mongoose.connection;

// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/demo-2';
// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
db.on('open' , ()=>{});

//middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}));
app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine());
app.use(express.static('public')); //not used in this particular exercise,but almost always part of the middleware
app.use(methodOverride('_method'));


///Index Route
app.get('/',(req,res)=>{
    res.render('Index');
})


//listen
app.listen(PORT,()=>{
    console.log('Listening on port:',PORT);
})