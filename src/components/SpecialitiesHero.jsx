import Link from "next/link";

export default function SpecialitiesHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">

        {/* Soft background glow */}
        <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-teal/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full border border-white/5" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full border border-brand-gold/10" />

        <div className="pointer-events-none absolute bottom-0 right-[25%] h-32 w-32 rounded-full bg-brand-gold/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">

          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">

            {/* Hero Content */}
            <div className="max-w-3xl">

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brand-gold" />

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
                  Our Specialities
                </p>
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Comprehensive care.
                <br />

                <span className="text-brand-gold">
                  One Trusted Destination.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                From everyday healthcare to specialized treatments, our hospital offers a wide range of medical services to meet your needs.
                Our multidisciplinary team of experts is dedicated to providing exceptional care and support for every patient across wide range of medical specialities.
              </p>

            </div>

            {/* Hero Stats */}
            <div
                className="relative flex min-h-[270px] flex-col justify-end"
                delay="0.15s"
                >
                {/* Decorative medical symbol */}
                <div className="pointer-events-none absolute right-8 top-0 flex h-40 w-40 items-center justify-center rounded-full border border-white/[0.06]">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border border-brand-gold/[0.10]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.035]">
                        <span className="text-4xl font-light text-white/[0.10]">
                        ✚
                        </span>
                    </div>
                    </div>
                </div>

                {/* Small floating message */}
                <div className="relative mb-5 ml-auto mr-1 w-fit rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_12px_rgba(240,180,41,0.7)]" />

                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold">
                        Care at a glance
                        </p>

                        <p className="mt-1 text-xs text-white/50">
                        Expertise when you need it.
                        </p>
                    </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="relative ml-auto grid grid-cols-2 gap-3">

                    <div className="animate-float rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm">
                    <p className="text-2xl font-bold text-white">
                        12+
                    </p>

                    <p className="mt-1 text-xs text-white/50">
                        Specialities
                    </p>
                    </div>

                    <div
                    className="animate-float rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm"
                    style={{ animationDelay: "0.35s" }}
                    >
                    <p className="text-2xl font-bold text-white">
                        IN-HOUSE
                    </p>

                    <p className="mt-1 text-xs text-white/50">
                        TECH SUPPORT
                    </p>
                    </div>

                </div>
            </div>
          </div>
        </div>
      </section>

  );
}