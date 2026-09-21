# HORUS Barbershop - Premium Company Profile & Multi-Branch WhatsApp Booking

Website landing page company profile dan sistem booking mandiri untuk **Horus Barbershop**, dirancang dengan estetika mewah, maskulin, dan elegan (*Classic meets Modern*). Dilengkapi dengan fitur multi-cabang terintegrasi langsung ke WhatsApp masing-masing cabang.

---

## 🌟 Fitur Utama

1. **Sticky Glassmorphism Navbar**: Transisi otomatis dari transparan ke dark solid saat discroll, logo Horus royal crest, navigasi smooth scroll, dan drawer menu responsif di smartphone.
2. **Hero Section**: Nuansa interior barbershop gelap premium, headline maskulin, call-to-action ganda, dan trust metric badge (rating 4.9/5, 100% silet steril, VIP lounge).
3. **Philosophy & About**: Nilai dedikasi pangkas rambut, 4 pilar layanan (*Master Craftsmanship*, *Sterile Protocol*, *Hot Towel Ritual*, *Executive Hospitality*), dan sejarah brand Horus.
4. **Services & Pricing Grid**: Filter kategori (Semua, Haircut, Shave, VIP Package, Treatment) dengan tombol 1-klik untuk langsung memilih layanan ke formulir booking.
5. **The Master Barbers**: Profil kapster lengkap dengan foto, keahlian khusus, pengalaman kerja, cabang penugasan, dan tombol booking personal.
6. **Lookbook / Gallery**: Grid portofolio gaya rambut (Fade, Pompadour, Crop, Beard Sculpting) dengan efek hover grayscale-to-color.
7. **Multi-Branch Booking System (WhatsApp Checkout)**:
   - Pilih cabang (Pusat Senopati, Citraland Surabaya, Johor Medan).
   - Tampilan live detail alamat dan jam operasional cabang tujuan.
   - Pilihan layanan otomatis terisi.
   - Pilihan kapster / siapa saja yang tersedia.
   - Tanggal dan jam kedatangan.
   - Nama pelanggan dan catatan tambahan.
   - **Live Preview Chat WhatsApp** interaktif.
   - Tombol kirim yang langsung menyusun format teks dan membuka URL WhatsApp resmi cabang yang dipilih (`https://wa.me/[NOMOR]?text=[PESAN]`).
8. **Jaringan Cabang & Footer**: Informasi lengkap setiap cabang, tautan Google Maps, jam kerja harian, dan tautan media sosial.
9. **Floating Quick WhatsApp Button**: Tombol akses cepat reservasi di pojok kanan bawah.

---

## 📁 Struktur Berkas

```
horus/
├── index.html            # Halaman utama Single Page Application (SPA)
├── css/
│   └── style.css         # Styling custom, gradasi gold, font tokens, efek hover
├── js/
│   ├── data.js           # Konfigurasi data cabang, nomor WA, layanan, barber & lookbook
│   └── app.js            # Interaktivitas DOM, kalkulasi form & generator URL WhatsApp
├── vercel.json           # Konfigurasi deployment statis Vercel
├── prd (2).md            # Product Requirements Document
└── design(2).md          # Design System & Guidelines
```

---
