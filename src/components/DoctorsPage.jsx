"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  CalendarCheck,
  Check,
  Phone,
  Search,
  Stethoscope,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const doctors = [
  {
    name: "Dr. Rohit Bhargava",
    category: "Radiology",
    qualification:
      "MBBS, MD (Radiodiagnosis) PGIMS Rohtak | Specialist Radiologist",
    role: "Senior Consultant & Head of Radiology",
    specialty: "Radiodiagnosis & Interventional Radiology",
    experience: "Advanced Imaging & Diagnostics",
    description:
      "Specialist in 1.5 Tesla MRI, spiral CT scans, 3D/4D ultrasound, Color Doppler, Mammography, and image-guided interventional procedures (USG & CT guided).",
    expertise: [
      "1.5T MRI & High-Speed CT",
      "Color Doppler & 3D/4D USG",
      "Image-Guided Interventions",
    ],
    photo: "/images/doctors/Doc-Rohit-Bhargawa.jpeg",
  },

  {
    name: "Dr. Neha Mehta",
    category: "IVF & Fertility",
    qualification:
      "MBBS, MS (Obs & Gynaecology) SMS Medical College Jaipur | IVF Specialist",
    role: "Consultant IVF & Fertility Specialist",
    specialty:
      "Infertility, IVF & Reproductive Medicine / Gynaecology",
    experience: "Fertility & Reproductive Health",
    description:
      "Specialist in assisted reproductive technologies (ART), IVF, ICSI, and high-risk pregnancy care. Combines evidence-based protocols with personalized compassionate care.",
    expertise: [
      "IVF & ICSI Procedures",
      "Controlled Ovarian Stimulation",
      "High-Risk Pregnancy Care",
    ],
    photo: "/images/doctors/Doc-Neha-Mehta.jpeg",
  },

  {
    name: "Dr. Dalimi Mushahary",
    category: "Obstetrics & Gynaecology",
    qualification:
      "MBBS, MS (Obstetrics & Gynaecology) — VMMC & Safdarjung Hospital, AIIMS New Delhi, LHMC",
    role: "Consultant Obstetrician & Gynaecologist",
    specialty: "Obstetrics & Gynaecological Surgeries",
    experience: "Maternal & Women's Health",
    description:
      "Extensive expertise trained at premier national medical institutes in comprehensive women's wellness, high-risk obstetric deliveries, laparoscopic gynaecological surgeries, and fertility management.",
    expertise: [
      "High-Risk Pregnancies",
      "Emergency Obstetric Care",
      "Gynaecological Surgeries",
    ],
    photo: "/images/doctors/Doc-Dalimi.jpeg",
  },

  {
    name: "Dr. Akshay Yadav",
    category: "Critical Care",
    qualification:
      "MBBS, MD (Anaesthesia) — VMMC & Safdarjung Hospital New Delhi",
    role: "Consultant Anaesthesiologist & Critical Care Specialist",
    specialty: "Anaesthesia & Intensive Critical Care Unit (ICU)",
    experience: "Critical Care & Resuscitation",
    description:
      "Expertise in high-risk perioperative anesthesia, advanced airway management, ECMO, mechanical ventilation, and Continuous Renal Replacement Therapy (CRRT) in modern ICUs.",
    expertise: [
      "Advanced Airway & Ventilation",
      "Trauma & Critical ICU Care",
      "Continuous Renal Therapy (CRRT)",
    ],
    photo: "/images/doctors/Doc-Akshay-yadav.jpeg",
  },

{
  name: "Dr. Shahiq Ahmed",
  category: "Surgery",
  qualification:
    "MBBS, MS, FMBS, FIAGES, FALS (Colorectal), FALS (Hernia), FMAS, DMAS",
  role: "General, Laparoscopic, Bariatric & Robotic Surgeon",
  specialty:
    "General, Laparoscopic, Bariatric & Robotic Surgery",
  experience: "9+ Years of Surgical Experience",
  description:
    "General and advanced surgeon with 9+ years of surgical experience, specializing in minimally invasive, laparoscopic, bariatric and robotic procedures with a focus on faster recovery and patient-centred care.",
  expertise: [
    "Laparoscopic & Minimally Invasive Surgery",
    "Bariatric & Robotic Surgery",
    "General & Advanced Surgery",
  ],
  photo: "/images/doctors/Doc-Shahiq-Ahmed.jpeg",
},

  {
    name: "Dr. Saurabh Gadi",
    category: "Department of Orthopaedics",
    qualification:
      "MBBS, MS Orthopaedics, FIAAS, FISS",
    role: "Consultant Orthopaedics & Joint Replacement Specialist",
    specialty:
      "Orthopaedics & Joint Replacement",
    experience: "Sports Injuries & Joint Replacement",
    description:
      "Expertise in sports injuries, joint and shoulder conditions, spine care, and knee, hip & shoulder replacement procedures, with a focus on restoring mobility and reducing pain.",
    expertise: [
      "Sports Injury and Ligament Reconstruction",
      "Joint Preservation and Replacement Surgery",
      "Fracture and Complex trauma",
      "Limb lengthening and Deformity",
      "Arthritis",
      "Paediatric Orthopaedics",
      "Spine Surgery",
      "Shoulder Surgery",
    ],
    photo: "/images/doctors/Doc-Saurabh-Gadi.jpeg",
  },
];

