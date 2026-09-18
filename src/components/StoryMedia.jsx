"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const storyImages = [
  {
    src: "/images/about/surgical-room-2.jpeg",
    alt: "HealthFirst Hospital corridor",
  },
  {
    src: "/images/about/ward.jpeg",
    alt: "HealthFirst Hospital patient ward",
  },
  {
    src: "/images/about/reception.jpeg",
    alt: "HealthFirst Hospital reception",
  },
  {
    src: "/images/about/waiting-area.jpeg",
    alt: "HealthFirst Hospital exterior",
  },
];

export default function StoryMedia() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % storyImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-brand-bg px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-5 lg:grid-cols-[1.45fr_0.8fr]">

          {/* =====================================================
              IMAGE SLIDER
          ===================================================== */}
          <div className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-brand-navy shadow-[0_25px_70px_rgba(11,36,71,0.12)] sm:min-h-[500px]">

            {/* Image track */}
            <div
              className="flex h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(-${activeImage * 100}%)`,
              }}
            >
              {storyImages.map((image) => (
                <div
                  key={image.src}
                  className="relative h-[420px] min-w-full sm:h-[500px]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={image.src === storyImages[0].src}
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>

            {/* Cinematic overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent" />

            {/* Bottom content */}
            <div className="pointer-events-none absolute bottom-7 left-7 right-7 sm:bottom-8 sm:left-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                Inside HealthFirst
              </p>

              <h3 className="mt-2 max-w-lg text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Designed around people.
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
                From the spaces we build to the care we provide, every detail
                is designed around the patient experience.
              </p>
            </div>
          </div>


          {/* =====================================================
              INFINITE VIDEO
          ===================================================== */}
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-brand-navy shadow-[0_25px_70px_rgba(11,36,71,0.12)] sm:min-h-[500px]">

            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/about/video-poster.jpg"
            >
              <source
                src="/videos/healthfirst-tour.mp4"
                type="video/mp4"
              />
            </video>

            {/* Soft cinematic overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-brand-navy/20 to-brand-navy/5" />

            {/* Video content */}
            <div className="pointer-events-none absolute inset-x-6 bottom-7 sm:inset-x-7 sm:bottom-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                Take a closer look
              </p>

              <h3 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Experience HealthFirst.
              </h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}