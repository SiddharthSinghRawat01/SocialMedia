const User = require('../models/user')


module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title: "Profile Page"
    })
}

// Sign UP
module.exports.signup = function(req,res){
    return res.render('user_sign_up',{
        title: "Social | Sign Up"
    })
}


//Sign IN
module.exports.signin = function(req,res){
    return res.render('user_sign_in',{
        title: "Social | Sign In"
    })
}

//get sign up data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back')
    }

    User.findOne({email: req.body.email},function(err,user){
        if(err){console.log('err finding user in signup'); return}

        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('err creating user'); return}

                return res.redirect('/users/sign-in')
            })
        } else {
            return res.redirect('back')
        }
    })

}

//get sign in
module.exports.createSession = function(req,res){
    
}