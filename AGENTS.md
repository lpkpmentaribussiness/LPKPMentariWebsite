# LPKP Mentari Website - Project Memory & Protocol

## 📌 Repository & Architecture

- **Remote:** `https://github.com/lpkpmentaribussiness/LPKPMentariWebsite.git`
- **Active Branch:** `main`
- **Tech Stack:** Astro 7 (Static Output), `@lucide/astro`, TypeScript, Vercel Hosting
- **Primary Data Source:** `src/data/site.ts` (`site`, `programs`, `achievements`)
- **Knowledge Graph:** `graphify-out/` (AST-indexed, auto-updated via git hook)

---

## 🧭 Pages & Structure

- **Landing Page (`/`):** `src/pages/index.astro` — Hero, Strengths (Terakreditasi B, Kurikulum Matang, Fasilitas), 6 Program Pelatihan Vokasi, Galeri Prestasi, Kontak CTA.
- **Tentang Lembaga (`/tentang.html`):** `src/pages/tentang.astro` — Profil, Legalitas (NPSN `K5666768`, Akreditasi B BAN-PNF 2017), Visi & Misi, Sejarah berdiri (2001).
- **Kontak & Lokasi (`/kontak.html`):** `src/pages/kontak.astro` — Alamat (Jl. Kutilang No. 5, Tebing Tinggi, Sumut), WhatsApp (`0813-7000-7002`), Google Maps embed/link.
- **Error Page (`/404.html`):** `src/pages/404.astro`

---

## 🔒 Permanent Constraints & Guidelines

1. **Lembaga Identity:** Jaga konsistensi data legalitas:
   - Nama: LPKP Mentari (Lembaga Kursus dan Pelatihan Kerja LPKP Mentari)
   - NPSN: `K5666768`
   - Akreditasi: B (BAN-PNF 2017)
   - WhatsApp / CS: `0813-7000-7002` (`https://wa.me/6281370007002`)
   - Lokasi: Jl. Kutilang No. 5, Lingkungan 06, Kel. Bulian, Kec. Bajenis, Kota Tebing Tinggi, Sumatera Utara
2. **Centralized Data:** Jangan hardcode teks kontak atau program di template page jika sudah tersedia di `src/data/site.ts`.
3. **Dual-Engine Protocol:**
   - Gunakan `graphify query "<tanya>"` untuk eksplorasi kode AST.
   - Perubahan kode akan otomatis disinkronkan ke `graphify-out/` via `.git/hooks/post-commit`.
4. **Validation Before Push:** Selalu jalankan `npm run validate` (`astro check` + `astro build` + `check-links`) sebelum push ke remote.

---

## 🛠️ Commands & Scripts

```bash
npm run dev         # Jalankan local Astro dev server
npm run build       # Build static site ke dist/
npm run check       # Jalankan astro check (TypeScript & template diagnostics)
npm run check:links # Validasi link internal agar tidak 404
npm run validate    # check + build + check:links
```
