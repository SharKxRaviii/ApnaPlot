import nodemailer from "nodemailer";

export const sendEmail = async ({ fullname, email, phone_number, message }) => {
  try {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: process.env.GMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Verify connection before sending
    await transport.verify();
    console.log("SMTP connection verified successfully");

    const emailInfo = {
      from: `"Apna Plot" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
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

    const info = await transport.sendMail(emailInfo);
    console.log("Email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };

  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};