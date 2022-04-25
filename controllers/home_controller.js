const Post = require('../models/post')

module.exports.home = function(req,res){
    // console.log(req.cookies);


    // Post.find({},function(req,posts){
    //     return res.render('home',{
    //         title: "Home",
    //         posts: posts
    //     })
    // })

// using mongoose population property
   Post.find({})
   .populate('user')
   .populate({
       path: 'comments',
       // further populaate
        populate:{
            path: 'user'
        }
   })
   .exec(function(err,posts){

    return res.render('home', {
        title: "Social | Home",
        posts:  posts
    });

   });
        
}
