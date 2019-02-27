const nodemailer = require("nodemailer");

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