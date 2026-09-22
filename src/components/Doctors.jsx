import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";

const doctors = [
  {
    name: "Dr. Dalimi Mushahary",
    qualification: "MBBS MS,DNB",
    specialty: "Obstetrics and Gynecology",
    opd: "Mon - Sat",
    timing: "9:00 AM - 5:00 PM",
    photo: "/images/doctors/Doc-Dalimiii.jpeg",
  },
  {
    name: "Dr. Akshay Yadav",
    qualification: "MBBS MD",
    specialty: "Anesthesia and Critical Care",
    opd: "Mon - Sat",
    timing: "9:00 AM - 5:00 PM",
    photo: "/images/doctors/Doc-Akshay-yadavvv.jpeg",
  },
  {
    name: "Dr. Saurabh Gadi",
    qualification: "MBBS MS",
    specialty: "Orthopedics",
    opd: "Mon - Sat",
    timing: "5:00 PM - 7:00 PM",
    photo: "/images/doctors/Doc-Saurabh-Gadi.jpeg",
  },
  {
    name: "Dr. Rohit Bhargava",
    qualification: "MBBS MD",
    specialty: "Radiology",
    opd: "Mon - Sat",
    timing: "9:00 AM - 5:00 PM",
    photo: "/images/doctors/Doc-Rohit-Bhargawa.jpeg",
  },
];

export default function Doctors() {
  return (
    <section className="bg-white px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brand-gold" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
                Our Doctors
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl">
              Meet Our Expert Doctors
            </h2>

            <p className="mt-3 text-base text-gray-500">
              Compassionate experts. Dedicated to your health.
            </p>
          </div>

          <Link
            href="/doctors"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-navy"
          >
            <span className="border-b border-brand-navy/20 pb-1 transition-colors duration-300 group-hover:border-brand-gold">
              View All Doctors
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-navy/10 bg-brand-bg transition-all duration-300 group-hover:border-brand-gold/40 group-hover:bg-brand-gold">
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </span>
          </Link>
        </div>

        {/* Doctor Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doc) => (
            <article
              key={doc.name}
              className="group overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/30 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]"
            >
              {/* Doctor Photo */}
              <div className="relative overflow-hidden bg-brand-bg p-3">
                <div className="relative overflow-hidden rounded-xl bg-white">
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="h-70 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Bottom subtle overlay */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-navy/25 to-transparent" />

                  {/* Specialty Badge */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-flex max-w-full rounded-full border border-white/20 bg-brand-navy/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] leading-4 text-white shadow-lg backdrop-blur-sm">
                      {doc.specialty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Doctor Information */}
              <div className="p-5">

                {/* Gold accent */}
                <div className="mb-3 h-0.5 w-7 rounded-full bg-brand-gold transition-all duration-300 group-hover:w-11" />

                <h3 className="text-lg font-bold leading-tight text-brand-navy">
                  {doc.name}
                </h3>

                <p className="mt-1 text-xs font-medium tracking-wide text-gray-400">
                  {doc.qualification}
                </p>

                {/* Experience / OPD */}
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-brand-navy/10 pt-4">

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">
                      OPD
                    </p>

                    <p className="mt-1 text-sm font-semibold text-brand-navy">
                      {doc.opd}
                    </p>
                  </div>
                </div>

                {/* Timing */}
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-brand-bg px-3 py-2.5">
                  <Clock3
                    className="h-4 w-4 shrink-0 text-brand-gold"
                    strokeWidth={1.8}
                  />

                  <span className="text-xs font-medium text-gray-600">
                    {doc.timing}
                  </span>
                </div>

                {/* Buttons */}
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <Link
                    href="/doctors"
                    className="flex items-center justify-center rounded-full border border-brand-navy/15 px-3 py-2.5 text-xs font-semibold text-brand-navy transition-all duration-300 hover:border-brand-navy/30 hover:bg-brand-bg"
                  >
                    View Profile
                  </Link>

                  <Link
                    href={`/appointment?doctor=${encodeURIComponent(doc.name)}`}
                    className="group/book flex items-center justify-center gap-1 rounded-full bg-brand-gold px-3 py-2.5 text-xs font-semibold text-brand-navy transition-all duration-300 hover:bg-brand-navyDeep"
                  >
                    Book Appointment

                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/book:-translate-y-0.5 group-hover/book:translate-x-0.5"
                      strokeWidth={2}
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}