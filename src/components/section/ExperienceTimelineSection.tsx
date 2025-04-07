import { SectionHeading } from "@/components/section-heading";
import { Experience } from "@/data/experiences";
import { TimelineItem } from "../features/experiences/ExperienceTimeline";

interface ExperienceTimelineProps {
  experiences: Experience[];
  formatDate: (date: Date | null) => string;
}

export function ExperienceTimeline({
  experiences,
  formatDate,
}: ExperienceTimelineProps) {
  return (
    <div className="mt-20">
      <div>
        <SectionHeading
          heading="Work Experiences"
          content="Professional experience that I have accumulated over several years."
        />
      </div>

      <div className="grid grid-cols-1 justify-items-center">
        <div className="relative max-w-screen-md mt-10 grid grid-cols-1 justify-items-center">
          {experiences.map(
            ({ title, description, companyName, date, technologies }) => (
              <TimelineItem
                key={companyName}
                title={title}
                companyName={companyName}
                startDate={formatDate(date.start)}
                endDate={date.end ? formatDate(date.end) : null}
                description={description}
                technologies={technologies}
                isActive={!date.end}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
