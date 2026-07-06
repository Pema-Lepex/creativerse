import MainLayout from "@/layouts/MainLayout";
import MainContact from "./page/MainContact";

export const metadata = {
  title: "Contact Us | Creativerse",
  description:
    "Get in touch with Creativerse — Changzamtog, Thimphu, Bhutan. Call +975 77886666 or email hello@creativerse.biz.",
};

const ContactPage = () => {
  return (
    <MainLayout>
      <MainContact />
    </MainLayout>
  );
};

export default ContactPage;
