import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;

      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      // Create a more secure transporter using OAuth2 or App Password instead of regular password
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
          user: process.env.EMAIL_USER, // Store this in .env file
          pass: process.env.EMAIL_PASS, // Store this in .env file
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'anidiptapal@gmail.com',
        subject: `New message from ${name}: ${subject}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`,
        // Also include HTML version for better formatting
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      // Verify connection configuration
      await transporter.verify();
      
      // Send mail
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
      
      res.status(200).json({ message: 'Email sent successfully', messageId: info.messageId });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email', error: error instanceof Error ? error.message : String(error) });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}