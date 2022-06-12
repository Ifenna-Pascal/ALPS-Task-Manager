const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chisomprince.dev@gmail.com",
    pass: "95649665ch",
  },
});

const sendMail = (email, subject, message) => {
  const mailOptions = {
    from: "chisomprince.dev@gmail.com", // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    html: message, // plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};

export default sendMail;
