const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

// // View engine setup
// router.engine('handlebars', exphbs());
// router.set('view engine', 'handlebars');
// Static folder
// router.use('/public', express.static(path.join(__dirname, 'public')));

// // Body Parser Middleware
// router.use(bodyParser.urlencoded({ extended: false }));
// router.use(bodyParser.json());


// router.get('/', (req, res) => {
//     res.render('contact');
//   });
  
  router.post('/send', (req, res) => {
    // const {name,tel, email, data, text}=req.body;
    const output = req.body;
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'gmail',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: 'dmitriy.prague@gmail.com', // generated ethereal user
          pass: 'FokinDima2020'  // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: 'dmitriy.prague@gmail.com', // sender address
        to: 'dmitriy.prague@gmail.com', // list of receivers
        subject: 'Node Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }else{
            console.log('Message sent: %s', info.messageId);   
            console.log('Message sent');   
        }
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        // res.render('contact', {msg:'Email has been sent'});
        });
    });
  

module.exports = router;