import { data } from "../../projectData";
import Header from "../../../components/Header";
import Image from "next/image";
import ProjectHero from "@/components/ProjectHero";
import Section from "@/components/Section";

const projectData = data.find(
  (project) => project.path === "/projects/trapped-downtown"
);
const hero = projectData!.hero;

export default function TrappedDowntown() {
  return (
    <main>
      <Header path={projectData!.path} />
      <div className="flex flex-col">
        <Image
          className="w-full"
          src={hero.image}
          alt="Hands holding a phone"
        />
        <ProjectHero bulletPoints={hero.bulletPoints} content={hero.content} />
        <Section
          title="Research"
          header="What are people seeing when they book an escape room?"
          content="I needed to conduct user research to really understand the needs of their current and potential customers. To get up to speed on current trends and relevant content, I did a competitive analysis on four Escape Room businesses located across the country."
        />
      </div>
    </main>
  );
}
