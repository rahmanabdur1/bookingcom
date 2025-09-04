"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Heart, MessageCircle } from "lucide-react";

interface CommunityPost {
  title: string;
  desc: string;
  img: string;
  likes: number;
  comments: number;
}

const communityPosts: CommunityPost[] = [
  {
    title: "Weekend Catch at Lake Serenity",
    desc: "Caught this beauty over the weekend at Lake Serenity. The weather was perfect, and the fish were biting! Used a classic lure and had a great time.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSGpgyo7euXgftwkxpEqP01EMxfpl_-6lY7wXbbMbKPpmsecrN4uWfhAu27X_WhRUHhHLiUaOmMHqzqxbUYWqY8DWgzOpSTNueY2CXo3PGxm59v9oxeHszsZPesYLgiNUhmu7_cfUsj3VGuNP0MU5kg1zkUt7MwVdE9nHPILA9BRcxQAxjV9g6I1Or7CAyY1cwQ6JjgVnsU_E6GgrA4U4JjGjHLkJjaedW9w7YQ-Yp6xVvN0hLfk1mWU0Yi-aon3Bq70NPe2RCdt5-",
    likes: 25,
    comments: 8,
  },
  {
    title: "Tips for Bass Fishing",
    desc: "Sharing some tips I've learned over the years for catching bass. Focus on structure, use the right bait, and be patient. Happy fishing!",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ3StTDluo4i_GjFq3GwqybQtdruSL3B98PrCsgNkT-X2wHIF6819wJthR0Oi-xFTkpPhHNvgN3AtcuNjSCZjZH64K6zfxuHqUKeE-PbRioycDme_ke2kV1qluyHZglfRdtLWjkOP3Yo8hlsHpqkrfMbRN60eHdhnFO3Wz06jptXvudDsp0Hth6gPUOlzpwzdehZR1fBPWRsolyFdYBfdX27-0CIds6BfY86oO2L5MwqemmY6V_EIg_1JEbJBTPw2QsmHLhK5PpsS7",
    likes: 18,
    comments: 5,
  },
  {
    title: "New Gear Review: The AquaMaster 5000",
    desc: "Just got my hands on the new AquaMaster 5000 reel. It's smooth, powerful, and handled a tough fight with ease. Highly recommend for serious anglers.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeK-U35SBaPTCcA-b-ZHTx0SqCFDieV0Tnf1BUBkwo3H44K7v3mjmTs3NIVxMamTHeO0iMQ0bJHzxHLt2GPrFuiMW2Kni_NK--I4mLbN93ArMfhjdmGUJUp9el3GYPf2Hk14hpIpDU8H_0q7ipATSkBsyTve_oTuH-DMggYQYmvun22LykPurN1P6woF4FohCM6rD02IL_vqnAjw7dcHDOPl2Dj6ZecGkYLSoE_xrBadQRdYLKwf7av_la0BGGSsqe4Awd_9A3VcJO",
    likes: 32,
    comments: 12,
  },
  {
    title: "Fishing Trip to the Coast",
    desc: "Spent a week fishing along the coast. The scenery was breathtaking, and the fishing was even better. Caught a variety of species and made some great memories.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjDlCSNdRHNNSOVACpDrDxc0mYv0KhfJrk9obqef8WesOMxGoKTPYHsWNAPLWllYpotwi8riu8Ive2D_KvheKGneD0n4kZhdSTeD4NOHBO6avSo_bzwiZlFpUDWtCUJxg6FOkjYJHnV60FTeY5AMI069XCx4XpCCZXv9YvmWWZ61bUgBvyubHD-85YJAZfluZvPTCdlQNySD44oUgARLrXfCdqIF3N0tybWwji3H9pqDLAPtlr199XoeZ_E0ca0W3LzwmfprgLcUws",
    likes: 40,
    comments: 15,
  },
];

export default function CommunitySection() {
  return (
    <section className="w-full px-6 md:px-10 lg:px-20 xl:px-40 py-12">
 <h2
    className={cn(
      "text-2xl font-bold text-[#0d171b] mb-6 border-b-3 border-green-800 inline-block pb-1 text-center md:text-left"
    )}
  >
    Community Highlights
  </h2>

     

      <Carousel className="w-full relative">
        <CarouselContent className="-ml-2 md:-ml-4">
          {communityPosts.map((post, index) => (
            <CarouselItem key={index} className="px-2 md:px-4">
              <div
                className={cn(
                  "bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
                )}
              >
                <div className="relative w-full h-56">
                  <Image
                    src={post.img}
                    alt={post.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-white text-xl font-bold">{post.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{post.desc}</p>
                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-4">
                      {/* Heart Icon + Likes */}
                      <div className="flex items-center space-x-1">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span>{post.likes}</span>
                      </div>

                      {/* Comment Icon + Comments */}
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-5 h-5 text-green-500" />
                        <span>{post.comments}</span>
                      </div>
                    </div>

                    <Link
                      className={cn(
                        "text-[var(--primary-color)] hover:text-blue-700 font-semibold"
                      )}
                      href="/"
                    >
                      View Post
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
          ‹
        </CarouselPrevious>
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
          ›
        </CarouselNext>
      </Carousel>
    </section>
  );
}