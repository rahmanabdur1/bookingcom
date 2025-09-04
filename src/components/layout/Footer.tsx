"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Footer() {
  const links = [
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
  ];

  const socialIcons = [
    {
      name: "Instagram",
      href: "#",
      svg: (
        <svg
          fill="currentColor"
          height="20"
          viewBox="0 0 256 256"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      svg: (
        <svg
          fill="currentColor"
          height="20"
          viewBox="0 0 256 256"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      svg: (
        <svg
          fill="currentColor"
          height="20"
          viewBox="0 0 256 256"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#111c22] text-[#92b7c9]">
      {/* ShadCN Card Section */}
      <div className="container mx-auto px-4 py-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card className="bg-[#0f1a24]/80 text-white">
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
            <CardDescription>Navigate through our site</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-[#0f1a24]/80 text-white">
          <CardHeader>
            <CardTitle>Follow Us</CardTitle>
            <CardDescription>Stay connected with us</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row gap-4">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.href}
                aria-label={icon.name}
                className="hover:text-white transition-colors"
              >
                {icon.svg}
              </a>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-[#0f1a24]/80 text-white">
          <CardHeader>
            <CardTitle>About Us</CardTitle>
            <CardDescription>Learn more about our fishing community</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Your ultimate guide to the best fishing spots. Explore ponds,
              spots, gear rentals, and more.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#0f1a24]/80 text-white">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>Get in touch</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Email: info@fishingadventures.com</p>
            <p className="text-sm mt-1">Phone: +880 1234 567890</p>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800 bg-[#111c22]/50 py-8 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Text */}
            <div className="text-center md:text-left">
              <p className="italic text-sm chakra-shadcn">
                Your ultimate guide to the best fishing spots.
              </p>
              <p className="italic text-sm mt-2">
                © 2024 Fishing Adventures. All rights reserved.
              </p>
            </div>

            {/* Links */}
            <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={cn("italic text-sm transition-colors hover:text-white")}
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href={icon.href}
                  className="transition-colors hover:text-white"
                  aria-label={icon.name}
                >
                  {icon.svg}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
