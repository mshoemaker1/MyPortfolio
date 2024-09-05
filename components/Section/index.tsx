import React from "react";

interface SectionProps {
  header?: string;
  content?: string[];
  disableBottomPadding?: boolean;
  bgColor?: "sand" | "neutral" | "bronze";
}

const Section = ({
  header,
  content,
  disableBottomPadding = false,
  bgColor,
}: SectionProps) => {
  const bg = () => {
    switch (bgColor) {
      case "sand":
        return "bg-sand-500 text-black";
      case "bronze":
        return "bg-bronze-500 text-black";
      case "neutral":
        return "bg-neutral-550 text-white";
      default:
        return "";
    }
  };

  return (
    <section
      className={`flex flex-col px-10 md:flex-row md:px-72
      ${bg()}
      ${disableBottomPadding && "pb-0"}`}
    >
      <div>
        <h3 className="mb-4">{header}</h3>
        {content &&
          content.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
      </div>
    </section>
  );
};

export default Section;
