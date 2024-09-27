const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "kalathiyaneel02@gmail.com",
        pass: "epmv fkse kjqo mpbx"
    }
})
const sendingMail = (to, subject, html) => {
const mailOptions = {
        from: "kalathiyaneel02@gmail.com",
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