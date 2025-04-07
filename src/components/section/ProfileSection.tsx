import React from "react";

interface ProfileSectionProps {
  title: string;
  paragraphs: string[];
  imageComponent?: React.ReactNode;
}

export function ProfileSection({
  title,
  paragraphs,
  imageComponent = <h1>Photo</h1>,
}: ProfileSectionProps) {
  return (
    <section>
      <div className="grid grid-cols-2 p-10 border border-1">
        <div>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl">
            {title}
          </h1>
          <div className="flex flex-col gap-y-6 mt-10 text-base/7 text-muted-foreground">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div>{imageComponent}</div>
      </div>
    </section>
  );
}
