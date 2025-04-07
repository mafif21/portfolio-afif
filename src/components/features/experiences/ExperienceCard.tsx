"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Experience } from "@/data/experiences";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  experience: Experience;
  formatDate: (date: Date | null) => string;
}

export function ExperienceCard({
  experience,
  formatDate,
}: ExperienceCardProps) {
  const { companyName, title, description, date } = experience;

  return (
    <Card className={cn("w-[500px]")} key={title}>
      <CardHeader>
        <CardTitle className="text-xl">{companyName}</CardTitle>
        <h3>{title}</h3>
        <p className={`text-sm text-zinc-500`}>
          {formatDate(date.start).toUpperCase()} -{" "}
          <span className={date.end ? "" : "text-yellow-200"}>
            {formatDate(date.end).toUpperCase()}
          </span>
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
