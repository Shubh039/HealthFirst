import Link from "next/link";
import {
  Stethoscope,
  Baby,
  Bone,
  Smile,
  HeartPulse,
  Scissors,
  Pill,
  Droplet,
  Droplets,
  ScanLine,
  HeartHandshake,
  ArrowUpRight,
  Ambulance,
  Syringe,
} from "lucide-react";

const specialities = [
  {
    slug: "internal-medicine",
    icon: Stethoscope,
    title: "Internal Medicine",
    text: "Diagnosis and long-term management of adult illnesses, from chronic conditions to everyday health concerns.",
    image: "/images/specialities/internal-medicine.png",
  },
  {
    slug: "obs-gynae",
    icon: Baby,
    title: "Obstetrics & Gynaecology",
    text: "Complete women's health care — pregnancy, childbirth and gynaecological conditions at every life stage.",
    image: "/images/specialities/obstetrics-gynae.png",
  },
  {
    slug: "orthopedics",
    icon: Bone,
    title: "Orthopedics",
    text: "Treatment for bones, joints and muscles, from sports injuries to joint replacement surgery.",
    image: "/images/specialities/orthopedics.png",
  },
  {
    slug: "pediatrics",
    icon: Smile,
    title: "Pediatrics",
    text: "Dedicated care for infants, children and adolescents, focused on healthy growth and development.",
    image: "/images/specialities/pediatrics.png",
  },
  {
      slug: "neonatology",
      icon: HeartPulse,
      title: "Neonatology",
      text: "Specialised care for newborns, including premature and critically ill infants, backed by our Level 3 NICU.",
      image: "/images/specialities/neonatology.png",
    },
  {
    slug: "general-surgery",
    icon: Scissors,
    title: "General Surgery",
    text: "A wide range of surgical procedures performed with modern, minimally invasive techniques where possible.",
    image: "/images/specialities/general-surgery.png",
  },
  {
    slug: "gastroenterology",
    icon: Pill,
    title: "Gastroenterology",
    text: "Diagnosis and treatment of digestive system disorders, from routine screenings to complex conditions.",
    image: "/images/specialities/gastroenterology.png",
  },
  {
    slug: "nephrology",
    icon: Droplet,
    title: "Nephrology",
    text: "Comprehensive kidney care, including management of chronic kidney disease and dialysis support.",
    image: "/images/specialities/nephrology.png",
  },
  {
    slug: "urology",
    icon: Droplets,
    title: "Urology",
    text: "Treatment of urinary tract and male reproductive health conditions across all age groups.",
    image: "/images/specialities/urology.png",
  },
  {
    slug: "radiology",
    icon: ScanLine,
    title: "Radiology",
    text: "Advanced diagnostic imaging — X-ray, ultrasound and more — supporting accurate, timely diagnosis.",
    image: "/images/specialities/radiology.png",
  },
  {
    slug: "ivf-infertility",
    icon: HeartHandshake,
    title: "IVF & Infertility",
    text: "Compassionate fertility care and assisted reproduction support for couples building their families.",
    image: "/images/specialities/ivf-infertility.png",
  },
  { slug: "anesthesia-critical-care", 
    icon: Syringe, 
    title: "Anesthesia & Critical Care", 
    text: "Expert anesthesia and critical care for safe, precise, and compassionate patient care.", 
    image: "/images/specialities/anesthesia.png",
  },
];

/*
  Emergency & Critical Care is kept separate from the normal
  speciality cards because it is an important 24×7 service.
*/

