"use Client";
import { Slider1, Slider2, Slider3, Slider15, Slider16 } from "@/assets";
import Carousel from "@/components/Carousel";
import { SlideProps } from "@/types/CommonProps";
import RecentNewsSection from "./section/RecentNewsSection";
import OurStorySection from "./section/OurStorySection";
import { Heading1, Heading2, Heading3, Heading4 } from "@/components";

const MainHome: React.FC = () => {
  const slides: SlideProps[] = [
    { id: 1, img: Slider1, title: "Beautiful Landscape" },
    { id: 2, img: Slider2, title: "City Night Lights" },
    { id: 3, img: Slider3, title: "Mountain Adventure" },
    { id: 4, img: Slider15, title: "Mountain Adventure" },
    { id: 5, img: Slider16, title: "Mountain Adventure" },
  ];
  return (
    <div>
      <section>
        <Carousel slides={slides} />
      </section>
      <Heading1>Heading 1</Heading1>
      <Heading2>Heading 2</Heading2>
      <Heading3>Heading 3</Heading3>
      <Heading4>Heading 4</Heading4>
      <RecentNewsSection />
      <OurStorySection />
    </div>
  );
};
export default MainHome;
