import {
  CalendarCheck,
  UserRound,
  Stethoscope,
  Syringe,
  HeartPulse,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";

const steps = [
  { icon: CalendarCheck, label: "Book Appointment" },
  { icon: UserRound, label: "Meet Doctor" },
  { icon: Stethoscope, label: "Diagnosis" },
  { icon: Syringe, label: "Treatment" },
  { icon: HeartPulse, label: "Recovery" },
  { icon: RefreshCcw, label: "Follow-up" },
];

export default function PatientJourney() {
  return (
    <section className="relative overflow-hidden bg-brand-bg px-6 py-20 sm:py-24">
      
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-brand-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-teal/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
              Your Health Journey
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
            Care that stays with you.
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
            From your first appointment to continued follow-up, we make every
            step of your healthcare journey simple and supported.
          </p>
        </div>

        {/* Journey */}
        <div className="mt-14 overflow-x-auto pb-4 scrollbar-hide">
          <div className="relative flex min-w-[1050px] items-start justify-between">

            {steps.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className="group relative flex w-[150px] flex-col items-center text-center"
              >
                {/* Step number */}
                <span className="absolute -top-5 text-[10px] font-bold tracking-[0.15em] text-brand-navy/30">
                  0{i + 1}
                </span>

                {/* Icon */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-brand-bg bg-brand-navy shadow-[0_8px_25px_rgba(11,36,71,0.12)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-brand-gold group-hover:shadow-[0_12px_30px_rgba(240,180,41,0.20)]">
                  <Icon
                    className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-brand-navy"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Card */}
                <div className="mt-5 w-full rounded-2xl border border-brand-navy/10 bg-white px-4 py-5 shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-gold/30 group-hover:shadow-[0_16px_35px_rgba(15,23,42,0.09)]">
                  <p className="text-sm font-semibold leading-5 text-brand-navy">
                    {label}
                  </p>

                  <div className="mx-auto mt-3 h-0.5 w-6 rounded-full bg-brand-gold/60 transition-all duration-300 group-hover:w-10" />
                </div>

                {/* Premium Arrow */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-8 top-[17px] z-20 flex h-7 w-7 items-center justify-center rounded-full border border-brand-navy/10 bg-white shadow-[0_4px_14px_rgba(15,23,42,0.08)] transition-all duration-300 group-hover:border-brand-gold/30 group-hover:shadow-[0_6px_18px_rgba(15,23,42,0.12)]">
                    <ArrowRight
                      className="h-3.5 w-3.5 text-brand-navy/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-gold"
                      strokeWidth={2}
                    />
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>

        {/* Mobile hint */}
        <p className="mt-2 text-center text-xs text-gray-400 sm:hidden">
          Swipe to explore your healthcare journey
        </p>
      </div>
    </section>
  );
}