const categories = [
  "All Doctors",
  "Surgery",
  "Radiology",
  "IVF & Fertility",
  "Obstetrics & Gynaecology",
  "Critical Care",
];

export default function DoctorsPage() {
  const [activeCategory, setActiveCategory] = useState("All Doctors");
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesCategory =
      activeCategory === "All Doctors" ||
      doctor.category === activeCategory;

    const searchText = search.toLowerCase();

    const matchesSearch =
      doctor.name.toLowerCase().includes(searchText) ||
      doctor.specialty.toLowerCase().includes(searchText) ||
      doctor.category.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#fcfbf7]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-brand-navy">

        {/* Soft background glow */}
        <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-teal/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full border border-white/5" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full border border-brand-gold/10" />

        <div className="pointer-events-none absolute bottom-0 right-[25%] h-32 w-32 rounded-full bg-brand-gold/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">

          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">

            {/* Hero Content */}
            <Reveal className="max-w-3xl">

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brand-gold" />

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
                  Our Medical Team
                </p>
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Experienced hands.
                <br />

                <span className="text-brand-gold">
                  Compassionate care.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                Meet the experienced doctors and specialists who bring
                knowledge, expertise and compassionate care to every
                patient at HealthFirst Hospital.
              </p>

            </Reveal>

            {/* Hero Stats */}
            <Reveal
                className="relative flex min-h-[270px] flex-col justify-end"
                delay="0.15s"
                >
                {/* Decorative medical symbol */}
                <div className="pointer-events-none absolute right-8 top-0 flex h-40 w-40 items-center justify-center rounded-full border border-white/[0.06]">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border border-brand-gold/[0.10]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.035]">
                        <span className="text-4xl font-light text-white/[0.10]">
                        ✚
                        </span>
                    </div>
                    </div>
                </div>

                {/* Small floating message */}
                <div className="relative mb-5 ml-auto mr-1 w-fit rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_12px_rgba(240,180,41,0.7)]" />

                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold">
                        Care at a glance
                        </p>

                        <p className="mt-1 text-xs text-white/50">
                        Expertise when you need it.
                        </p>
                    </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="relative ml-auto grid grid-cols-2 gap-3">

                    <div className="animate-float rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm">
                    <p className="text-2xl font-bold text-white">
                        07+
                    </p>

                    <p className="mt-1 text-xs text-white/50">
                        Specialist Doctors
                    </p>
                    </div>

                    <div
                    className="animate-float rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm"
                    style={{ animationDelay: "0.35s" }}
                    >
                    <p className="text-2xl font-bold text-white">
                        24×7
                    </p>

                    <p className="mt-1 text-xs text-white/50">
                        Critical Care
                    </p>
                    </div>

                </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIRECTORY / FILTER
      ========================================================= */}
      <section className="relative border-b border-brand-navy/10 bg-white">

        {/* Very subtle background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(14,124,134,0.035),transparent_30%),radial-gradient(circle_at_90%_50%,rgba(240,180,41,0.04),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-5 lg:px-8">

          <Reveal>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              {/* Category Filters */}
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">

                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-brand-navy text-white shadow-sm"
                        : "border border-brand-navy/10 bg-white text-gray-500 hover:border-brand-gold/40 hover:text-brand-navy"
                    }`}
                  >
                    {category}
                  </button>
                ))}

              </div>

              {/* Slick Search */}
              <div className="relative w-full shrink-0 lg:w-72">

                <div className="pointer-events-none absolute inset-y-0 left-1 flex items-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy shadow-sm">
                    <Search
                      className="h-3.5 w-3.5 text-white"
                      strokeWidth={2}
                    />
                  </span>
                </div>

                <input
                  type="text"
                  placeholder="Search doctors or speciality..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-11 w-full rounded-full border border-brand-navy/10 bg-[#f7f9fb] pl-12 pr-5 text-sm font-medium text-brand-navy outline-none transition-all duration-300 placeholder:text-gray-400 hover:border-brand-navy/20 hover:bg-white focus:border-brand-gold/50 focus:bg-white focus:ring-4 focus:ring-brand-gold/10"
                />

              </div>

            </div>

          </Reveal>

        </div>
      </section>

      {/* =========================================================
          DOCTORS
      ========================================================= */}
      <section className="relative overflow-hidden px-6 pb-20 pt-9 sm:pb-24 sm:pt-10 lg:px-8">

        {/* Premium subtle background */}
        <div className="pointer-events-none absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-brand-teal/[0.035] blur-3xl" />

        <div className="pointer-events-none absolute -right-48 top-[40%] h-[500px] w-[500px] rounded-full bg-brand-gold/[0.035] blur-3xl" />

        <div className="pointer-events-none absolute left-[40%] top-[55%] h-64 w-64 rounded-full bg-brand-bg/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* Doctor Cards */}
          <div className="grid gap-7 lg:grid-cols-2">

            {filteredDoctors.map((doctor, index) => (
              <Reveal
                key={doctor.name}
                delay={`${Math.min(index * 0.08, 0.4)}s`}
              >

                <article className="group overflow-hidden rounded-[1.75rem] border border-brand-navy/10 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30 hover:shadow-[0_20px_55px_rgba(15,23,42,0.08)]">

                  {/* =================================================
                      TOP / PHOTO AREA
                  ================================================= */}
                  <div className="relative bg-[#f4f8fb] px-6 pt-7 sm:px-8">

                    <div className="flex flex-col items-center">

                      {/* Circular Portrait */}
                      <div className="relative h-32 w-32 overflow-hidden rounded-full border-[3px] border-[#0794d2] bg-white shadow-[0_12px_35px_rgba(14,124,134,0.14)] sm:h-36 sm:w-36">

                        <Image
                          src={doctor.photo}
                          alt={doctor.name}
                          fill
                          sizes="144px"
                          className="object-cover"
                        />

                      </div>

                      {/* Experience Badge */}
                      <div className="mt-5 rounded-full bg-[#e1f2fb] px-4 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.08em] text-[#0878b6]">
                        {doctor.experience}
                      </div>

                      {/* Name */}
                      <h3 className="mt-4 text-center text-2xl font-bold text-brand-navy">
                        {doctor.name}
                      </h3>

                      {/* Role */}
                      <p className="mt-2 max-w-md text-center text-sm font-semibold leading-6 text-[#d97800]">
                        {doctor.role}
                      </p>

                      {/* Specialty */}
                      <div className="mt-4 w-full max-w-lg rounded-xl border border-[#9bdcff] bg-[#eff9ff] px-5 py-3 text-center text-sm font-semibold leading-6 text-[#0878b6]">
                        {doctor.specialty}
                      </div>

                    </div>

                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}
                  <div className="px-6 pb-7 pt-6 sm:px-8">

                    {/* Qualification */}
                    <div className="text-center">
                      <p className="text-sm leading-6 text-[#94532f]">
                        {doctor.qualification}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="mt-5 text-sm leading-7 text-gray-600">
                      {doctor.description}
                    </p>

                    {/* Divider */}
                    <div className="my-6 h-px bg-brand-gold/20" />

                    {/* Expertise */}
                    <div>

                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-teal">
                        Areas of Expertise
                      </p>

                      <div className="space-y-3">

                        {doctor.expertise.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3"
                          >

                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-bg">

                              <Check
                                className="h-3 w-3 text-brand-teal"
                                strokeWidth={2.5}
                              />

                            </span>

                            <span className="text-sm font-medium text-brand-navy/80">
                              {item}
                            </span>

                          </div>
                        ))}

                      </div>

                    </div>

                    {/* Bottom Action */}
                    <div className="mt-7">

                      <Link
                        href={`/appointment?doctor=${encodeURIComponent(doctor.name)}`}
                        className="group/appointment flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-navyDeep"
                      >

                        <CalendarCheck
                          className="h-4 w-4"
                          strokeWidth={1.8}
                        />

                        Book Appointment

                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-300 group-hover/appointment:-translate-y-0.5 group-hover/appointment:translate-x-0.5"
                          strokeWidth={2}
                        />

                      </Link>

                    </div>

                  </div>

                </article>

              </Reveal>
            ))}

          </div>

          {/* No results */}
          {filteredDoctors.length === 0 && (
            <Reveal>

              <div className="rounded-2xl border border-brand-navy/10 bg-white px-6 py-16 text-center">

                <Stethoscope className="mx-auto h-8 w-8 text-brand-teal/60" />

                <h3 className="mt-4 text-lg font-semibold text-brand-navy">
                  No doctors found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try another name or specialty.
                </p>

              </div>

            </Reveal>
          )}

        </div>
      </section>

      {/* =========================================================
          APPOINTMENT CTA
      ========================================================= */}
      <section className="px-6 pb-20 sm:pb-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="relative overflow-hidden rounded-[2rem] bg-brand-navy px-7 py-12 sm:px-10 lg:px-14 lg:py-14">

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-brand-teal/10 blur-3xl" />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                <div className="max-w-2xl">

                  <div className="flex items-center gap-3">

                    <span className="h-px w-8 bg-brand-gold" />

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                      Your Care Starts Here
                    </p>

                  </div>

                  <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                    Ready to speak with a doctor?
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">
                    Schedule an appointment with one of our specialists
                    and take the next step towards better healthcare.
                  </p>

                </div>

                <div className="flex flex-col gap-3 sm:flex-row">

                  <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-3.5 text-sm font-bold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >

                    <CalendarCheck
                      className="h-4 w-4"
                      strokeWidth={2}
                    />

                    Book Appointment

                    <ArrowUpRight
                      className="h-4 w-4"
                      strokeWidth={2}
                    />

                  </Link>

                  <Link
                    href="tel:+911234567890"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/5"
                  >

                    <Phone
                      className="h-4 w-4"
                      strokeWidth={1.8}
                    />

                    Call Hospital

                  </Link>

                </div>

              </div>
            </div>

          </Reveal>

        </div>
      </section>

    </main>
  );
}