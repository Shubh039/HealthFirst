"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowUpRight, Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="group flex items-center">
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

        {/* Navigation — desktop */}
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

        {/* Actions — desktop */}
        <div className="hidden items-center gap-2.5 md:flex">
          <Link
            href="#"
            className="group flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/[0.06] px-4 py-2.5 text-[13px] font-semibold text-brand-red transition-all duration-300 hover:border-brand-red/30 hover:bg-brand-red/[0.10]"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-white">
              <Phone className="h-3 w-3" strokeWidth={2.5} />
            </span>
            <span>Emergency 24×7</span>
          </Link>

          <Link
            href="/appointment"
            className="group flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 text-[13px] font-semibold text-brand-navy shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <span>Book Appointment</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-md text-brand-navy lg:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <div className="border-t border-brand-navy/10 bg-white px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-brand-bg hover:text-brand-navy"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-3 border-t border-brand-navy/10 pt-4">
            <Link
              href="tel:+911135650483"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/[0.06] px-4 py-3 text-sm font-semibold text-brand-red"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-white">
                <Phone className="h-3 w-3" strokeWidth={2.5} />
              </span>
              <span>Emergency 24×7</span>
            </Link>

            <Link
              href="/appointment"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-navy shadow-sm"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}