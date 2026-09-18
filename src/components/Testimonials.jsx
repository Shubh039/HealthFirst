import { Star } from "lucide-react";

const testimonials = [
  { name: "Neha Gupta", quote: "The doctors are very experienced and the staff is extremely helpful. My mother received excellent care at HealthFirst Hospital.", photo: "/images/patients/patient-1.jpg" },
  { name: "Rajesh Kumar", quote: "From the emergency department to the ICU, the care was outstanding. We are truly grateful to the entire team.", photo: "/images/patients/patient-2.jpg" },
  { name: "Rajesh Kumar", quote: "From the emergency department to the ICU, the care was outstanding. We are truly grateful to the entire team.", photo: "/images/patients/patient-3.jpg" },
  { name: "Pooja Sinha", quote: "The hospital is clean, well-equipped, and the staff is very kind. Highly recommended.", photo: "/images/patients/patient-4.jpg" },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
            Patient Stories
          </p>
          <h2 className="mt-2 text-3xl font-bold text-brand-navy">Trusted by Thousands</h2>
          <p className="mt-2 text-gray-500">Real people. Real stories. Better health.</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-brand-navy">4.8/5</p>
          <div className="flex gap-0.5 text-brand-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-brand-gold" />
            ))}
          </div>
          <p className="text-xs text-gray-500">Based on 2,500+ reviews</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-xl border border-gray-100 p-5 shadow-sm">
            <p className="text-sm text-gray-600">"{t.quote}"</p>
            <div className="mt-4 flex items-center gap-3">
              {/* TODO: replace with real patient photos, or remove img and keep initials */}
              <img src={t.photo} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-brand-navy">{t.name}</p>
                <p className="text-xs text-gray-500">Patient</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}