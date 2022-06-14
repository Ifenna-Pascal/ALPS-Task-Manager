// pages/api/hook.js
import { isValidRequest } from "@sanity/webhook";
const secret = process.env.MY_WEBHOOK_SECRET;

import axios from "axios";
export default async function handler(req, res) {
  if (!isValidRequest(req, secret)) {
    res.status(401).json({ success: false, message: "Invalid signature" });
    return;
  }

  const data = {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
    user_id: process.env.EMAILJS_PUBLIC_KEY,
    accessToken: process.env.EMAILJS_PRIVATE_KEY,
    template_params: req.body,
  };

  try {
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Email sent");
    return;
  } catch (err) {
    console.log(err.response.data);
  }
}
