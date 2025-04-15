import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Details you want to send
const name = "Your Name";
const senderEmail = "you@example.com";
const subject = "Your Subject";
const message = "Your message content goes here.";

// Setup transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Compose email
const mailOptions = {
  from: `"${name}" <${process.env.EMAIL_USER}>`,
  to: "anidiptapal@gmail.com",
  subject: subject,
  text: `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error("❌ Error sending email:", error);
  }
  console.log("✅ Email sent:", info.response);
});
