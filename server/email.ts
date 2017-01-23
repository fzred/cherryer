import * as nodemailer from 'nodemailer'
import * as smtp from 'nodemailer-smtp-transport'

const transporter = nodemailer.createTransport(smtp({
  host: 'smtp.exmail.qq.com',
  secureConnection: true,
  use_authentication: true,
  port: 465,
  auth: {
    user: 'farr@allpyra.com',
    pass: 'All123'
  }
}))

export function sendEmail (mailOptions) {
// send mail with defined transport object
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  })
}
