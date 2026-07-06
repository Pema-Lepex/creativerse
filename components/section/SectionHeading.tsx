import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  /** Main heading text (rendered in the primary/navy colour) */
  title: string;
  /** Optional trailing portion rendered in the accent colour */
  highlight?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Reusable section heading matching the reference template: a small uppercase
 * grey eyebrow above a large navy Inter heading, with an optional amber
 * highlight word. Left-aligned headings show a 6px amber bar on the left.
 */
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
      {/* Amber left bar (left-aligned only) */}
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
