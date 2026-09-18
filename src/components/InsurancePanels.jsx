const partners = ["Bajaj Allianz", "HDFC ERGO", "Star Health", "TATA AIG", "United Healthcare", "Max Bupa Health Insurance"];

export default function InsurancePanels() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal">Our Panels</p>
      <h2 className="mt-2 text-2xl font-bold text-brand-navy">
        Insurance / TPA / Corporate / Institutional Panels
      </h2>
      <p className="mt-2 text-gray-500">We work with leading insurance, TPA and corporate partners to make healthcare accessible for all.</p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        {partners.map((name) => (
          <div key={name} className="flex h-14 flex-1 min-w-[150px] items-center justify-center rounded-lg bg-gray-100 px-4 text-xs font-medium text-gray-500">
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}