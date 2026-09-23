import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Health & Wellness | HealthFirst Hospital",
  description:
    "Read health education articles, patient information and healthcare insights from HealthFirst Hospital.",
};

export default function BlogsPage() {
  return (
    <main className="bg-brand-bg">

      {/* Hero */}
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
            Health & Wellness
          </p>
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          Better health.
          <br />

          <span className="text-brand-gold">
            Better informed.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
          Explore practical health information, expert insights and
          helpful guidance from our healthcare team. From everyday
          wellness to common medical conditions, discover information
          designed to help you understand your health and make informed
          decisions.
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
                +
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
                Health at a glance
              </p>

              <p className="mt-1 text-xs text-white/50">
                Simple information. Better awareness.
              </p>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="relative ml-auto grid grid-cols-2 gap-3">

          <div className="animate-float rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm">
            <p className="text-2xl font-bold text-white">
              10+
            </p>

            <p className="mt-1 text-xs text-white/50">
              Health Topics
            </p>
          </div>

          <div
            className="animate-float rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm"
            style={{ animationDelay: "0.35s" }}
          >
            <p className="text-2xl font-bold text-white">
              EXPERT
            </p>

            <p className="mt-1 text-xs text-white/50">
              Health Insights
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* Articles */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

            {blogs.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-brand-navy/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={`/blogs/${post.slug}`}>
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="p-6">

                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-brand-teal">
                    <span>{post.category}</span>
                    <span className="text-gray-300">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <Link href={`/blogs/${post.slug}`}>
                    <h2 className="mt-3 text-xl font-semibold leading-snug text-brand-navy transition-colors group-hover:text-brand-teal">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">

                    <span className="text-xs text-gray-400">
                      {post.date}
                    </span>

                    <Link
                      href={`/blogs/${post.slug}`}
                      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>

                  </div>

                </div>
              </article>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}