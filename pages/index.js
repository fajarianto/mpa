import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Link from "next/link";
import { getAllPosts } from "../data/posts";

export async function getStaticProps() {
  const posts = getAllPosts().slice(0, 2);
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

export default function HomePage({ posts }) {
  return (
    <Layout
      title="Beranda"
      description="PT. Mandala Putra Anugerah (MPA Corp) menghadirkan layanan Event Organizer, Entertainment, Travel Agency, Materials Vendor, General Contractor, dan EO Management berbasis kolaborasi di Kota Batu, Jawa Timur."
    >
      <Hero />

      {/* Unit Usaha */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Unit Usaha Terintegrasi
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl">
              MPA mengelola beberapa lini bisnis yang saling mendukung, mulai
              dari pengembangan aset, hiburan, pengadaan material, perjalanan
              wisata, hingga konstruksi dan manajemen event.
            </p>
          </div>
          <Link
            href="/unit-usaha"
            className="hidden sm:inline-flex text-xs font-medium text-amber-300 hover:text-amber-200 underline underline-offset-4"
          >
            Lihat semua unit usaha →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <ServiceCard
            number="01. BUILD–OPERATE–SHARE"
            title="Model Kemitraan Aset"
            description="Skema pembangunan dan pengelolaan aset bersama yang berfokus pada efisiensi, keberlanjutan, dan pemerataan manfaat ekonomi."
          />
          <ServiceCard
            number="02. ENTERTAINMENT"
            title="Hiburan & Aktivasi Destinasi"
            description="Program kreatif seperti konser, festival, dan pertunjukan budaya yang memperkuat citra destinasi wisata."
          />
          <ServiceCard
            number="03. MATERIALS VENDOR"
            title="Pengadaan Material Proyek"
            description="Penyediaan material konstruksi berkualitas dengan pengiriman tepat waktu dan harga kompetitif."
          />
          <ServiceCard
            number="04. TRAVELS AGENCY"
            title="Travel & Tour Management"
            description="Layanan perjalanan wisata, paket tour tematik, dan manajemen perjalanan untuk korporasi maupun publik."
          />
          <ServiceCard
            number="05. GENERAL CONTRACTORS"
            title="Kontraktor Umum"
            description="Pembangunan gedung, fasilitas publik, infrastruktur wisata, dan renovasi dengan pengawasan profesional."
          />
          <ServiceCard
            number="06. EO & MANAGEMENT"
            title="Event Organizer & Project Management"
            description="Perencanaan, produksi, dan pelaksanaan event skala lokal hingga nasional dengan pendekatan end-to-end."
          />
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/unit-usaha"
            className="text-xs font-medium text-amber-300 hover:text-amber-200 underline underline-offset-4"
          >
            Lihat semua unit usaha →
          </Link>
        </div>
      </section>

      {/* Blog highlight */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Insight Terbaru dari Blog
          </h2>
          <Link
            href="/blog"
            className="hidden sm:inline-flex text-xs font-medium text-amber-300 hover:text-amber-200 underline underline-offset-4"
          >
            Lihat semua artikel →
          </Link>
        </div>
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
                <h3 className="font-semibold text-base mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-amber-300"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-300 line-clamp-3 mb-3">
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
        <div className="mt-4 sm:hidden">
          <Link
            href="/blog"
            className="text-xs font-medium text-amber-300 hover:text-amber-200 underline underline-offset-4"
          >
            Lihat semua artikel →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
