import {
  Users,
  Clock,
  HeartPulse,
  Building2,
  Baby,
  Pill,
  FlaskConical,
} from "lucide-react";

const stats = [
  { icon: Users, label: "Experienced Doctors" },
  { icon: Clock, label: "24x7 Emergency Care" },
  { icon: HeartPulse, label: "Advanced Critical Care" },
  { icon: Building2, label: "Modular OT" },
  { icon: Baby, label: "ICU & NICU" },
  { icon: Pill, label: "24x7 Pharmacy" },
  { icon: FlaskConical, label: "24x7 Lab" },
];

export default function StatsBar() {
  return (
    <section className="bg-brand-bg py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-brand-navy/15 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
            {stats.map(({ icon: Icon, label }, index) => (
              <div
                key={label}
                className="group relative flex min-h-[120px] flex-col items-center justify-center px-3 py-5 text-center transition-all duration-300 hover:bg-brand-bg/50 sm:min-h-[130px]"
              >
                {/* Short separator */}
                {index > 0 && (
                  <span className="absolute left-0 top-1/2 hidden h-1/2 -translate-y-1/2 border-l border-brand-navy/15 lg:block" />
                )}

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-bg text-brand-navy transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-brand-gold/15">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>

                {/* Label */}
                <p className="mt-3 max-w-[130px] text-xs font-semibold leading-5 text-brand-navy/80 transition-colors duration-300 group-hover:text-brand-navy sm:text-sm">
                  {label}
                </p>

                {/* Gold accent */}
                <span className="mt-2 h-0.5 w-0 rounded-full bg-brand-gold transition-all duration-300 group-hover:w-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}