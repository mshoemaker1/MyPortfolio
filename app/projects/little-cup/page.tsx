import Section from "@/components/Section";
import { data } from "../../projectData";
import HeroHeader from "@/components/HeroHeader";
import { Divider } from "@/components/Divider";

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
      <div className="flex flex-col">
        <Section
          title="Research"
          header="Refining the challenge"
          content={[
            "Through research, I found that there was an untapped market for a product tailored to identifying and reviewing coffee shops. Users aren’t just looking for their caffeine fix, they are looking for places to study and places to support their community.",
          ]}
        />
        <Section
          header="From Overwhelming to Efficient: Ensuring the User has filters tailored to caffeinated beverages and a tidy map to view locations."
          content={[
            "To evaluate the current options available for finding coffee shops, I conducted a competitive analysis. This allowed me to gain a deeper understanding of both the benefits and pain points a user experiences in their search.",
            "I chose two popular sites that rely on user-generated reviews (Classpass, Yelp) as well as a site that specifically searches for local coffee shops (Find Me Coffee).",
          ]}
        />
        <Section
          header="Filter library built from user feedback"
          content={[
            "I conducted three semi-structured interviews. Based on the interviews, I built the Filter library.",
          ]}
        />
        <Divider />
        <Section
          title="Ideate"
          header="Taking inspiration from the competitive analysis, I built a simple site map to serve as the foundation for the website."
          content={[
            "Taking inspiration from the competitive analysis, I built a simple site map to serve as the foundation for the website.",
          ]}
        />
      </div>
    </main>
  );
}
