const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "kalathiyaneel4@gmail.com",
        pass: "cppe bnnx wrpo uhgv"
    }
})
const sendingMail = (to, subject, html) => {
const mailOptions = {
        from: "kalathiyaneel4@gmail.com",
        to: to,
        subject,
        html
    }
    transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(info);
        }
    })
}


module.exports = sendingMail