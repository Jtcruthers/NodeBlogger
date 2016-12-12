var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var Blog = require('../models/blog');
var router = express.Router();

function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/users/login');
    }
}

router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/blog', function (req, res) {
    Blog.find({}, function(blogs) {
        console.log(blogs);
        res.send(blogs);
    });
});

module.exports = router;
