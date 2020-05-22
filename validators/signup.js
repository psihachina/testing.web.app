
let models = require('../models');

let validator = require('validator');

const validateCreateaUserFields = function(errors, req){
    if(!validator.isEmail(req.body.email)){
        errors["email"] = "Please use a valid email.";
    }
    if(!validator.isAscii(req.body.password)){
        errors["password"] = "Invalid characters in password";
    }
    if(!validator.isLength(req.body.password, {min:8, max:25})){
        errors["password"] = "Please ensure that your password has a min of 8 an max 25";
    }
}

exports.validateUser = function(errors, req){
    return new Promise(function(resolve, reject){
        validateCreateaUserFields(errors, req);
        return models.User.findOne({
            where: {
                email : req.body.email
            }
        }).then(u => {
            if(u != null){
                errors["email"] = "Email is already in use."
            }
            resolve(errors);
        })
    })
}
