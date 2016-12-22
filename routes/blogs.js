var express = require('express');
var Blog = require('../models/blog');
var helpers = require('./helpers');
var router = express.Router();
var loggedIn = helpers.loggedIn;

router.get('/', loggedIn, function (req, res) {
    Blog.find({}, function(err, blogs) {
        console.log(blogs);
        res.render('blogs/blogs', {blogs: blogs, user: req.user});
    });
});

router.get('/new', loggedIn, function(req, res) {
    res.render('blogs/new', {user: req.user});
});

router.get('/:id', loggedIn, function(req, res) {
    Blog.findById(req.params.id, function(err, blog) {
        res.render('blogs/showBlog', {blog: blog, user: req.user});
    });
});

router.post('/', loggedIn, function(req, res) {
    var blog = new Blog({ title: req.body.title, content: req.body.content}); 
    blog.save(function(err) {
        if (err) {
            return res.render('blogs/blogs', {user: req.user});
        }
    });
    
    res.redirect('/blogs/' + blog.id);
});

module.exports = router;
