import type { Metadata } from "next";
import LoginContent from "./LoginContent";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to access PAX:Luma personal assistant services.",
};

export default function LoginPage() {
  return <LoginContent />;
}
