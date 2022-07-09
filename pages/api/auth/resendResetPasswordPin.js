import axios from "axios";
import nc from "next-connect";
import client from "../../../store/apicall/sanityInit";

const handler = nc();

handler.post(async (req, res) => {
  const projectId = process.env.PROJECT_ID;
  const dataset = process.env.DATA_SET;
  const tokenWithWriteAccess = process.env.SANITY_AUTH_TOKEN;
  const token =
    Math.random().toString(5).substring(2, 5) +
    Math.random().toString(5).substring(2, 5);
  const email = req.body.email.toLowerCase();
  if (!email) {
    return res.status(400).send({ message: "Email is required" });
  }

  try {
    const existUser = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      {
        email: email,
      }
    );

    if (!existUser) {
      return res.status(401).send({ message: "Invalid email" });
    }

    const data = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: "template_lhzr6qh",
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_PRIVATE_KEY,
      template_params: { email: req.body.email, token: token },
    };

    const createMutations = [
      {
        createOrReplace: {
          _type: "verification-token",
          user: existUser._id,
          token: token,
          expires: new Date(Date.now() + 3600000).toLocaleDateString(),
          identifier: existUser.email,
        },
      },
    ];

    await axios.post(
      `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}`,
      { mutations: createMutations },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${tokenWithWriteAccess}`,
        },
      }
    );

    await axios.post("https://api.emailjs.com/api/v1.0/email/send", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    res.status(200).send({ message: "Token sent successfully" });
  } catch (error) {
    console.log(error.response);
    res.status(400).send({ message: "Invalid email or password" });
  }
});

export default handler;
