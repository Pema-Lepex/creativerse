import Image from "next/image";
import { FeatureBox } from "@/components";
import { TopIntro } from "@/assets/content/home/HomeSections";

const TopIntroSection: React.FC = () => {
  return (
    <section className="relative z-20 mx-auto -mt-10 max-w-[1200px] px-4 pb-14 sm:px-6 md:-mt-14 lg:-mt-20 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Left: navy quote card with amber left bar */}
        <div className="relative bg-primary-500 p-8 text-white shadow-xl md:p-12">
          <span className="absolute left-0 top-10 bottom-10 w-1.5 bg-accent-500" />
          <h2 className="text-xl font-semibold capitalize leading-snug md:text-2xl lg:text-[1.7rem] lg:leading-[1.4]">
            {TopIntro.heading}{" "}
            <span className="italic text-accent-500">{TopIntro.headingSpan}</span>
          </h2>
          <div className="relative mt-6 aspect-video w-full overflow-hidden">
            <Image
              src={TopIntro.image}
              alt="Creativerse team"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Right: two feature boxes */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {TopIntro.features.map((f, i) => (
            <FeatureBox
              key={f.title}
              icon={i === 0 ? "Lightbulb" : "Target"}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopIntroSection;
