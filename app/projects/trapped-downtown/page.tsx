import { data } from "../../projectData";
import Section from "@/components/Section";
import SectionBullets from "@/components/Section/SectionBullets";
import HeroHeader from "@/components/HeroHeader";
import Takeaways from "@/components/Takeaways";
import { Connect } from "@/components/Connect";

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
          heroContent={hero.content}
        />
      )}
      <div className="flex flex-col pt-20">
        <Section header="Users want clarity" disableBottomPadding />
        <div className="px-10 md:px-72 italic">
          <p>
            “This website is astonishingly unclear. How do I get to the place
            where I actually buy the ticket?”
          </p>
          <p>-User</p>
        </div>
        <div className="px-10 pt-8 pb-12 md:px-72">
          <p>Interviews revealed four key insights:</p>
          <ol className="list-decimal px-6">
            <li>Make “Book Now” action easy to find</li>
            <li>Show WHO this experience is for</li>
            <li>Show external validation on website through reviews</li>
            <li>Remove group planning friction</li>
          </ol>
        </div>
        <Section
          header="Improved navigation enhances the user experience"
          content={[
            "Based on the user insights and the heuristic evaluation, key changes to the new site map included:",
          ]}
          disableBottomPadding
        />
        <SectionBullets
          points={[
            "Adding a homepage which gave users high priority information quickly (ex. price) and a Book Now CTA.",
            "Redesigning the Book Now CTA as a stand-alone button vs blending in with the other menu items.",
            "Streamlining content into three groups which enabled a ‘right information at the right time’ flow to the website.",
            "Updating the footer to add relevant information and quick links in order to help users navigate the website.",
          ]}
        />
        <Section
          header="Impact"
          content={[
            "I worked with a developer to implement the designs. The redesigned website launched on May 3rd and resulted in a 16% increase in unique visitors in the following 2 months (comparing June/July 2023 to June/July 2024) and a 46% increase in bookings in the same period.",
          ]}
          disableBottomPadding
        />
        <div className="px-10 mt-4 md:px-72">
          <p className="italic">
            “The website redesign gives us a renewed sense of excitement for our
            business's potential growth!”
          </p>
          <p>- Courtney, Trapped Downtown Owner</p>
        </div>
      </div>
      <Takeaways data={projectData!.takeaways} />
      <Section header="Key technologies/skills" disableBottomPadding />
      <SectionBullets
        points={[
          "Card Sort",
          "Competitive analysis",
          "Figma",
          "Heuristic evaluation",
          "Information architecture",
          "Prototyping",
          "User Interviews",
          "User Testing",
        ]}
      />
      <Connect />
    </main>
  );
}
