import { data } from "../../projectData";
import Section from "@/components/Section";
import HeroHeader from "@/components/HeroHeader";

const projectData = data.find(
  (project) => project.path === "/projects/trapped-downtown"
);
const { path, bg, hero } = projectData!;

export default function TrappedDowntown() {
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
          header="What are people seeing when they book an escape room?"
          content={[
            "I needed to conduct user research to really understand the needs of their current and potential customers. To get up to speed on current trends and relevant content, I did a competitive analysis on four Escape Room businesses located across the country.",
          ]}
        />
        <Section
          header="Evaluating the current experience"
          content={[
            "The Trapped Downtown website was initially built 7 years ago. There was an opportunity to audit the website against UX best practices and accessibility considerations.",
          ]}
        />
        <Section
          header="What do people think, feel, and do when booking events in advance?"
          content={[
            "I interviewed 8 users about their experience researching, selecting, and booking events in advance (e.g. axe throwing, cooking classes). I also asked specific question about their experience with escape rooms, as this was of interest to our stakeholders.",
            "Following the interviews, I reviewed the notes and created an Empathy Map to better understand the perspective of our users.",
          ]}
        />
      </div>
    </main>
  );
}
