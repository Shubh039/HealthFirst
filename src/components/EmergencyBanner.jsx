import Link from "next/link";
import { Ambulance } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid overflow-hidden rounded-xl bg-brand-red lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-3 p-10">
          <div className="flex items-center gap-3">
            <Ambulance className="h-8 w-8 text-white" />
            <h3 className="text-xl font-bold text-white">
              Emergency & Critical Care
            </h3>
          </div>
          <p className="text-white/90">
            24x7 emergency services with a dedicated team, advanced life
            support and trauma care.
          </p>
          <Link
            href="#"
            className="mt-2 w-fit rounded-full border border-white px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-brand-red"
          >
            Learn More →
          </Link>
        </div>
        {/* TODO: replace with real operating-room/emergency-team photo */}
        <img
          src="/images/emergency-team.png"
          alt="Emergency care team"
          className="hidden h-full w-full object-cover lg:block"
        />
      </div>
    </section>
  );
}