# Design Guidelines & System
## Project Name: Premium Barbershop Booking Landing Page

### 1. Design Concept & Vibe
- **Tema:** Premium, Maskulin, Elegan, Profesional, *Classic meets Modern*.
- **Referensi Visual:** Seperti Giovani Barbershop atau pangkas rambut eksekutif bintang lima.
- **UI Element:** Menggunakan sudut yang tajam (rounded-none atau rounded-sm), kontras tinggi, dan *white space* yang luas agar terlihat mahal.

### 2. Color Palette (Tailwind Classes)
Desain harus dominan gelap (Dark Mode natively) dengan aksen warna emas/kuning untuk memberikan kesan eksklusif.

- **Background (Primary):** `bg-neutral-950` atau `bg-zinc-950` (Hitam pekat).
- **Background (Secondary / Cards):** `bg-neutral-900` atau `bg-zinc-900` (Abu-abu sangat gelap).
- **Accent/Primary Action Color (Gold):** `text-amber-500` / `bg-amber-600` (Untuk tombol, ikon, harga, garis pemisah).
- **Text (Primary):** `text-gray-100` atau `text-white` (Untuk Headline dan teks utama).
- **Text (Secondary):** `text-gray-400` (Untuk deskripsi, durasi, subtitle).

### 3. Typography
- **Headings (Logo, Title, Section Headers):** Font Serif yang elegan. 
  - Gunakan Google Fonts: `Playfair Display` atau `Merriweather`.
  - Terapkan class Tailwind khusus untuk font ini (misal di-extend di config: `font-serif`).
  - Styling: Sering menggunakan `uppercase`, `tracking-widest` (letter-spacing lebar).
- **Body & UI Text (Deskripsi, Tombol, Form):** Font Sans-serif modern yang mudah dibaca.
  - Gunakan Google Fonts: `Inter` atau `Montserrat`.

### 4. Component Specifications

**A. Buttons**
- Gaya tombol premium: Tidak terlalu membulat (gunakan `rounded-sm` atau `rounded-none`).
- *Primary Button*: Background Emas (`bg-amber-600`), teks putih, efek hover sedikit lebih terang (`hover:bg-amber-500`), dan ada transisi (`transition-colors duration-300`).
- *Outline Button*: Border emas (`border border-amber-600`), teks emas, background transparan, hover background emas.

**B. Cards (Services & Barbers)**
- Background warna `bg-neutral-900`.
- Border tipis dan halus `border border-neutral-800`.
- Efek *hover* yang subtle (sedikit terangkat atau border berubah menjadi warna aksen emas).

**C. Images & Media**
- Semua gambar (hero, kapster, gallery) harus diberikan *overlay* atau *filter grayscale* dengan efek hover menjadi berwarna penuh (opsional untuk menambah estetika).
- *Image placeholder* bisa mengambil dari Unsplash dengan keyword `barbershop`, `haircut`, `barber`. (misal: `https://images.unsplash.com/photo-XXX`).

### 5. Layout & Responsiveness
- **Desktop (md, lg, xl):** Layout menyamping, grid 3-4 kolom untuk layanan dan kapster.
- **Mobile (default):** Stack vertikal (1 kolom). Navbar berubah menjadi Hamburger Menu. Form booking harus sangat rapi di layar kecil karena mayoritas pengguna melakukan booking dari HP.
- Menggunakan pendekatan *Mobile-First* khas Tailwind CSS.