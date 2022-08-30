
var express = require('express');
var router = express.Router();
var contactmodel  = require('../model/contact');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact');
});


router.post('/addMsg' , function(req,res,next){
let newMsg = new contactmodel({
name: req.body.name,
email: req.body.email,
subject: req.body.subject,
message: req.body.message

});

newMsg.save(()=>{
res.redirect('/contact');

})

});

module.exports = router;
