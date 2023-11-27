const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const ProductService = require('../services/product-service');

router.get('/posts', postController.getPosts);

router.get('/posts/:id', postController.getPostDetail);

router.post('/posts', postController.createPost);

router.put('/posts/:id', postController.updatePost);

router.delete('/posts/:id', postController.deletePost);

router.post('/products', (req, res) => {
    const { name, price, createdAt } = req.body;
    const newProduct = ProductService.getProductsService(name, price, createdAt);
    res.json(newProduct);
  });

module.exports = router;