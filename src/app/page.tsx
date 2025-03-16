"use client";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
  Download,
  Mail,
  MailPlus,
} from "lucide-react";

export default function Home() {
  const onButtonClick = () => {
    const pdfUrl = "../data/cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "muhammad-afif-resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 grid-rows-1 justify-items-center">
        <div className="mb-5 bg-muted px-5 py-2 text-sm rounded-sm">
          <a href="https://github.com/mafif21">
            🎉
            <span className="ml-3 font-semibold">Check out my new project</span>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl">
            Full-Stack Developer passionate about scalable solutions
          </h1>
          <div className="w-2xl text-muted-foreground text-center leading-7">
            <p>
              Hi, I'm Apip. A Full-Stack Developer from Indonesia with
              experience in building scalable applications using React
              (Next.js), Golang, and Spring Boot.
            </p>
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
    </Layout>
  );
}
