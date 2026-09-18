import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DoctorsPage from "@/components/DoctorsPage";

export const metadata = {
  title: "Doctors | HealthFirst Hospital",
};

export default function AboutUs() {
  return (
    <>
      <Header />
      <DoctorsPage />
      <Footer />
    </>
  );
}