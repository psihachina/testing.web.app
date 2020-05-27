"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _asyncIterator(e){var t;if("undefined"!=typeof Symbol){if(Symbol.asyncIterator&&null!=(t=e[Symbol.asyncIterator]))return t.call(e);if(Symbol.iterator&&null!=(t=e[Symbol.iterator]))return t.call(e)}throw new TypeError("Object is not async iterable")}var models=require("../models"),bcrypt=require("bcrypt"),passport=require("passport"),myPassport=require("../passport_setup")(passport),Sequelize=require("sequelize"),Op=Sequelize.Op,flash=require("connect-flash"),_require=require("lodash"),isEmpty=_require.isEmpty,_require2=require("../validators/signup"),validateUser=_require2.validateUser,fs=require("fs");exports.show_homePage=function(e,t,r){t.render("../views/landing.pug")},exports.show_AllSubjects=function(r,n,e){return console.log("show_AllSubjects"),models.Subject.findAll().then(function(t){return models.Test.findAll().then(function(e){n.render("../views/tests/subjects",{user:r.user,subjects:t,tests:e})})})};var getIdQuestions=function(e){var t=[];return e.forEach(function(e){t.push(e.idQuestion)}),t};exports.show_test=function(r,n,e){return console.log("show_test"),models.Question.findAll({where:{idTest:r.params.id}}).then(function(t){return models.Answer.findAll({where:{idQuestion:_defineProperty({},Op.or,getIdQuestions(t))}}).then(function(e){n.render("../views/tests/test",{user:r.user,questions:t,answers:e,idTest:r.params.id})})})},exports.send_test=function(b,r,e){var w;return models.Question.findAll({where:{idTest:b.params.id}}).then(function(y){return models.Attempt.create({createdAt:new Date,updatedAt:new Date,idUser:4,idTest:b.params.id,DateStart:new Date,DateFinish:new Date}).then(function(t){var r,n,s,o,i,a,u,c,l,d,p,f,m;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:w=t.idAttempt,n=!(r=!0),e.prev=3,o=_asyncIterator(y);case 5:return e.next=7,regeneratorRuntime.awrap(o.next());case 7:return i=e.sent,r=i.done,e.next=11,regeneratorRuntime.awrap(i.value);case 11:if(a=e.sent,r){e.next=57;break}if(element=a,u=element.idQuestion,console.log(b.body[u]+" "+_typeof(b.body[u])),console.log(_typeof(b.body[u][0])),!(1<b.body[u].length)){e.next=53;break}l=!(c=!0),e.prev=20,p=_asyncIterator(b.body[u]);case 22:return e.next=24,regeneratorRuntime.awrap(p.next());case 24:return f=e.sent,c=f.done,e.next=28,regeneratorRuntime.awrap(f.value);case 28:if(m=e.sent,c){e.next=35;break}item=m,models.TestUserAnswer.create({createdAt:new Date,updatedAt:new Date,idAttempt:t.idAttempt,idQuestion:u,idAnswer:item});case 32:c=!0,e.next=22;break;case 35:e.next=41;break;case 37:e.prev=37,e.t0=e.catch(20),l=!0,d=e.t0;case 41:if(e.prev=41,e.prev=42,c||null==p.return){e.next=46;break}return e.next=46,regeneratorRuntime.awrap(p.return());case 46:if(e.prev=46,l)throw d;e.next=49;break;case 49:return e.finish(46);case 50:return e.finish(41);case 51:e.next=54;break;case 53:models.TestUserAnswer.create({createdAt:new Date,updatedAt:new Date,idAttempt:t.idAttempt,idQuestion:u,idAnswer:b.body[u][0]});case 54:r=!0,e.next=5;break;case 57:e.next=63;break;case 59:e.prev=59,e.t1=e.catch(3),n=!0,s=e.t1;case 63:if(e.prev=63,e.prev=64,r||null==o.return){e.next=68;break}return e.next=68,regeneratorRuntime.awrap(o.return());case 68:if(e.prev=68,n)throw s;e.next=71;break;case 71:return e.finish(68);case 72:return e.finish(63);case 73:case 74:case"end":return e.stop()}},null,null,[[3,59,63,73],[20,37,41,51],[42,,46,50],[64,,68,72]])}).then(function(e){return models.Answer.findAll({idQuestion:_defineProperty({},Op.or,getIdQuestions(y))}).then(function(t){return models.TestUserAnswer.findAll({where:{idAttempt:w}}).then(function(e){r.render("../views/tests/result.pug",{result:e,ans:t,questions:y})})})})})};