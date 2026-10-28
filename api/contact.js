import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }

  // Handle body whether it is parsed or JSON string
  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ message: "Invalid JSON format." });
    }
  }

  const { name, email, lookingToBuild, message } = body ?? {};
  const topic = (lookingToBuild && lookingToBuild.trim()) ? lookingToBuild.trim() : "General Inquiry";

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim() ||
    name.length > 100 ||
    email.length > 254 ||
    message.length > 5000 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return res.status(400).json({
      message: "Please provide valid form details.",
    });
  }

  const apiKey = process.env.RESEND_API_KEY || process.env.RESEND_EMAIL_API;
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY / RESEND_EMAIL_API in environment variables.");
    return res.status(500).json({
      message: "Email service is not configured (missing API key).",
    });
  }

  // console.log(
  //   "RESEND_API_KEY configured:",
  //   Boolean(process.env.RESEND_EMAIL_API)
  // );
  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["muhraza.dev10@gmail.com"],
      replyTo: email.trim(),
      subject: `New Portfolio Inquiry: ${topic}`,
      text: `
New inquiry received from your portfolio.

Name: ${name.trim()}
Email: ${email.trim()}
Looking to build: ${topic}

Message:
${message.trim()}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(502).json({
        message: error.message || "Unable to send your inquiry right now.",
      });
    }

    return res.status(200).json({
      message: "Inquiry sent successfully!",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      message: error.message || "Internal server error.",
    });
  }
}
