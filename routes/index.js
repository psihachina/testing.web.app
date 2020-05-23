var express = require('express');
var router = express.Router();

let tests = require('../controllers/tests');

router.get('/', tests.show_homePage);