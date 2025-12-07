import Layout from "../components/Layout";
import Link from "next/link";
import { getAllPosts } from "../data/posts";

export async function getStaticProps() {
  const posts = getAllPosts().slice(0, 3);
  return {
    props: { posts }
  };
}

export default function ProfilPage({ posts }) {
  return (
    <Layout
      title="Profil Perusahaan"
      description="Profil PT. Mandala Putra Anugerah (MPA Corp): perusahaan event organizer, pariwisata, hiburan, dan pembangunan berkelanjutan berbasis di Kota Batu, Jawa Timur."
    >
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-3">
          Profil PT. Mandala Putra Anugerah
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          PT. Mandala Putra Anugerah adalah perusahaan berbadan hukum Perseroan
          Terbatas yang bergerak di bidang Event Organizer, Pariwisata, dan
          Hiburan, serta unit usaha pendukung seperti Materials Vendor dan
          General Contractors. Berlokasi di Kota Batu, Jawa Timur, MPA hadir
          sebagai mitra terpercaya dalam menghadirkan layanan yang kreatif,
          inovatif, dan profesional.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Dengan mengusung prinsip kolaborasi dan pembangunan berkelanjutan,
          MPA tidak hanya berfokus pada keberhasilan event atau proyek secara
          teknis, tetapi juga pada nilai tambah bagi masyarakat, lingkungan
          sekitar, dan penguatan citra destinasi wisata.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-2">Visi</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Menjadi perusahaan terdepan dalam pengembangan industri
              pariwisata, hiburan, dan pembangunan berkelanjutan di Indonesia
              melalui sinergi bisnis yang kreatif dan inovatif.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Misi</h2>
            <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
              <li>
                Mendorong pertumbuhan ekonomi daerah melalui proyek berbasis
                kemitraan.
              </li>
              <li>Menghadirkan layanan profesional di setiap lini usaha.</li>
              <li>
                Mengembangkan potensi lokal menjadi produk bernilai nasional.
              </li>
              <li>
                Membangun hubungan bisnis yang transparan, adil, dan saling
                menguntungkan.
              </li>
            </ul>
          </div>
        </div>

        {/* Blog Section */}
        <div className="mt-12 pt-10 border-t border-slate-800">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Artikel Terbaru dari Blog
          </h2>

          {!posts || posts.length === 0 ? (
            <p className="text-slate-400 text-sm">
              Belum ada artikel yang dipublikasikan.
            </p>
          ) : (
            <div className="grid gap-5 md:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 transition"
                >
                  <h3 className="font-semibold text-sm mb-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-amber-300"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 mb-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-medium text-amber-300 hover:text-amber-200"
                  >
                    Baca selengkapnya →
                  </Link>
                </article>
              ))}
            </div>
          )}

          <div className="mt-4">
            <Link
              href="/blog"
              className="text-xs underline underline-offset-4 text-amber-300 hover:text-amber-200"
            >
              Lihat semua artikel →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
