"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Carousel from "@/components/Carousel";
import { SlideProps } from "@/types/CommonProps";
import mainsliderBg1 from "@/assets/images/common/mainslider-bg1.jpg";
import mainsliderBg2 from "@/assets/images/common/mainslider-bg2.jpg";

const slides: SlideProps[] = [
  {
    id: 1,
    img: mainsliderBg1,
    title: "Building your dream with passion",
    content: (
      <div className="flex h-full w-full items-center bg-gradient-to-r from-primary-500/90 via-primary-500/60 to-primary-500/30 lg:from-primary-500/85 lg:via-primary-500/45 lg:to-transparent">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 text-center text-white sm:px-8 md:px-10 lg:items-start lg:px-16 lg:text-left">
          <div className="mb-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-widest text-white sm:text-sm lg:justify-start">
            {["Honest", "Reliable", "Trustworthy"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent-500" />
                {t}
              </span>
            ))}
          </div>

          <h1 className="max-w-xl text-3xl font-extrabold leading-tight drop-shadow-md sm:text-4xl md:max-w-2xl md:text-5xl lg:text-[4.2rem] lg:leading-[1.1]">
            Building your dream with{" "}
            <span className="text-accent-500">PASSION</span>
          </h1>

          <Link
            href="/services/it-services"
            className="mt-6 inline-flex items-center gap-2 border-2 border-white px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-accent-500 hover:bg-accent-500 hover:text-primary-500 sm:mt-7 sm:px-7 sm:text-base"
          >
            Our Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    img: mainsliderBg2,
    title: "Services tailored to meet your needs",
    content: (
      <div className="flex h-full w-full items-center bg-gradient-to-l from-primary-500/90 via-primary-500/60 to-primary-500/30 lg:from-primary-500/85 lg:via-primary-500/45 lg:to-transparent">

        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 text-center text-white sm:px-8 md:px-10 lg:items-end lg:px-16 lg:text-right">
          <h1 className="max-w-xl text-3xl font-extrabold leading-tight drop-shadow-md sm:text-4xl md:max-w-2xl md:text-5xl lg:text-[4.2rem] lg:leading-[1.1]">
            Services tailored to meet your{" "}
            <span className="text-accent-500">NEEDS</span>
          </h1>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 border-2 border-accent-500 bg-accent-500 px-6 py-3 text-sm font-bold text-primary-500 transition-all duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white sm:mt-7 sm:px-7 sm:text-base"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    ),
  },
];

const HeroSlider: React.FC = () => {
  return (
    <section className="w-full">
      <Carousel slides={slides} hideDot={true}/>
    </section>
  );
};

export default HeroSlider;