import Image from "next/image";
import pin001 from "../../../public/little-cup/pin-001.svg";
import pin002 from "../../../public/little-cup/pin-002.svg";

export const ResearchPins = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      <div className="flex justify-center pt-10 w-full max-w-[400px] h-[470px] mx-8 rounded-lg border-lavender-500 border-[5px] mb-16">
        <div className="flex flex-col w-[255px] h-[340px] items-center">
          <Image src={pin002} alt="Map pin" />
          <div className="mt-8">
            <p className="text-[15px]">PAIN POINT</p>
            <p>
              Maps are cluttered with businesses, making it an overwhelming user
              experience.
            </p>
          </div>
          <div className="mt-8">
            <p className="text-[15px]">OPPORTUNITY</p>
            <p>The design of the map will need to be clear and compelling.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-10 w-full max-w-[400px] h-[470px] mx-8 rounded-lg border-lavender-500 border-[5px]">
        <div className="flex flex-col w-[255px] h-[340px] items-center">
          <Image src={pin001} alt="Map pin" height={83} />
          <div className="mt-8">
            <p className="text-[15px]">PAIN POINT</p>
            <p>Users want to be able to filter for specific things.</p>
            <br />
          </div>
          <div className="mt-8">
            <p className="text-[15px]">OPPORTUNITY</p>
            <p>
              Tailored filters will be an important differentiator to attract
              and retain users. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
