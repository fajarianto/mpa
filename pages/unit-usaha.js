// pages/unit-usaha.js
import Layout from "../components/Layout";
import ServiceCard from "../components/ServiceCard";

export default function UnitUsahaPage() {
  return (
    <Layout
      path="/unit-usaha"
      title="Unit Usaha"
      description="Daftar unit usaha PT. Mandala Putra Anugerah (MPA Corp) meliputi Build–Operate–Share, Entertainment, Materials Vendor, Travels Agency, General Contractors, dan EO & Management."
    >
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
          Unit Usaha PT. Mandala Putra Anugerah
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-3xl">
          Setiap unit usaha MPA dirancang untuk saling terhubung, sehingga
          mampu memberikan solusi menyeluruh bagi mitra dalam pengembangan
          pariwisata, hiburan, maupun proyek pembangunan. Berikut adalah
          gambaran singkat tiap unit usaha.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <ServiceCard
            number="01"
            title="BUILD–OPERATE–SHARE"
            description="Model kerja sama yang menggabungkan pembangunan, pengoperasian, dan pembagian manfaat ekonomi secara proporsional kepada investor, pengelola, dan masyarakat sekitar."
          />
          <ServiceCard
            number="02"
            title="ENTERTAINMENT"
            description="Divisi hiburan yang menangani konser, festival, pertunjukan budaya, dan program publik lainnya untuk memperkuat citra destinasi wisata dan meningkatkan kunjungan."
          />
          <ServiceCard
            number="03"
            title="MATERIALS VENDOR"
            description="Layanan pengadaan material konstruksi dan kebutuhan proyek dengan standar kualitas terukur, pengiriman tepat waktu, dan harga kompetitif."
          />
          <ServiceCard
            number="04"
            title="TRAVELS AGENCY"
            description="Agen perjalanan resmi yang menyediakan paket wisata tematik, tour management, dan layanan perjalanan korporasi yang mengangkat potensi lokal Kota Batu dan sekitarnya."
          />
          <ServiceCard
            number="05"
            title="GENERAL CONTRACTORS"
            description="Pekerjaan konstruksi skala kecil hingga besar, pembangunan fasilitas publik, infrastruktur wisata, serta renovasi dengan pengawasan teknis profesional."
          />
          <ServiceCard
            number="06"
            title="EO & MANAGEMENT"
            description="Pengelolaan event dan proyek dari hulu ke hilir: konsepsi, perencanaan, produksi, hingga pelaksanaan di lapangan dengan standar pelayanan terbaik."
          />
        </div>
      </section>
    </Layout>
  );
}
