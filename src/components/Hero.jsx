import Link from "next/link";
import { Phone, Search } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hospital exterior */}
      <img
        src="/images/hero-bg.png"
        alt={`${siteConfig.name} building exterior`}
        className="
          absolute inset-0 h-full w-full object-cover
          object-[72%_center]
          md:object-center
        "
        fetchPriority="high"
      />

      {/* Dark overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-brand-navy/95
          via-brand-navy/70
          to-brand-navy/20
        "
      />

      {/* Hero content */}
      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-2xl">
          {/* Welcome line */}
          <p className="animate-hero-fade text-sm font-medium uppercase tracking-[0.18em] text-white/80">
            Welcome to {siteConfig.name} {siteConfig.nameSub}
          </p>

          {/* Main heading — typing animation */}
          <h1 className="mt-4 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            <span className="typing-line typing-line-1 block">
              Every Patient.
            </span>

            <span className="typing-line typing-line-2 mt-2 block text-brand-gold">
              Every Moment.
            </span>
          </h1>

          {/* Description — fades in after typing + cursor finish */}
          <p className="animate-description mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
            Comprehensive healthcare backed by experienced doctors, advanced
            technology and compassionate care.
          </p>

          {/* CTA buttons — fades in last */}
          <div className="animate-buttons mt-8 flex flex-wrap gap-4">
            {/* Book Appointment */}
            <Link
              href="/appointment"
              className="rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy shadow-lg shadow-brand-gold/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-gold/30"
            >
              Book Appointment →
            </Link>

            {/* Emergency */}
            <Link
              href="tel:+911135650483"
              className="emergency-button flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-red/40"
            >
              <Phone className="h-4 w-4" />
              Emergency 24x7
            </Link>

            {/* Find a Doctor */}
            <Link
              href="/doctors"
              className="group w-50 inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/20 hover:shadow-lg hover:shadow-black/10"
            >
              <Search className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Find a Doctor</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}