// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    try {
      // You can log the data or integrate with an email service (e.g., SendGrid, Nodemailer)
      console.log("Message received:", { name, email, message });

      // Send a success response
      return res.status(200).json({
        success: true,
        message: "Message sent successfully!",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }
}
