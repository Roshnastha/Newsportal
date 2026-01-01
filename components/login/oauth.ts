'use client';
import { signIn } from "next-auth/react";

export const googleLogin = () => signIn("google", { callbackUrl: "/" });
export const appleLogin = () => signIn("apple", { callbackUrl: "/" });
