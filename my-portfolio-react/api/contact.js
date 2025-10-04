import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // datos que envía el formulario
  const { name, email, subject, message } = req.body;

  // verifica que todos los campos estén presentes
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // configuración de nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.USERPWD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.USERMAIL,
    subject: `New message from ${name}: ${subject}`,
    text: `
      You have received a new message from your portfolio contact form:

      Name: ${name}
      Email: ${email}
      Subject: ${subject}

      Message:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email." });
  }
}