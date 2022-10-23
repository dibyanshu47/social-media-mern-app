const express = require('express');

const { getPost, getPostsBySearch, getPosts, createPost, updatePost, deletePost, likePost, commentPost } = require('../controllers/posts.js');
const auth = require('../middleWare/auth.js');

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);

module.exports = router;