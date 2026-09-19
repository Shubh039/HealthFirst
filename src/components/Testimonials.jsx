"use client";

import { useEffect, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Akver Khan",
    quote:
      "One of the best hospitals in the city. Emergency me turant response mila. Doctors aur nurses bahut hi humble aur professional hai. Cleanliness 10/10.",
  },
  {
    name: "Danish Saifi",
    quote:
      "Excellent service and affordable treatment. Hospital ne paise ke liye bilkul pareshan nahi kiya, sirf patient ki care par focus kiya. God bless the entire staff.",
  },
  {
    name: "Amit Kumar",
    quote:
      "Really appreciate all the efforts. The team is doing a fantastic job.",
  },
  {
    name: "Aman Deep",
    quote:
      "Very good hospital, Doctors and staff are also polite and humble.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white px-6 py-14 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2">
            <span className="h-px w-7 bg-brand-gold" />

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-teal">
              Patient Testimonials
            </p>

            <span className="h-px w-7 bg-brand-gold" />
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.02em] text-brand-navy sm:text-4xl">
            Real experiences.
            <span className="text-brand-navy/50">
              {" "}Trusted care.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500">
            Hear from patients and families about their experience with
            HealthFirst Hospital.
          </p>

        </div>


        {/* =====================================================
            RATING
        ===================================================== */}

        <div className="mt-6 flex items-center justify-center gap-3">

          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5 fill-brand-gold text-brand-gold"
                strokeWidth={1.5}
              />
            ))}
          </div>

          <span className="h-3 w-px bg-gray-200" />

          <p className="text-xs font-medium text-gray-500">
            4.8/5 from 52+ reviews
          </p>

        </div>


        {/* =====================================================
            TESTIMONIAL SLIDER
        ===================================================== */}

        <div className="relative mx-auto mt-9 max-w-5xl">

          {/* Left Arrow */}
          <button
            type="button"
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
            className="group absolute left-0 top-1/2 z-10 flex -translate-x-4 -translate-y-1/2 items-center justify-center p-2 text-brand-navy/45 transition-all duration-300 hover:text-brand-gold sm:-translate-x-10"
          >
            <ChevronLeft
              className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-0.5 sm:h-7 sm:w-7"
              strokeWidth={1.6}
            />
          </button>


          {/* Slider Window */}
          <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_8px_35px_rgba(15,23,42,0.045)]">

            {/* Track */}
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >

              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="relative min-w-full px-10 py-9 sm:px-16 sm:py-10"
                >

                  {/* Decorative Quote */}
                  <Quote
                    className="absolute right-8 top-7 h-14 w-14 text-brand-navy/[0.12] sm:right-12"
                    strokeWidth={1}
                  />


                  {/* Stars */}
                  <div className="flex justify-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-brand-gold text-brand-gold"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>


                  {/* Quote */}
                  <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                    “{testimonial.quote}”
                  </p>


                  {/* Patient */}
                  <div className="mt-7 flex flex-col items-center">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-[11px] font-bold text-white">
                      {testimonial.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>

                    <p className="mt-3 text-sm font-semibold text-brand-navy">
                      {testimonial.name}
                    </p>

                    <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-gray-400">
                      Patient
                    </p>

                  </div>

                </article>
              ))}

            </div>

          </div>


          {/* Right Arrow */}
          <button
            type="button"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="group absolute right-0 top-1/2 z-10 flex translate-x-4 -translate-y-1/2 items-center justify-center p-2 text-brand-navy/45 transition-all duration-300 hover:text-brand-gold sm:translate-x-10"
          >
            <ChevronRight
              className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-7 sm:w-7"
              strokeWidth={1.6}
            />
          </button>

        </div>


        {/* =====================================================
            SLIDER INDICATOR
        ===================================================== */}

        <div className="mt-5 flex justify-center gap-1.5">

          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-6 bg-brand-gold"
                  : "w-1.5 bg-brand-navy/15 hover:bg-brand-navy/30"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}