"use strict";var models=require("../models"),bcrypt=require("bcrypt"),passport=require("passport"),myPassport=require("../passport_setup")(passport),Sequelize=require("sequelize"),Op=Sequelize.Op;exports.show_homePage=function(e,s,r){s.render("../views/landing.pug")},exports.show_AllSubjects=function(r,t,e){return console.log("show_AllSubjects"),models.Subject.findAll().then(function(s){return models.Test.findAll().then(function(e){t.render("../views/tests/subjects",{user:r.user,subjects:s,tests:e})})})};var getIdQuestions=function(e){var s=[];return e.forEach(function(e){s.push(e.idQuestion)}),s};