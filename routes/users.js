var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var Blog = require('../models/blog');
var helpers = require('./helpers');
var router = express.Router();

router.get('/', function (req, res) {
    res.redirect('../');
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('../');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/settings', helpers.loggedIn, function(req, res) {
    res.render('userSettings', {user: req.user});
});

router.get('/:username', helpers.loggedIn, function(req, res) {
    Account.findOne({username: req.params.username}, function(err, account) {
        console.log(req.params.username);
        console.log(account);
        res.render('showUser', {user: account});
    });
});

module.exports = router;
