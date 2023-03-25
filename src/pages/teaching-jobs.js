import HeroSection from "../components/HeroSection";
import AboutTeachingJobsSection from "../components/AboutTeachingJobsSection";
import TeachingJobsSection from "@/components/TeachingJobsSection";
import SliderSection from "@/components/sliderSection";
import ReferSection from "@/components/ReferSection";
import StartYourJourneySection from "@/components/StartYourJourneySection";
import ContactFormSection from "@/components/ContactFormSection";

function TeachingJobs() {
  return (
    <div>
      <HeroSection
        backgroundImage="/ATJobsHero.jpg"
        headingText="Welcome to my website"
      />
      <AboutTeachingJobsSection />
      <TeachingJobsSection />
      <SliderSection />
      <ReferSection />
      <StartYourJourneySection />
      <ContactFormSection />
    </div>
  );
}

export default TeachingJobs;
