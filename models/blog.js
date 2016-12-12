var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Blog = new Schema({
    username: String,
    title: String,
    content: String
});

module.exports = mongoose.model('Blogs', Blog);

