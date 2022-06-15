import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signToken } from "../../../util/auth";
import client from "../../../store/apicall/sanityInit";
import bcrypt from "bcryptjs";

const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(_, req) {
        try {
          const user = await client.fetch(
            `*[_type == "user" && email == $email][0]`,
            {
              email: req.body.email,
            }
          );

          if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const token = signToken({
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
            });
            res.send({
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
              token,
            });
          } else {
            res.status(401).send({ message: "Invalid email or password" });
          }
        } catch (error) {
          console.log(error.response);
          res.status(401).send({ message: "Invalid email or password" });
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ user }) => {
      console.log(user, "user..........................")
      if (user) {
        return signToken(user);
      }
    },
    async session({ session, token }) {
      console.log(token, session, '.......')
      console.log(session, token);
      return session;
    },
  },
  pages: {
    signIn: "auth/signin",
    newUser: "/", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  secret: process.env.JWT_SECRET,
};

export default NextAuth(options);
