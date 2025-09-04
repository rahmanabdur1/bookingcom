"use client";

import { LoginForm } from "../authComponents/LoginForm";
import { SocialLoginButtons } from "../authComponents//SocialLoginButtons";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 sm:px-6 lg:px-8"
      )}
      style={{ fontFamily: '"Be Vietnam Pro", "Noto Sans", sans-serif' }}
    >
      <div className={cn("text-center mb-8")}>
        <h2 className={cn("text-3xl font-bold tracking-tight text-slate-900")}>
          Welcome back, Angler!
        </h2>
        <p className={cn("mt-2 text-sm text-slate-600")}>Login to your ReelIn account</p>
      </div>

      <LoginForm />
      <SocialLoginButtons />

      <div className={cn("text-center text-sm text-slate-600 mt-4")}>
        Don&apos;t have an account?{" "}
        <Link href="#" className={cn("text-[var(--primary-color)] hover:underline")}>
          Sign up
        </Link>
      </div>
    </div>
  );
}
