import Link from "next/link";

export default function SpecialitiesHero() {
  return (
    <section className="bg-brand-bg px-6 pb-16 pt-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-medium text-gray-500">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-navy">Specialities</span>
        </p>

        <div className="mt-4 flex items-center gap-3">
          <span className="h-px w-8 bg-brand-gold" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
            Our Specialities
          </p>
        </div>

        <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight text-brand-navy sm:text-5xl">
          Comprehensive Care Across 12 Specialities
        </h1>

        <p className="mt-4 max-w-xl text-gray-600">
          Expert diagnosis, advanced treatment and dedicated specialists —
          every department built around one goal: better patient outcomes.
        </p>
      </div>
    </section>
  );
}