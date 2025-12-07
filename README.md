# MPA Corp – Prototype Blog (Next.js only, tanpa WordPress)

Prototype website company profile + blog sederhana untuk **PT. Mandala Putra Anugerah (MPA Corp)**:

- Frontend: Next.js 14 + Tailwind CSS
- Blog: data statis di `data/posts.js` (tanpa WordPress)
- Cocok untuk deploy cepat di Vercel sebagai prototype

## Development

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Struktur Halaman

- `/` — Beranda (Hero, unit usaha, highlight 2 artikel blog)
- `/profil` — Profil perusahaan + 3 artikel terbaru
- `/unit-usaha` — Daftar unit usaha
- `/kontak` — Informasi kontak & form dummy
- `/blog` — List artikel (diambil dari `data/posts.js`)
- `/blog/[slug]` — Halaman artikel

## Menambah / Mengubah Artikel

Semua konten blog ada di:

```txt
data/posts.js
```

Strukturnya:

```js
export const posts = [
  {
    slug: "slug-artikel",
    title: "Judul Artikel",
    date: "2025-01-10",
    category: "Kategori",
    author: "Nama Penulis",
    excerpt: "Ringkasan singkat artikel...",
    content: `
      <p>Konten artikel dalam HTML sederhana...</p>
    `
  },
  ...
];
```

Tinggal tambah objek baru di array `posts`.

## Deploy ke Vercel

1. Push ke GitHub.
2. Di Vercel: New Project → Import repository → Framework: Next.js.
3. Build command: `npm run build`
4. Output: `.next` (default Vercel).

Selesai, blog prototype sudah jalan sepenuhnya di Vercel tanpa backend tambahan.
