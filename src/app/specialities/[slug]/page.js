import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Stethoscope,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  specialities,
  getSpecialityBySlug,
} from "@/data/specialities";

export function generateStaticParams() {
  return specialities.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const speciality = getSpecialityBySlug(slug);

  if (!speciality) return {};

  return {
    title: `${speciality.title} | HealthFirst Hospital`,
    description: speciality.description,
  };
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

      <main className="bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-brand-bg">

          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />

          <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-brand-teal/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-10 sm:pb-20 sm:pt-14 lg:px-8">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-brand-navy/50">

              <Link
                href="/specialities"
                className="transition-colors hover:text-brand-navy"
              >
                Specialities
              </Link>

              <span>/</span>

              <span className="text-brand-navy/70">
                {speciality.title}
              </span>

            </div>

            {/* Hero content */}
            <div className="mx-auto mt-12 max-w-4xl text-center">

              {/* Label */}
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal shadow-sm backdrop-blur">

                <Stethoscope className="h-3.5 w-3.5" />

                Medical Speciality

              </div>

              {/* Title */}
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
                {speciality.title}
              </h1>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                {speciality.description}
              </p>

              {/* CTA */}
              <Link
                href="/appointment"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3.5 text-sm font-semibold text-brand-navy shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-navy/10"
              >
                Book an Appointment

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>
          </div>
        </section>


        {/* FEATURED IMAGE */}
        <section className="px-6">

          {/* Gap between hero and image */}
          <div className="mx-auto mt-8 max-w-6xl sm:mt-12">

            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-xl shadow-brand-navy/10">

              <Image
                src={speciality.image}
                alt={speciality.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent" />

            </div>

          </div>
        </section>


        {/* CONTENT */}
        <section className="px-6 py-16 sm:py-20 lg:py-24">

          <div className="mx-auto max-w-3xl">

            {/* Back link */}
            <Link
              href="/specialities"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-navy/60 transition-colors hover:text-brand-navy"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />

              Back to Specialities
            </Link>


            {/* Intro */}
            <div className="mt-12">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">
                About the Department
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                Comprehensive care focused on you.
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-[17px]">
                At HealthFirst Hospital, our {speciality.title} team focuses
                on providing thoughtful, evidence-based care tailored to each
                patient's individual needs. Our approach combines clinical
                expertise, modern facilities and a patient-first environment.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600 sm:text-[17px]">
                Whether you are visiting for an initial consultation, ongoing
                treatment or specialist care, our team works closely with you
                to understand your concerns and guide you through the next
                steps of your healthcare journey.
              </p>

            </div>


            {/* Care approach */}
            <div className="mt-14 border-t border-brand-navy/8 pt-12">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">
                Our Approach
              </p>

              <div className="mt-7 grid gap-8 sm:grid-cols-3">

                {/* 01 */}
                <div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                    <span className="text-sm font-bold">
                      01
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-brand-navy">
                    Careful Evaluation
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Understanding your symptoms, concerns and medical history
                    before recommending the next step.
                  </p>

                </div>


                {/* 02 */}
                <div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold/15 text-brand-navy">
                    <span className="text-sm font-bold">
                      02
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-brand-navy">
                    Personalised Care
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Treatment and care plans are tailored to the individual
                    needs of every patient.
                  </p>

                </div>


                {/* 03 */}
                <div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                    <span className="text-sm font-bold">
                      03
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-brand-navy">
                    Ongoing Support
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Continued guidance and follow-up to support your healthcare
                    journey.
                  </p>

                </div>

              </div>
            </div>


            {/* APPOINTMENT CTA */}
            <div className="relative mt-16 overflow-hidden rounded-3xl bg-brand-navy p-7 sm:p-10">

              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10" />

              <div className="relative">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                  {speciality.title}
                </p>

                <h2 className="mt-3 max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Looking for specialist care?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
                  Schedule a consultation with our healthcare team and take
                  the next step towards the care you need.
                </p>

                <Link
                  href="/appointment"
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3.5 text-sm font-semibold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
                >
                  Book an Appointment

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}