let models = require("../models");
let bcrypt = require("bcrypt");
const passport = require('passport');
const myPassport = require('../passport_setup')(passport);
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

let flash = require('connect-flash');

const { isEmpty } = require('lodash');
const { validateUser } = require('../validators/signup');

const fs = require('fs');


exports.show_homePage = function(req, res, next) {
    res.render("../views/landing.pug")
}

/// router.get '/subjects' -- show all subjects
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

exports.show_test = function(req, res, next) {
    console.log('show_test');
    return models.Question.findAll({
        where: {
            idTest: req.params.id
        }
    }).then(questions => {
        return models.Answer.findAll({
            where: {
                idQuestion: {
                    [Op.or]: getIdQuestions(questions)
                }
            }
        }).then(answers => {
            res.render('../views/tests/test', {
                user: req.user,
                questions: questions,
                answers: answers,
                idTest: req.params.id
            });
        });
    });
}

exports.send_test = function(req, res, next) {
    let idattempt;
    return models.Question.findAll({
        where: {
            idTest: req.params.id
        }
    }).then(questions => {

        return models.Attempt.create({
            createdAt: new Date(),
            updatedAt: new Date(),
            idUser: 4,
            idTest: req.params.id,
            DateStart: new Date(),
            DateFinish: new Date()
        }).then(async attempt => {
            idattempt = attempt.idAttempt;

            for await (element of questions) {
                let idElem = element.idQuestion;
                console.log(req.body[idElem] + " " + typeof(req.body[idElem]));
                console.log(typeof(req.body[idElem][0]))

                if (req.body[idElem].length > 1)
                    for await (item of req.body[idElem]) {
                        models.TestUserAnswer.create({
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            idAttempt: attempt.idAttempt,
                            idQuestion: idElem,
                            idAnswer: item
                        });
                    }
                else {
                    models.TestUserAnswer.create({
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        idAttempt: attempt.idAttempt,
                        idQuestion: idElem,
                        idAnswer: req.body[idElem][0]
                    });

                }
            };
        }).then(next => {
            return models.Answer.findAll({
                idQuestion: {
                    [Op.or]: getIdQuestions(questions)
                }
            }).then(ans => {
                return models.TestUserAnswer.findAll({
                    where: {
                        idAttempt: idattempt
                    }
                }).then(result => {
                    res.render('../views/tests/result.pug', {
                        result: result,
                        ans: ans,
                        questions: questions
                    })
                })
            })
        })
    })
}