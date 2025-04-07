import { ReactNode } from "react";

type SectionHeadingProps = {
  heading: string;
  content?: string | ReactNode | undefined;
};

export const SectionHeading = ({ heading, content }: SectionHeadingProps) => {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-2xl font-medium">{heading}</h2>
      {content && (
        <p className="text-muted-foreground mt-2 text-sm">{content}</p>
      )}
    </div>
  );
};
