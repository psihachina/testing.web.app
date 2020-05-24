"use strict";

var models = require("../models");

var bcrypt = require("bcrypt");

var passport = require('passport');

var myPassport = require('../passport_setup')(passport);

var Sequelize = require('sequelize');

var Op = Sequelize.Op;

exports.show_homePage = function (req, res, next) {
  res.render("../views/landing.pug");
};

exports.show_AllSubjects = function (req, res, next) {
  console.log('show_AllSubjects');
  return models.Subject.findAll().then(function (subjects) {
    return models.Test.findAll().then(function (tests) {
      res.render('../views/tests/subjects', {
        user: req.user,
        subjects: subjects,
        tests: tests
      });
    });
  });
};

var getIdQuestions = function getIdQuestions(arr) {
  var arrId = [];
  arr.forEach(function (element) {
    arrId.push(element.idQuestion);
  });
  return arrId;
};