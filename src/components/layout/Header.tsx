"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "absolute top-0 left-0 right-0 z-10 bg-transparent text-white"
      )}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-primary rounded-lg" />
          <h1 className="text-2xl font-bold tracking-wider">AquaCatch</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Locations", "Gear", "Community", "Tips & Tricks"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors"
                )}
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16m-7 6h7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            )}
          </svg>
        </Button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm px-6 py-6 space-y-6">
          <nav className="flex flex-col gap-4">
            {["Home", "Locations", "Gear", "Community", "Tips & Tricks"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)} // close after click
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          <div className="flex flex-col gap-3 pt-4 border-t border-white/20">
            <Button variant="ghost" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
