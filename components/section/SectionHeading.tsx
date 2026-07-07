import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  align?: "left" | "center";
  className?: string;
}
const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlight,
  align = "left",
  className = "",
}) => {
  const centered = align === "center";

  return (
    <div
      className={`relative ${
        centered ? "text-center" : "pl-6"
      } ${className}`}
    >
      {!centered && (
        <span className="absolute left-0 top-1 bottom-1 w-1.5 rounded-sm bg-accent-500" />
      )}

      {eyebrow && (
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-body-text md:text-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold capitalize leading-tight text-primary-500 md:text-4xl lg:text-[2.7rem]">
        {title}
        {highlight && <span className="italic text-accent-500"> {highlight}</span>}
      </h2>
    </div>
  );
};

export default SectionHeading;
