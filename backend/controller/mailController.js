import expressAsyncHandler from "express-async-handler";
import nodemailer from "nodemailer";

const sendMail = expressAsyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail", // Gmail kullanıyorsan
    auth: {
      user: process.env.EMAIL_USER, // .env dosyasında sakladığın email adresin
      pass: process.env.EMAIL_PASS, // .env dosyasında sakladığın email şifren
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: name,
    text: `
      Portfolyo sitenden gelen yeni bir mesajin var :) 
      
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };
  const info = await transporter.sendMail(mailOptions);

  if (!info) {
    res.status(500);
    throw new Error("Email gönderilemedi");
  }

  res.status(200).json({ message: "Email başarıyla gönderildi!" });
});

export default sendMail;
