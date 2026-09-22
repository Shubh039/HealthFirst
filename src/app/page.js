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

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <StatsBar />
      <About />
      <Specialities />
      <EmergencyBanner />
      <Doctors />
      <PatientJourney />
      <Testimonials />
      <BlogUpdates />
      {/* <InsurancePanels /> */}
      <Footer />
    </>
  );
}