import HeroSlider from "./section/HeroSlider";
import TopIntroSection from "./section/TopIntroSection";
import AboutCompanySection from "./section/AboutCompanySection";
import ServicesGridSection from "./section/ServicesGridSection";
import ClientsSection from "./section/ClientsSection";
import RecentNewsSection from "./section/RecentNewsSection";

const MainHome: React.FC = () => {
  return (
    <div>
      <HeroSlider />
      <TopIntroSection />
      <AboutCompanySection />
      <ServicesGridSection />
      {/* <ClientsSection /> */}
      <RecentNewsSection />
    </div>
  );
};

export default MainHome;
