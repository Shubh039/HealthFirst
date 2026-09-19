import Image from "next/image";
import Link from "next/link";
import StoryMedia from "@/components/StoryMedia";
import Reveal from "@/components/Reveal";

import {
  ArrowUpRight,
  Check,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  Users,
  Building2,
  Clock3,
  Baby,
  Activity,
  Quote,
  Award,
  BriefcaseMedical,
} from "lucide-react";

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    value: "50",
    label: "Bedded Hospital",
  },
  {
    value: "12+",
    label: "Medical Specialities",
  },
  {
    value: "24×7",
    label: "Emergency & Critical Care",
  },
  {
    value: "2",
    label: "Modular Operation Theatres",
  },
  {
    value: "7+",
    label: "Doctors & Specialists",
  },
];

/* =========================================================
   VALUES
========================================================= */

const values = [
  {
    icon: HeartHandshake,
    title: "Compassion First",
    text: "Every patient deserves to be heard, respected and cared for with dignity.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical Excellence",
    text: "We strive for high standards of medical practice, safety and responsible care.",
  },
  {
    icon: Stethoscope,
    title: "Patient-Centred Care",
    text: "Our decisions begin with understanding what is right for the patient.",
  },
  {
    icon: Users,
    title: "Care as a Team",
    text: "Doctors, nurses and support teams work together around one shared purpose.",
  },
];

/* =========================================================
   PROMISES
========================================================= */

const promises = [
  {
    number: "01",
    title: "Accessible & Affordable Care",
    text: "We believe quality healthcare should be closer to the communities that need it.",
  },
  {
    number: "02",
    title: "Ethical Medical Practice",
    text: "Clinical decisions are guided by professional responsibility, evidence and the patient's best interest.",
  },
  {
    number: "03",
    title: "Technology & Talent",
    text: "We continuously invest in infrastructure, medical technology and skilled professionals.",
  },
  {
    number: "04",
    title: "Preventive Healthcare",
    text: "Good healthcare is not only about treating illness. It is also about helping people stay well.",
  },
];

/* =========================================================
   FACILITIES
========================================================= */

const facilities = [
  {
    title: "Modular Operation Theatres",
    category: "SURGICAL EXCELLENCE",
    image: "/images/about/surgical-room.jpeg",
    icon: Activity,
    text: "Modern surgical infrastructure designed to support complex procedures with controlled clinical environments.",
  },
  {
    title: "Advanced Intensive Care",
    category: "CRITICAL CARE",
    image: "/images/about/critical-care.png",
    icon: HeartHandshake,
    text: "Critical care facilities supported by advanced monitoring, ventilation and round-the-clock clinical care.",
  },
  {
    title: "Neonatal & Mother Care",
    category: "MOTHER & CHILD",
    image: "/images/about/mother-child.png",
    icon: Baby,
    text: "Dedicated spaces designed around the safety and comfort of mothers, newborns and families.",
  },
  {
    title: "Patient Rooms & Wards",
    category: "PATIENT COMFORT",
    image: "/images/about/general-ward.jpeg",
    icon: Building2,
    text: "Clean, comfortable inpatient spaces designed to support recovery and patient wellbeing.",
  },
  {
    title: "24×7 Pharmacy",
    category: "PHARMACY",
    image: "/images/about/pharmacy.jpeg",
    icon: Clock3,
    text: "Round-the-clock access to essential medicines and emergency consumables.",
  },
  {
    title: "Reception & Patient Care",
    category: "PATIENT EXPERIENCE",
    image: "/images/about/reception.jpeg",
    icon: Users,
    text: "A welcoming environment designed to make the patient's journey simpler from the moment they arrive.",
  },
];

/* =========================================================
   LEADERSHIP
========================================================= */

