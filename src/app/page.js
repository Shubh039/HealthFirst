import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Specialities from "@/components/Specialities";
import EmergencyBanner from "@/components/EmergencyBanner";
import Doctors from "@/components/Doctors";
import PatientJourney from "@/components/PatientJourney";
import Testimonials from "@/components/Testimonials";
import BlogUpdates from "@/components/BlogUpdates";
import InsurancePanels from "@/components/InsurancePanels";
import ContactAppointment from "@/components/ContactAppointment";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />

      <ScrollReveal>
        <StatsBar />
      </ScrollReveal>

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Specialities />
      </ScrollReveal>

      <ScrollReveal>
        <EmergencyBanner />
      </ScrollReveal>

      <ScrollReveal>
        <Doctors />
      </ScrollReveal>

      <ScrollReveal>
        <PatientJourney />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <BlogUpdates />
      </ScrollReveal>

      {/* <InsurancePanels /> */}

      <Footer />
    </>
  );
}