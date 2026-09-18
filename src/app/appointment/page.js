import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentHero from "@/components/AppointmentHero";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata = {
  title: "Book an Appointment | HealthFirst Hospital",
};

export default function AppointmentPage() {
  return (
    <>
      <Header />
      <AppointmentHero />
      <AppointmentForm />
      <Footer />
    </>
  );
}