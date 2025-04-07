import { Building, Calendar } from "lucide-react";
import React from "react";

interface TimelineItemProps {
  title: string;
  companyName: string;
  startDate: string;
  endDate: string | null;
  description: string;
  technologies: string[];
  isActive?: boolean;
}

export function TimelineItem({
  title,
  companyName,
  startDate,
  endDate,
  description,
  technologies,
  isActive = false,
}: TimelineItemProps) {
  return (
    <div className="not-last:pb-12 relative pl-8 [&:not(:last-child)]:pb-10">
      <div className="bg-muted absolute left-0 top-2.5 h-full w-[2px] group-first:top-6 group-first:h-[calc(100%-24px)]">
        <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" />
      </div>
      <div className="flex items-start gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full border">
          <Building className="size-5" />
        </div>
        <div>
          <span className="text-lg font-semibold">{companyName}</span>

          <div>
            <h3 className="text-md my-2 font-medium">{title}</h3>
            <div className="mt-1 flex items-center gap-2 text-sm my-2">
              <Calendar className="size-4" />
              {startDate.toUpperCase()} -{" "}
              <span className={endDate ? "" : "text-yellow-200"}>
                {endDate ? endDate.toUpperCase() : "PRESENT"}
              </span>
            </div>
          </div>
          <p className="text-muted-foreground my-2">{description}</p>
          <div className="flex flex-wrap gap-2 my-3">
            {technologies.map((tech) => (
              <div key={tech} className="rounded-full border px-3 py-1 text-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
