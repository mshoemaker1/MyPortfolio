import { data } from "../../projectData";
import Section from "@/components/Section";
import HeroHeader from "@/components/HeroHeader";
import Image from "next/image";
import aquaLogo from "../../../public/richfield-july-4/aqua-logo.jpg";
import delanoLogo from "../../../public/richfield-july-4/delano-logo.jpg";
import edinaLogo from "../../../public/richfield-july-4/edina-logo.jpg";
import glendaleLogo from "../../../public/richfield-july-4/glendale-logo.jpg";
import { richfieldResearchSquares } from "../../projectData";
import { Divider } from "@/components/Divider";

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
        <div className="flex flex-row flex-wrap w-3/5 self-center justify-center sm:justify-between">
          <Image
            src={glendaleLogo}
            alt="Glendale 4th of July Logo"
            height={120}
            className="my-4 mx-1 drop-shadow-md"
          />
          <Image
            src={edinaLogo}
            alt="Edina Art Fair Logo"
            height={120}
            className="my-4 mx-1 drop-shadow-md"
          />
          <Image
            src={aquaLogo}
            alt="Minneapolis Aquatennial Logo"
            height={120}
            className="my-4 mx-1 drop-shadow-md"
          />
          <Image
            src={delanoLogo}
            alt="Delano 4th of July Logo"
            height={120}
            className="my-4 mx-1 drop-shadow-md"
          />
        </div>
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
              />
              <p className="font-bold mt-3">{square.title}</p>
              <p>{square.description}</p>
            </div>
          ))}
        </div>
        <Divider />
        <Section
          title="Ideate"
          header="Designing a foundation"
          content={[
            "The team spent a session designing paper wireframes to kickoff the design process. We knew we would be limited by the functions of Squarespace, but we did not let that hold back our creativity as we did our first sketches.",
          ]}
        />
        <Section
          header="Lo-Fi Wireframes"
          content={[
            "The team shared responsibilities for creating the digital wireframes in Figma. I designed the Homepage and the About page.",
            "Based on our tight timeframe, we created digital wireframes for the main pages before shifting to build mode.",
          ]}
        />
        <Section
          header="Seeking a Retro & Patriotic feel"
          content={[
            "The rebrand of the event allowed for the website to have a new look. My teammate organized a moodboard that we added content to early in the project.",
            "This served as a launching point for the visual look and feel of the website.",
          ]}
        />
      </div>
    </main>
  );
}