const leadership = [
  {
    name: "Maj. Saurabh Srivastava (Retd.)",
    role: "Healthcare Operations & Strategy Expert",
    image: "/images/about/leadership/Saurabh-Shrivastava.jpeg",
    description:
      "Former Army officer and healthcare operations leader with deep expertise in strategy, supply chain, and hospital management.",
  },
  {
    name: "Mr. Anand Kishore Srivastava",
    role: "Finance & Investment Banking Expert",
    image: "/images/about/leadership/Anand-Shrivastava.jpg",
    description:
      "40+ years in banking and investment banking; has led numerous IPOs and specializes in corporate finance and fundraising.",
  },
  {
    name: "Ramesh Kumar Sharma",
    role: "Strategic Advisor & Governance Lead",
    image: "/images/about/leadership/Ramesh-Kumar.jpeg",
    description:
      "37+ years in banking; brings expertise in finance, governance, and risk management to strategic planning.",
  },
  {
    name: "Mr. Avinash Singh",
    role: "Founder and Managing Director, Guery Pharma",
    image: "/images/about/leadership/Avinash-Singh.jpeg",
    description:
      "Accomplished pharma entrepreneur focused on quality, innovation and accessible healthcare solutions.",
  },
    {
    name: "Dr. Amit Singh",
    role: "CMD, Rama Multi-Speciality Hospital & Trauma Centre",
    image: "/images/about/leadership/Doc-Amit-Singh.png",
    description:
      "Laparoscopic and Endourology Surgeon with 10,000+ successful procedures and a record of clinical excellence.",
  },
    {
    name: "Dr. Rohit Bhargawa",
    role: "Senior Consultant & Head of Radiology",
    image: "/images/about/leadership/Doc-Rohit-Bhargawa.png",
    description:
      "Specialist in 1.5 Tesla MRI, spiral CT scans, 3D/4D ultrasound, Color Doppler, Mammography, and image-guided interventional procedures (USG & CT guided).",
  },
];

/* =========================================================
   GALLERY
========================================================= */

