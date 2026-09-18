import Link from "next/link";

const posts = [
  { tag: "Health Education", title: "How to Keep Your Heart Healthy", date: "12 April 2025", image: "/images/blog-1.jpg" },
  { tag: "Hospital Updates", title: "New Orthopedic Wing Now Open", date: "10 April 2025", image: "/images/blog-2.jpg" },
  { tag: "Doctor Articles", title: "Understanding Diabetes: Symptoms and Prevention", date: "5 April 2025", image: "/images/blog-3.jpg" },
  { tag: "Community Camps", title: "Free Health Check-up Camp at Khajoori Khas", date: "28 March 2025", image: "/images/blog-4.jpg" },
];

export default function BlogUpdates() {
  return (
    <section className="bg-brand-bg px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
              Latest Updates
            </p>
            <h2 className="mt-2 text-3xl font-bold text-brand-navy">
              Health Tips, Hospital Updates & Community Initiatives
            </h2>
            <p className="mt-2 text-gray-500">Stay informed. Stay healthy.</p>
          </div>
          <Link href="#" className="text-sm font-medium text-brand-teal hover:underline">
            View All Blogs & Camps →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <div key={post.title} className="overflow-hidden rounded-xl bg-white shadow-sm">
              {/* TODO: replace with real blog images */}
              <img src={post.image} alt={post.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <p className="text-xs font-medium uppercase text-brand-teal">{post.tag}</p>
                <p className="mt-1 text-sm font-semibold text-brand-navy">{post.title}</p>
                <p className="mt-1 text-xs text-gray-400">{post.date}</p>
                <Link href="#" className="mt-2 inline-block text-xs font-medium text-brand-teal hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}