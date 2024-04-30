import { capitalize } from "@/utils/capitalize";

interface HeroContentProps {
  bulletPoints: {
    [key: string]: string[];
  };
  content: {
    [key: string]: string;
  };
}

const ProjectHero = ({ bulletPoints, content }: HeroContentProps) => {
  return (
    <div className="flex flex-col px-10 py-20 bg-neutral-550 md:flex-row md:px-40 md:py-30">
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
            <p>{content[key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHero;
