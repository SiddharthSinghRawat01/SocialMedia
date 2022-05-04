const { redirect } = require('express/lib/response');
const Comment = require('../models/comment')
const Post = require('../models/post')

module.exports.create = async function(req,res){

try {
    let post = await Post.findById(req.body.post); // because we have give value as post.id

if(post){
    let comment = await Comment.create({
        content: req.body.content,
        post: req.body.post,
        user: req.user._id
    });

    post.comments.push(comment); // comment automtically pushed to post by mongodb and post is updateing
    post.save();

    res.redirect('/');

}
} catch (err) {
    console.log('Error',err);
    return;
}

}

module.exports.destroy = async function(req, res){

    try {

    let comment = await Comment.findById(req.params.id);

    if (comment.user == req.user.id){

        let postId = comment.post;

        comment.remove();

        let post = await Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}});

            return res.redirect('back');
    }else{
        return res.redirect('back');
    }
    } catch (err) {
        console.log('Error',err);
        return;
    }

}