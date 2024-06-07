import Header from "../Header";
import Image, { StaticImageData } from "next/image";
import ProjectHero, { HeroContentTextType } from "../ProjectHero";

interface HeroHeaderProps {
  path: string;
  bg: string;
  heroImage: StaticImageData;
  heroAlt: string;
  heroBulletPoints: {
    [key: string]: string[];
  };
  heroContent: {
    challenge?: HeroContentTextType;
    goal?: HeroContentTextType;
    process?: HeroContentTextType;
  };
}

const HeroHeader = ({
  path,
  bg,
  heroImage,
  heroAlt,
  heroBulletPoints,
  heroContent,
}: HeroHeaderProps) => {
  return (
    <>
      <Header path={path} bgColor={bg} />
      <Image
        className="w-full"
        src={heroImage}
        alt={heroAlt}
        placeholder="blur"
      />
      <ProjectHero bulletPoints={heroBulletPoints} content={heroContent} />
    </>
  );
};

export default HeroHeader;
