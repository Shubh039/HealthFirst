import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutPage from "@/components/AboutPage";

export const metadata = {
  title: "About Us | HealthFirst Hospital",
};

export default function AboutUs() {
  return (
    <>
      <Header />
      <AboutPage />
      <Footer />
    </>
  );
}