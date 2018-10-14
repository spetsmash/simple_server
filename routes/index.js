var express = require('express');
// var TelegramBot = require('node-telegram-bot-api');
var router = express.Router();
// var models = require('../models/index');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/test', function(req, res, next) {
    res.json('This is CORS-enabled for a Single Route');
});

// router.post('/test', function(req, res, next) {
//     res.json('This is CORS-enabled for a Single Route');
// });

// var question = require('../misc/questions');
// const sgMail = require('@sendgrid/mail');
//
// const token = '671044975:AAHV3-B00DjFZxsxolvlB-P1w981RHf-f_o';
// const bot = new TelegramBot(token, {polling: true});

// sgMail.setApiKey('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');
//
//
//
// bot.onText(/\/start/, function (msg, match) {
//     const chatId = msg.chat.id;
//     console.log(msg);
//     models.User
//         .findOrCreate({where: {chatId: msg.chat.id}, defaults: { login: msg.chat.first_name, step: 0, userId: msg.from.id }})
//         .spread((user, created) => {
//         if (!created) {
//         console.log('user - ' + user);
//         models.User.findOne({ where: {chatId: msg.chat.id} }).then(project => {
//
//             const step = project.dataValues.step;
//         if (step === 0) {
//             newQuestion(msg, 0);
//         }
//         else if (step > 0 && step !== 6) {
//             newQuestion(msg, project.dataValues.step);
//         }
//
//     });
//         //bot.sendMessage(chatId, 'Hello! Let\'s proceed! ' + chatId);
//     } else  {
//
//         // bot.sendMessage(chatId, 'Hello new one! ' + chatId);
//         newQuestion(msg, 0);
//     }
//     // console.log(created)
// });
//
// });
//
// bot.onText(/\/balance/, function (msg, match) {
//     const chatId = msg.chat.id;
//     console.log(msg);
//
//     // bot.getChatMember(chatId, chatId, (data) => {
//     //     console.log(data);
//     // })
//     // models.User
//     //     .findOrCreate({where: {chatId: msg.chat.id}, defaults: { login: msg.chat.first_name, step: 0 }})
//     //     .spread((user, created) => {
//     //         if (!created) {
//     //             // console.log(user);
//     //             models.User.findOne({ where: {chatId: msg.chat.id} }).then(project => {
//     //
//     //                 const step = project.dataValues.step;
//     //                 if (step === 0) {
//     //                     newQuestion(msg, 0);
//     //                 } else if (step > 0) {
//     //                     newQuestion(msg, project.dataValues.step);
//     //                 }
//     //             });
//     //             //bot.sendMessage(chatId, 'Hello! Let\'s proceed! ' + chatId);
//     //         } else  {
//     //
//     //             // bot.sendMessage(chatId, 'Hello new one! ' + chatId);
//     //             newQuestion(msg, 0);
//     //         }
//     //         // console.log(created)
//     //     });
//
// });
//
//
//
//
// function newQuestion(msg, index){
//     chat = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;
//     switch(index) {
//         case 3:
//             models.User
//                 .update({balance: 100}, {where: {chatId: chat}})
//                 .spread((user, created) => {
//                     ask(msg, 'Please ENTER your EMAIL so that we can send you the latest TOKEN updates! ✉️ \n' +
//                         'You can CONFIRM it LATER.');
//                 });
//             break;
//         case 5:
//             ask(msg, 'We will verify that you have followed us on Twitter, please ENTER your TWITTER USERNAME. (without @)');
//             break;
//         case 6:
//             ask(msg, 'Please ENTER your Ethereum wallet address:');
//             break;
//         case 7:
//             ask(msg, 'Congratulations! You are  already in our bounty program!');
//             break;
//         default:
//             var arr =  question.questions[index];
//             var text = arr.title;
//             var options = {
//                 reply_markup: JSON.stringify({
//                     inline_keyboard: arr.buttons,
//                     parse_mode: 'Markdown'
//                 })
//             };
//
//             bot.sendMessage(chat, text, options);
//             break;
//     }
// }
//
//
// function ask(msg, text) {
//      chat = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;
//      bot.sendMessage(chat, text);
//  }
//
//
// bot.on('message', (msg) => {
//
//     const chat = msg.chat.id;
//     if (msg.text === '/balance' && msg.text === '/new') {
//         return;
//     } else {
//     models.User.findOne({ where: {chatId: chat} }).then(project => {
//         if (project) {
//             console.log(msg.text);
//             let step = project.dataValues.step;
//
//             switch(step) {
//                 case 3:
//
//                     if (validateEmail(msg.text)) {
//                         step++;
//                         const rand = function() {
//                             return Math.random().toString(36).substr(2); // remove `0.`
//                         };
//                         const token = function() {
//                             return rand() + rand(); // to make it longer
//                         };
//
//                         const id = token();
//
//                     models.User
//                         .update({email: msg.text, token: id}, {where: {chatId: chat}})
//                         .spread((user, created) => {
//                             models.User
//                                 .update({step: step}, {where: {chatId: chat}})
//                                 .spread((user, created) => {
//                                     sendEmailVerification(chat, msg.text, id);
//
//                                     bot.sendMessage(chat, 'We\'ve sent you a confirmation mail, please verify your email address by clicking the link in the email.\n');
//                                     newQuestion(msg, step);
//                                 });
//                         });
//                     break;
//                     } else {
//                         bot.sendMessage(chat, 'Email is wrong!');
//                         newQuestion(msg, step);
//                         break;
//                     }
//                 case 5:
//                     console.log(msg.text.indexOf('@'));
//                     if (msg.text.indexOf('@')) {
//                         step++;
//
//                         models.User
//                             .update({twitter: msg.text, balance: +project.dataValues.balance + 100 }, {where: {chatId: chat}})
//                             .spread((user, created) => {
//                                 models.User
//                                     .update({step: step}, {where: {chatId: chat}})
//                                     .spread((user, created) => {
//                                         newQuestion(msg, step);
//                                     });
//                             });
//                         break;
//                     } else {
//                         bot.sendMessage(chat, 'Invalid username! Please type again. (without @)');
//                         // newQuestion(msg, step);
//                         break;
//                     }
//                 case 6:
//                     step++;
//                     models.User
//                         .update({ethereumAddress: msg.text}, {where: {chatId: chat}})
//                         .spread((user, created) => {
//                             models.User
//                                 .update({step: step}, {where: {chatId: chat}})
//                                 .spread((user, created) => {
//                                     newQuestion(msg, step);
//                                 });
//                         });
//                     break;
//                 case 7:
//                     newQuestion(msg, step);
//                     break;
//                 default:
//                     // var arr =  question.questions[step];
//                     // var text = arr.title;
//                     // var options = {
//                     //     reply_markup: JSON.stringify({
//                     //         inline_keyboard: arr.buttons,
//                     //         parse_mode: 'Markdown'
//                     //     })
//                     // };
//                     //
//                     // newQuestion(msg, step);
//                     break;
//             }
//         } else {
//             return;
//         }
//     });
//     }
// });
//
// function sendEmailVerification (chat, email, id) {
//
//     models.User
//         .update({token: id}, {where: {chatId: chat, email: email}})
//         .spread((user, created) => {
//             const link = "http://34.245.133.13:3000"+ "/verify?id=" + id + "&email="+ email;
//             const message = {
//                 to: email,
//                 from: 'usinvestors@notallowed.com',
//                 subject: 'Email verification Usinvestorsnotallowed',
//                 text: 'Email verification Usinvestorsnotallowed',
//                 html: '<strong>Thank you for subscribing to TOKEN news.</strong><br><br> <p>Please Click on the link to verify your email.<br>' +
//                 '<a href=' + link + '>Click here to verify</a></p>',
//             };
//             sgMail.send(message);
//         });
//
// }
//
//
// bot.on('callback_query', function (msg) {
//     var answer = msg.data.split('_');
//     var index = answer[0];
//     var button = answer[1];
//     // console.log(msg);
//
//     if (question.questions[index].right_answer == button) {
//         index++;
//         // bot.sendMessage(msg.from.id, 'Ответ верный ✅');
//         models.User
//             .update({ step: index }, {where: {chatId: msg.message.chat.id}})
//             .spread((user, created) => {
//                 // console.log(user.dataValues)
//             });
//         newQuestion(msg, index);
//     } else {
//         bot.sendMessage(msg.from.id, 'Wrong answer ❌');
//         index--;
//         newQuestion(msg, index);
//     }
//
//     // bot.answerCallbackQuery(msg.id, 'Вы выбрали: '+ msg.data, true);
// });
//
// function validateEmail(emailAddress) {
//     var regularExpression = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,6}$/i;
//     return regularExpression.test(emailAddress);
// }
//
//     /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
// router.get('/d', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });
//
// router.get('/verify',function(req,res){
//     // console.log(req.protocol+":/"+req.get('host'));
//     // console.log(req);
//     // console.log(req.query.email);
//     if((req.protocol+"://"+req.get('host')) == ("http://34.245.133.13:3000"))
//     {
//         console.log("Domain is matched. Information is from Authentic email");
//         models.User.findOne({ where: {email: req.query.email} }).then(project => {
//
//             if(req.query.id == project.dataValues.token) {
//                 models.User
//                     .update({verification: true, balance: +project.dataValues.balance + 100}, {where: {email: req.query.email}})
//                     .spread((user, created) => {
//                         console.log("email is verified");
//                         res.end("<h1>Email is been Successfully verified</h1>");
//                     });
//
//             }
//             else {
//                 console.log("email is not verified");
//                 res.end("<h1>Bad Request</h1>");
//             }
//         });
//
//     }
//     else {
//         res.end("<h1>Request is from unknown source</h1>");
//     }
// });
//
//
//
module.exports = router;
