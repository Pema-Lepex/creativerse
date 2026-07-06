import MainLayout from "@/layouts/MainLayout";
import MainAbout from "./page/MainAbout";

export const metadata = {
  title: "About Us | Creativerse",
  description:
    "Creativerse is a premiere Business Process Outsourcing (BPO) company based in Bhutan, delivering exceptional creative and technology services worldwide.",
};

const AboutUsPage = () => {
  return (
    <MainLayout>
      <MainAbout />
    </MainLayout>
  );
};

export default AboutUsPage;
