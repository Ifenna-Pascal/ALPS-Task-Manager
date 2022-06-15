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
        email: { label: "email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        try {
          const user = await client.fetch(
            `*[_type == "user" && email == "${credentials.email}"][0]`
          );
          if (!user) throw new Error("User not found, Incorrect Credentials");
          if (!bcrypt.compareSync(credentials.password, user.password)) {
            throw new Error("password does not match");
          } else {
            console.log("my user", user);
            return user;
          }
        } catch (error) {
          console.log(error);
          throw new Error(error);
        }
      },
    }),
  ],
  session: {
    updateAge: 0,
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  // jwt: {
  //   secret: process.env.TOKEN_SECRET,
  //   maxAge: 30 * 24 * 60 * 60,
  // },
  callbacks: {
    async jwt({ token, user, account }) {
      console.log(token, "toknnnnnn");
      if (account && user) {
        const userToken = signToken(user);
        return {
          ...token,
          accessToken: userToken,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
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
