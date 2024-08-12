import { data } from "../../projectData";
import Section from "@/components/Section";
import HeroHeader from "@/components/HeroHeader";
import Image from "next/image";
import { richfieldResearchSquares } from "../../projectData";
import SectionBullets from "@/components/Section/SectionBullets";
import Takeaways from "@/components/Takeaways";

const projectData = data.find(
  (project) => project.path === "/projects/richfield-july-4"
);
const { path, bg, hero } = projectData!;

export default function RichfieldJuly4() {
  return (
    <main className="mb-16">
      {projectData && (
        <HeroHeader
          path={path}
          bg={bg}
          heroImage={hero.image}
          heroAlt={hero.alt}
          heroContent={hero.content}
        />
      )}
      <div className="flex flex-col">
        <Section
          header="Competitive Analysis identifies impactful features"
          content={[
            "We selected a variety of direct and indirect competitors which included events that were well funded and had paid staff managing their website, multi-day events in large cities, and events that took place in nearby small towns in Minnesota.",
            "Through the analysis, I identified two features the community wanted to see:",
          ]}
          disableBottomPadding
        />
        <SectionBullets
          points={[
            "Adding a Committee page to foster connections and build intimacy and trust",
            "Integrating a “Donate” CTA button that was used by community members to raise donations",
          ]}
        />
        <Section
          header="Knowing our community = Knowing our goals"
          content={[
            "We utilized the robust Richfield Community Facebook page to ask three survey questions of the community. We asked one question per week in an effort to create meaningful points of engagement with community members throughout the month of November.  This engagement effort built momentum towards the launch of the new website!",
            "In addition, my mentor led a brief empathy building exercise with our team and a small group of committee members. We imagined who might attend the event, what information they would need, and what pain points we would need to address as we design the new website.",
          ]}
          disableBottomPadding
        />
        <div className="flex flex-row flex-wrap w-11/12 self-center justify-center sm:w-4/5">
          {richfieldResearchSquares.map((square, index) => (
            <div
              key={index}
              className="w-[290px] h-[252px] rounded-lg bg-lavender-500 text-black px-8 py-6 mx-6 my-2 md:w-[322px] md:h-[280px] md:text-lg"
            >
              <Image
                src={square.image}
                alt={square.alt}
                className="w-6 md:w-8"
                placeholder="blur"
              />
              <p className="font-bold mt-3">{square.title}</p>
              <p>{square.description}</p>
            </div>
          ))}
        </div>
        <Section
          header="Setting the tone for a community-led, engaging event"
          content={[
            "With the goals in mind, I built the highest priority pages of the website.",
          ]}
          disableBottomPadding
        />
        <SectionBullets
          points={[
            "Included images from previous years to build awareness of the long history of the event.",
            "Highlighted a photo & letter from the President to humanize the committee and rebuild trust.",
            "Kept “Donate” call to action button visible throughout the website.",
          ]}
        />
        <Section
          header="Impact"
          content={[
            "Everything was set for a successful event, but mother nature had another plan. The event was cancelled on the afternoon of July 4th due to thunderstorms. Though the community and committee were sad to miss the fireworks and evening events, it was clear there was a strong foundation of trust and awareness built for future events.",
          ]}
          disableBottomPadding
        />
        <SectionBullets
          points={[
            "The website had 23k unique visitors in the month leading up to event, a 10x increase from the previous 7 months.",
            "The event attracted 19 sponsors and collected many private donations.",
            "An estimated 50,000 attendees participated in the 1.5 days of planned events before the last minute cancellation of the fireworks.",
          ]}
        />
        <Takeaways data={projectData!.takeaways} />
        <Section header="Key technologies/skills" disableBottomPadding />
        <SectionBullets
          points={[
            "Competitive analysis",
            "Figma",
            "Research plan development",
            "Squarespace",
            "Survey management and analysis",
            "Wireframing",
          ]}
        />
      </div>
    </main>
  );
}
