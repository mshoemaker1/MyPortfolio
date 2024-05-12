import { capitalize } from "@/utils/capitalize";

export type HeroContentTextType = string | (string | string[])[];
interface HeroContentProps {
  bulletPoints: {
    [key: string]: string[];
  };
  content: {
    [key: string]: HeroContentTextType;
  };
}

const ProjectHero = ({ bulletPoints, content }: HeroContentProps) => {
  return (
    <div className="flex flex-col px-10 py-20 bg-neutral-550 text-white md:flex-row md:px-40 md:py-30">
      <div className="flex flex-col min-w-40 mb-8">
        {Object.keys(bulletPoints).map((key) => (
          <div key={key} className="mb-4">
            <h4 className="mb-1">{capitalize(key)}</h4>
            <ul>
              {bulletPoints[key].map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:ml-[10%]">
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
