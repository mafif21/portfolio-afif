import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/section-heading";
import { ExperienceTimeline } from "@/components/section/ExperienceTimelineSection";
import { ProfileSection } from "@/components/section/ProfileSection";
import { experiences, formatDate } from "@/data/experiences";
import { Profile } from "@/data/profile";
import { Building, Calendar, Icon } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <ProfileSection title={Profile.title} paragraphs={Profile.paragraph} />
      <ExperienceTimeline experiences={experiences} formatDate={formatDate} />
    </Layout>
  );
}
