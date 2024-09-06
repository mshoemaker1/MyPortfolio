import { data } from "../../projectData";
import Section from "@/components/Section";
import HeroHeader from "@/components/HeroHeader";
import { ResearchPins } from "./ResearchPins";
import { FilterLibrary } from "./FilterLibrary";
import SectionBullets from "@/components/Section/SectionBullets";
import Takeaways from "@/components/Takeaways";
import { Connect } from "@/components/Connect";

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
          heroContent={hero.content}
        />
      )}
      <div className="flex flex-col pt-20">
        <Section
          header="From Overwhelming to Efficient: Ensuring the User has tailored filters and a tidy map."
          content={[
            "To evaluate the current options available for finding coffee shops, I conducted a competitive analysis. This allowed me to gain a deeper understanding of both the benefits and pain points a user experiences in their search. I chose two popular sites that rely on user-generated reviews (Classpass, Yelp) and then I found a less robust site that was laser focused on local coffee shops but didn’t have the usability that I knew was possible (Find Me Coffee).",
          ]}
        />
        <ResearchPins />
        <Section
          header="Filters set Little Cup apart from competitors"
          disableBottomPadding
        />
        <FilterLibrary />
        <Section
          header="Multiple rounds of user testing "
          content={[
            "I learned that the Call to Actions in the Navigation Bar weren’t helpful to users, so I moved those to be in context with the content. When I started designing the log-in modal, I made some visual design decisions that my interviewees didn’t agree with so I simplified those. I also simplified the filters from a drop down menu to a static header and list.",
            "Interviewees were curious about the site but wanted additional information so I added the tagline “Find your next cup of coffee!”*",
          ]}
          disableBottomPadding
        />
        <p className="italic flex flex-col px-10 pb-10 pt-4 md:flex-row md:px-72">
          *Note to self: for passion projects, source users with the same
          passion ;)
        </p>
        <Section
          header="Next steps to strengthen the product offering"
          disableBottomPadding
        />
        <SectionBullets
          points={[
            "Evaluate the benefits of offering log-in creation and storage.",
            "Test blog-like content to see if users engage with it, as seen on The Infatuation website.",
          ]}
          disableBottomPadding
        />
      </div>
      <Takeaways data={projectData!.takeaways} />
      <Section header="Key technologies/skills" disableBottomPadding />
      <SectionBullets
        points={[
          "Figma",
          "High fidelity mockups",
          "Information architecture",
          "Prototyping",
          "Usability testing",
          "Wireframing",
        ]}
      />
      <Connect />
    </main>
  );
}
