import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Decorative background element */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-brand-teal/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-brand-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* =========================
              LEFT — CONTENT
          ========================== */}
          <div className="max-w-xl">

            {/* Section Label */}
            <div className="flex items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
                About Us
              </p>
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-5xl lg:text-[3.25rem]">
              Healthcare that puts the{" "}
              <span className="text-brand-gold">
                patient first.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
              {siteConfig.name} {siteConfig.nameSub} has been established
              with a clear vision of bringing quality, comprehensive and
              accessible healthcare closer to the community. Our approach is
              centred around the needs of every patient, bringing
              multidisciplinary and specialised care together under one roof
              while creating an environment built on trust, compassion and
              personalised attention.
            </p>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-teal transition-colors duration-300 hover:text-brand-navy"
              >
                <span>Read More</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* =========================
              RIGHT — IMAGE GALLERY
          ========================== */}
          <div className="relative">

            {/* Main image grid */}
            <div className="grid grid-cols-2 gap-4">

              {/* Main Image */}
              <div className="group relative row-span-2 min-h-[430px] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/about-healthFirst-dayview.jpeg"
                  alt="HealthFirst Hospital"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent" />
              </div>

              {/* Surgical Room */}
              <div className="group relative h-52 overflow-hidden rounded-3xl shadow-lg sm:h-60">
                <Image
                  src="/images/about-surgical-room.jpeg"
                  alt="HealthFirst Hospital surgical room"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Reception */}
              <div className="group relative h-52 overflow-hidden rounded-3xl shadow-lg sm:h-60">
                <Image
                  src="/images/about-desk.jpg"
                  alt="HealthFirst Hospital reception"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* =========================
                FLOATING PROMISE CARD
            ========================== */}
            <div
              className="
                absolute
                -bottom-7
                left-5
                z-10
                w-[calc(100%-2.5rem)]
                max-w-[330px]
                rounded-2xl
                border
                border-white/70
                bg-white/95
                px-6
                py-5
                shadow-[0_15px_45px_rgba(15,23,42,0.15)]
                backdrop-blur-md
                animate-float
                sm:left-8
                sm:w-[330px]
              "
            >
              <div className="absolute left-0 top-5 h-10 w-1 rounded-r-full bg-brand-gold" />

              <p className="pl-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-teal">
                Our Promise
              </p>

              <p className="mt-1 pl-2 text-base font-bold leading-snug text-brand-navy">
                Compassionate care. Every patient.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}