const Post = require('../models/post')
const User = require('../models/user')


module.exports.home = async function(req,res){

    
    try {
        // using mongoose population property
        let posts = await Post.find({})
        .populate('user')
        .populate({
            path: 'comments',
            // further populaate
            populate:{
                path: 'user'
            }
        });

        let users = await User.find({});

        return res.render('home', {
            title: "Social | Home",
            posts:  posts,
            all_users: users
        });
     
    } catch (err) {
        console.log('Error',err);
        return;
    }
   
}
