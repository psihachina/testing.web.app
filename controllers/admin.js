let models = require("../models");
let bcrypt = require("bcrypt");
const passport = require('passport');
const myPassport = require('../passport_setup')(passport);

let flash = require('connect-flash');

const { isEmpty } = require('lodash');
const { validateUser } = require('../validators/signup');

const fs = require('fs');

//#region Variables

//#endregion

exports.show_adminPage = function (req, res) {
    res.render('../views/admin/adminPage', { title: 'Admin Page', user: req.user });
}

//#region Subjects

exports.show_subjects = function (req, res) {
    return models.Subject.findAll().then(subjs => {
        res.render('../views/admin/adminSubjects', {
            title: 'Subjects', user: req.user,
            subjects: subjs
        })
    });
}

exports.subjectEdit = function (req, res) {
    return models.Subject.update({
        subjectName: req.body.subjectName,
        subjectUrl: req.body.subjectName.charCodeAt(0),
        updatedAt: new Date()
    }, {
        where: {
            idSubject: req.params.id
        }
    }).then(next => {
        return models.Subject.findOne({
            where: {
                idSubject: req.params.id
            }
        }).then(subj => {
            res.send(subj);
            res.end();
        })
    })
}

exports.subjectAdd = function (req, res) {
    return models.Subject.create({
        createdAt: new Date(),
        updatedAt: new Date(),
        subjectName: req.body.subjectName,
        subjectUrl: req.body.subjectName.replace("#", "sharp"),
    }).then(subj => {
        res.send(subj).end();
    })
};

exports.subjectDelete = function (req, res) {
    return models.Test.destroy({
        where: {
            idSubject: req.params.id
        }
    }).then(subj => {
        return models.Subject.destroy({
            where: {
                idSubject: req.params.id
            }
        }).then(test => {
            res.send(req.params.id);
            res.end();
        });
    });
}

//#endregion

//#region Tests
exports.testDelete = function (req, res) {
    return models.Test.destroy({
        where: {
            idTest: req.params.id
        }
    }).then(subj => {
        res.send(req.params.id);
        res.end();
    });
}

exports.show_tests = function (req, res) {
    return models.Test.findAll({
        where: {
            idSubject: req.params.id
        }
    }).then(tests => {
        return models.Subject.findOne({
            where: {
                idSubject: req.params.id
            }
        }
        ).then(subject =>
            res.render('../views/admin/adminTests', {
                title: 'Tests', user: req.user,
                tests: tests,
                subject: subject,
                h1: subject.subjectName + " tests list"
            })
        )
    });
}

exports.testAdd = function (req, res, next) {
    return models.Subject.findOne({
        where: {
            subjectName: req.body.subjectName
        }
    }).then(subj => {
        models.Test.create({
            createdAt: new Date(),
            updatedAt: new Date(),
            testName: req.body.testName,
            idSubject: subj.idSubject,
            testUrl: req.body.testName.split(' ').join('') + subj.idSubject
        }).then(next => {
            res.send(next).end();
        })
    });
};

exports.testEdit = function (req, res) {
    return models.Subject.findOne({
        where: {
            subjectName: req.body.subjectName
        }
    }).then(subj => {
        return models.Test.update({
            testName: req.body.testName,
            testtUrl: req.body.testName.split(' ').join(''),
            updatedAt: new Date(),
            idSubject: subj.idSubject
        }, {
            where: {
                idTest: req.params.id
            }
        }).then(next => {
            return models.Test.findOne({
                where: {
                    idTest: req.params.id
                }
            }).then(test => {
                console.log("Проверочка " + test);
                res.send(test);
                res.end();
            })
        })
    });
}

//#endregion

//#region Questions

exports.show_questions = function (req, res) {
    return models.Question.findAll({
        where: {
            idTest: req.params.id
        }
    }).then(questions => {
        return models.Test.findOne({
            where: {
                idTest: req.params.id
            }
        }).then(tests => {
            return models.Answer.findAll().then(answers =>
                res.render('../views/admin/adminQuestions', {
                    title: 'Tests', user: req.user,
                    questions: questions,
                    h1: tests.testName,
                    test: tests,
                    answers: answers
                })
            )
        })
    })
}

exports.questionAdd = function (req, res, next) {
    return models.Test.findOne({
        where: {
            testName: req.body.testName
        }
    }).then(test => {
        models.Question.create({
            createdAt: new Date(),
            updatedAt: new Date(),
            textQuestion: req.body.textQuestion,
            idTest: test.idTest,
            points: req.body.points,
            severalAnswers: req.body.severalAnswers,
        }).then(next => {
            res.send(next).end();
        })
    });
};

exports.questionEdit = function (req, res) {
    return models.Question.update({
        textQuestion: req.body.textQuestion,
        updatedAt: new Date(),
        points: req.body.points,
        severalAnswers: req.body.severalAnswers,
    }, {
        where: {
            idQuestion: req.params.id
        }
    }).then(next => {
        return models.Question.findOne({
            where: {
                idQuestion: req.params.id
            }
        }).then(test => {
            console.log("Проверочка " + test);
            res.send(test);
            res.end();
        })
    })
}


// keke
exports.questionDelete = function (req, res) {
    return models.Answer.destroy({
        where: {
            idQuestion: req.params.id
        }
    }).then(answ => {
        return models.Question.destroy({
            where: {
                idQuestion: req.params.id
            }
        }).then(subj => {
            res.send(req.params.id);
            res.end();
        });
    });
}

exports.answerAdd = function (req, res, next) {
    return models.Answer.create({
        createdAt: new Date(),
        updatedAt: new Date(),
        textAnswer: req.body.textAnswer,
        idQuestion: req.body.idQuestion,
        currentAnswer: req.body.currentAnswer,
    }).then(next => {
        res.send(next).end();
    })
};

exports.answerEdit = function (req, res) {
    return models.Answer.update({
        textAnswer: req.body.textAnswer,
        updatedAt: new Date(),
        currentAnswer: req.body.currentAnswer,
    }, {
        where: {
            idAnswer: req.params.id
        }
    }).then(next => {
        return models.Answer.findOne({
            where: {
                idAnswer: req.params.id
            }
        }).then(test => {
            console.log("Проверочка " + test);
            res.send(test);
            res.end();
        })
    })
}

exports.answerDelete = function (req, res) {
    return models.Answer.destroy({
        where: {
            idAnswer: req.params.id
        }
    }).then(subj => {
        res.send(req.params.id);
        res.end();
    });
}


//#endregion