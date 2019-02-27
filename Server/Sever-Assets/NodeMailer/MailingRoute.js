let router = require('express').Router()
const nodemailer = require("nodemailer");

let mailInput = {
  subject: '',
  text: '',
  html: '',
  attachments: []
}

router.post('/', (req, res, next) => {
  mailInput = req.body
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message)
    }
    console.log('success')
    res.send('successfully sent!')
  })
})


// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: 'rcmfevents@gmail.com',
    pass: 'RandyCarpenter15'
  }
});

let mailOptions = {
  from: '"Events Registration" rcmfevents@gmail.com',
  to: "kerry@thegeo.net, firemnkirk@yahoo.com, rcmfevents@gmail.com",
  subject: mailInput.subject,
  text: mailInput.text,
  html: mailInput.html,
  attachments: mailInput.attachemnts
};



module.exports = router