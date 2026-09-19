import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogsPage from "@/components/BlogsPage";

export const metadata = {
  title: "Blogs | HealthFirst Hospital",
};

export default function Blogs() {
  return (
    <>
      <Header />
      <BlogsPage />
      <Footer />
    </>
  );
}