import Image from "next/image";
import { SectionHeading } from "@/components";
import { ClientLogos } from "@/assets/content/home/HomeSections";

const ClientsSection: React.FC = () => {
  // Duplicate the list so the marquee can loop seamlessly (-50% translate).
  const loop = [...ClientLogos, ...ClientLogos];

  return (
    <section className="bg-section-grey py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Clients"
          title="Our Trusted"
          highlight="Clients!"
          align="center"
        />
      </div>

      {/* Marquee strip */}
      <div className="group relative mt-12 overflow-hidden bg-[#f6fbfc] py-8 shadow-[0_0_20px_rgba(0,0,0,0.07)]">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-[#f6fbfc] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-[#f6fbfc] to-transparent sm:w-28" />

        <div className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused] md:gap-16">
          {loop.map((logo, i) => (
            <div
              key={`${logo.id}-${i}`}
              className="relative h-16 w-32 shrink-0 transition duration-300 hover:scale-110 hover:grayscale md:h-20 md:w-40"
            >
              <Image
                src={logo.src}
                alt={`Client ${logo.id}`}
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
