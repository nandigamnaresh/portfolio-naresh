const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

app.post('/send', (req, res) => {
  const { number, fullName, address } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'nandigamnaresh999@gmail.com',
    subject: 'New Form Submission',
    text: `Number: ${number}\nFull Name: ${fullName}\nAddress: ${address}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email', error });
    } else {
      return res.status(200).json({ message: 'Email sent successfully', info });
    }
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
