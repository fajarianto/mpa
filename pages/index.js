// pages/index.js
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout
      path="/"
      title="Beranda"
      description="Beranda resmi PT. Mandala Putra Anugerah (MPA Corp) – perusahaan Event Organizer, Entertainment, Travel Agency, Materials Vendor, General Contractor, dan EO Management berbasis di Kota Batu, Jawa Timur."
    >
      <Hero />

      {/* Unit Usaha ringkas */}
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

      {/* Profil singkat */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              Tentang PT. Mandala Putra Anugerah
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              PT. Mandala Putra Anugerah adalah perusahaan berbadan hukum yang
              lahir dari semangat untuk mengembangkan potensi pariwisata dan
              hiburan di Indonesia, khususnya Kota Batu, Jawa Timur.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              Dengan dukungan tim berpengalaman dan jejaring mitra yang kuat,
              MPA hadir sebagai mitra strategis bagi pemerintah, pelaku usaha,
              dan komunitas dalam mewujudkan event berkualitas, pengembangan
              destinasi, serta proyek pembangunan yang berkelanjutan.
            </p>
            <Link
              href="/profil"
              className="inline-flex text-xs font-medium text-amber-300 hover:text-amber-200 underline underline-offset-4"
            >
              Baca profil lengkap →
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "Profesional",
                desc: "Standar kerja yang terukur, tepat waktu, dan akuntabel."
              },
              {
                title: "Kreatif",
                desc: "Konsep dan aktivasi yang relevan dengan karakter destinasi."
              },
              {
                title: "Inovatif",
                desc: "Terbuka pada ide baru dan kolaborasi lintas sektor."
              },
              {
                title: "Terdepan",
                desc: "Berorientasi jangka panjang dan keberlanjutan."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl border border-slate-800 bg-slate-900/70"
              >
                <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA kontak */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-1">
              Siap mendiskusikan rencana event atau proyek Anda?
            </h2>
            <p className="text-sm text-slate-300">
              Kami terbuka untuk kerja sama dengan pemerintah, korporasi,
              komunitas, maupun pelaku usaha lokal.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/62812XXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Hubungi via WhatsApp
            </a>
            <Link href="/kontak" className="btn-secondary">
              Lihat detail kontak
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
