"use strict";function _defineProperty(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}var models=require("../models"),bcrypt=require("bcrypt"),passport=require("passport"),myPassport=require("../passport_setup")(passport),Sequelize=require("sequelize"),Op=Sequelize.Op;exports.show_homePage=function(e,s,t){s.render("../views/landing.pug")},exports.show_AllSubjects=function(t,r,e){return console.log("show_AllSubjects"),models.Subject.findAll().then(function(s){return models.Test.findAll().then(function(e){r.render("../views/tests/subjects",{user:t.user,subjects:s,tests:e})})})};var getIdQuestions=function(e){var s=[];return e.forEach(function(e){s.push(e.idQuestion)}),s};exports.show_test=function(t,r,e){return console.log("show_test"),models.Question.findAll({where:{idTest:t.params.id}}).then(function(s){return models.Answer.findAll({where:{idQuestion:_defineProperty({},Op.or,getIdQuestions(s))}}).then(function(e){r.render("../views/tests/test",{user:t.user,questions:s,answers:e,idTest:t.params.id})})})};