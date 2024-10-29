// app/sign-up/page.tsx

"use client";

import { SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

const SignUpPage = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");  // Redirect to dashboard after sign-up
    }
  }, [isSignedIn, router]);

  return <SignUp />;
};

export default SignUpPage;
