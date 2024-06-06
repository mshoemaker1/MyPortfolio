import { data } from "../../projectData";
import Section from "@/components/Section";
import HeroHeader from "@/components/HeroHeader";
import Image from "next/image";
import aquaLogo from "../../../public/richfield-july-4/aqua-logo.jpg";
import delanoLogo from "../../../public/richfield-july-4/delano-logo.jpg";
import edinaLogo from "../../../public/richfield-july-4/edina-logo.jpg";
import glendaleLogo from "../../../public/richfield-july-4/glendale-logo.jpg";
import RectangleFlag from "../../../public/richfield-july-4/rectangle-flag.svg";
import wireframe from "../../../public/richfield-july-4/wireframe.png";
import homePageHifi from "../../../public/richfield-july-4/homepage-hifi.png";
import aboutHifi from "../../../public/richfield-july-4/about-hifi.png";
import homePageLofi from "../../../public/richfield-july-4/homepage-lofi.png";
import aboutLofi from "../../../public/richfield-july-4/about-lofi.png";
import textBubble from "../../../public/richfield-july-4/ellipse.svg";
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
            placeholder="blur"
          />
          <Image
            src={edinaLogo}
            alt="Edina Art Fair Logo"
            height={120}
            className="my-4 mx-1 drop-shadow-md"
            placeholder="blur"
          />
          <Image
            src={aquaLogo}
            alt="Minneapolis Aquatennial Logo"
            height={120}
            className="my-4 mx-1 drop-shadow-md"
            placeholder="blur"
          />
          <Image
            src={delanoLogo}
            alt="Delano 4th of July Logo"
            height={120}
            className="my-4 mx-1 drop-shadow-md"
            placeholder="blur"
          />
        </div>
        <Section
          header="Meeting the users where they are"
          content={[
            "We utilized the robust Richfield Community Facebook page to ask three survey questions of the community. With input from the Committee’s Social Media Coordinator, we decided to ask one question per week in an effort to create meaningful points of engagement with community members throughout the month of November.",
            "This engagement effort built momentum towards the launch of the new website!",
          ]}
        />
        <div className="flex flex-col items-center">
          <div className="flex max-w-[1030px] w-full sm:h-[187px] h-72 my-8">
            <div className="w-full rounded-lg bg-lavender-500 flex flex-row items-center relative">
              <div className="absolute top-0 right-0 h-full w-1/2">
                <Image
                  src={RectangleFlag}
                  alt="White Background Box"
                  className="h-full w-full hidden md:block"
                />
                <div className="bg-white rounded-lg md:hidden w-full h-full border-[3px] border-lavender-500"></div>
              </div>
              <div className="mx-[8%] text-black z-10 w-1/2">
                <h5>LEARNING</h5>
                <p>
                  Survey participants are planning to drive or walk to the
                  event.
                </p>
              </div>
              <div className="mx-[8%] text-black z-10 w-1/2">
                <h5>ACTION</h5>
                <p>
                  Add Transportation page to site map and ensure driving and
                  walking directions are emphasized.
                </p>
              </div>
            </div>
          </div>
          <div className="flex max-w-[1030px] w-full sm:h-[187px] h-64 my-8">
            <div className="w-full rounded-lg bg-lavender-500 flex flex-row items-center relative">
              <div className="absolute top-0 right-0 h-full w-1/2">
                <Image
                  src={RectangleFlag}
                  alt="White Background Box"
                  className="h-full w-full hidden md:block"
                />
                <div className="bg-white rounded-lg md:hidden w-full h-full border-[3px] border-lavender-500"></div>
              </div>
              <div className="mx-[8%] text-black z-10 w-1/2">
                <h5>LEARNING</h5>
                <p>
                  Strong channel preference for Facebook; 75% of survey
                  participants search for information on Facebook.
                </p>
              </div>
              <div className="mx-[8%] text-black z-10 w-1/2">
                <h5>ACTION</h5>
                <p>
                  Work closely with Social Media Coordinator to ensure
                  information is staying coordinated between website and
                  Facebook.
                </p>
              </div>
            </div>
          </div>
        </div>
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
                placeholder="blur"
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
        <Image
          src={wireframe}
          alt="Wireframe drawings"
          className="w-full max-w-[760px] self-center"
        />
        <Section
          header="Lo-Fi Wireframes"
          content={[
            "The team shared responsibilities for creating the digital wireframes in Figma. I designed the Homepage and the About page.",
            "Based on our tight timeframe, we created digital wireframes for the main pages before shifting to build mode.",
          ]}
        />
        <div className="bg-lavender-500 py-24 flex flex-row justify-center">
          <Image
            src={homePageLofi}
            alt="Home Page Lo-Fi"
            className="max-w-[300px] mx-8"
          />
          <Image
            src={aboutLofi}
            alt="About Page Lo-Fi"
            className="max-w-[300px] mx-8"
          />
        </div>
        <Section
          header="Seeking a Retro & Patriotic feel"
          content={[
            "The rebrand of the event allowed for the website to have a new look. My teammate organized a moodboard that we added content to early in the project.",
            "This served as a launching point for the visual look and feel of the website.",
          ]}
        />
      </div>
      <div className="bg-neutral-550 py-20">
        <Section title="Final design" bgColor="neutral" disableBottomPadding />
        <div className="flex flex-row flex-wrap justify-center items-start">
          <div className="relative w-3/4 max-w-[500px] mx-8 my-4 sm:w-[35%]">
            <Image
              src={homePageHifi}
              alt="Home Page Hi-Fi"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="relative w-3/4 max-w-[500px] mx-8 my-4 sm:w-[35%]">
            <Image
              src={aboutHifi}
              alt="About Page Hi-Fi"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <Divider borderColor="border-white" />
        <Section
          title="impact"
          header="New site went live November 27, 2023 - Visit Now!"
          content={[
            "The site went live just in time for the committee to contact local businesses for consideration of year-end gifts. The committee was very happy with the website and the new site and rebrand received a lot of positive buzz on Facebook!",
          ]}
        />
        <div className="text-black relative max-w-[459px] h-[130px] ml-[5%] sm:ml-[15%] md:ml-[20%]">
          <Image src={textBubble} alt="Text Bubble" className="absolute" />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h4>“Wow this looks so good!”</h4>
            <p>-Andrea, Committee Member</p>
          </div>
        </div>
        <div className="w-full flex flex-row-reverse mt-2">
          <div className="text-black relative w-[459px] h-[130px] mr-[5%] sm:mr-[15%] md:mr-[20%]">
            <Image src={textBubble} alt="Text Bubble" className="absolute" />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h4>“Thanks for all your work on this!!!”</h4>
              <p>-Laurie H, Richfield resident</p>
            </div>
          </div>
        </div>
        <Divider borderColor="border-white" />
        <Section
          title="Reflect"
          header="Learnings"
          content={[
            "I learned the importance (and power) of planning for staged releases of information on an event-based website. We were able to quickly design and build an MVP website without getting bogged down waiting on event details.",
            "This was also the first time that I had done website building in Squarespace, so I learned about the process of moving from wireframes to building a website using a no code/low code product.",
            "My mentor did a great job of modeling good user experience practices and I was so thankful to her for letting me join the project!",
          ]}
        />
      </div>
    </main>
  );
}
