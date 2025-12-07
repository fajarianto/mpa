export const posts = [
  {
    slug: "membangun-ekosistem-pariwisata-kota-batu",
    title: "Membangun Ekosistem Pariwisata Kota Batu yang Berkelanjutan",
    date: "2025-01-10",
    category: "Pariwisata",
    author: "Tim MPA Corp",
    excerpt:
      "Kota Batu memiliki potensi wisata yang besar. Tantangannya adalah bagaimana mengelola destinasi dan event secara berkelanjutan, tidak hanya ramai sesaat.",
    content: `
      <p>
        Kota Batu dikenal sebagai salah satu destinasi wisata unggulan di Jawa Timur.
        Namun, pengembangan pariwisata tidak bisa hanya berfokus pada jumlah kunjungan,
        melainkan juga kualitas pengalaman dan keberlanjutan lingkungan.
      </p>
      <p>
        Melalui kolaborasi antara pemerintah, pelaku usaha, dan komunitas lokal, MPA Corp
        mendorong konsep event yang <strong>memberdayakan masyarakat</strong>, 
        memperkuat identitas lokal, dan tetap memperhatikan daya dukung lingkungan.
      </p>
      <p>
        Strategi ini mencakup kurasi event tematik, pengelolaan arus pengunjung,
        edukasi wisatawan, dan pemanfaatan teknologi untuk monitoring dan promosi.
      </p>
    `
  },
  {
    slug: "peran-event-hiburan-dalam-branding-destinasi",
    title: "Peran Event Hiburan dalam Branding Destinasi Wisata",
    date: "2025-01-05",
    category: "Hiburan",
    author: "Tim Kreatif MPA",
    excerpt:
      "Event hiburan bukan sekadar tontonan. Bila dirancang dengan tepat, event dapat menjadi media branding yang kuat bagi destinasi.",
    content: `
      <p>
        Hiburan adalah pintu masuk emosional bagi banyak orang. Ketika sebuah kota
        atau destinasi memiliki rangkaian event yang kuat, konsisten, dan relevan,
        hal tersebut akan melekat di benak pengunjung sebagai pengalaman yang layak diulang.
      </p>
      <p>
        MPA Corp merancang event hiburan dengan memperhatikan tiga aspek utama:
        <strong>narasi destinasi, pengalaman pengunjung, dan potensi viral di media digital</strong>.
      </p>
      <p>
        Dengan demikian, setiap event bukan hanya selesai dalam satu hari, namun
        punya jejak cerita yang terus hidup di media sosial dan percakapan publik.
      </p>
    `
  },
  {
    slug: "kolaborasi-pembangunan-melalui-model-build-operate-share",
    title: "Kolaborasi Pembangunan melalui Model Build–Operate–Share",
    date: "2024-12-20",
    category: "Pembangunan",
    author: "Divisi Pengembangan Bisnis",
    excerpt:
      "Model Build–Operate–Share menawarkan pendekatan kolaboratif untuk mengembangkan aset wisata dan infrastruktur secara berkeadilan.",
    content: `
      <p>
        Tantangan pembangunan sering kali terletak pada pembiayaan dan manajemen risiko.
        Model <strong>Build–Operate–Share</strong> memungkinkan adanya pembagian peran
        yang jelas antara pemilik lahan, investor, pengelola, dan masyarakat.
      </p>
      <p>
        MPA Corp memposisikan diri sebagai mitra yang menjembatani kepentingan tersebut,
        memastikan proyek dapat berjalan secara <em>bankable</em> namun tetap
        berpihak pada kepentingan publik.
      </p>
      <p>
        Skema ini dapat diterapkan pada pembangunan area rekreasi, fasilitas event,
        hingga pengembangan kawasan wisata tematik di Kota Batu dan sekitarnya.
      </p>
    `
  }
];

export function getAllPosts() {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}
