var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
//We dont put /about, we are in about so .. isnt necessary
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

//make the send
router.post('/send', function(req, res, next){
	var transporter = nodemailer.createTransport({
		service: 'Microsoft',
		auth: {
			user: 'diego.collao07@inacapmail.cl',
			pass: 'test'
		}
	});

	var mailOptions = {
		from: 'Diego Collao <diego.collao.albornoz@gmail.com>',
		to: 'diego.collao07@inacapmail.cl',
	 	subject: 'Website Submission',
		text: 'you have a new submission with the following details...  Name: '+req.body.name+' Email: '+req.body.email+' Message: '+req.body.message,
		html: '<p>You got a new submission with the following details</p><ul><li>Name: '+req.body.name+'</li><<li>Email: '+req.body.email+'</li><li>Message: '+req.body.mesasge+'</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			//redirect to home haha
			res.redirect('/');
		} else {
			console.log(info.response);
			res.redirect('/');			
		}
	});

});

module.exports = router;
