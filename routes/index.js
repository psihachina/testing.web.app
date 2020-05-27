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


//#endregion


//#region  Admin

router.get('/admin', hasAuth, admin.show_adminPage);

router.get('/admin/subjects', hasAuth, admin.show_subjects);
router.post('/admin/subjects/add', hasAuth, admin.subjectAdd);
router.post('/admin/subjects/delete/:id', hasAuth, admin.subjectDelete);
router.post('/admin/subjects/edit/:id', hasAuth, admin.subjectEdit);

router.get('/admin/subjects/:id', hasAuth, admin.show_tests);
router.post('/admin/tests/add', hasAuth, admin.testAdd);
router.post('/admin/tests/delete/:id', hasAuth, admin.testDelete);
router.post('/admin/tests/edit/:id', admin.testEdit);

router.get('/admin/tests/:id', hasAuth, admin.show_questions);
router.post('/admin/questions/add', hasAuth, admin.questionAdd);
router.post('/admin/questions/delete/:id', hasAuth, admin.questionDelete);
router.post('/admin/questions/edit/:id', hasAuth, admin.questionEdit);

router.post('/admin/answers/add', hasAuth, admin.answerAdd);
router.post('/admin/answers/edit/:id', hasAuth, admin.answerEdit);
router.post('/admin/answers/delete/:id', hasAuth, admin.answerDelete);


// router.get()

//#endregion
module.exports = router;