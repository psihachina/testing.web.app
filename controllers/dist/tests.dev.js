"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

exports.show_test = function (req, res, next) {
  console.log('show_test');
  return models.Question.findAll({
    where: {
      idTest: req.params.id
    }
  }).then(function (questions) {
    return models.Answer.findAll({
      where: {
        idQuestion: _defineProperty({}, Op.or, getIdQuestions(questions))
      }
    }).then(function (answers) {
      res.render('../views/tests/test', {
        user: req.user,
        questions: questions,
        answers: answers,
        idTest: req.params.id
      });
    });
  });
};