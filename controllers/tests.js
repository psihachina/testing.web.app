let models = require("../models");

exports.show_homePage = function (req, res, next) {
    res.render("../views/landing.pug")
}