const nodemailer = require("nodemailer");
const crypto = require("crypto");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "haaziebu@gmail.com",
        pass: "jppevhqlnferfoeh"
    }
})

const token = crypto.randomBytes(32).toString("hex");

const mailOptions = {
    from: "haaziebu@gmail.com",
    to: "frederickaziebu1998@gmail.com",
    html: `
    <div>
      <h>Please click below link to activate your account</h>
    </div>
    <div>
      <a href="http://localhost:5001/driver/auth?token=${token}">Activate</a>
    </div>
    Token is ${token}`,
}


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent" + info.response);
    }
});
