import nodemailer from "nodemailer";

export const sendEmail = async ({ fullname, email, phone_number, message }) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const emailInfo = {
    from: `"Apna Plot" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,   // YOU (the owner) will receive the inquiry
    subject: `New Inquiry from ${fullname}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #0a0a0a;">New Website Inquiry</h2>

        <p>You have received a new inquiry from your website contact form.</p>

        <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Full Name</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${fullname}</td>
          </tr>

          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          </tr>

          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone Number</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${phone_number}</td>
          </tr>

          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
          </tr>
        </table>

        <p style="margin-top: 20px;">Regards,<br/>Apna Plot Website</p>
      </div>
    `,
  };

  await transport.sendMail(emailInfo);
};
