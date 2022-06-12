// pages/api/hook.js
import { isValidRequest } from "@sanity/webhook";
import sendMail from "../../util/sendEmail";
const secret = process.env.MY_WEBHOOK_SECRET;

export default function handler(req, res) {
  if (!isValidRequest(req, secret)) {
    res.status(401).json({ success: false, message: "Invalid signature" });
    return;
  }
  const email = "chisomprince17@gmail.com";
  const subject = "Webhook subject";
  const message = "Webhook message";
  sendMail(email, subject, message);
  res.json({ success: true });
}
