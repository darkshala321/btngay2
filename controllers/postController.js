
const ProductService = require('../services/product-service');

exports.getPosts = (req, res) => {
    res.send("GET POST");
  };
  
  exports.getPostDetail = (req, res) => {
    res.send("GET POST DETAIL");
  };
  
  exports.createPost = (req, res) => {
    res.send("CREATE POST");
  };
  
  exports.updatePost = (req, res) => {
    res.send("UPDATE POST");
  };
  
  exports.deletePost = (req, res) => {
    res.send("DELETE POST");
  };  