const Post = require('../models/post')

module.exports.home = async function(req,res){
    // console.log(req.cookies);


    // Post.find({},function(req,posts){
    //     return res.render('home',{
    //         title: "Home",
    //         posts: posts
    //     })
    // })

// using mongoose population property
   let posts =  await Post.find({}).populate('user');
        
   return res.render('home', {
            title: "Social | Home",
            posts:  posts
        });
    
    
}
