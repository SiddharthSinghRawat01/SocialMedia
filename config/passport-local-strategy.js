const passport = require('passport');
const User = require('../models/user');

const LocalStrategy = require('passport-local').Strategy;


//authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email',

},
function(email,password,done){ //done handel sucess and err
    // find user
    User.findOne({email: email},function(err,user){
        if(err){
            console.log('Err finding user --> passport');
            return done(err);
        }

        if(!user || user.password != password){
            console.log('invalid username/password');
            return done(null,false);
        }

        return done(null,user);
    });
}

));


// serializing the user to decide which key is to be kept in cookies
    passport.serializeUser(function(user,done){
        done(null,user.id);
    });



// deserializing the user from the key in the cookeies
    passport.deserializeUser(function(id,done){
        User.findById(id,function(err,user){
            if(err){
                console.log('Err finding user --> passport');
                return done(err);
            }

            return done(null,user);
        });
    });




    // check if user is authenticated
    passport.checkAuthentication = function(req,res,next){
        // if user is signed in then pass on req to next function(controller's action)
        if (req.isAuthenticated()){
            return next();
        }

        // if user is not signed in
        return res.redirect('/users/sign-in')
    }

    passport.setAuthenticatedUser =function(req,res,next){
        if (req.isAuthenticated()){
            // req.user contain the current sigend in user form cookie and we are sending this to the local for views
            res.locals.user = req.user;
        }

        next();
    }

    module.exports = passport