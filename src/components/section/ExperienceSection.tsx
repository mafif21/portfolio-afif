"use client";

import { Experience } from "@/data/experiences";
import { SectionHeading } from "../section-heading";
import { ExperienceCard } from "../features/experiences/ExperienceCard";
import { ChevronUp } from "lucide-react";
import { Separator } from "../ui/separator";

interface ExperiencesSectionProps {
  experiences: Experience[];
  formatDate: (date: Date | null) => string;
}

export function ExperienceSection({
  experiences,
  formatDate,
}: ExperiencesSectionProps) {
  return (
    <>
      <div className="h-20 flex justify-center my-14">
        <Separator
          className="!w-1 bg-muted rounded-full"
          orientation="vertical"
        />
      </div>

      <div className="grid grid-cols-1 grid-rows-1 justify-items-center">
        <SectionHeading heading="Work Experiences" />
        <div className="grid grid-cols-2 justify-items-center gap-4">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
              formatDate={formatDate}
            />
          ))}
        </div>

        <div className="flex items-center text-muted-foreground hover:text-primary mt-6 transition-colors">
          <a href="">See all experiences</a>
          <ChevronUp className="ml-1 size-4" />
        </div>
      </div>
    </>
  );
}
