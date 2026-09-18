"use client";
import { MapPin, Phone } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function ContactAppointment() {
  return (
    <section className="bg-brand-navyDeep px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold">Get In Touch</p>
          <h3 className="mt-2 text-2xl font-bold">We're Here for You</h3>
          <div className="mt-6 space-y-3 text-sm text-white/80">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Khajoori Khas – Wazirabad Road, North-East Delhi – 110094
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2 text-brand-red">
              <Phone className="h-4 w-4" /> Emergency 24x7: +91 98765 43211
            </p>
          </div>
          <div className="mt-6 flex gap-3">
            <FaInstagram className="h-5 w-5" />
            <FaFacebook className="h-5 w-5" />
        </div>
        </div>

        {/* This form currently just prevents a page reload — wire it to your API route later */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-xl bg-white p-6 text-gray-800"
        >
          <h4 className="mb-4 font-semibold text-brand-navy">Book an Appointment</h4>
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="Full Name" className="col-span-2 rounded-md border border-gray-200 px-3 py-2 text-sm sm:col-span-1" />
            <input placeholder="Phone Number" className="col-span-2 rounded-md border border-gray-200 px-3 py-2 text-sm sm:col-span-1" />
            <select className="col-span-2 rounded-md border border-gray-200 px-3 py-2 text-sm sm:col-span-1">
              <option>Select Speciality</option>
            </select>
            <input type="date" className="col-span-2 rounded-md border border-gray-200 px-3 py-2 text-sm sm:col-span-1" />
            <textarea placeholder="Message (Optional)" className="col-span-2 rounded-md border border-gray-200 px-3 py-2 text-sm" rows={2} />
          </div>
          <button type="submit" className="mt-4 w-full rounded-full bg-brand-gold py-2.5 text-sm font-medium text-brand-navy hover:opacity-90">
            Submit Request →
          </button>
        </form>

        {/* TODO: replace with real doctor photo */}
        <img
          src="/images/contact-doctor.png"
          alt="Doctor"
          className="hidden h-full w-full rounded-xl object-cover lg:block"
        />
      </div>
    </section>
  );
}