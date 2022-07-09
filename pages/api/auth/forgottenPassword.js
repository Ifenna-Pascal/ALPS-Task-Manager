import nc from "next-connect";
import bcrypt from "bcryptjs";
import axios from "axios";
import { signToken } from "../../../util/auth";
import client from "../../../store/apicall/sanityInit";

const handler = nc();

handler.post(async (req, res) => {
  const projectId = process.env.PROJECT_ID;
  const dataset = process.env.DATA_SET;
  const tokenWithWriteAccess = process.env.SANITY_AUTH_TOKEN;
  const email = req.body.email.toLowerCase();
  try {
    const existUser = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      {
        email: email,
      }
    );

    const verification = await client.fetch(
      `*[_type == "verification-token" && identifier == $identifier][0]`,
      {
        identifier: email,
      }
    );

    console.log(verification);
    if (!verification) {
      return res.status(401).send({ message: "Invalid email" });
    }
    console.log(req.body);
    if (verification.token != req.body.token) {
      return res.status(401).send({ message: "Invalid Token" });
    }

    const updateMutations = [
      {
        patch: {
          id: existUser._id,
          set: {
            password: bcrypt.hashSync(req.body.password, 10),
          },
        },
      },
    ];

    await axios.post(
      `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}`,
      { mutations: updateMutations },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${tokenWithWriteAccess}`,
        },
      }
    );

    res
      .status(200)
      .send({ message: "Password updated successfully Proceed to login" });
  } catch (error) {
    console.log(error.response);
    res.status(400).send({ message: "Invalid email or password" });
  }
});

export default handler;
