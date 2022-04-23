const express = require('express');
const router = express.Router();

const postController = require('../controllers/posts_controller');
console.log('post.js')
router.post('/create',postController.create);


module.exports = router;