import prisma from "@/src/lib/prisma-client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if (!githubId || !githubSecret) {
  throw new Error(
    "GITHUB_ID and GITHUB_SECRET must be set in .env.local"
  );
}

export const authConfig = {
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
  ],
  callbacks: {
    session: async ({session, user}) => {
      if (session.user) {
      session.user.id = user.id;
      }
      return Promise.resolve(session);
    },
  },
  adapter: PrismaAdapter(prisma),
} satisfies NextAuthOptions

export default NextAuth(authConfig)