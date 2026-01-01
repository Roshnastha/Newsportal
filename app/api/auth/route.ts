import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";


const appleClientSecret = process.env.APPLE_CLIENT_SECRET
  ?? ({
    teamId: process.env.APPLE_TEAM_ID!,
    // If your private key is stored with escaped newlines, unescape them:
    privateKey: process.env.APPLE_PRIVATE_KEY
      ? process.env.APPLE_PRIVATE_KEY.replace(/\\n/g, "\n")
      : undefined,
    keyId: process.env.APPLE_KEY_ID!,
    appleId: process.env.APPLE_CLIENT_ID!,
  } as unknown as string); // cast to string to satisfy next-auth types

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID!,
      clientSecret: appleClientSecret,
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };