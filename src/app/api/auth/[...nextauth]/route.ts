import { getAccountDetail } from "@/database/database";
import { type AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

interface User {
  username: string;
  userId: string;
  superuser: boolean;
}

const providerOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "MyUsername",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials) {
          const res = await getAccountDetail(
            credentials.username,
            credentials.password
          );
          if (res.success) {
            return {
              name: res.user.username,
              id: res.user.userId,
              superuser: res.user.superuser,
            };
          }
          return null;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      token = { ...token, ...user };
      console.log(token);
      return token;
    },
    async session({ session, token, user }) {
      session.user = { ...token };
      return session;
    },
  },
};

const handler = NextAuth(providerOptions);
export { handler as GET, handler as POST };
