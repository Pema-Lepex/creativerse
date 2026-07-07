import Image from "next/image";
import { Check } from "lucide-react";
import { PageBanner, SectionHeading, FeatureBox } from "@/components";
import { AboutContent } from "@/assets/content/about/AboutContent";

const { banner, about, values } = AboutContent;

const MainAbout: React.FC = () => {
  return (
    <div>
      <PageBanner title={banner.title} image={banner.image} />

      {/* About company + mission */}
      <section className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.heading}
              highlight={about.headingSpan}
            />
            <p className="mt-6 text-base leading-relaxed text-body-text md:text-lg">
              {about.body}
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h3 className="text-xl font-bold text-primary-500">
                {about.missionTitle}
              </h3>
              <ul className="mt-4 space-y-4">
                {about.mission.map((m) => (
                  <li key={m} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500 text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-relaxed text-body-text md:text-base">
                      {m}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={about.image}
              alt="About Creativerse"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-primary-50/60 py-14 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={values.eyebrow}
            title="Our Core"
            highlight="Values"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.items.map((v) => (
              <FeatureBox
                key={v.title}
                title={v.title}
                description={v.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainAbout;
