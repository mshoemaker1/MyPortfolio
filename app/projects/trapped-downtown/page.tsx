import { data } from "../../projectData";
import Section from "@/components/Section";
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
              />
              <Image
                src={competition2}
                alt="Getout Omaha company logo"
                className="py-2 drop-shadow-md"
              />
              <Image
                src={competition3}
                alt="Breakout company logo"
                className="py-2 drop-shadow-md"
              />
              <Image
                src={competition4}
                alt="The Bureau company logo"
                className="py-2 drop-shadow-md"
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
        <div className="flex flex-col px-10 pb-20 md:flex-row md:px-40 md:pb-30 md:ml-32 lg:ml-56 ">
          <ul className="list-disc px-6">
            <li>
              <span className="font-bold">Optimize navigation</span> - All
              topics are on the same level and could benefit from a clearer
              hierarchy.
            </li>
            <li>
              <span className="font-bold">Prioritize mobile-first refresh</span>{" "}
              - Each page is dense with content and CTA buttons are
              inconsistent. 60% of users visit the website using a mobile phone.
            </li>
            <li>
              <span className="font-bold">Create consistent layouts</span> -
              Small adjustments could have a big impact including adding a
              consistent margin to enhance readability.
            </li>
            <li>
              <span className="font-bold">Create homepage</span> - Add a
              homepage that has critical information and easily directs users
              where to find more information.
            </li>
          </ul>
        </div>
        <Section
          header="What do people think, feel, and do when booking events in advance?"
          content={[
            "I interviewed 8 users about their experience researching, selecting, and booking events in advance (e.g. axe throwing, cooking classes). I also asked specific question about their experience with escape rooms, as this was of interest to our stakeholders.",
            "Following the interviews, I reviewed the notes and created an Empathy Map to better understand the perspective of our users.",
          ]}
        />
        <div className="bg-sand-500 flex flex-col items-center py-20 relative">
          <Image
            src={empathyMap}
            alt="Post it note empathy map"
            className="drop-shadow-md"
          />
          <h3 className="font-[32px] mt-12 text-black px-8 text-center">
            “Websites are astonishingly unclear.
          </h3>
          <h3 className="font-[32px] text-black mt-0 px-8 text-center">
            How do I get to the place where I actually buy the ticket?”
          </h3>
        </div>
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
            />
          </div>
          <div className="mx-6 my-4">
            <p>User #2</p>
            <Image
              src={user2}
              alt="User 2 card sort"
              className="w-[377px] drop-shadow-md rounded-lg"
            />
          </div>
          <div className="mx-6 my-4">
            <p>User #3</p>
            <Image
              src={user3}
              alt="User 3 card sort"
              className="w-[377px] drop-shadow-md rounded-lg"
            />
          </div>
          <div className="mx-6 my-4">
            <p>User #4</p>
            <Image
              src={user4}
              alt="User 4 card sort"
              className="w-[377px] drop-shadow-md rounded-lg"
            />
          </div>
          <div className="mx-6 my-4">
            <p>User #5</p>
            <Image
              src={user5}
              alt="User 5 card sort"
              className="w-[377px] drop-shadow-md rounded-lg"
            />
          </div>
        </div>
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
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-4">Similarity Matrix</p>
            <Image
              src={similarityMatrix}
              alt="Similarity matrix"
              className="w-[850px]"
            />
          </div>
        </div>
        <Section
          header="Building a new site map"
          content={["Key changes included:"]}
          disableBottomPadding
        />
        <div className="flex flex-col px-10 pb-20 md:flex-row md:px-40 md:pb-30 md:ml-32 lg:ml-56 ">
          <ul className="list-disc px-6">
            <li>
              <span className="font-bold">Add Homepage</span> - Adding a
              homepage gives users high priority information quickly (ex. price,
              hours of operation) and a Book Now CTA. Homepage also serves as a
              central hub for directing users to more information.
            </li>
            <li>
              <span className="font-bold">Redesign CTA button</span> - Book Now
              CTA redesigned as a stand-alone button vs blending in with the
              other menu items.
            </li>
            <li>
              <span className="font-bold">Streamline Content</span> - Organized
              content into 3 groups which enables a ‘right information at the
              right time' flow to the website.
            </li>
            <li>
              <span className="font-bold">Update Footer</span> - Added relevant
              information and quick links to site footer to help users navigate
              the website.
            </li>
          </ul>
        </div>
        <Section
          header="Bringing the Stakeholders along on the journey"
          content={[
            "Before shifting to ideation, I met with the stakeholders to share the research and get their reactions to the new site map. They were generally supportive but there was a pivotal aha moment when I showed the competitors' mobile homescreen next to Trapped Downtown's mobile homescreen - they were able to step out of their understanding of their own website and really get in the user's shoes and see it with fresh eyes.",
          ]}
        />
      </div>
    </main>
  );
}
