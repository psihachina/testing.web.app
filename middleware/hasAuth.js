let createError = require('http-errors');

exports.isLoggedIn = function(req, res, next){
    if(req.user)
        next();
    else
    {
        res.render('noaccess', { title : 'No access', text : 'Please introduce yourself to the system'});
        // next(createError(404, "Page does not exist"));
    }
}

exports.hasAuth = function(req, res, next) {
    if(req.user && req.user.isAdmin == true)
        next();
    else
    {
        res.render('noaccess', { title : 'No access', text : 'Only admin can visit it'});
        // next(createError(404, "Page does not exist!"));
    }
}