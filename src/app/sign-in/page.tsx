// app/sign-in/page.tsx

"use client";

import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

const SignInPage = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");  // Redirect to dashboard after sign-in
    }
  }, [isSignedIn, router]);

  return <SignIn />;
};

export default SignInPage;
