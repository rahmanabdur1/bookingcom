"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function SocialLoginButtons() {
  return (
    <div className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2 w-full max-w-md mt-4")}>
      <Button variant="outline" className={cn("flex items-center justify-center gap-2")}>
        <Image src="/google.svg" alt="Google" width={20} height={20} />
        Google
      </Button>

      <Button variant="outline" className={cn("flex items-center justify-center gap-2")}>
        <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
        Facebook
      </Button>
    </div>
  );
}
