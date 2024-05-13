import React from "react";

interface SectionProps {
  title?: string;
  header: string;
  content: string[];
  disableBottomPadding?: boolean;
}

const Section = ({
  title,
  header,
  content,
  disableBottomPadding = false,
}: SectionProps) => {
  return (
    <section
      className={`flex flex-col px-10 py-20 md:flex-row md:px-40 md:py-30 ${
        disableBottomPadding && "pb-0"
      }`}
    >
      <div className={`md:min-w-32 lg:min-w-56 ${title ? "mb-10" : ""}`}>
        <h5>{title?.toUpperCase()}</h5>
      </div>
      <div>
        <h4 className="mb-4">{header}</h4>
        {content.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Section;
