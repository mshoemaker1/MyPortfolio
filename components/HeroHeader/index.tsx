import Header from "../Header";
import Image, { StaticImageData } from "next/image";
import ProjectHero, { HeroContentTextType } from "../ProjectHero";

interface HeroHeaderProps {
  path: string;
  bg: string;
  heroImage: StaticImageData;
  heroAlt: string;
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
      <ProjectHero content={heroContent} />
    </>
  );
};

export default HeroHeader;
