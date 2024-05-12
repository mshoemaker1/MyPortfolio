import { data } from "../../projectData";
import Section from "@/components/Section";
import HeroHeader from "@/components/HeroHeader";
import { Divider } from "@/components/Divider";
import Image from "next/image";
import competition1 from "../../../public/group-6.png";
import competition2 from "../../../public/group-7.png";
import competition3 from "../../../public/group-8.png";
import competition4 from "../../../public/group-9.png";

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
        <div className="flex flex-col justify-center w-9/12 self-center md:flex-row-reverse md:justify-between">
          <div className="w-5/12 bg-sand-500 text-black p-4 rounded-lg">
            <p className="font-bold">Competitors’ Distinguishing Features:</p>
            <ul>
              <li>High contrast Call To Action (CTA) buttons</li>
              <li>Frequent placement of CTA buttons throughout the site</li>
              <li>Footer serves as a good safety net for lost users</li>
              <li>Accordion format for FAQs, which reduces scroll</li>
            </ul>
          </div>
          <div className="w-5/12 flex flex-row flex-wrap justify-between">
            <Image src={competition1} alt="Lockbox company logo" />
            <Image src={competition2} alt="Getout Omaha company logo" />
            <Image src={competition3} alt="Breakout company logo" />
            <Image src={competition4} alt="The Bureau company logo" />
          </div>
        </div>
        <Section
          header="Evaluating the current experience"
          content={[
            "The Trapped Downtown website was initially built 7 years ago. There was an opportunity to audit the website against UX best practices and accessibility considerations.",
          ]}
        />
        <Section
          header="What do people think, feel, and do when booking events in advance?"
          content={[
            "I interviewed 8 users about their experience researching, selecting, and booking events in advance (e.g. axe throwing, cooking classes). I also asked specific question about their experience with escape rooms, as this was of interest to our stakeholders.",
            "Following the interviews, I reviewed the notes and created an Empathy Map to better understand the perspective of our users.",
          ]}
        />
        <Divider />
        <Section
          title="Ideate"
          header="How do we organize the content in a way that puts users at ease and gives them confidence?"
          content={[
            "In the current site map, there was a lack of hierarchy, which can unintentionally get in the way of a good user experience. So in order to better understand how users would group the information on the website, I conducted 5 card sort activities.",
            "Users were given 13 concepts and asked to group them. They could add additional concepts, if they thought something was missing. Finally, the users were asked to label the groups.",
          ]}
        />
        <Section
          header="Patterns emerge for a streamlined site map"
          content={[
            "I analyzed the card sort results using the Common Grouping and Similarity Matrix analysis methods.",
          ]}
        />
      </div>
    </main>
  );
}
