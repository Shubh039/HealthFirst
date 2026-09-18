import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpecialitiesHero from "@/components/SpecialitiesHero";
import SpecialitiesGrid from "@/components/SpecialitiesGrid";

export const metadata = {
  title: "Our Specialities | HealthFirst Hospital",
};

export default function SpecialitiesPage() {
  return (
    <>
      <Header />
      <SpecialitiesGrid />
      <Footer />
    </>
  );
}