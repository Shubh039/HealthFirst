import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { specialities, getSpecialityBySlug } from "@/data/specialities";

export function generateStaticParams() {
  return specialities.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const speciality = getSpecialityBySlug(slug);
  if (!speciality) return {};
  return { title: `${speciality.title} | HealthFirst Hospital` };
}

export default async function SpecialityPage({ params }) {
  const { slug } = await params;
  const speciality = getSpecialityBySlug(slug);
  if (!speciality) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>
        {/* Hero image with title */}
        <section className="relative h-[340px] w-full sm:h-[420px]">
          <Image
            src={speciality.image}
            alt={speciality.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/50" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-5xl px-6 pb-10 lg:px-8">
              <p className="text-xs font-medium text-white/80">
                <Link href="/specialities" className="hover:underline">
                  Specialities
                </Link>
                <span className="mx-2">/</span>
                <span>{speciality.title}</span>
              </p>
              <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                {speciality.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <p className="max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {speciality.description}
          </p>

          <Link
            href="/appointment"
            className="mt-8 inline-block rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy transition-opacity hover:opacity-90"
          >
            Book an Appointment →
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}