import {
  data,
  trappedDowntownCurrentExperiencePoints,
  trappedDowntownSiteMapPoints,
  trappedDowntownCircles,
} from "../../projectData";
import Section from "@/components/Section";
import SectionBullets from "@/components/Section/SectionBullets";
import HeroHeader from "@/components/HeroHeader";
import { Divider } from "@/components/Divider";
import Image from "next/image";
import competition1 from "../../../public/trapped-downtown/group-6.png";
import competition2 from "../../../public/trapped-downtown/group-7.png";
import competition3 from "../../../public/trapped-downtown/group-8.png";
import competition4 from "../../../public/trapped-downtown/group-9.png";
import empathyMap from "../../../public/trapped-downtown/empathy-map.jpg";
import user1 from "../../../public/trapped-downtown/user-1.png";
import user2 from "../../../public/trapped-downtown/user-2.png";
import user3 from "../../../public/trapped-downtown/user-3.png";
import user4 from "../../../public/trapped-downtown/user-4.png";
import user5 from "../../../public/trapped-downtown/user-5.png";
import commonGroupings from "../../../public/trapped-downtown/common-groupings.png";
import similarityMatrix from "../../../public/trapped-downtown/similarity-matrix.png";
import oldSiteMap from "../../../public/trapped-downtown/site-map-old.png";
import newSiteMap from "../../../public/trapped-downtown/site-map-new.png";
import aha from "../../../public/trapped-downtown/aha-moment.png";
import finalDesign1 from "../../../public/trapped-downtown/final-design-1.png";
import finalDesign2 from "../../../public/trapped-downtown/final-design-2.png";
import finalDesign3 from "../../../public/trapped-downtown/final-design-3.png";
import finalDesign4 from "../../../public/trapped-downtown/final-design-4.png";
import versionGrid from "../../../public/trapped-downtown/version-grid.png";
import wireframe1 from "../../../public/trapped-downtown/wireframe-1.png";
import wireframe2 from "../../../public/trapped-downtown/wireframe-2.png";
import wireframe3 from "../../../public/trapped-downtown/wireframe-3.png";
import wireframesHome from "../../../public/trapped-downtown/wireframes-home.png";
import wireframesContact from "../../../public/trapped-downtown/wireframes-contact.png";
import wireframesEvents from "../../../public/trapped-downtown/wireframes-events.png";
import shapedRectangle from "../../../public/trapped-downtown/shaped-rectangle.png";
import originalHome from "../../../public/trapped-downtown/original-home.png";
import newHome from "../../../public/trapped-downtown/new-home.png";

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
        <div className="flex flex-col justify-center w-9/12 self-center lg:flex-row-reverse lg:justify-between">
          <div className="w-full bg-sand-500 text-black px-8 py-10 rounded-lg justify-items-center md:text-lg lg:w-6/12">
            <p className="font-bold">Competitors' Distinguishing Features:</p>
            <ul className="list-disc px-6">
              <li>High contrast Call To Action (CTA) buttons</li>
              <li>Frequent placement of CTA buttons throughout the site</li>
              <li>Footer serves as a good safety net for lost users</li>
              <li>Accordion format for FAQs, which reduces scroll</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="max-w-[500px] grid grid-cols-2 gap-4 mt-4 lg:mt-0">
              <Image
                src={competition1}
                alt="Lockbox company logo"
                className="py-2 drop-shadow-md"
                placeholder="blur"
              />
              <Image
                src={competition2}
                alt="Getout Omaha company logo"
                className="py-2 drop-shadow-md"
                placeholder="blur"
              />
              <Image
                src={competition3}
                alt="Breakout company logo"
                className="py-2 drop-shadow-md"
                placeholder="blur"
              />
              <Image
                src={competition4}
                alt="The Bureau company logo"
                className="py-2 drop-shadow-md"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <Section
          header="Evaluating the current experience"
          content={[
            "The Trapped Downtown website was initially built 7 years ago. There was an opportunity to audit the website against UX best practices and accessibility considerations.",
          ]}
          disableBottomPadding
        />
        <SectionBullets points={trappedDowntownCurrentExperiencePoints} />
        <Section
          header="What do people think, feel, and do when booking events in advance?"
          content={[
            "I interviewed 8 users about their experience researching, selecting, and booking events in advance (e.g. axe throwing, cooking classes). I also asked specific question about their experience with escape rooms, as this was of interest to our stakeholders.",
            "Following the interviews, I reviewed the notes and created an Empathy Map to better understand the perspective of our users.",
          ]}
        />
      </div>
      <div className="bg-sand-500 flex flex-col items-center py-20 relative">
        <Image
          src={empathyMap}
          alt="Post it note empathy map"
          className="drop-shadow-md"
          placeholder="blur"
        />
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-12 lg:flex">
          {trappedDowntownCircles.map((circle, index) => (
            <div
              key={index}
              className={`flex lg:absolute w-[170px] h-[170px] bg-white rounded-full items-center justify-center ${circle.x} ${circle.y}`}
            >
              <p className="text-black text-[18px] text-center px-3">
                {circle.text}
              </p>
            </div>
          ))}
        </div>
        <h3 className="text-center px-10 font-[32px] mt-12 text-black">
          “Websites are astonishingly unclear.
        </h3>
        <h3 className="text-center px-10 font-[32px] text-black mt-0">
          How do I get to the place where I actually buy the ticket?”
        </h3>
      </div>
      <div>
        <Divider />
        <Section
          title="Ideate"
          header="How do we organize the content in a way that puts users at ease and gives them confidence?"
          content={[
            "In the current site map, there was a lack of hierarchy, which can unintentionally get in the way of a good user experience. So in order to better understand how users would group the information on the website, I conducted 5 card sort activities.",
            "Users were given 13 concepts and asked to group them. They could add additional concepts, if they thought something was missing. Finally, the users were asked to label the groups.",
          ]}
        />
        <div className="flex flex-row flex-wrap mx-4 mb-12 justify-center md:max-w-1200">
          <div className="mx-6 my-4">
            <p>User #1</p>
            <Image
              src={user1}
              alt="User 1 card sort"
              className="w-[377px] drop-shadow-md rounded-lg"
              placeholder="blur"
            />
          </div>
          <div className="mx-6 my-4">
            <p>User #2</p>
            <Image
              src={user2}
              alt="User 2 card sort"
              className="w-[377px] drop-shadow-md rounded-lg"
              placeholder="blur"
            />
          </div>
          <div className="mx-6 my-4">
            <p>User #3</p>
            <Image
              src={user3}
              alt="User 3 card sort"
              className="w-[377px] drop-shadow-md rounded-lg"
              placeholder="blur"
            />
          </div>
          <div className="mx-6 my-4">
            <p>User #4</p>
            <Image
              src={user4}
              alt="User 4 card sort"
              className="w-[377px] drop-shadow-md rounded-lg"
              placeholder="blur"
            />
          </div>
          <div className="mx-6 my-4">
            <p>User #5</p>
            <Image
              src={user5}
              alt="User 5 card sort"
              className="w-[377px] drop-shadow-md rounded-lg"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <div>
        <Section
          header="Patterns emerge for a streamlined site map"
          content={[
            "I analyzed the card sort results using the Common Grouping and Similarity Matrix analysis methods.",
          ]}
          disableBottomPadding
          bgColor="sand"
        />
        <div className="flex flex-col items-center bg-sand-500 text-black pb-12">
          <div className="flex flex-col items-center my-12">
            <p className="mb-4">Common Groupings</p>
            <Image
              src={commonGroupings}
              alt="Common groupings"
              className="w-[850px]"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-4">Similarity Matrix</p>
            <Image
              src={similarityMatrix}
              alt="Similarity matrix"
              className="w-[850px]"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <div>
        <Section
          header="Building a new site map"
          content={["Key changes included:"]}
          disableBottomPadding
        />
        <SectionBullets points={trappedDowntownSiteMapPoints} />
        <div className="flex flex-col justify-center items-center my-12">
          <p>Old Site Map</p>
          <Image
            src={oldSiteMap}
            alt="Old site map"
            className="w-full max-w-[1220px] mt-8 mb-16"
            placeholder="blur"
          />
          <p>New Site Map</p>
          <Image
            src={newSiteMap}
            alt="New site map"
            className="w-full max-w-[1078px] mt-8 mb-16"
            placeholder="blur"
          />
        </div>
        <Section
          header="Bringing the Stakeholders along on the journey"
          content={[
            "Before shifting to ideation, I met with the stakeholders to share the research and get their reactions to the new site map. They were generally supportive but there was a pivotal aha moment when I showed the competitors' mobile homescreen next to Trapped Downtown's mobile homescreen - they were able to step out of their understanding of their own website and really get in the user's shoes and see it with fresh eyes.",
          ]}
        />
        <div className="flex justify-center">
          <div className="bg-sand-500 md:rounded-lg px-10 py-20 lg:flex-row lg:w-9/12">
            <div className="flex flex-col lg:flex-row items-center">
              <Image
                src={aha}
                alt="5 mobile devices screens showing competitors' and Trapped Downtown's home screens"
                className="drop-shadow-md flex-1 mx-8 mb-8 lg:mb-0"
                placeholder="blur"
              />
              <h3 className="text-[26px] lg:text-[30px] text-black flex-1 mx-8 text-center lg:text-right">
                “Whoa. Now I understand. What are our users supposed to do?
                Help!”
                <h4 className="text-[16px] lg:text-[18px]">
                  - Key Stakeholder
                </h4>
              </h3>
            </div>
          </div>
        </div>
        <Section
          header="Sketching wireframes; a mobile-first experience"
          content={[
            "With the blessing of our stakeholders, I collected all of the insights from research and the new site map and started sketching. I sketched multiple versions of each screen and refined until I was happy with the look and feel of each screen.",
          ]}
        />
        <div className="flex flex-row mb-12 md:mb-16 lg:mb-[74px] mx-12 lg:mx-48 justify-around">
          <div className="mx-2">
            <p className="text-center">HOME SCREEN</p>
            <div className="relative p-4">
              <Image
                className="absolute top-0 left-0 -z-10"
                src={shapedRectangle}
                alt="Shaped rectangle pointing down"
              />
              <Image
                src={wireframesHome}
                alt="Home screen wireframes"
                placeholder="blur"
                className="w-[295px]"
              />
            </div>
          </div>
          <div className="mx-2">
            <p className="text-center">CONTACT US SCREEN</p>
            <div className="relative p-4">
              <Image
                className="absolute top-0 left-0 -z-10"
                src={shapedRectangle}
                alt="Shaped rectangle pointing down"
              />
              <Image
                src={wireframesContact}
                alt="Contact screen wireframes"
                placeholder="blur"
                className="w-[295px]"
              />
            </div>
          </div>
          <div className="mx-2">
            <p className="text-center">EVENTS & GIFTS SCREEN</p>
            <div className="relative p-4">
              <Image
                className="absolute top-0 left-0 -z-10"
                src={shapedRectangle}
                alt="Shaped rectangle pointing down"
              />
              <Image
                src={wireframesEvents}
                alt="Events screen wireframes"
                placeholder="blur"
                className="w-[295px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-sand-500 justify-around py-8 px-12 lg:px-24 relative lg:mx-24 lg:rounded-lg">
          <p className="absolute top-32 -left-10 lg:top-56 lg:left-0 text-black -rotate-90">
            FINAL SKETCHES
          </p>
          <Image
            src={wireframe1}
            alt="Paper wireframe 1"
            placeholder="blur"
            className="max-w-[100px] max-h-[234px] md:max-w-[199px] md:max-h-[468px]"
          />
          <Image
            src={wireframe2}
            alt="Paper wireframe 2"
            placeholder="blur"
            className="max-w-[96px] max-h-[206px] md:max-w-[191px] md:max-h-[412px]"
          />
          <Image
            src={wireframe3}
            alt="Paper wireframe 3"
            placeholder="blur"
            className="max-w-[99px] max-h-[200px] md:max-w-[198px] md:max-h-[400px]"
          />
        </div>
        <Divider />
        <Section
          title="Iterate"
          header="Opportunities for improving the user experience"
          content={[
            "I conducted user testing on the high fidelity mock-ups. I chose the 5-second test framework but modified it for this specific product. Users viewed an image of the Home screen for 15 seconds, then were asked two questions:",
          ]}
          disableBottomPadding
        />
        <SectionBullets
          points={[
            "What are elements that you recall?",
            "What would you change about the design?",
          ]}
        />
        <div className="flex flex-col mt-16 mb-36 lg:mx-24 lg:flex-row">
          <div>
            <div className="flex flex-row">
              <p className="mr-[calc(54%-98px)] md:mr-[calc(54%-110px)]">
                Tested Version
              </p>
              <p>Final Version</p>
            </div>
            <Image src={versionGrid} alt="Version grid" />
          </div>
          <div className="flex flex-col mt-8 mr-8 lg:mr-0 lg:mt-0 lg:justify-around">
            <ul className="list-disc ml-16">
              <li>Need consistent use of icons and colors</li>
              <li>
                Unclear WHO participates in this type of activity so replaced
                minimum age information with participant information
              </li>
            </ul>
            <ul className="list-disc ml-16">
              <li>
                Color palette needed to be reworked as it reminded users of
                Christmas colors
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-neutral-550 py-20">
        <Section title="Final design" bgColor="neutral" disableBottomPadding />
        <div className="flex flex-row flex-wrap justify-center">
          <Image
            src={finalDesign1}
            alt="Final design 1"
            placeholder="blur"
            className="mx-2 w-[142px] h-[292px] md:w-[284px] md:h-[584px]"
          />
          <Image
            src={finalDesign2}
            alt="Final design 2"
            placeholder="blur"
            className="mx-2 w-[142px] h-[292px] md:w-[284px] md:h-[584px]"
          />
          <Image
            src={finalDesign3}
            alt="Final design 3"
            placeholder="blur"
            className="mx-2 w-[142px] h-[292px] md:w-[284px] md:h-[584px]"
          />
          <Image
            src={finalDesign4}
            alt="Final design 4"
            placeholder="blur"
            className="mx-2 w-[142px] h-[292px] md:w-[284px] md:h-[584px]"
          />
        </div>
        <Divider borderColor="border-white" />
        <Section
          title="Results"
          header="Updated site went live May 3"
          content={[
            "I worked with a developer to implement the designs. The newly designed website went live on May 3rd and I'll be checking back to see the impact of the updates over time.",
          ]}
          bgColor="neutral"
        />
        <div className="flex flex-row flex-wrap mx-12 lg:mx-48 justify-around">
          <div className="mx-2 my-10">
            <p className="text-white">Original Landing Page</p>
            <div className="rounded-lg overflow-y-scroll w-[300px] h-[500px] mt-1">
              <Image
                src={originalHome}
                alt="Long image"
                placeholder="blur"
                className="w-full"
              />
            </div>
          </div>
          <div className="mx-2 my-10">
            <p className="text-white">
              Updated Home Page -{" "}
              <a
                target="_blank"
                href="https://www.trappeddowntown.com/"
                className="text-[#000EEE] font-bold hover:underline hover:underline-offset-4 hover:decoration-[3px]"
                rel="noopener noreferrer"
              >
                Visit Now
              </a>
            </p>
            <div className="rounded-lg overflow-y-scroll w-[300px] h-[500px] mt-1">
              <Image
                src={newHome}
                alt="Long image"
                placeholder="blur"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <Divider borderColor="border-white" />
        <Section
          title="Reflect"
          header="Learnings"
          content={[""]}
          disableBottomPadding
          bgColor="neutral"
        />
        <SectionBullets
          points={[
            "I wish I would have added 1-2 analogous competitors to my Competitive Analysis. I think we could have learned how different types of entertainment offerings serve their users instead of just looking at other escape room businesses.",
            "Upon reflection, I think the final product could have been stronger if I had conducted a different type of user testing. I would do  a moderated user testing session with a small number of users. This could have confirmed (or complicated) the information architecture, which had undergone a lot of change.",
            "To further strengthen the utility of the my designs, I want to take a class on SEO optimization.",
          ]}
          bgColor="neutral"
        />
      </div>
    </main>
  );
}
