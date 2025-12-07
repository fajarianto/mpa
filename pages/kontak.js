// pages/kontak.js
import Layout from "../components/Layout";

export default function KontakPage() {
  return (
    <Layout
      path="/kontak"
      title="Kontak"
      description="Informasi kontak PT. Mandala Putra Anugerah (MPA Corp) untuk konsultasi event, pariwisata, dan proyek pembangunan di Kota Batu, Jawa Timur."
    >
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
          Kontak PT. Mandala Putra Anugerah
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-2xl">
          Silakan hubungi kami melalui informasi di bawah ini untuk kerja sama,
          penawaran, maupun konsultasi awal terkait event, perjalanan wisata,
          atau proyek pembangunan.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold mb-3">Informasi Kontak</h2>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>
                <span className="font-semibold text-slate-100">Alamat:</span>{" "}
                Jl. Kartini No. 16, Desa/Kelurahan Ngaglik, Kec. Batu, Kota
                Batu, Jawa Timur.
              </li>
              <li>
                <span className="font-semibold text-slate-100">
                  Telepon / WA:
                </span>{" "}
                (+62) 812-XXX-XXXX
              </li>
              <li>
                <span className="font-semibold text-slate-100">Email:</span>{" "}
                info@mpacorp.biz.id
              </li>
            </ul>

            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p className="font-semibold text-slate-100">Jam Operasional</p>
              <p>Senin – Jumat, 09.00 – 17.00 WIB</p>
              <p>Sabtu – Minggu berdasarkan penjadwalan event.</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Formulir Kontak</h2>
            <form
              className="space-y-4 text-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Nama Anda"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="email@perusahaan.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Topik / Layanan</label>
                <select className="input">
                  <option>Event Organizer & Entertainment</option>
                  <option>Travels & Tour Management</option>
                  <option>Materials Vendor</option>
                  <option>General Contractors</option>
                  <option>Kemitraan Build–Operate–Share</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Pesan</label>
                <textarea
                  className="input min-h-[120px]"
                  placeholder="Ceritakan kebutuhan event atau proyek Anda..."
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Kirim Pesan
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-400">
              *Form ini bisa dihubungkan ke email, CRM, atau layanan form
              handler (mis. Vercel Forms, Formspree, dsb.).
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
