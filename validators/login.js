
let models = require('../models/present');

let validator = require('validator');

const validateLogInUserFields = function(errors, req){
    if(!validator.isEmail(req.body.email)){
        errors["email"] = "Please use a valid email.";
    }
}

exports.validateLogin = function(errors, req){
    return new Promise(function(resolve, reject){
        validateLogInUserFields(errors, req);
        return models.User.findOne({
            where: {
                email : req.body.email
            }
        }).then(u => {
            if(u != null){
                errors["password"] = "INVALID PASSWORD OR USERNAME";
            }
            resolve(errors);
        })
    })
}