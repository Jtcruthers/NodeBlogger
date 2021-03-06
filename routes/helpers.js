function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/users/login');
    }
}

module.exports.loggedIn = loggedIn;
