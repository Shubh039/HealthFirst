import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Specialities", href: "/specialities" },
  { label: "Services & Facilities", href: "#" },
  { label: "Doctors", href: "/doctors" },
  { label: "Blogs", href: "#" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center"
        >
          <div className="relative h-[80px] w-[175px] shrink-0">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              fill
              priority
              sizes="175px"
              className="object-contain transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative py-2 text-[13px] font-medium text-gray-600 transition-colors duration-200 hover:text-brand-navy"
            >
              {link.label}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-brand-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-2.5 md:flex">

          {/* Emergency */}
          <Link
            href="#"
            className="group flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/[0.06] px-4 py-2.5 text-[13px] font-semibold text-brand-red transition-all duration-300 hover:border-brand-red/30 hover:bg-brand-red/[0.10]"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-white">
              <Phone
                className="h-3 w-3"
                strokeWidth={2.5}
              />
            </span>

            <span>Emergency 24×7</span>
          </Link>

          {/* Appointment */}
          <Link
            href="/appointment"
            className="group flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 text-[13px] font-semibold text-brand-navy shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <span>Book Appointment</span>

            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>
      </div>
    </header>
  );
}