const nodemailer = require("nodemailer");
const log = console.log;
module.exports = {
    sendEmailwithContent: async(EmailUser,content) => {
        // Step 1
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "huuhao1999testqlbh@gmail.com", // TODO: your gmail account
                pass: "Hao123456789" // TODO: your gmail password
            }
        });
        // Step 2
        let mailOptions = {
            from: "huuhao1999testqlbh@gmail.com", // TODO: email sender
            to: EmailUser, // TODO: email receiver
            subject: "Thông báo!!!!!!",
            text: content
        };
        // Step 3
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                return 0;
            }
            return 1;
        });
    }
};