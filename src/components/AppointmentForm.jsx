"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/Reveal";

const departments = [
  "Not sure",
  "Internal Medicine",
  "Obs & Gynae",
  "Orthopedics",
  "Pediatrics",
  "Neonatology",
  "General Surgery",
  "Anesthesia & Critical Care",
  "Gastroenterology",
  "Nephrology",
  "Urology",
  "Radiology",
  "IVF & Infertility",
];

const doctors = [
  "No preference",
  "Dr. Dalimi Mushahary",
  "Dr. Akshay Yadav",
  "Dr. Saurabh Gadi",
  "Dr. Rohit Bhargava",
  "Dr. Amit Singh",
  "Dr. Neha Mehta",
  "Dr. Shahiq Ahmed",
];

const timeSlots = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "3:00 PM - 5:00 PM",
  "5:00 PM - 7:00 PM",
];

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  department: "",
  doctor: "",
  reason: "",
  company: "", // honeypot field — real visitors never see or fill this
};

function getTodayString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function AppointmentForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const searchParams = useSearchParams();
  const preferredDoctor = searchParams.get("doctor");

  useEffect(() => {
    if (preferredDoctor) {
      setFormData((prev) => ({
        ...prev,
        doctor: preferredDoctor,
      }));
    }
  }, [preferredDoctor]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="grid overflow-hidden rounded-2xl shadow-xl lg:grid-cols-2">

        {/* =========================================================
            CONTACT SIDEBAR
        ========================================================== */}
        <Reveal
          className="flex flex-col justify-between gap-10 bg-brand-navy p-10 text-white"
          delay="0.1s"
        >
          <div className="space-y-8">

            {/* Call Us */}
            <Reveal delay="0.15s">
              <ContactItem
                icon={Phone}
                title="Call Us"
                lines={["General Enquiries"]}
                highlight="011-35650483"
              />
            </Reveal>

            {/* Email */}
            <Reveal delay="0.25s">
              <ContactItem
                icon={Mail}
                title="Email Us"
                lines={["For general enquiries"]}
                highlight="info@healthfirsthospital.com"
              />
            </Reveal>

            {/* WhatsApp */}
            <Reveal delay="0.35s">
              <ContactItem
                icon={FaWhatsapp}
                title="WhatsApp Helpline"
                lines={["Message us anytime"]}
                highlight="+91 76783 68307"
              />
            </Reveal>

            {/* Address */}
            <Reveal delay="0.45s">
              <ContactItem
                icon={MapPin}
                title="Visit Us"
                lines={[
                  "F 1, Wazirabad Rd,",
                  "Khajuri Khas Extension, Delhi",
                ]}
              />
            </Reveal>
          </div>

          {/* Working Hours */}
          <Reveal delay="0.55s">
            <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
              <Clock className="h-5 w-5 text-brand-gold" />

              <div>
                <p className="text-sm font-semibold">
                  Working Hours
                </p>

                <p className="text-xs text-white/70">
                  24 x 7 — We are always here for you!
                </p>
              </div>
            </div>
          </Reveal>
        </Reveal>


        {/* =========================================================
            APPOINTMENT FORM
        ========================================================== */}
        <div className="bg-white p-10">

          {/* Form Heading */}
          <Reveal>
            <h2 className="mt-2 text-center text-2xl font-bold uppercase text-brand-navy sm:text-3xl">
              Fill in the Details
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Please provide your information and we&apos;ll get back
              to you shortly with appointment confirmation.
            </p>
          </Reveal>


          {/* =====================================================
              SUCCESS MESSAGE
          ====================================================== */}
          {status === "success" ? (
            <Reveal className="mt-8">
              <div className="rounded-lg bg-green-50 p-6 text-sm leading-6 text-green-700">
                Thank you — your appointment request has been sent.
                Our team will contact you shortly to confirm.
              </div>
            </Reveal>
          ) : (

            /* ===================================================
               FORM
            ==================================================== */
            <Reveal delay="0.15s">
              <form
                onSubmit={handleSubmit}
                suppressHydrationWarning
                className="mt-6 space-y-4"
              >

                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  suppressHydrationWarning
                  className="hidden"
                  aria-hidden="true"
                />


                {/* =================================================
                    BASIC DETAILS
                ================================================== */}
                <div className="grid gap-4 sm:grid-cols-2">

                  {/* Full Name */}
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    suppressHydrationWarning
                    className="rounded-md border border-gray-200 px-3 py-2 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/10"
                  />


                  {/* Phone */}
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    suppressHydrationWarning
                    className="rounded-md border border-gray-200 px-3 py-2 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/10"
                  />


                  {/* Email */}
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    suppressHydrationWarning
                    className="rounded-md border border-gray-200 px-3 py-2 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/10"
                  />


                  {/* Date */}
                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date}
                    min={getTodayString()}
                    onChange={handleChange}
                    suppressHydrationWarning
                    className="rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none transition-all duration-200 focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/10"
                  />


                  {/* Preferred Time */}
                  <select
                    required
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    suppressHydrationWarning
                    className="rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none transition-all duration-200 focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/10"
                  >
                    <option value="">
                      Preferred Time *
                    </option>

                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>


                  {/* Department */}
                  <select
                    required
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    suppressHydrationWarning
                    className="rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none transition-all duration-200 focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/10"
                  >
                    <option value="">
                      Select Department *
                    </option>

                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>


                  {/* Preferred Doctor */}
                  <select
                    required
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    suppressHydrationWarning
                    className="rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-500 outline-none transition-all duration-200 focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/10"
                  >
                    <option value="">
                      Preferred Doctor *
                    </option>

                    {doctors.map((doc) => (
                      <option key={doc} value={doc}>
                        {doc}
                      </option>
                    ))}
                  </select>
                </div>


                {/* =================================================
                    REASON FOR VISIT
                ================================================== */}
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Reason for Visit (Optional)"
                  rows={3}
                  suppressHydrationWarning
                  className="w-full resize-none rounded-md border border-gray-200 px-3 py-2 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/10"
                />


                {/* Error */}
                {status === "error" && (
                  <p className="text-sm text-brand-red">
                    {errorMessage}
                  </p>
                )}


                {/* =================================================
                    SUBMIT BUTTON
                ================================================== */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  suppressHydrationWarning
                  className="w-full rounded-full bg-brand-gold py-3 text-sm font-semibold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading"
                    ? "Sending..."
                    : "Book Appointment →"}
                </button>


                {/* Security Note */}
                <p className="text-center text-xs text-gray-400">
                  🔒 Your information is safe and secure with us.
                </p>

              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}


/* ===============================================================
   CONTACT ITEM
================================================================ */

function ContactItem({
  icon: Icon,
  title,
  lines,
  highlight,
}) {
  return (
    <div className="flex gap-4">

      {/* Icon */}
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
        <Icon
          className="h-5 w-5 text-brand-gold"
          strokeWidth={1.8}
        />
      </span>

      {/* Content */}
      <div>
        <p className="font-semibold">
          {title}
        </p>

        {lines.map((line) => (
          <p
            key={line}
            className="text-sm text-white/70"
          >
            {line}
          </p>
        ))}

        {highlight && (
          <p className="mt-1 text-sm font-medium text-brand-gold">
            {highlight}
          </p>
        )}
      </div>
    </div>
  );
}