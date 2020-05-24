let models = require("../models");
let bcrypt = require("bcrypt");
const passport = require('passport');
const myPassport = require('../passport_setup')(passport);
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
exports.show_homePage = function(req, res, next) {
    res.render("../views/landing.pug")
}
exports.show_AllSubjects = function(req, res, next) {
    console.log('show_AllSubjects');
    return models.Subject.findAll().then(subjects => {
        return models.Test.findAll().then(tests => {
            res.render('../views/tests/subjects', {
                user: req.user,
                subjects: subjects,
                tests: tests
            });
        });
    });
}

var getIdQuestions = (arr) => {
    let arrId = [];
    arr.forEach(element => {
        arrId.push(element.idQuestion);
    });
    return arrId;
}