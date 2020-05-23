var express = require('express');
var router = express.Router();



let {isLoggedIn, hasAuth} = require('../middleware/hasAuth.js');

let tests = require('../controllers/tests');
let user = require('../controllers/user');

//#region Authorization

router.get('/login', user.show_login);
router.post('/login', user.login);

router.get('/signup', user.show_signup);
router.post('/signup', user.signup);

router.get('/logout', user.logout);
router.post('/logout', user.logout);

//#endregion

router.get('/', tests.show_homePage);

module.exports = router;
