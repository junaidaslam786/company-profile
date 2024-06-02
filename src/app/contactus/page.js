import ContactForm from "@/components/contactUs/ContactForm";
import ContactUsHeroSection from "@/components/contactUs/ContactUsHeroSection";

const ContactPage = () => {
  return (
    <div className="flex font-sans min-h-screen w-full px-[4vw] flex-col items-center justify-between bg-white">
      <ContactUsHeroSection />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
