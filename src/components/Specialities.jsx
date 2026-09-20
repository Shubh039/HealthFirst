import Link from "next/link";
import {
  Stethoscope,
  Baby,
  Bone,
  Radiation ,
  Syringe ,
  Scissors,
  ArrowUpRight,
} from "lucide-react";

const specialities = [
  {
    slug: "internal-medicine",
    icon: Stethoscope,
    label: "Internal Medicine",
    image: "/images/specialities/internal-medicine.png",
  },
  {
    slug: "obs-gynae",
    icon: Baby,
    label: "Obs & Gynae",
    image: "/images/specialities/obstetrics-gynae.png",
  },
  {
    slug: "orthopedics",
    icon: Bone,
    label: "Orthopedics",
    image: "/images/specialities/orthopedics.png",
  },
  {
    slug: "radiology",
    icon: Radiation ,
    label: "Radiology",
    image: "/images/specialities/radiology.png",
  },
  {
    slug: "anesthesia-critical-care",
    icon: Syringe ,
    label: "Anesthesia & Critical Care",
    image: "/images/specialities/anesthesia.png",
  },
  {
    slug: "general-surgery",
    icon: Scissors,
    label: "General Surgery",
    image: "/images/specialities/general-surgery.png",
  },
];

export default function Specialities() {
  return (
    <section className="relative overflow-hidden bg-brand-bg px-6 py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-brand-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-teal/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
                Our Specialities
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
              Comprehensive care.
              <br />
              <span className="text-brand-navy/70">
                One trusted destination.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
              Expert diagnosis, advanced treatment and compassionate care
              across a wide range of medical specialities.
            </p>
          </div>

          <Link
            href="/specialities"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-navy transition-all duration-300 hover:text-brand-teal"
          >
            <span>View All Specialities</span>

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </div>

        {/* Speciality Grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

          {specialities.map(({slug, icon: Icon, label, image }) => (
            <Link
              href={`/specialities/${slug}`}
              key={label}
              className="group relative overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-gold/40 hover:shadow-[0_18px_45px_rgba(11,36,71,0.12)]"
            >

              {/* Image */}
              <div className="relative h-40 overflow-hidden bg-brand-bg">

                <img
                  src={image}
                  alt={label}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-brand-navy/5 to-transparent" />

                {/* Icon */}
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/90 text-brand-navy shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:bg-brand-gold group-hover:text-brand-navy">
                  <Icon
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.7}
                  />
                </div>

              </div>

              {/* Content */}
              <div className="relative p-5">

                {/* Gold corner accent */}
                <span className="pointer-events-none absolute right-0 top-0 h-9 w-9 rounded-bl-3xl bg-brand-gold/10 transition-all duration-300 group-hover:h-12 group-hover:w-12" />

                <p className="relative min-h-[40px] pr-5 text-sm font-semibold leading-5 text-brand-navy">
                  {label}
                </p>

                {/* Bottom accent + arrow */}
                <div className="mt-5 flex items-center justify-between">

                  <div className="h-px w-8 bg-brand-gold/60 transition-all duration-300 group-hover:w-12" />

                  <ArrowUpRight
                    className="h-4 w-4 text-brand-navy/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-teal"
                    strokeWidth={1.8}
                  />

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}