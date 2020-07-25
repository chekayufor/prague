const express = require('express');
require('dotenv').config();
const moment = require('moment');
const path=require('path');
var multer = require('multer');;
// const gcsSharp = require('multer-sharp'); 

// resizer
var cors = require('cors');
const fs = require('fs').promises;
const uploadPath = '../client/public/upload';

const connectDB = require('./config/db');
const nodemailer = require('nodemailer');

//start express
const app = express();

//CORS middleware.
app.use(cors());
//static folder
app.use(express.static('public'));

//connect DB
connectDB();

//Init Middleware && now we can accept data 
app.use(express.json({ extended: false }))

// app.get('/', (rec, res) => res.json({ msg: 'Welcome to Prague' }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/excursion', require('./routes/excursion'));
// app.use('/api/send', require('./routes/send'));
//data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//sending email
app.post('/api/send', (req, res) => {
    const { name, tel, email, data, text } = req.body;

    const output = `
            <p>You have a new contact request from PragueTour</p>
            <h3>Contact Details</h3>
            <li>  
            <li>Name: ${name}</li>
            <li>Phone: ${tel}</li>
            <li>Email: ${email}</li>
            <li>Date: ${moment(data).format("LL dddd")}</li>
            <li>Text: ${text}</li>
            </ul>
        `
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'gmail',
        port: 587,
        service: 'gmail',
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD  // generated ethereal password
        },
        //localhost
        tls: {
            rejectUnauthorized: false
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
        } else {
            // console.log('Message sent: %s', info.messageId);   
            console.log('_____________Message sent____________');
        }

    });
    console.log('DATA', req.body);
    res.json({ message: 'Message received!' })
});

//uploading pictures
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
//resize with multer-sharp
// var storage = multer.gcsSharp({
//     destination: function (req, file, cb) {
//     cb(null, '../client/public/uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' +file.originalname )
//   },
//   size: {
//     width: 400,
//     height: 400
//   }
// });

//Create an upload instance and receive a single file
var upload = multer({ storage: storage }).single('file');
function importAll(r) {
    return r.keys().map(r);
}
//Setup the POST route to upload a file
app.post('/upload', async (req, res) => {
    // console.log('POST______________req.file', req.file);
    try {
        await upload(req, res, (err) => {
            console.log('upload______________req.file', req.file);
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
            return res.status(200).send(req.file)
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    console.error('POST______________res.file', res.message);

});
// DELETE /upload file

app.delete('/upload/:filename', async (req, res) => {
    const { params } = req;

    if (!params.filename) {
        res.status(400).send('bad request');
        return;
    }

    try {
        const sanitizedFilename = params.filename.replace('..', '');
        const filePath = `${uploadPath}/${sanitizedFilename}`;
        
        await fs.unlink(filePath);
        console.log('File has been Deleted');
        res.status(200).send('ok');

    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

//Serve static assets i poroduction
if(process.env.NODE_ENV ==='production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));