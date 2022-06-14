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

  try {
    const existUser = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      {
        email: req.body.email,
      }
    );

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

    if (existUser.password == !req.body.password) {
      return res.status(401).send({ message: "Invalid password" });
    }

    const { data } = await axios.post(
      `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}`,
      { mutations: updateMutations },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${tokenWithWriteAccess}`,
        },
      }
    );
    console.log(data);

    const userId = data.results[0].id;
    const user = {
      _id: userId,
      name: req.body.name,
      email: req.body.email,
      isAdmin: false,
    };
    const token = signToken(user);
    res.send({ ...user, token });
  } catch (error) {
    res.send({ message: "Invalid email or password" });
    console.log(error.response);
  }
});

export default handler;
