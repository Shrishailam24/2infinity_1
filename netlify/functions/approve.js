const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const { email, password } = event.queryStringParameters;

    // Transporter for sending emails
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "✅ Your Signup is Approved!",
      html: `<h3>Congratulations 🎉</h3>
             <p>Your signup request has been approved.</p>
             <p>You can now login using your credentials:</p>
             <ul>
               <li>Email: ${email}</li>
               <li>Password: ${password}</li>
             </ul>`,
    });

    return {
      statusCode: 200,
      body: "✅ Approval successful. Confirmation email sent to the user.",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `❌ Error approving signup: ${error.message}`,
    };
  }
};
