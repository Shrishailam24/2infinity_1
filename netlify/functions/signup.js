const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const { email, password } = JSON.parse(event.body);

  // Mail transporter (using Gmail SMTP or SendGrid)
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your_email@gmail.com",   // Replace with your Gmail
      pass: "your_app_password",      // Use Gmail App Password (not normal password)
    },
  });

  // Send approval request to approver (Ashish)
  await transporter.sendMail({
    from: "your_email@gmail.com",
    to: "ashish.kharad2@gmail.com", // Approver
    subject: "New Signup Approval",
    html: `<p>User <b>${email}</b> signed up.</p>
           <p>Click below to approve:</p>
           <a href="https://silly-buttercream-213cfb.netlify.app/.netlify/functions/approve?email=${email}&password=${password}">Approve</a>`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Signup request sent for approval ✅" }),
  };
};
