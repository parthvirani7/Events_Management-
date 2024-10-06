const nodemailer = require('nodemailer');

exports.sendEventNotification = async (userEmail, eventTitle, eventDate) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: `Event Update: ${eventTitle}`,
      text: `Hello! The event "${eventTitle}" is scheduled for ${eventDate}. Don't miss it!`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent to', userEmail);
  } catch (error) {
    console.log('Error sending email:', error);
  }
};
