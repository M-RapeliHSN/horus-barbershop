# Product Requirements Document (PRD)
## Project Name: Premium Barbershop Booking Landing Page

### 1. Project Overview
Membuat website landing page statis (Single Page Application) untuk barbershop premium. Website ini berfungsi sebagai etalase digital (company profile, services, lookbook) sekaligus sistem *booking* mandiri yang terintegrasi langsung dengan WhatsApp (WA Checkout). Proyek ini akan di-deploy ke Vercel.

### 2. Tech Stack
- **HTML5**: Semantik dan struktur halaman.
- **Tailwind CSS**: Styling (menggunakan CDN untuk kemudahan atau CLI jika menggunakan build tool).
- **Vanilla JavaScript**: Untuk interaktivitas DOM (Navbar, Modal, dan logic WhatsApp Checkout).
- **Font Awesome / Heroicons**: Untuk ikon (lokasi, jam, instagram, dll).

### 3. Core Features & Sections
Website harus berupa *single page* dengan navigasi *smooth scroll* ke masing-masing *section* berikut:

1. **Navbar (Sticky)**
   - Logo (Teks atau Placeholder Image).
   - Link navigasi: Home, About, Services, Barbers, Gallery.
   - Tombol utama: "Book Now" (mengarah ke section Booking).
   - Efek transisi background saat di-scroll (dari transparan menjadi solid dark).

2. **Hero Section**
   - Background gambar interior barbershop premium dengan overlay gelap.
   - Headline utama yang maskulin (misal: "Premium Gentlemen's Grooming").
   - Sub-headline pendek tentang kualitas dan experience.
   - Call to Action (CTA) Button: "Book an Appointment".

3. **About / Philosophy Section**
   - Paragraf singkat tentang dedikasi pada seni menata rambut dan *hospitality*.
   - Gambar pendamping (foto alat cukur atau kursi barber elegan).

4. **Services & Pricing Section**
   - Menampilkan daftar layanan menggunakan layout grid/list (misal: Gentlemen Haircut, Hot Towel Shave, Hair Coloring).
   - Setiap item menampilkan: Nama Layanan, Durasi Estimasi, Harga, dan Deskripsi singkat.

5. **The Barbers Section**
   - Menampilkan profil singkat tim kapster/barberman (Foto, Nama, Keahlian spesifik).
   - Desain menggunakan *Card Layout*.

6. **Gallery / Lookbook Section**
   - Grid foto hasil potongan rambut (Fade, Pompadour, dll) sebagai inspirasi pelanggan.
   - Menggunakan CSS Grid yang rapi.

7. **Multi-Branch Booking System (WhatsApp Checkout) - KURSUS LOGIC UTAMA**
   - Sebuah form interaktif di bagian bawah atau dalam bentuk Modal.
   - **Langkah 1: Pilih Cabang** (Dropdown opsi cabang: misal Cabang Pusat, Cabang Citraland, Cabang Johor). *Note: Setiap cabang punya nomor WA tujuan yang berbeda di dalam objek JavaScript.*
   - **Langkah 2: Pilih Layanan** (Dropdown layanan).
   - **Langkah 3: Pilih Tanggal & Jam** (Input date & time).
   - **Langkah 4: Input Nama Pelanggan**.
   - **Tombol Submit**: Menggabungkan semua data input menjadi format string dan mengarahkannya ke URL `https://wa.me/[NOMOR_CABANG_YANG_DIPILIH]?text=[PESAN_YANG_DIFORMAT]`.
   
   *Contoh Format Pesan WA:*
   "Halo Admin [Nama Cabang], saya ingin booking layanan:
   Nama: [Nama Pelanggan]
   Layanan: [Layanan yang dipilih]
   Tanggal: [Tanggal & Jam]
   Mohon konfirmasinya. Terima kasih."

8. **Footer**
   - Alamat lengkap masing-masing cabang.
   - Jam Operasional.
   - Link Sosial Media (Instagram, TikTok).
   - Copyright.