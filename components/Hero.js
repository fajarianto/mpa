import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="inline-flex items-center px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-amber-200 mb-4">
            Kota Batu • Jawa Timur
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Menghadirkan{" "}
            <span className="text-amber-400">pengalaman berkesan</span> untuk
            Pariwisata, Hiburan, dan Pembangunan.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            PT. Mandala Putra Anugerah adalah perusahaan Event Organizer,
            Travel & Tour, Materials Vendor, General Contractor, dan EO
            Management yang berkomitmen menghadirkan layanan profesional,
            kreatif, dan berkelanjutan bagi mitra di seluruh Indonesia.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/unit-usaha" className="btn-primary">
              Lihat Unit Usaha
            </Link>
            <Link href="/kontak" className="btn-secondary">
              Konsultasi Proyek
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3 text-xs sm:text-sm text-slate-300">
            <div>
              <p className="font-semibold text-slate-100">6+ Unit Usaha</p>
              <p className="text-slate-400">
                Model bisnis terintegrasi dari pariwisata hingga konstruksi.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">
                Fokus Pengalaman
              </p>
              <p className="text-slate-400">
                Event berkesan yang menguatkan citra destinasi & brand.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">Berbasis Kolaborasi</p>
              <p className="text-slate-400">
                Sinergi mitra, masyarakat, dan potensi lokal Kota Batu.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-sm">
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
            <p className="text-xs font-medium text-amber-300 mb-1">
              Model Kemitraan
            </p>
            <p className="font-semibold mb-1">Build–Operate–Share</p>
            <p className="text-slate-300">
              Skema kerja sama pembangunan dan pengelolaan aset yang adil dan
              transparan antara investor, pengelola, dan masyarakat.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <p className="text-xs font-medium text-amber-300 mb-1">
                Hiburan & Event
              </p>
              <p className="font-semibold mb-1">Entertainment & EO</p>
              <p className="text-slate-300">
                Konser, festival, pertunjukan budaya, dan event publik yang
                menghidupkan destinasi wisata.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <p className="text-xs font-medium text-amber-300 mb-1">
                Pendukung Pembangunan
              </p>
              <p className="font-semibold mb-1">Materials & Contractor</p>
              <p className="text-slate-300">
                Pengadaan material konstruksi dan layanan kontraktor dengan
                standar mutu tinggi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
