const Comment = require('../models/comment')
const Post = require('../models/post')

module.exports.create = function(req,res){
    Post.findById(req.body.post,function(err,post){ // because we have give value as post.id
        
        if(post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            },function(err,comment){
                //handel err

                post.comments.push(comment); // comment automtically pushed to post by mongodb and post is updateing
                post.save();

                res.redirect('/');
            });
        }

    });
}
