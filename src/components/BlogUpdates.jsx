import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogs } from "@/data/blogs";

export default function BlogUpdates() {
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="bg-brand-bg px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">
              Health & Wellness
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Knowledge that helps you care for your health.
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Helpful health information, expert insights and updates from
              HealthFirst Hospital.
            </p>
          </div>

          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-navy"
          >
            View All Articles
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Blog cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredBlogs.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-2xl border border-brand-navy/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <Link href={`/blogs/${post.slug}`}>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-brand-teal">
                  <span>{post.category}</span>
                  <span className="text-gray-300">•</span>
                  <span>{post.readTime}</span>
                </div>

                <Link href={`/blogs/${post.slug}`}>
                  <h3 className="mt-3 text-xl font-semibold leading-snug text-brand-navy transition-colors group-hover:text-brand-teal">
                    {post.title}
                  </h3>
                </Link>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs text-gray-400">
                    {post.date}
                  </span>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-navy"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}