"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { WaitlistForm } from "./waitlist-form";

export default function CallToActionSection() {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);

  return (
    <section id="cta">
      <div className="py-14 mt-20">
        <div className="flex w-full flex-col items-center justify-center">
          {/* Main content container with background image */}
          <div 
            className="relative flex flex-col items-center justify-center overflow-hidden min-h-[500px] w-full"
            style={{
              backgroundImage: 'url(/ctalogo.jpg)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundBlendMode: 'overlay',
            }}
          >
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
                <Image
                  src="/planeclean.svg"
                  alt="Plane Logo"
                  width={96}
                  height={96}
                  className="mx-auto lg:w-24 lg:h-24 ml-2"
                />
              </div>
              <div className="z-10 mt-4 flex flex-col items-center text-center text-primary">
                <h1 className="text-3xl font-bold lg:text-4xl">
                  Your entire business in one platform
                </h1>
                <p className="mt-2">
                  All your documents, workflows, and tools seamlessly integrated.
                </p>
                <button
                  onClick={() => setShowWaitlistForm(true)}
                  className={cn(
                    buttonVariants({
                      size: "lg",
                      variant: "outline",
                    }),
                    "group mt-4 rounded-[2rem] px-6"
                  )}
                >
                  <span className="font-medium">Join the Waitlist</span>
                  <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            
            {/* Bottom gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-background to-70% dark:to-background" />
          </div>
        </div>
      </div>
      {showWaitlistForm && <WaitlistForm onClose={() => setShowWaitlistForm(false)} />}
    </section>
  );
}