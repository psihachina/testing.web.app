let models = require("../models");
let bcrypt = require("bcrypt");
const passport = require('passport');
const myPassport = require('../passport_setup')(passport);

let flash = require('connect-flash');

const {isEmpty} = require('lodash');
const {validateUser} = require('../validators/signup');

//#region Authorization

exports.show_login = function(req, res, next){
    res.render('user/login', { formData : {} , errors : {} });
};
exports.login = function(req, res, next) {
    console.log('1 tap login');
    
    passport.authenticate('local', {
        successRedirect : "/",
        failureRedirect : "/login",
        failureFlash : true
    })(req, res, next);

    console.log('kek');
};

exports.show_signup = function(req, res, next){
    res.render('user/signup', { formData : {}, errors : {} });
};
exports.signup = function(req, res, next) {
    let errors = {};
    return validateUser(errors, req).then(errors => {
        if(!isEmpty(errors)){
            rerender_signup(errors, req, res, next);
        } else {
            console.log('1 signup');
            return models.User.findOne({
                where: {
                    isAdmin: 0
                }
            }).then(user => {
                console.log('2 signup');
                let newUser;
                if(user !== null){
                    console.log('3_if signup');
                    newUser = models.User.build({
                        email : req.body.email,
                        password : generateHash(req.body.password),
                        isAdmin: 0
                    });
                } else {
                    console.log('3_else signup');
                    newUser = models.User.build({
                        email : req.body.email,
                        password : generateHash(req.body.password),
                        isAdmin: 0
                    });
                }
                return newUser.save().then(result => {
                    passport.authenticate('local', {
                        successRedirect : "/",
                        failureRedirect : "/signup",
                        failureFlash : true
                    })(req, res, next);
                });
            })
        }
    })
};


const rerender_signup= function(errors, req, res, next){
    res.render('user/signup', { formData : req.body, errors : errors });
};

const generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

const rerender_login = function(errors, req, res, next){
    res.render('user/signup', { formData : req.body, errors : errors });
};

exports.logout = function(req, res, next){
    req.logout();
    req.session.destroy();
    res.redirect('/');
};

//#endregion