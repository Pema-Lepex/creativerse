"use Client";
import OurStorySection from "./section/OurStorySection";
import { Heading1, Heading2, Heading3, Heading4 } from "@/components";

const MainHome: React.FC = () => {
  return (
    <div className="sm:px-6 lg:px-20">
      <OurStorySection />
      <OurStorySection />
      <OurStorySection />
      <OurStorySection />
      <OurStorySection />
      <OurStorySection />
      <OurStorySection />
      <OurStorySection />
      <OurStorySection />
    </div>
  );
};
export default MainHome;
