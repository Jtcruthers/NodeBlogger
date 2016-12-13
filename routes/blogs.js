var express = require('express');
var Blog = require('../models/blog');
var router = express.Router();

router.get('/', function (req, res) {
    Blog.find({}, function(err, blogs) {
        console.log(blogs);
        res.render('blogs', {blogs: blogs});
    });
});

router.get('/:id', function(req, res) {
    Blog.findOne({id: req.params.id}, function(err, blog) {
        res.render('showBlog', {blog: blog});
    });
});

module.exports = router;
