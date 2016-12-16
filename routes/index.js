var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var Blog = require('../models/blog');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

module.exports = router;
