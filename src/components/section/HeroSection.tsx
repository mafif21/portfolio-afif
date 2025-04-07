"use client";

import { ArrowRight, Download } from "lucide-react";
import { Button } from "../ui/button";

interface HeroSectionProps {
  title: string;
  description: string;
}

export function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <div className="grid grid-cols-1 grid-rows-1 justify-items-center">
      <div className="mb-5 bg-muted px-5 py-2 text-sm rounded-sm">
        <a href="https://github.com/mafif21">
          🎉
          <span className="ml-3 font-semibold">Check out my new project</span>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl">
          {title}
        </h1>
        <div className="w-2xl text-muted-foreground text-center leading-7">
          <p>{description}</p>
        </div>
      </div>
      <div className="flex mt-10 gap-4">
        <Button size="lg" className="rounded-full px-6 py-2">
          Get in touch <ArrowRight className="ml-3 size-4" />
        </Button>

        <Button
          size="lg"
          className="rounded-full px-6 py-2"
          variant="secondary"
        >
          <a
            href="/cv.pdf"
            download="muhammad-afif-resume.pdf"
            className="flex"
          >
            Download CV <Download className="ml-2 size-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
