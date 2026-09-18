import { Clock3 } from "lucide-react";

export default function AppointmentHero() {
  return (
    <section className="bg-brand-bg px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl text-center">

        {/* Eyebrow */}
        <div className="animate-fade-up flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-brand-gold" />

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">
            Book an Appointment
          </p>

          <span className="h-px w-8 bg-brand-gold" />
        </div>

        {/* Heading */}
        <h1 className="animate-fade-up-delay-1 mx-auto mt-5 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
          Your Health Comes First.
          <span className="mt-2 block text-brand-gold">
            Schedule Your Appointment Today.
          </span>
        </h1>

        {/* Description */}
        <p className="animate-fade-up-delay-2 mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
          Connect with our experienced doctors and take the first step
          towards better healthcare.
        </p>

        {/* Support */}
        <div className="animate-support-breathe animate-fade-up-delay-3 mt-6 flex items-center justify-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
            <Clock3 className="h-4 w-4 text-brand-teal" />
          </div>

          <p className="text-sm text-gray-500">
            <span className="font-semibold text-2xl text-brand-navy">
              24×7 Support Available
            </span>
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-9 h-px max-w-3xl bg-brand-navy/10" />

      </div>
    </section>
  );
}