export default function SpecialitiesGrid() {
  return (
    <section className="relative overflow-hidden bg-brand-bg px-6 py-20 sm:py-24 lg:px-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-brand-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-brand-teal/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-brand-gold" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
                Our Specialities
              </p>
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-[1.12] text-brand-navy sm:text-4xl lg:text-5xl">
              Comprehensive care.
              <br />
              <span className="text-brand-navy/65">
                One trusted destination.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
              From everyday healthcare to specialised treatment, our
              multidisciplinary teams work together to provide thoughtful,
              patient-focused care under one roof.
            </p>

          </div>

          <Link
            href="/appointment"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-brand-navy/10 bg-white px-5 py-3 text-sm font-semibold text-brand-navy shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/40 hover:shadow-md"
          >
            <span>Book an Appointment</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-bg transition-colors duration-300 group-hover:bg-brand-gold">
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </span>
          </Link>

        </div>


      {/* =========================================================
          EMERGENCY / CRITICAL CARE
      ========================================================= */}

      <Link
        href="/specialities/anesthesia-critical-care"
        className="group relative mt-14 block overflow-hidden rounded-[2rem] bg-brand-red shadow-[0_20px_60px_rgba(230,57,70,0.16)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(230,57,70,0.22)]"
      >
        <div className="grid lg:grid-cols-[1fr_0.9fr]">

          {/* =====================================================
              CONTENT
          ===================================================== */}

          <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden p-8 sm:p-10 lg:p-12">

            {/* Subtle background detail */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

            <div className="relative z-10">

              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-white/70" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                  24×7 Emergency & Critical Care
                </span>
              </div>

              {/* Title + Icon */}
              <div className="mt-5 flex items-start gap-5">

                <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 sm:flex">
                  <Ambulance
                    className="h-7 w-7 text-white"
                    strokeWidth={1.6}
                  />
                </span>

                <div>
                  <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Anesthesia & Critical Care
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                    Expert anesthesia and critical care supported by advanced
                    life support, continuous monitoring and a dedicated
                    clinical team available around the clock.
                  </p>
                </div>

              </div>

              {/* CTA */}
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Explore Critical Care

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-red transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight
                    className="h-4 w-4"
                    strokeWidth={2}
                  />
                </span>
              </span>

            </div>
          </div>


          {/* =====================================================
              IMAGE
          ===================================================== */}

          <div className="relative min-h-[260px] overflow-hidden lg:min-h-[320px]">

            <img
              src="/images/specialities/critical-care.jpg"
              alt="Advanced critical care and ICU facilities"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
            />

            {/* Red image blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red via-brand-red/35 to-transparent lg:from-brand-red/80 lg:via-brand-red/10 lg:to-transparent" />

            {/* Small image badge */}
            <div className="absolute bottom-6 right-6 rounded-2xl border border-white/20 bg-brand-red/80 px-4 py-3 shadow-lg backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                Always Ready
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                ICU • Emergency • Critical Care
              </p>
            </div>

          </div>

        </div>
      </Link>


        {/* =========================================================
            SPECIALITY GRID
        ========================================================= */}

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {specialities.map(
            ({ slug, icon: Icon, title, text, image }, index) => (

              <Link
                key={slug}
                href={`/specialities/${slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-brand-navy/10 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.035)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-gold/30 hover:shadow-[0_20px_55px_rgba(15,23,42,0.10)]"
              >

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div className="relative aspect-[8/5] overflow-hidden bg-brand-bg">

                  <img
                    src={image}
                    alt={`${title} speciality`}
                    loading={index < 3 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-50" />

                  {/* Speciality icon */}
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/95 text-brand-navy shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:bg-brand-gold group-hover:text-brand-navy">

                    <Icon
                      className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.7}
                    />

                  </div>

                </div>


                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <div className="flex flex-1 flex-col p-6">

                  <div className="flex items-start justify-between gap-4">

                    <h3 className="text-lg font-bold leading-6 text-brand-navy">
                      {title}
                    </h3>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-bg text-brand-navy/40 transition-all duration-300 group-hover:bg-brand-gold group-hover:text-brand-navy">

                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={2}
                      />

                    </span>

                  </div>


                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                    {text}
                  </p>


                  <div className="mt-6 flex items-center justify-between border-t border-brand-navy/10 pt-4">

                    <span className="text-xs font-semibold text-brand-teal">
                      Explore speciality
                    </span>

                    <span className="h-1 w-7 rounded-full bg-brand-gold/60 transition-all duration-300 group-hover:w-12" />

                  </div>

                </div>

              </Link>

            )
          )}

        </div>


        {/* =========================================================
            BOTTOM NOTE
        ========================================================= */}

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-brand-navy/10 bg-white/70 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-bg">
              <Syringe
                className="h-4 w-4 text-brand-teal"
                strokeWidth={1.7}
              />
            </span>

            <p className="text-sm text-gray-600">
              Looking for a specific department or treatment?
            </p>

          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-navy"
          >
            Talk to our team

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>

      </div>
    </section>
  );
}