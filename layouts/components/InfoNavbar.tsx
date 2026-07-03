import { MailIcon, MapPin, PhoneIcon } from "lucide-react";

const InfoNavbar: React.FC = () => {
  return (
    <nav className="bg-primary-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-sm">
        <div className="flex items-center gap-6 text-gray-300 md:py-0 py-2">
          <div className="flex items-center gap-2">
            <MapPin className="size-5 text-accent-500" />
            <span>11001 Thimphu, Bhutan</span>
          </div>

          <div className="h-5 w-px bg-accent-500" />

          <div className="flex items-center gap-2">
            <MailIcon className="size-5 text-accent-500" />
            <a
              href="mailto:hello@creativerse.biz"
              className="transition-all duration-300 hover:text-white hover:underline"
            >
              hello@creativerse.biz
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <a
            href="#"
            className="flex h-14 w-14 items-center justify-center bg-[#1877F2] text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#1877F2]"
          >
            f
          </a>
          <a
            href="#"
            className="flex h-14 w-14 items-center justify-center bg-[#0A66C2] text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#0A66C2]"
          >
            in
          </a>
          <a
            href="tel:+97577886666"
            className="flex h-14 items-center gap-3 bg-accent-500 px-6 text-black transition-all duration-300 hover:bg-accent-400"
          >
            <PhoneIcon className="size-4" />

            <div>
              <p className="text-xs uppercase tracking-wide">
                Talk to Expert
              </p>

              <p className="font-bold">
                +975 77886666
              </p>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default InfoNavbar;