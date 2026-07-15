export const site = {
  name: "LPKP Mentari",
  legalName: "Lembaga Kursus dan Pelatihan Kerja LPKP Mentari",
  slogan: "Mencerdaskan kehidupan bangsa dengan meningkatkan kualitas kompetensi kerja.",
  phoneDisplay: "0813-7000-7002",
  phoneInternational: "+62 813-7000-7002",
  whatsapp: "https://wa.me/6281370007002",
  email: "lpkp.mentari@gmail.com",
  address: "Jl. Kutilang No. 5, Lingkungan 06, Kelurahan Bulian, Kecamatan Bajenis, Kota Tebing Tinggi, Sumatera Utara",
  maps: "https://www.google.com/maps/search/?api=1&query=LPKP+Mentari+Jl.+Kutilang+No.+5+Tebing+Tinggi",
  links: {
    course: "https://course.lpkpmentari.id",
    lms: "https://lms.lpkpmentari.id",
    blog: "https://lpkp-mentari.blogspot.com",
    marketplace: "https://marketplace.lpkpmentari.id",
  },
} as const;

export const programs = [
  { title: "Komputer Office", description: "Keterampilan aplikasi perkantoran untuk kebutuhan kerja dan administrasi." },
  { title: "Teknisi Komputer", description: "Dasar perawatan, perbaikan, dan penanganan perangkat komputer." },
  { title: "Desain Grafis", description: "Keterampilan visual dan pengolahan desain untuk kebutuhan profesional." },
  { title: "Akuntansi MYOB", description: "Pencatatan dan pengelolaan akuntansi menggunakan perangkat lunak MYOB." },
  { title: "Tata Boga", description: "Pelatihan keterampilan pengolahan makanan untuk kerja dan wirausaha." },
  { title: "Menjahit", description: "Keterampilan menjahit yang terarah pada kompetensi kerja dan usaha mandiri." },
] as const;

export const achievements = [
  { image: "prestasi01.jpg", title: "Juara II Pengelola LKP Tingkat Sumatera Utara", year: "2012" },
  { image: "prestasi02.jpg", title: "Juara I Pengelola LKP Tingkat Kota Tebing Tinggi", year: "Prestasi lembaga" },
  { image: "prestasi03.jpg", title: "Penghargaan dari Kelurahan Bulian", year: "Pengabdian masyarakat" },
  { image: "prestasi04.jpg", title: "Penghargaan Tingkat Kota Tebing Tinggi", year: "Prestasi lembaga" },
  { image: "prestasi05.jpg", title: "Penghargaan dari Kecamatan Bajenis", year: "Prestasi lembaga" },
  { image: "prestasi06.jpg", title: "Penghargaan Pengabdian Masyarakat", year: "Kelurahan Bulian" },
  { image: "prestasi07.jpg", title: "Dokumentasi Fasilitas Pelatihan", year: "LPKP Mentari" },
] as const;
