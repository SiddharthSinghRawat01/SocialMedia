const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // poupulation mongoose
        ref: 'User'
    },
    // include id of all coments in post schema
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},{
    timestamps: true
});

const Post = mongoose.model('Post',postSchema);
module.exports = Post;