var express         = require('express');
var app             = express();
var morgan          = require('morgan');
var compress        = require('compression');
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var db              = require('./config/db');

require('./env');
var port = process.env.PORT || 8080; // set our port

var NODE_ENV = process.env.NODE_ENV || (process.env.NODE_ENV = 'development');


console.log('*********************************');
console.log(NODE_ENV);
console.log('*********************************');

//mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// CONFIG'S ----------------------------------------

// NGINX is the proxy
app.set('trust proxy', 'loopback');

// NGINX Proxy do tasks commented
if (NODE_ENV === 'development') {
    app.use(morgan('dev'));
    //require('pmx').init();

} else if (NODE_ENV === 'production') {
    //app.use(compress());
}
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
//app.use(methodOverride()); // DELETE/PUT


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


// CLIENT CONSTANT
app.set('dir_client', process.env.CLIENT);

app.use(express.static(app.get('dir_client')));


require('./server/routes/index')(app);

// ERROR Handling
app.use(function(err, req, res, next) {
    console.error(err.stack);
    //res.status(500).send('Something broke!');
});

app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
