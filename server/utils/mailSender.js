const nodemailer = require('nodemailer');

async function mailSender(email, title, body) {
    try{
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        })

        const info = await transporter.sendMail({
            from: 'StudyNotion',
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        return info;
    }
    catch(error) {
        console.log(error.message);
    }
}