import React from "react";

interface SectionProps {
  title?: string;
  header?: string;
  content?: string[];
  disableBottomPadding?: boolean;
  bgColor?: "sand" | "neutral" | "bronze";
}

const Section = ({
  title,
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
      className={`flex flex-col px-10 py-20 md:flex-row md:px-40 md:py-30
      ${bg()}
      ${disableBottomPadding && "pb-0"}`}
    >
      <div className={`md:min-w-32 lg:min-w-56 ${title ? "mb-10" : ""}`}>
        <h5>{title?.toUpperCase()}</h5>
      </div>
      <div className="lg:mr-56">
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
