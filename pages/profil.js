// pages/profil.js
import Layout from "../components/Layout";

export default function ProfilPage() {
  return (
    <Layout
      path="/profil"
      title="Profil Perusahaan"
      description="Profil lengkap PT. Mandala Putra Anugerah (MPA Corp) – perusahaan pariwisata, hiburan, dan pembangunan berkelanjutan yang berbasis di Kota Batu, Jawa Timur."
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
      </section>
    </Layout>
  );
}
