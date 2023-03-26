import HeroSection from "@/components/HeroSection";
import EnquiryFormSection from "@/components/EnquiryFormSection";
import GetInTouchSection from "@/components/GetInTouchSection";
function ContactUs() {
  return (
    <div>
      <HeroSection
        backgroundImage="/getInTouch.jpg"
        headingTextHighlighted="Get in"
        headingText="Touch"
      />
      <EnquiryFormSection />
      <GetInTouchSection />
    </div>
  );
}
export default ContactUs;
