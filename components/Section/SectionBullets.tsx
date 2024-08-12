import React from "react";

export type Point = {
  [key: string]: string;
};

interface SectionBulletsProps {
  points: Point[] | string[];
  bgColor?: "neutral" | "bronze";
}

const SectionBullets = ({ points, bgColor }: SectionBulletsProps) => {
  const bg = () => {
    switch (bgColor) {
      case "neutral":
        return "bg-neutral-550 text-white";
      case "bronze":
        return "bg-bronze-500 text-black";
      default:
        return "";
    }
  };

  return (
    <div
      className={`flex flex-col px-10 pb-20 md:flex-row md:px-72
      ${bg()}`}
    >
      <ul className="list-disc px-6">
        {points.map((point, index) => {
          if (typeof point === "string") {
            return <li key={index}>{point}</li>;
          }
          return (
            <li key={index}>
              <span className="font-bold">{Object.keys(point)[0]} - </span>
              {Object.values(point)[0]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SectionBullets;
