import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ICONS } from "./iconMap";

interface FeatureBoxProps {
  icon?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Icon + title + description card matching the reference "featured-icon-box".
 * White card with soft shadow, an amber square icon, a hover lift and an amber
 * top-border accent that slides in on hover.
 */
const FeatureBox: React.FC<FeatureBoxProps> = ({
  icon,
  title,
  description,
  href,
  linkLabel = "Learn More",
  align = "left",
  className = "",
}) => {
  const Icon = icon ? ICONS[icon] : undefined;
  const centered = align === "center";

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden bg-white p-7 shadow-[0_0_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 md:p-8 ${
        centered ? "items-center text-center" : ""
      } ${className}`}
    >
      {/* Amber top-border accent on hover */}
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-500 transition-transform duration-300 group-hover:scale-x-100" />

      {Icon && (
        <div className="mb-5 flex h-20 w-20 items-center justify-center bg-section-grey text-accent-500 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
          <Icon className="h-10 w-10" strokeWidth={1.5} />
        </div>
      )}

      <h3 className="text-xl font-bold capitalize text-primary-500">{title}</h3>

      {description && (
        <p className="mt-3 flex-1 text-sm leading-relaxed text-body-text md:text-[15px]">
          {description}
        </p>
      )}

      {href && (
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500 transition-colors hover:text-primary-500"
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
};

export default FeatureBox;
