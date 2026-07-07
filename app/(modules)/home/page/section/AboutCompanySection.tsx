import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components";
import { AboutCompany } from "@/assets/content/home/HomeSections";

const AboutCompanySection: React.FC = () => {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        {/* Text */}
        <div>
          <SectionHeading
            eyebrow={AboutCompany.eyebrow}
            title="Empowering Innovation,"
            highlight="Embracing Excellence"
          />
          <p className="mt-6 text-base leading-relaxed text-body-text md:text-lg">
            {AboutCompany.body}
          </p>
          <Link
            href={AboutCompany.ctaHref}
            className="mt-8 inline-flex items-center gap-2 border-2 border-primary-500 px-7 py-3 text-sm font-bold text-primary-500 transition-all duration-300 hover:bg-primary-500 hover:text-white sm:text-base"
          >
            {AboutCompany.ctaLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Image */}
        <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={AboutCompany.image}
            alt="About Creativerse"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;
