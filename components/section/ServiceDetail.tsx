import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageBanner from "./PageBanner";
import { SiteInfo } from "@/assets/content/common/SiteContent";
import { SERVICES, ServiceContent } from "@/assets/content/services/ServicesContent";

interface ServiceDetailProps {
  service: ServiceContent;
}

/**
 * Reusable service-detail template: page banner + left sidebar (service nav
 * and office info) + main content (hero image, intro, offerings list).
 * Every /services/[slug] route renders through this single component.
 */
const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  return (
    <>
      <PageBanner
        title={service.title}
        image="/assets/services/banner.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: service.title },
        ]}
      />

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:gap-12 lg:px-8 lg:py-20">
        {/* Sidebar */}
        <aside className="order-2 space-y-8 lg:order-1 lg:col-span-1">
          {/* Service nav */}
          <nav className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <ul>
              {SERVICES.map((s) => {
                const active = s.slug === service.slug;
                return (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className={`flex items-center justify-between border-l-4 px-5 py-4 text-sm font-medium transition-colors md:text-base ${
                        active
                          ? "border-accent-500 bg-primary-50 text-primary-500"
                          : "border-transparent text-body-text hover:border-accent-500 hover:bg-slate-50 hover:text-primary-500"
                      }`}
                    >
                      {s.label}
                      <span className="text-accent-500">&rsaquo;</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Office info widget */}
          <div className="rounded-2xl bg-primary-500 p-7 text-white">
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <MapPin className="h-5 w-5 text-accent-500" /> Our Office
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              {SiteInfo.address}
            </p>

            <h3 className="mt-6 flex items-center gap-2 text-lg font-bold">
              <Phone className="h-5 w-5 text-accent-500" /> Quick Contact
            </h3>
            <p className="mt-2 flex items-center gap-2 text-sm text-white/80">
              <Mail className="h-4 w-4" /> {SiteInfo.email}
            </p>
            <p className="mt-1 flex items-center gap-2 text-sm text-white/80">
              <Phone className="h-4 w-4" /> {SiteInfo.phone}
            </p>

            <h3 className="mt-6 flex items-center gap-2 text-lg font-bold">
              <Clock className="h-5 w-5 text-accent-500" /> Opening Hours
            </h3>
            {SiteInfo.hours.map((h) => (
              <p
                key={h.day}
                className="mt-1 flex justify-between gap-2 text-sm text-white/80"
              >
                <span>{h.day}</span>
                <span>{h.time}</span>
              </p>
            ))}

            <Link
              href="/contact"
              className="mt-6 flex w-full items-center justify-center rounded-md bg-accent-500 px-6 py-3 font-semibold text-primary-500 transition-all duration-300 hover:scale-[1.02] hover:bg-accent-400"
            >
              Book Appointment
            </Link>
          </div>
        </aside>

        {/* Content */}
        <div className="order-1 lg:order-2 lg:col-span-2">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {service.intro.map((p, i) => (
            <p
              key={i}
              className="mt-6 text-base leading-relaxed text-body-text md:text-lg"
            >
              {p}
            </p>
          ))}

          <h2 className="mt-10 text-2xl font-bold text-primary-500 md:text-3xl">
            {service.offeringsTitle}
          </h2>

          <div className="mt-6 space-y-5">
            {service.offerings.map((o, i) => (
              <div
                key={o.title}
                className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-accent-500/40 hover:shadow-lg md:p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-sm font-bold text-primary-500 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-500">
                    {o.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body-text md:text-base">
                    {o.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {service.closing && (
            <p className="mt-8 rounded-2xl border-l-4 border-accent-500 bg-primary-50 p-6 text-base italic leading-relaxed text-primary-600">
              {service.closing}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
