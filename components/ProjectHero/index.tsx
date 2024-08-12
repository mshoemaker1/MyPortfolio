import { capitalize } from "@/utils/capitalize";

export type HeroContentTextType = string | (string | string[])[];
interface HeroContentProps {
  content: {
    [key: string]: HeroContentTextType;
  };
}

const ProjectHero = ({ content }: HeroContentProps) => {
  return (
    <div className="flex flex-col px-10 py-20 bg-neutral-550 text-white md:flex-row md:px-40 md:py-30">
      <div className="flex flex-col md:ml-[10%] lg:mr-56">
        {Object.keys(content).map((key) => (
          <div key={key} className="mb-4">
            <h3 className="mb-1">{capitalize(key)}</h3>
            <Content contentText={content[key]} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Content = ({ contentText }: { contentText: HeroContentTextType }) => {
  if (typeof contentText === "string") {
    return <p>{contentText}</p>;
  }

  return contentText.map((paragraph, index) => {
    if (typeof paragraph === "string") {
      return (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      );
    }

    return (
      <ul key={index} className="mb-4 ml-4 list-disc px-2">
        {paragraph.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    );
  });
};

export default ProjectHero;
