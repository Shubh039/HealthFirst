import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { siteConfig } from "@/config/site";

/* =========================================
   HOSPITAL LOCATION
========================================= */

const hospitalLocation =
  "HealthFirst Hospital, Pillar no. 102, METRO STATION GATE, F1, 2, Wazirabad Rd, near Bhajanpura, Khazoori Khas, Delhi, 110094";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(hospitalLocation);

const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(hospitalLocation) +
  "&output=embed";

/* =========================================
   FOOTER LINKS
========================================= */

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Specialities", href: "/specialities" },
  { label: "Services & Facilities", href: "#" },
  { label: "Blogs", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navyDeep text-white">

      {/* =====================================
          SUBTLE BACKGROUND GLOW
      ===================================== */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-teal/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-48 -left-40 h-96 w-96 rounded-full bg-brand-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 sm:pt-20 lg:px-8">

        {/* =====================================
            MAIN FOOTER
        ===================================== */}

        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.35fr_0.75fr_1fr_1.15fr]">

          {/* =================================
              BRAND
          ================================= */}

          <div className="max-w-sm">

            <Link href="/" className="inline-flex items-center">
              <div className="relative h-16 w-52">
                <Image
                  src={siteConfig.logoWhite}
                  alt={`${siteConfig.name} logo`}
                  fill
                  sizes="208px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-white/55">
              Comprehensive healthcare backed by experienced doctors,
              advanced technology and compassionate care.
            </p>

            {/* Trust badge */}

            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5">

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold/10">
                <ShieldCheck
                  className="h-4 w-4 text-brand-gold"
                  strokeWidth={1.8}
                />
              </span>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
                  Our Promise
                </p>

                <p className="text-sm font-medium text-white/80">
                  Your Health, Our Priority
                </p>
              </div>

            </div>
          </div>

          {/* =================================
              EXPLORE
          ================================= */}

          <div>

            <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
              Explore
            </p>

            <ul className="space-y-3.5">

              {quickLinks.map((link) => (
                <li key={link.label}>

                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-200 hover:text-white"
                  >

                    <span className="h-px w-0 bg-brand-gold transition-all duration-300 group-hover:w-3" />

                    {link.label}

                  </Link>

                </li>
              ))}

            </ul>
          </div>

          {/* =================================
              CONTACT
          ================================= */}

          <div>

            <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
              Contact
            </p>

            <div className="space-y-5">

              {/* Location */}

              <div className="flex gap-3">

                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold"
                  strokeWidth={1.7}
                />

                <div>

                    <p className="mt-1 text-sm leading-6 text-white/45">
                      F1, Wazirabad rd, Khajuri Khas,  
                      <br />
                      near Bhajanpura Metro station 
                      <br />
                      Gate no. 2, Pillar no. 102,
                      <br />
                      Delhi – 110094
                    </p>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-brand-gold transition-colors hover:text-white"
                  >
                    Get directions
                    <ArrowUpRight className="h-3 w-3" />
                  </a>

                </div>
              </div>

              {/* Email */}

              <div className="flex items-center gap-3">

                <Mail
                  className="h-4 w-4 shrink-0 text-brand-gold"
                  strokeWidth={1.7}
                />

                <a
                  href="mailto:info@healthfirsthospitals.co.in"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  info@healthfirsthospitals.co.in
                </a>

              </div>

              {/* Phone */}

              <div className="flex items-center gap-3">

                <Phone
                  className="h-4 w-4 shrink-0 text-brand-gold"
                  strokeWidth={1.7}
                />

                <a
                  href="tel:+917678368307"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  +91 76783 68307
                </a>

              </div>

            </div>
          </div>

          {/* =================================
              EMERGENCY
          ================================= */}

          <div>

            <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
              Emergency Care
            </p>

            <div className="rounded-2xl border border-brand-red/20 bg-brand-red/[0.06] p-5">

              <div className="flex items-center gap-3">

                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10">

                  <span className="absolute h-2.5 w-2.5 rounded-full bg-brand-red" />

                  <span className="absolute h-5 w-5 rounded-full border border-brand-red/30" />

                </span>

                <div>

                  <p className="text-sm font-semibold text-white">
                    Emergency 24×7
                  </p>

                  <p className="mt-0.5 text-xs text-white/45">
                    We're here when you need us.
                  </p>

                </div>

              </div>

              <a
                href="tel:+911135650483"
                className="mt-5 flex items-center justify-between rounded-xl bg-brand-red px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-red/20"
              >

                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Emergency
                </span>

                <ArrowUpRight className="h-4 w-4" />

              </a>

            </div>

            {/* Emergency timing */}

            <div className="mt-5 flex items-center gap-3">

              <Clock3
                className="h-4 w-4 text-brand-gold"
                strokeWidth={1.7}
              />

              <p className="text-xs text-white/45">
                Emergency & critical care available 24×7
              </p>

            </div>

          </div>
        </div>

        {/* =====================================
            LOCATION / MAP
        ===================================== */}

        <div className="border-b border-white/10 py-12 sm:py-14">

          <div className="grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] lg:grid-cols-[1fr_1.5fr]">

            {/* =================================
                LOCATION INFORMATION
            ================================= */}

            <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-7 bg-brand-gold" />

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
                    Find Us
                  </p>

                </div>

                <h3 className="mt-5 max-w-sm text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  We're here when you need us.
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
                  Visit HealthFirst Hospital for compassionate care,
                  advanced medical facilities and round-the-clock emergency
                  support.
                </p>

              </div>

              <div className="mt-8">

                <div className="flex gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gold/10">

                    <MapPin
                      className="h-4 w-4 text-brand-gold"
                      strokeWidth={1.8}
                    />

                  </div>

                  <div>

                    <p className="text-sm font-semibold text-white">
                      HealthFirst Hospital
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/45">
                      F1, Wazirabad rd, Khajuri Khas,  
                      <br />
                      near Bhajanpura Metro station 
                      <br />
                      Gate no. 2, Pillar no. 102,
                      <br />
                      Delhi – 110094
                    </p>

                  </div>

                </div>

                {/* Open Google Maps */}

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-gold/10"
                >
                  Open in Google Maps
                  <ExternalLink className="h-4 w-4" />
                </a>

              </div>

            </div>

            {/* =================================
                GOOGLE MAP
            ================================= */}

            <div className="relative min-h-[320px] overflow-hidden sm:min-h-[380px] lg:min-h-[420px]">

              <iframe
                src={googleMapsEmbedUrl}
                title="HealthFirst Hospital location"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map label */}

              <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/20 bg-brand-navy/90 px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-sm">
                HealthFirst Hospital
              </div>

            </div>

          </div>

        </div>

        {/* =====================================
            BRAND STATEMENT + SOCIAL
        ===================================== */}

        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <p className="text-lg font-semibold tracking-tight text-white/90 sm:text-xl">
              Every Patient. Every Moment.
            </p>

            <p className="mt-1 text-xs text-white/35">
              Compassionate care. Clinical excellence. Always.
            </p>

          </div>

          {/* Social */}

          <div className="flex items-center gap-3">

            <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">
              Follow us
            </span>

            <a
              href="https://www.instagram.com/healthfirsthospital"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/45 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/30 hover:bg-brand-gold/10 hover:text-brand-gold"
            >
              <FaInstagram className="h-4 w-4" />
            </a>

            <a
              href="https://www.facebook.com/share/1BCcdWdrwb/"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/45 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/30 hover:bg-brand-gold/10 hover:text-brand-gold"
            >
              <FaFacebook className="h-4 w-4" />
            </a>

          </div>

        </div>

        {/* =====================================
            COPYRIGHT
        ===================================== */}

        <div className="flex flex-col gap-3 border-t border-white/[0.07] py-5 text-[11px] text-white/30 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>

          <div className="flex gap-5">

            <Link
              href="#"
              className="transition-colors hover:text-white/60"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="transition-colors hover:text-white/60"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}