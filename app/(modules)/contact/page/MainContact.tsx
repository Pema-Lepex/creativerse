import { PageBanner, SectionHeading } from "@/components";
import { ICONS } from "@/components/section/iconMap";
import { ContactContent } from "@/assets/content/contact/ContactContent";
import ContactForm from "./ContactForm";

const { banner, form, details, map } = ContactContent;

const MainContact: React.FC = () => {
  return (
    <div>
      <PageBanner title={banner.title} image={banner.image} />

      {/* Form + info cards */}
      <section className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow={form.eyebrow}
          title="Have A Question?"
          highlight="Drop Us A Line!"
        />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Info cards */}
          <div className="space-y-5">
            {details.map((d) => {
              const Icon = ICONS[d.icon] ?? ICONS.MapPin;
              return (
                <div
                  key={d.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-primary-500">
                      {d.title}
                    </h3>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="mt-1 block break-words text-sm text-body-text transition-colors hover:text-accent-500 md:text-base"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-body-text md:text-base">
                        {d.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full">
        <iframe
          src={map}
          title="Creativerse location"
          width="100%"
          height="480"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full border-0 grayscale-[30%]"
          allowFullScreen
        />
      </section>
    </div>
  );
};

export default MainContact;
