import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: "dayadandiya49@gmail.com", // your email address
        subject: `New message from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ message: "Only POST requests are allowed" });
  }
}
