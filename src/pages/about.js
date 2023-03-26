import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import ReferSection from "@/components/ReferSection";
import MeetOurTeamSection from "@/components/MeetOurTeamSection";
import ContactFormSection from "@/components/ContactFormSection";
function About() {
  return (
    <div>
      <HeroSection
        backgroundImage="/ATJobsHero.jpg"
        headingTextHighlighted="About"
        headingText="Us"
      />
      <PillarsSection />
      <ReferSection />
      <MeetOurTeamSection />
      <ContactFormSection />
    </div>
  );
}
export default About;
