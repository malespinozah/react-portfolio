import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Please fill out all fields." });
  }

  try {
    // Configura el transporte SMTP usando Gmail (App Password) de forma explícita
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USERMAIL,
        pass: process.env.USERPWD,
      },
    });

    // Estructura del correo que recibirás
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.USERMAIL}>`, // el remitente debe ser tu cuenta
      to: process.env.USERMAIL,
      subject: `New message from your portfolio: ${subject}`,
      replyTo: email, // para poder responder al visitante
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending message.", detail: error.message });
  }
}