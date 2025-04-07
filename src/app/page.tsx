"use client";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import {
  ArrowRight,
  BellRing,
  Check,
  ChevronRight,
  Download,
  Mail,
  MailPlus,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";
import { experiences, formatDate } from "@/data/experiences";
import { HeroSection } from "@/components/section/HeroSection";
import { ExperienceSection } from "@/components/section/ExperienceSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection
        title="Full-Stack Developer passionate about scalable solutions"
        description="Hi, I'm Apip. A Full-Stack Developer from Indonesia with experience in building scalable applications using React (Next.js), Golang, and Spring Boot."
      />

      <ExperienceSection experiences={experiences} formatDate={formatDate} />
    </Layout>
  );
}
