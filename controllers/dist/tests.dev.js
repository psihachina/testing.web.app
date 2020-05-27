"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

var models = require("../models");

var bcrypt = require("bcrypt");

var passport = require('passport');

var myPassport = require('../passport_setup')(passport);

var Sequelize = require('sequelize');

var Op = Sequelize.Op;

var flash = require('connect-flash');

var _require = require('lodash'),
    isEmpty = _require.isEmpty;

var _require2 = require('../validators/signup'),
    validateUser = _require2.validateUser;

var fs = require('fs');

exports.show_homePage = function (req, res, next) {
  res.render("../views/landing.pug");
}; /// router.get '/subjects' -- show all subjects


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

exports.send_test = function (req, res, next) {
  var idattempt;
  return models.Question.findAll({
    where: {
      idTest: req.params.id
    }
  }).then(function (questions) {
    return models.Attempt.create({
      createdAt: new Date(),
      updatedAt: new Date(),
      idUser: 4,
      idTest: req.params.id,
      DateStart: new Date(),
      DateFinish: new Date()
    }).then(function _callee(attempt) {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, idElem, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _value2;

      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              idattempt = attempt.idAttempt;
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _context.prev = 3;
              _iterator = _asyncIterator(questions);

            case 5:
              _context.next = 7;
              return regeneratorRuntime.awrap(_iterator.next());

            case 7:
              _step = _context.sent;
              _iteratorNormalCompletion = _step.done;
              _context.next = 11;
              return regeneratorRuntime.awrap(_step.value);

            case 11:
              _value = _context.sent;

              if (_iteratorNormalCompletion) {
                _context.next = 57;
                break;
              }

              element = _value;
              idElem = element.idQuestion;
              console.log(req.body[idElem] + " " + _typeof(req.body[idElem]));
              console.log(_typeof(req.body[idElem][0]));

              if (!(req.body[idElem].length > 1)) {
                _context.next = 53;
                break;
              }

              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _context.prev = 20;
              _iterator2 = _asyncIterator(req.body[idElem]);

            case 22:
              _context.next = 24;
              return regeneratorRuntime.awrap(_iterator2.next());

            case 24:
              _step2 = _context.sent;
              _iteratorNormalCompletion2 = _step2.done;
              _context.next = 28;
              return regeneratorRuntime.awrap(_step2.value);

            case 28:
              _value2 = _context.sent;

              if (_iteratorNormalCompletion2) {
                _context.next = 35;
                break;
              }

              item = _value2;
              models.TestUserAnswer.create({
                createdAt: new Date(),
                updatedAt: new Date(),
                idAttempt: attempt.idAttempt,
                idQuestion: idElem,
                idAnswer: item
              });

            case 32:
              _iteratorNormalCompletion2 = true;
              _context.next = 22;
              break;

            case 35:
              _context.next = 41;
              break;

            case 37:
              _context.prev = 37;
              _context.t0 = _context["catch"](20);
              _didIteratorError2 = true;
              _iteratorError2 = _context.t0;

            case 41:
              _context.prev = 41;
              _context.prev = 42;

              if (!(!_iteratorNormalCompletion2 && _iterator2["return"] != null)) {
                _context.next = 46;
                break;
              }

              _context.next = 46;
              return regeneratorRuntime.awrap(_iterator2["return"]());

            case 46:
              _context.prev = 46;

              if (!_didIteratorError2) {
                _context.next = 49;
                break;
              }

              throw _iteratorError2;

            case 49:
              return _context.finish(46);

            case 50:
              return _context.finish(41);

            case 51:
              _context.next = 54;
              break;

            case 53:
              models.TestUserAnswer.create({
                createdAt: new Date(),
                updatedAt: new Date(),
                idAttempt: attempt.idAttempt,
                idQuestion: idElem,
                idAnswer: req.body[idElem][0]
              });

            case 54:
              _iteratorNormalCompletion = true;
              _context.next = 5;
              break;

            case 57:
              _context.next = 63;
              break;

            case 59:
              _context.prev = 59;
              _context.t1 = _context["catch"](3);
              _didIteratorError = true;
              _iteratorError = _context.t1;

            case 63:
              _context.prev = 63;
              _context.prev = 64;

              if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
                _context.next = 68;
                break;
              }

              _context.next = 68;
              return regeneratorRuntime.awrap(_iterator["return"]());

            case 68:
              _context.prev = 68;

              if (!_didIteratorError) {
                _context.next = 71;
                break;
              }

              throw _iteratorError;

            case 71:
              return _context.finish(68);

            case 72:
              return _context.finish(63);

            case 73:
              ;

            case 74:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[3, 59, 63, 73], [20, 37, 41, 51], [42,, 46, 50], [64,, 68, 72]]);
    }).then(function (next) {
      return models.Answer.findAll({
        idQuestion: _defineProperty({}, Op.or, getIdQuestions(questions))
      }).then(function (ans) {
        return models.TestUserAnswer.findAll({
          where: {
            idAttempt: idattempt
          }
        }).then(function (result) {
          res.render('../views/tests/result.pug', {
            result: result,
            ans: ans,
            questions: questions
          });
        });
      });
    });
  });
};