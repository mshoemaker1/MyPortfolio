import { data } from "../../projectData";
import HeroHeader from "@/components/HeroHeader";

const projectData = data.find(
  (project) => project.path === "/projects/little-cup"
);

const { path, bg, hero } = projectData!;

export default function LittleCup() {
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
    </main>
  );
}
