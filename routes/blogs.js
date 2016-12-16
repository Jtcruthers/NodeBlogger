var express = require('express');
var Blog = require('../models/blog');
var router = express.Router();

router.get('/', function (req, res) {
    Blog.find({}, function(err, blogs) {
        console.log(blogs);
        res.render('blogs', {blogs: blogs, user: req.user});
    });
});

router.get('/:id', function(req, res) {
    Blog.findOne({id: req.params.id}, function(err, blog) {
        res.render('showBlog', {blog: blog, user: req.user});
    });
});

router.get('/new', function(req, res) {
    res.render('new', {user: req.user});
});

router.post('/new', function(req, res) {
    Blog.register(new Blog({ title: req.body.title}), req.body.content, function(err, blog) {
        if (err) {
            return res.render('blogs', {user: req.user});
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('showBlog', {blog: blog, user: req.user});
        });
    });
});

module.exports = router;
