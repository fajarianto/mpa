import Head from "next/head";
import Link from "next/link";

export default function Layout({
  children,
  title = "PT. Mandala Putra Anugerah",
  description = "PT. Mandala Putra Anugerah (MPA Corp) adalah perusahaan berbadan hukum yang bergerak di bidang Event Organizer, Pariwisata, Hiburan, dan Pembangunan berkelanjutan di Kota Batu, Jawa Timur."
}) {
  const fullTitle = `${title} | PT. Mandala Putra Anugerah`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="PT Mandala Putra Anugerah, MPA Corp, mpacorp.biz.id, event organizer Batu, travel Batu, pariwisata Batu, hiburan Batu, general contractor Batu, EO Batu, Kota Batu Jawa Timur"
        />
        <meta property="og:site_name" content="PT. Mandala Putra Anugerah" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mpacorp.biz.id/" />
        <link rel="canonical" href="https://mpacorp.biz.id/" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-30">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-amber-400 to-orange-600 flex items-center justify-center text-[11px] font-bold tracking-tight text-slate-950">
                MPA
              </div>
              <div className="leading-tight">
                <p className="font-semibold text-sm sm:text-base">
                  PT. Mandala Putra Anugerah
                </p>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  Pariwisata • Hiburan • Pembangunan
                </p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="nav-link">
                Beranda
              </Link>
              <Link href="/profil" className="nav-link">
                Profil
              </Link>
              <Link href="/unit-usaha" className="nav-link">
                Unit Usaha
              </Link>
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
              <Link href="/kontak" className="nav-link">
                Kontak
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-slate-800 bg-slate-950 mt-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid gap-8 md:grid-cols-3 text-sm">
            <div>
              <h3 className="font-semibold mb-2">PT. Mandala Putra Anugerah</h3>
              <p className="text-slate-400 text-sm">
                Mitra kreatif dalam pengembangan Event Organizer, Pariwisata,
                Hiburan, dan Pembangunan berkelanjutan di Kota Batu dan
                sekitarnya.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Alamat Kantor</h3>
              <p className="text-slate-400 text-sm">
                Jl. Kartini No. 16, Desa/Kelurahan Ngaglik, Kec. Batu,
                <br />
                Kota Batu, Jawa Timur, Indonesia.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Kontak</h3>
              <ul className="text-slate-400 space-y-1 text-sm">
                <li>
                  Telepon/WhatsApp:{" "}
                  <span className="font-medium text-slate-100">
                    (+62) 812-XXX-XXXX
                  </span>
                </li>
                <li>
                  Email:{" "}
                  <span className="font-medium text-slate-100">
                    info@mpacorp.biz.id
                  </span>
                </li>
                <li>
                  Instagram:{" "}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-amber-400"
                  >
                    @mpa.official
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} PT. Mandala Putra Anugerah. All rights
            reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
