import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heading1 from "../typography/Heading1";

export interface Crumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  /** Background image path (under /public) */
  image: string;
  breadcrumbs?: Crumb[];
}

/**
 * Full-width page-title banner with a background image, dark overlay,
 * heading and breadcrumb trail. Used by About, Contact and Service pages.
 */
const PageBanner: React.FC<PageBannerProps> = ({
  title,
  image,
  breadcrumbs = [{ label: "Home", href: "/" }, { label: title }],
}) => {
  return (
    <section className="relative flex min-h-[220px] w-full items-center justify-center overflow-hidden py-16 md:min-h-[300px] lg:min-h-[360px]">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-500/80" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-4 text-center text-white">
        <Heading1 className="text-white">{title}</Heading1>

        <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm md:text-base">
          {breadcrumbs.map((crumb, i) => {
            const isLast = i === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="text-white/80 transition-colors hover:text-accent-500"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-accent-500">
                    {crumb.label}
                  </span>
                )}
                {!isLast && <span className="text-white/50">/</span>}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default PageBanner;
