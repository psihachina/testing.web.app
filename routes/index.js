var express = require('express');
var router = express.Router();

let user = require('../controllers/user');

let {isLoggedIn, hasAuth} = require('../middleware/hasAuth.js');

let tests = require('../controllers/tests');
let admin = require('../controllers/admin');

//#region Authorization

router.get('/login', user.show_login);
router.post('/login', user.login);

router.get('/signup', user.show_signup);
router.post('/signup', user.signup);

router.get('/logout', user.logout);
router.post('/logout', user.logout);

//#endregion

/* GET home page. */
router.get('/', tests.show_homePage);



//#region Tests

router.get('/subjects', tests.show_AllSubjects);
router.get('/subjects/:id', tests.show_test);
router.post('/subjects/:id', tests.send_test);