const gallery = [
  {
    image: "/images/about/exterior.jpg",
    alt: "HealthFirst Hospital exterior",
  },
  {
    image: "/images/about/corridor.jpg",
    alt: "HealthFirst Hospital corridor",
  },
  {
    image: "/images/about/ward.jpeg",
    alt: "HealthFirst Hospital patient ward",
  },
  { image: "/images/about/PatientRoom-1.jpeg", alt: "Patient Room", }, 
  { image: "/images/about/waiting-area.jpeg", alt: "Waiting Area", }, 
  { image: "/images/about/interior.jpeg", alt: "Hospital interior", },
];

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function AboutPage() {
  return (
    <main className="overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative bg-brand-bg px-6 pb-20 pt-16 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

            {/* HERO COPY */}

            <div>

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-brand-gold" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
                    About HealthFirst
                  </p>
                </div>
                <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
                  More than a hospital.

                  <span className="mt-2 block text-brand-navy/60">
                    A place where care comes first.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                  HealthFirst Hospital was built with a simple belief:
                  healthcare should be accessible, compassionate and
                  clinically excellent — every patient, every moment.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">

                  <Link
                    href="/appointment"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Book an Appointment

                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>

                  <a
                    href="#our-story"
                    className="inline-flex items-center rounded-full border border-brand-navy/15 bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-navy/30 hover:shadow-sm"
                  >
                    Discover Our Story
                  </a>

                </div>

            </div>


            {/* HERO IMAGE */}

              <div className="relative">

                <div className="group relative overflow-hidden rounded-[2rem] shadow-[0_25px_70px_rgba(11,36,71,0.14)]">

                  <Image
                    src="/images/about/exterior.jpg"
                    alt="HealthFirst Hospital"
                    width={1400}
                    height={900}
                    priority
                    className="h-[430px] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.025] sm:h-[520px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                        HealthFirst Hospital
                      </p>

                      <p className="mt-1 text-lg font-semibold text-white">
                        Every Patient. Every Moment.
                      </p>
                    </div>

                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-md sm:flex">
                      <HeartHandshake
                        className="h-5 w-5 text-white"
                        strokeWidth={1.7}
                      />
                    </div>

                  </div>

                </div>


                {/* =================================================
                    FLOATING STAT
                    Moved from LEFT → RIGHT
                ================================================= */}

                <div className="animate-float absolute -bottom-7 right-[-18px] hidden rounded-2xl border border-white/70 bg-white/95 px-6 py-5 shadow-[0_15px_45px_rgba(15,23,42,0.14)] backdrop-blur-md sm:block">
                  <div className="absolute left-0 top-5 h-10 w-1 rounded-r-full bg-brand-gold" />
                  <p className="text-3xl font-bold text-brand-navy">
                    IN-HOUSE
                  </p>

                  <p className="mt-1 max-w-[190px] text-xs font-semibold uppercase tracking-[0.12em] text-brand-teal">
                    TECH SUPPORT
                  </p>

                </div>

              </div>


          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="border-y border-brand-navy/10 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-5">

          {stats.map((stat, index) => (

            <div
              key={stat.label}
              className={`${
                index !== 0
                  ? "border-brand-navy/10 lg:border-l"
                  : ""
              }`}
            >

              <div className="px-5 py-8 text-center sm:px-8 sm:py-10">

                <p className="text-2xl font-bold text-brand-navy sm:text-3xl">
                  {stat.value}
                </p>

                <p className="mx-auto mt-2 max-w-[170px] text-xs font-medium leading-5 text-gray-500 sm:text-sm">
                  {stat.label}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section
        id="our-story"
        className="bg-white px-6 py-24 sm:py-28 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            {/* Heading */}

              <div>

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-brand-gold" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
                    Our Story
                  </p>
                </div>

                <h2 className="mt-5 max-w-lg text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
                  Healthcare, closer to the people who need it.
                </h2>

              </div>


            {/* Story */}

              <div className="max-w-3xl">

                <p className="text-lg leading-8 text-gray-700">
                  HealthFirst Hospital was established with a clear vision of
                  bringing quality, comprehensive and accessible healthcare
                  closer to the community.
                </p>

                <p className="mt-6 text-base leading-7 text-gray-600">
                  Located in the Khajoori Khas–Wazirabad Road region of
                  North-East Delhi, the hospital was envisioned to address an
                  important healthcare gap by bringing multidisciplinary care
                  closer to the surrounding population.
                </p>

                <p className="mt-6 text-base leading-7 text-gray-600">
                  Today, HealthFirst brings multiple medical specialities,
                  emergency and critical care, advanced surgical facilities
                  and modern infrastructure together under one roof.
                </p>

                <div className="mt-8 flex items-start gap-4 border-l-2 border-brand-gold pl-5">

                  <Quote className="mt-1 h-5 w-5 shrink-0 text-brand-gold" />

                  <p className="text-base font-medium leading-7 text-brand-navy">
                    “Every patient, every moment, receives care with
                    compassion, clinical excellence and dignity.”
                  </p>

                </div>

              </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STORY IMAGE + VIDEO
      ===================================================== */}
        <StoryMedia />


      {/* =====================================================
          MISSION / VISION / VALUES
      ===================================================== */}

      <section className="bg-white px-6 py-24 sm:py-28 lg:px-8">

        <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-brand-gold" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
                  What Guides Us
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl">
                The values behind every decision.
              </h2>

              <p className="mt-4 text-base leading-7 text-gray-600">
                Good healthcare needs more than infrastructure. It needs a
                culture built around people, responsibility and trust.
              </p>

            </div>


          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {values.map(({ icon: Icon, title, text }, index) => (

              <div
                key={title}
              >

                <div className="group h-full rounded-2xl border border-brand-navy/10 bg-brand-bg/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-navy transition-all duration-300 group-hover:bg-brand-navy group-hover:text-brand-gold">

                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.7}
                    />

                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-brand-navy">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PATIENT FIRST
      ===================================================== */}

      <section className="relative overflow-hidden bg-brand-navy px-6 py-24 sm:py-28 lg:px-8">

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand-teal/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                  Our Patient-First Philosophy
                </p>

                <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
                  Every decision begins with the patient.
                </h2>

              </div>


              <div>

                <p className="text-lg leading-8 text-white/80">
                  From the specialists we bring together to the infrastructure
                  we invest in, our focus remains the same — creating a safer,
                  more compassionate and more complete healthcare experience.
                </p>

                <div className="mt-9 grid gap-5 sm:grid-cols-2">

                  {[
                    "Compassionate communication",
                    "Respect for patient dignity",
                    "Responsible clinical care",
                    "A safer patient experience",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 border-t border-white/10 pt-4"
                    >

                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-navy">

                        <Check
                          className="h-3.5 w-3.5"
                          strokeWidth={3}
                        />

                      </div>

                      <span className="text-sm font-medium text-white/90">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOUR PROMISES
      ===================================================== */}

      <section className="bg-brand-bg px-6 py-24 sm:py-28 lg:px-8">

        <div className="mx-auto max-w-7xl">

            <div>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-brand-gold" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
                  What We Stand For
                </p>
              </div>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
                Four promises we make to every patient.
              </h2>

            </div>


          <div className="mt-14 grid gap-4 md:grid-cols-2">

            {promises.map((promise, index) => (

              <div key={promise.number}>

                <div className="group h-full rounded-2xl border border-brand-navy/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)] sm:p-9">

                  <div className="flex gap-6">

                    <span className="text-2xl font-medium text-brand-gold transition-transform duration-300 group-hover:translate-x-1">
                      {promise.number}
                    </span>

                    <div>

                      <h3 className="text-xl font-semibold text-brand-navy">
                        {promise.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                        {promise.text}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          INFRASTRUCTURE
      ===================================================== */}

      <section className="bg-white px-6 py-24 sm:py-28 lg:px-8">

        <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-brand-gold" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
                  Inside HealthFirst
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl lg:text-5xl">
                Built for modern care.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                From critical care to patient comfort, our infrastructure is
                designed to support every stage of the healthcare journey.
              </p>

            </div>


          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {facilities.map((facility, index) => {

              const Icon = facility.icon;

              return (

                <div key={facility.title}>

                  <div className="group h-full overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]">

                    <div className="relative h-64 overflow-hidden">

                      <Image
                        src={facility.image}
                        alt={facility.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      <span className="absolute left-4 top-4 rounded-lg bg-brand-navy/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-white backdrop-blur-sm">
                        {facility.category}
                      </span>

                    </div>


                    <div className="p-6">

                      <div className="flex items-start justify-between gap-4">

                        <h3 className="text-lg font-bold text-brand-navy">
                          {facility.title}
                        </h3>

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold transition-all duration-300 group-hover:bg-brand-navy group-hover:text-brand-gold">

                          <Icon
                            className="h-4 w-4"
                            strokeWidth={1.7}
                          />

                        </div>

                      </div>

                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        {facility.text}
                      </p>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <section className="relative overflow-hidden bg-brand-bg px-6 py-24 sm:py-28 lg:px-8">

        <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-brand-gold/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-brand-gold" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
                    Vision & Governance
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
                  Leadership with purpose.
                </h2>

              </div>

              <div>

                <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                  HealthFirst brings together healthcare leadership,
                  clinical expertise and operational experience around one
                  shared objective — building a hospital where medical
                  excellence and genuine human care can coexist.
                </p>

              </div>

          </div>


          {/* Leadership cards */}

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {leadership.map((person, index) => (

              <div key={person.name}>

                <article className="group h-full overflow-hidden rounded-[1.5rem] border border-brand-navy/10 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">

                  {/* Portrait */}

                  <div className="relative aspect-[3/4] overflow-hidden bg-brand-bg">

                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />

                    {/* Subtle image overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

                  </div>


                  {/* Content */}

                  <div className="flex flex-col p-6 sm:p-7">

                    <div>

                      {/* Gold accent */}

                      <div className="mb-4 h-0.5 w-8 rounded-full bg-brand-gold transition-all duration-300 group-hover:w-12" />

                      {/* Name */}

                      <h3 className="text-xl font-bold leading-tight text-brand-navy">
                        {person.name}
                      </h3>

                      {/* Role */}

                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] leading-5 text-brand-teal">
                        {person.role}
                      </p>

                      {/* Description */}

                      <p className="mt-5 text-sm leading-7 text-gray-600">
                        {person.description}
                      </p>

                    </div>

                  </div>

                </article>

              </div>

            ))}

          </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-brand-navy/10 bg-white px-6 py-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold/10">

                  <Award
                    className="h-5 w-5 text-brand-gold"
                    strokeWidth={1.7}
                  />

                </div>

                <div>

                  <p className="text-sm font-semibold text-brand-navy">
                    Guided by experience.
                  </p>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Leadership, governance and clinical expertise working together.
                  </p>

                </div>

              </div>


              <Link
                href="/doctors"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-navy"
              >
                Meet our medical team

                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

            </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="bg-white px-6 py-24 sm:py-28 lg:px-8">

        <div className="mx-auto max-w-7xl">

            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

              <div>

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-brand-gold" />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
                    A Glimpse Inside
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl">
                  See HealthFirst for yourself.
                </h2>

              </div>

              <p className="max-w-md text-sm leading-6 text-gray-500">
                Real spaces. Real people. Real care. We believe patients
                should know where they are coming before they arrive.
              </p>

            </div>


          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {gallery.map((item, index) => (

              <div key={item.image}>

                <div
                  className={`group relative overflow-hidden rounded-2xl ${
                    index === 0
                      ? "h-[420px] md:col-span-2"
                      : "h-[420px]"
                  }`}
                >

                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">

                    <span className="text-sm font-medium text-white">
                      {item.alt}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">

                      <ArrowUpRight className="h-4 w-4" />

                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-brand-navy px-6 py-20 sm:py-24 lg:px-8">

        <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                  Your Health. Our Priority.
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                  When you need care, you deserve a team you can trust.
                </h2>

              </div>


              <div className="flex flex-wrap gap-3">

                <Link
                  href="/appointment"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Book an Appointment

                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Contact HealthFirst
                </Link>

              </div>

            </div>

        </div>

      </section>

    </main>
  );
}