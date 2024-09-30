const nodemailer = require('nodemailer');
require("dotenv").config()
const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.email,
        pass: process.env.pass
    }
});

const sendingMail = async (to, subject, html) => {

    const mailOptions = {
        from: process.env.email,
        to: to,
        subject: subject,
        html: html
    }

    await transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);

        }
        else {
            console.log(info);

        }
    });
}

module.exports = sendingMail