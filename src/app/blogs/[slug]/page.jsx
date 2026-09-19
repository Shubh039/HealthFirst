import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Stethoscope,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogs, getBlogBySlug } from "@/data/blogs";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) return {};

  return {
    title: `${blog.title} | HealthFirst Hospital`,
    description: blog.excerpt,
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="bg-white">

        {/* =====================================================
            ARTICLE HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-brand-bg">

          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />

          <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-brand-teal/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-10 sm:pb-20 sm:pt-14 lg:px-8">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-brand-navy/50">

              <Link
                href="/blogs"
                className="transition-colors hover:text-brand-navy"
              >
                Health & Wellness
              </Link>

              <span>/</span>

              <span className="line-clamp-1 text-brand-navy/70">
                {blog.title}
              </span>

            </div>

            {/* Main hero content */}
            <div className="mx-auto mt-12 max-w-4xl text-center">

              {/* Category */}
              <div className="inline-flex items-center rounded-full border border-brand-teal/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal shadow-sm backdrop-blur">
                {blog.category}
              </div>

              {/* Title */}
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
                {blog.title}
              </h1>

              {/* Excerpt */}
              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                {blog.excerpt}
              </p>

              {/* Metadata */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-500">

                <div className="inline-flex items-center gap-2">
                  <Stethoscope className="h-4 w-4 text-brand-teal" />
                  <span>{blog.speciality}</span>
                </div>

                <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />

                <div className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-brand-teal" />
                  <span>{blog.date}</span>
                </div>

                <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />

                <div className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-brand-teal" />
                  <span>{blog.readTime}</span>
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            FEATURED IMAGE
        ===================================================== */}
        <section className="px-6">

          {/* Gap between hero and image */}
          <div className="mx-auto mt-8 max-w-6xl sm:mt-12">

            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-xl shadow-brand-navy/10">

              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="object-cover"
              />

              {/* Very subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent" />

            </div>

          </div>
        </section>


        {/* =====================================================
            ARTICLE CONTENT
        ===================================================== */}
        <article className="px-6 py-16 sm:py-20 lg:py-24">

          <div className="mx-auto max-w-3xl">

            {/* Back link */}
            <Link
              href="/blogs"
              className="group mb-12 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy/60 transition-colors hover:text-brand-navy"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              />

              Back to Health & Wellness
            </Link>


            {/* Article sections */}
            <div>

              {blog.content.map((section, index) => (

                <section
                  key={section.heading}
                  className={index === 0 ? "" : "mt-14"}
                >

                  {/* Section heading */}
                  <div className="flex items-start gap-4">

                    <span className="mt-2 hidden h-2 w-2 shrink-0 rounded-full bg-brand-gold sm:block" />

                    <h2 className="text-2xl font-bold leading-tight text-brand-navy sm:text-3xl">
                      {section.heading}
                    </h2>

                  </div>


                  {/* Paragraphs */}
                  <div className="mt-5 space-y-5">

                    {section.paragraphs.map((paragraph) => (

                      <p
                        key={paragraph}
                        className="text-[16px] leading-8 text-gray-600 sm:text-[17px]"
                      >
                        {paragraph}
                      </p>

                    ))}

                  </div>


                  {/* Divider */}
                  {index !== blog.content.length - 1 && (
                    <div className="mt-14 h-px bg-brand-navy/8" />
                  )}

                </section>

              ))}

            </div>


            {/* =================================================
                MEDICAL INFORMATION
            ================================================= */}
            <div className="mt-16 rounded-2xl border border-brand-teal/15 bg-brand-bg p-6 sm:p-7">

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                  <Stethoscope className="h-5 w-5" />
                </div>

                <div>

                  <p className="text-sm font-semibold text-brand-navy">
                    Medical Information
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    This article is intended for general health education and
                    does not replace professional medical advice, diagnosis or
                    treatment. Please consult a qualified healthcare
                    professional for advice specific to your health and
                    circumstances.
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                APPOINTMENT CTA
            ================================================= */}
            <div className="relative mt-10 overflow-hidden rounded-3xl bg-brand-navy p-7 sm:p-10">

              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10" />

              <div className="relative">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                  Need medical advice?
                </p>

                <h2 className="mt-3 max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Talk to our healthcare team.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
                  If you have concerns about your health, our specialists can
                  help you understand your symptoms and discuss the appropriate
                  next steps for your care.
                </p>

                <Link
                  href="/appointment"
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3.5 text-sm font-semibold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
                >
                  Book an Appointment

                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

              </div>
            </div>

          </div>
        </article>

      </main>

      <Footer />
    </>
  );
}