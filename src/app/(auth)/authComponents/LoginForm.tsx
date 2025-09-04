"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function LoginForm() {
  return (
    <form className={cn("mt-8 space-y-6 w-full max-w-md")} action="#" method="POST">
      <div className={cn("space-y-4 rounded-lg bg-white p-8 shadow-sm")}>
        <div>
          <label htmlFor="email" className="sr-only">
            Username or Email
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Username or Email"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        <div className={cn("text-right text-sm")}>
          <Link href="#" className={cn("text-[var(--primary-color)] hover:underline")}>
            Forgot Password?
          </Link>
        </div>
      </div>

      <Button
        type="submit"
        className={cn(
          "w-full bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] text-white"
        )}
      >
        Login
      </Button>
    </form>
  );
}
