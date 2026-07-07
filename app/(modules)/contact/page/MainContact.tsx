import {
  CommonParagraph2,
  CommonParagraph3,
  CommonParagraph4,
  Heading4,
  PageBanner,
  SectionHeading,
} from "@/components";
import { ContactContent } from "@/assets/content/contact/ContactContent";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { ContactImage } from "@/assets";

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

        {/* <div className="my-14 text-center lg:my-16">
          <Heading4 className=" font-black text-[#1b364d] tracking-tight uppercase mb-2">
            CONTACT US
          </Heading4>
          <CommonParagraph3 className="text-[#1b364d]/80 ">
            We'd love to hear from you. Get in touch with our team!
          </CommonParagraph3>
        </div> */}

        {/* 2. Top Content: Info and Office Image */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-16 mt-14 lg:mt-16">
          {/* Contact Info Card */}
          <div className="rounded-[2rem] border border-customOriange-200 bg-white p-8 shadow-sm md:p-10 lg:p-12">
            <CommonParagraph4 className="text-orange-500 font-bold mb-8">
              Get In Touch
            </CommonParagraph4>

            <div className="space-y-8">
              {/* Visit Us */}
              <div className="flex gap-4">
                <div className="p-3 bg-blue-50 rounded-full h-fit">
                  <MapPin className="w-5 h-5 4xl:w-10 4xl:h-10 5xl:w-14 5xl:h-14 text-[#1b364d]" />
                </div>
                <div>
                  <CommonParagraph2 className="font-bold text-gray-900">
                    Visit Our Office
                  </CommonParagraph2>
                  <CommonParagraph3 className="text-gray-600">
                    Changzamtog, Thimphu
                  </CommonParagraph3>
                  <CommonParagraph3 className="text-gray-600">
                    Bhutan
                  </CommonParagraph3>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex gap-4">
                <div className="p-3 bg-blue-50 rounded-full h-fit">
                  <Phone className="w-5 h-5 4xl:w-10 4xl:h-10 5xl:w-14 5xl:h-14 text-[#1b364d]" />
                </div>
                <div>
                  <CommonParagraph2 className="font-bold text-gray-900">
                    Call Us
                  </CommonParagraph2>
                  <CommonParagraph3 className="text-gray-600">
                    Toll free number: <span className="font-bold">2016</span>
                  </CommonParagraph3>
                  <CommonParagraph3 className="text-gray-600">
                    Mobile number:{" "}
                    <span className="font-bold">+975 77718721</span>
                  </CommonParagraph3>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex gap-4">
                <div className="p-3 bg-blue-50 rounded-full h-fit">
                  <Mail className="w-5 h-5 4xl:w-10 4xl:h-10 5xl:w-14 5xl:h-14 text-[#1b364d]" />
                </div>
                <div>
                  <CommonParagraph2 className="font-bold text-gray-900">
                    Email Us
                  </CommonParagraph2>
                  <CommonParagraph3 className="text-gray-600">
                    support@educareskill.com
                  </CommonParagraph3>
                  <CommonParagraph3 className="text-sm text-gray-400">
                    We'll respond as soon as possible.
                  </CommonParagraph3>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex gap-4">
                <div className="p-3 bg-blue-50 rounded-full h-fit">
                  <Clock className="w-5 h-5 4xl:w-10 4xl:h-10 5xl:w-14 5xl:h-14 text-[#1b364d]" />
                </div>
                <div>
                  <CommonParagraph2 className="font-bold text-gray-900">
                    Office Hours
                  </CommonParagraph2>
                  <CommonParagraph3 className="text-gray-600">
                    Monday - Friday: 9:30 AM - 5:30 PM
                  </CommonParagraph3>
                  <CommonParagraph3 className="text-gray-600">
                    Saturday: 9:30 AM - 1:00 PM
                  </CommonParagraph3>
                  <CommonParagraph3 className="text-gray-600">
                    Sunday: Closed
                  </CommonParagraph3>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-sm h-full">
            <Image
              src={ContactImage}
              alt="iBEST Institute Building"
              className="w-full h-full object-cover min-h-[400px]"
            />
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
