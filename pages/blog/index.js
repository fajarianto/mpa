import Layout from "../../components/Layout";
import Link from "next/link";
import { getAllPosts } from "../../data/posts";

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts }
  };
}

function formatDate(dateString) {
  const d = new Date(dateString);
  return d.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

export default function BlogIndex({ posts }) {
  return (
    <Layout
      title="Blog"
      description="Blog resmi MPA Corp berisi artikel seputar pariwisata, hiburan, event, dan pengembangan destinasi di Kota Batu dan Indonesia."
    >
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-3">
          Blog MPA Corp
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-2xl">
          Prototype blog sederhana yang menyajikan insight seputar pengembangan
          pariwisata, hiburan, dan pembangunan berkelanjutan yang dikelola
          oleh PT. Mandala Putra Anugerah (MPA Corp).
        </p>

        {posts.length === 0 ? (
          <p className="text-sm text-slate-400">
            Belum ada artikel. Tambahkan postingan di <code>data/posts.js</code>.
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/90 transition-colors"
              >
                <p className="text-[11px] text-slate-400 mb-1">
                  {post.category && `${post.category} • `}
                  {formatDate(post.date)}
                </p>
                <h2 className="text-base sm:text-lg font-semibold mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-amber-300"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-slate-300 mb-3 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{post.author && `Oleh ${post.author}`}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-amber-300 hover:text-amber-200"
                  >
                    Baca selengkapnya →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}
