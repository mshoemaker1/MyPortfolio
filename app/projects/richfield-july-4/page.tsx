import { data } from "../../projectData";
import Section from "@/components/Section";
import HeroHeader from "@/components/HeroHeader";

const projectData = data.find(
  (project) => project.path === "/projects/richfield-july-4"
);
const { path, bg, hero } = projectData!;

export default function RichfieldJuly4() {
  return (
    <main>
      {projectData && (
        <HeroHeader
          path={path}
          bg={bg}
          heroImage={hero.image}
          heroAlt={hero.alt}
          heroBulletPoints={hero.bulletPoints}
          heroContent={hero.content}
        />
      )}
      <div className="flex flex-col">
        <Section
          title="Research"
          header="Competitive Analysis sparks a transformation"
          content={[
            "To understand similar events, we did a competitive analysis. We reviewed four websites to assess their strengths, weaknesses, and specific design choices.",
            "We selected a variety of direct and indirect competitors which included events that were well funded and had paid staff managing their website, multi-day events in large cities, and events that took place in nearby small towns in Minnesota.",
            "Through the analysis, we identified two features we wanted to use:",
          ]}
        />
        <Section
          header="Meeting the users where they are"
          content={[
            "We utilized the robust Richfield Community Facebook page to ask three survey questions of the community. With input from the Committee’s Social Media Coordinator, we decided to ask one question per week in an effort to create meaningful points of engagement with community members throughout the month of November.",
            "This engagement effort built momentum towards the launch of the new website!",
          ]}
        />
        <Section
          header="Understanding our users"
          content={[
            "My teammate led a brief empathy building exercise with our team and a small group of committee members. We imagined who might attend the event, what information they would need, and what pain points we would need to address as we design the new website.",
          ]}
        />
      </div>
    </main>
  );
}
