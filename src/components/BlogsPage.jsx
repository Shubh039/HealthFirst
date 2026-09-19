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
      <section className="bg-brand-navy px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Health & Wellness
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Health information you can trust.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Explore helpful articles about health, wellness, prevention,
            treatment and patient care from HealthFirst Hospital.
          </p>

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