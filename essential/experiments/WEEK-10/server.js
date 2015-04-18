var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer');

var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var bodyParser = require('body-parser');
var multer     = require('multer'); 

var cookieParser = require('cookie-parser');
var session      = require('express-session');

var mongoose= require('mongoose');
var db= mongoose.connect('mongodb://localhost/myproject');

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'this is the secret' }));
app.use(multer());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));

var UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
	username: String,
    password: String
});

var UserModel = mongoose.model('UserModel', UserSchema);

passport.use(new LocalStrategy(
function(username, password, done)
{

	UserModel.findOne({username: username, password: password}, function(err, user)
    	    {
    	        if (user){
    	        	return done(null, user);
    	        }
    	        console.log(user);
    	        return done(null, false);
    	    })
}));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});


app.post("/login", passport.authenticate('local'), function(req, res){
    var user = req.user;
    console.log(user);
    res.json(user);
});

app.get('/loggedin', function(req, res)
{
		    res.send(req.isAuthenticated() ? req.user : '0');
});

app.post('/logout', function(req, res)
{
		    req.logOut();
		    res.send(200);
}); 

app.post('/register', function(req, res)
{
	var newUser = req.body;
	console.log(req.body);
	UserModel.findOne({username: newUser.username}, function(err, user)
	{
		if(err) { return next(err); }
		if(user)
		{
			res.json(null);
			return;
		}
		var newUser = new UserModel(req.body);
		newUser.save(function(err, user)
				{
			      req.login(user, function(err)
				  {
				    if(err) { return next(err); }
				      res.json(user);
				  });
				});
			});
});

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port= process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);