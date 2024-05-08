import React from "react";

interface SectionProps {
  title?: string;
  header: string;
  content: string;
}

const Section = ({ title, header, content }: SectionProps) => {
  return (
    <section className="flex flex-col px-10 py-20 md:flex-row md:px-40 md:py-30">
      <div className={`w-96 ${title ? "mb-10" : ""}`}>
        <h5>{title?.toUpperCase()}</h5>
      </div>
      <div>
        <h4 className="mb-4">{header}</h4>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default Section;
