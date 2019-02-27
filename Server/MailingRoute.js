const nodemailer = require("nodemailer");
let router = require('express').Router()

let mailInput = {}

router.post('/', (req, res, next) => {
  mailInput = req.body
  main().catch(console.error)
})

async function main() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.rcmfevents@gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'rcmfevents@gmail',
      pass: 'RandyCarpenter15'
    }
  });

  let mailOptions = {
    from: '"Events Registration" <rcmfevents@gmail.com>',
    to: "kerry@thegeo.net, firemnkirk@yahoo.com, rcmfevents@gmail.com",
    subject: mailInput.subject,
    text: mailInput.text,
    html: mailInput.html
  };

  let info = await transporter.sendMail(mailOptions)
  console.log("Message sent: %s", info.messageId);
}
module.exports = router