import { createSendMessageRepo } from "./contact.repo.js";
import { sendEmail } from "../../utils/nodemailer.js";

export const createSendMessage = async (req, res) => {
  const { fullname, phone_number, email, message } = req.body;

  if (!fullname || !phone_number || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Send email to the owner (you)
    await sendEmail({ fullname, phone_number, email, message });

    // Save to database
    const saved = await createSendMessageRepo({
      fullname,
      phone_number,
      email,
      message,
    });

    res.status(201).json({
      message: "Inquiry sent successfully.",
      data: saved,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ message: "Error sending message. Please try again." });
  }
};
