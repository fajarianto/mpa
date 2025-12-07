# PT. Mandala Putra Anugerah Website

Website company profile untuk **PT. Mandala Putra Anugerah** dengan Next.js + Tailwind CSS.

## Development

1. Install dependencies:

   npm install

2. Jalankan development server:

   npm run dev

Buka `http://localhost:3000`.

## Build & Production

   npm run build
   npm start

## Deploy ke Vercel

1. Push project ini ke GitHub.
2. Buka vercel.com, klik **New Project** → **Import Git Repository**.
3. Pilih repo ini, framework: **Next.js**, lalu Deploy.


## SEO & Google Search Console

- File `public/robots.txt` sudah mengarahkan ke `https://mpacorp.biz.id/sitemap.xml`.
- File `public/sitemap.xml` berisi daftar URL utama (beranda, profil, unit usaha, kontak).
- Untuk menghubungkan ke Google Search Console:
  1. Tambahkan domain `https://mpacorp.biz.id` ke Search Console.
  2. Pilih metode verifikasi meta tag.
  3. Ganti teks `PASTE_GOOGLE_SITE_VERIFICATION_CODE_HERE` di `pages/_document.js` dengan kode verifikasi dari Google.
  4. Deploy ulang ke Vercel dan klik Verify di Search Console.
