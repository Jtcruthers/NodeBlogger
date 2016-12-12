var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var Blog = require('../models/blog');
var router = express.Router();


router.get('/', function (req, res) {
    var post = new Blog({username: 'jtcruthers', title: "dhf", content: "first blog post."});
    post.save(function(err) { });
    res.render('index', { user : req.user });
});

router.get('/blog', function (req, res) {
    Blog.find({}, function(blogs) {
        console.log(blogs);
        res.send(blogs);
    });
});

module.exports = router;
