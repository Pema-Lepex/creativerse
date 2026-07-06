import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ICONS } from "@/components/section/iconMap";
import { SERVICES_SUMMARY } from "@/assets/content/common/SiteContent";

const ServicesGridSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-primary-500 py-16 lg:py-24">
      {/* subtle texture layer */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary-600/40 via-transparent to-primary-950/40" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Centered title (white on dark) */}
        <div className="text-center">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-accent-500 md:text-sm">
            What We Do
          </span>
          <h2 className="text-3xl font-extrabold capitalize text-white md:text-4xl lg:text-[2.7rem]">
            Our <span className="italic text-accent-500">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            From technology to storytelling, we bring the creativity and
            expertise of Bhutan to every project we take on.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_SUMMARY.map((s) => {
            const Icon = ICONS[s.icon] ?? ICONS.Code;
            return (
              <Link
                key={s.href}
                href={s.href}
                className="group relative overflow-hidden bg-primary-950 p-8 text-center transition-colors duration-300 hover:bg-primary-900"
              >
                {/* amber corner brackets */}
                <span className="absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-accent-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-accent-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mx-auto flex h-16 w-16 items-center justify-center text-accent-500">
                  <Icon className="h-11 w-11" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-xl font-bold capitalize text-white">
                  {s.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {s.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
