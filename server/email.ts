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

const defaultMailOptions = {
  from: '"farr 👥" <farr@allpyra.com>', // sender address
  to: 'farr@allpyra.com', // list of receivers
  subject: 'DB备份 ✔', // Subject line
  text: 'Hello world 🐴', // plaintext body
  html: '<b>Hello world 🐴</b>' // html body
}

export function sendEmail (mailOptions) {
// send mail with defined transport object
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  })
}

export function sendDB (data: string) {
  const mailOptions = Object.assign({}, defaultMailOptions, {
    html: data,
  })
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  })
}
