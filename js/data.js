/**
 * Horus Barbershop - Master Data Configuration
 * Multi-branch contact information, services, barbers, and lookbook gallery
 */

const HORUS_DATA = {
  brand: {
    name: "HORUS",
    tagline: "The Royal Standard of Gentlemen's Grooming",
    since: "2020",
    phone: "+62 851-6908-4139",
    email: "concierge@horusbarbershop.com",
    instagram: "@horusbarbershop",
    tiktok: "@horusbarber",
  },

  // Multi-branch Configuration
  branches: [
    {
      id: "pusat",
      name: "Cabang Pusat (Jakarta Selatan)",
      area: "Senopati, Jakarta Selatan",
      address: "Jl. Senopati Raya No. 45, Kebayoran Baru, Jakarta Selatan 12190",
      whatsapp: "6285169084139", // Nomor WhatsApp aktif
      displayPhone: "+62 851-6908-4139",
      hours: "Senin - Minggu: 10.00 - 21.30 WIB",
      googleMapsUrl: "https://maps.google.com/?q=Senopati+Jakarta+Selatan",
      isPrimary: true,
      parking: "Valet & Dedicated Parking Available",
      lounge: "Executive Lounge with Free Artisan Coffee & Cold Towel"
    },
    {
      id: "citraland",
      name: "Cabang Citraland (Surabaya Barat)",
      area: "Citraland, Surabaya Barat",
      address: "Ruko Citraland Gateway Blok B-12, Sambikerep, Surabaya Barat 60216",
      whatsapp: "6285169084139",
      displayPhone: "+62 851-6908-4139",
      hours: "Senin - Minggu: 10.00 - 21.00 WIB",
      googleMapsUrl: "https://maps.google.com/?q=Citraland+Surabaya",
      isPrimary: false,
      parking: "Spacious Ruko Parking",
      lounge: "Comfort Lounge with PlayStation 5 & High-Speed WiFi"
    },
    {
      id: "johor",
      name: "Cabang Johor (Medan Selatan)",
      area: "Karya Wisata, Medan Johor",
      address: "Komp. Johor Indah Permai I Blok C-08, Jl. Karya Wisata, Medan Johor 20144",
      whatsapp: "6285169084139",
      displayPhone: "+62 851-6908-4139",
      hours: "Senin - Minggu: 10.00 - 21.00 WIB",
      googleMapsUrl: "https://maps.google.com/?q=Johor+Medan",
      isPrimary: false,
      parking: "Secured Complex Parking",
      lounge: "Classic Barbershop Lounge & Signature Iced Tea"
    }
  ],

  // Service Categories & Items
  categories: [
    { id: "all", name: "Semua Layanan" },
    { id: "haircut", name: "Haircut & Styling" },
    { id: "shave", name: "Beard & Shave" },
    { id: "package", name: "VIP Packages" },
    { id: "treatment", name: "Scalp & Color" }
  ],

  services: [
    {
      id: "royal-haircut",
      category: "haircut",
      name: "Gentleman's Royal Haircut",
      duration: "45 Menit",
      price: 120000,
      priceFormatted: "Rp 120.000",
      description: "Konsultasi gaya rambut, precision scissor/clipper cut, cuci rambut dengan shampoo beraroma mewah, tonic, dan styling pomade premium.",
      popular: true,
      badge: "Best Seller"
    },
    {
      id: "executive-fade",
      category: "haircut",
      name: "Executive Skin Fade & Detailing",
      duration: "50 Menit",
      price: 150000,
      priceFormatted: "Rp 150.000",
      description: "Gradasi fade ultra-presisi (Low/Mid/High Fade), razor razor-sharp outline detailing, head wash, refreshing cold towel, dan finishing matte paste.",
      popular: false,
      badge: "Precision Pick"
    },
    {
      id: "hot-towel-shave",
      category: "shave",
      name: "Traditional Hot Towel Razor Shave",
      duration: "30 Menit",
      price: 85000,
      priceFormatted: "Rp 85.000",
      description: "Ritual pangkas kumis/jenggot klasik dengan double hot towel steamer, warm lather soap, pisau cukur steril sekali pakai, dan soothing aftershave balm.",
      popular: false,
      badge: "Classic Ritual"
    },
    {
      id: "beard-sculpting",
      category: "shave",
      name: "Beard Sculpting & Nourishing Oil",
      duration: "25 Menit",
      price: 75000,
      priceFormatted: "Rp 75.000",
      description: "Penataan bentuk jenggot proporsional sesuai bentuk rahang, perapian garis leher dan pipi, diakhiri dengan beard butter & organic argan oil.",
      popular: false,
      badge: null
    },
    {
      id: "royal-package",
      category: "package",
      name: "The Horus Royal Treatment (Complete VIP)",
      duration: "80 Menit",
      price: 235000,
      priceFormatted: "Rp 235.000",
      description: "Paket lengkap: Signature Haircut, Hot Towel Razor Shave, Pijat Relaksasi Pundak & Leher, Face Scrub, Hair Tonic & Styling, plus Complimentary Single Origin Espresso.",
      popular: true,
      badge: "Signature VIP"
    },
    {
      id: "scalp-detox",
      category: "treatment",
      name: "Scalp Detox & Anti-Dandruff Therapy",
      duration: "40 Menit",
      price: 110000,
      priceFormatted: "Rp 110.000",
      description: "Deep cleansing scrub kulit kepala untuk mengangkat sel kulit mati, balancing oil, hair mask dingin, dan massage kepala untuk melancarkan sirkulasi.",
      popular: false,
      badge: "Healthy Scalp"
    },
    {
      id: "grey-blending",
      category: "treatment",
      name: "Camo Grey Blending / Hair Color",
      duration: "60 Menit",
      price: 180000,
      priceFormatted: "Rp 180.000",
      description: "Pewarnaan rambut semi-permanen untuk menyamarkan uban secara natural tanpa terkesan kaku, atau pilihan fashion color tone gelap pria.",
      popular: false,
      badge: null
    },
    {
      id: "junior-gentleman",
      category: "haircut",
      name: "Junior Gentleman Cut (< 10 thn)",
      duration: "35 Menit",
      price: 90000,
      priceFormatted: "Rp 90.000",
      description: "Potongan rambut sabar dan ramah untuk buah hati Anda, selesai dengan aroma bedak bayi yang segar dan pomade ringan berbahan alami.",
      popular: false,
      badge: "Kids"
    }
  ],

  // Barber Team
  barbers: [
    {
      id: "rian-pratama",
      name: "Rian 'The Razor' Pratama",
      title: "Master Barber & Lead Stylist",
      experience: "8+ Tahun Pengalaman",
      specialty: "Classic Scissor Cut, Pompadour & Side Part",
      branches: ["pusat"],
      bio: "Spesialis potongan rambut klasik dengan teknik gunting manual berpresisi tinggi. Menjaga standar ketajaman dan kesempurnaan setiap helai rambut.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80",
      instagram: "@rian_horusbarber"
    },
    {
      id: "dimas-wicaksono",
      name: "Dimas 'Fade King' Wicaksono",
      title: "Senior Fade Specialist",
      experience: "6+ Tahun Pengalaman",
      specialty: "High/Low Skin Fade, Textured Crop & Detailing",
      branches: ["pusat", "citraland"],
      bio: "Dikenal dengan gradasi fade ultra-halus dan tajam. Selalu mengikuti tren potongan modern internasional untuk tampilan maskulin kontemporer.",
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=700&q=80",
      instagram: "@dimas_fadeking"
    },
    {
      id: "fauzan-alamsyah",
      name: "Fauzan Alamsyah",
      title: "Traditional Shave & Beard Craftsman",
      experience: "7+ Tahun Pengalaman",
      specialty: "Hot Towel Shave, Beard Sculpting & Head Massage",
      branches: ["citraland"],
      bio: "Ahli ritual cukur tradisional dengan pisau lipat klasik. Menghadirkan ketenangan, kenyamanan relaksasi, dan kebersihan tanpa iritasi.",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=700&q=80",
      instagram: "@fauzan_shave"
    },
    {
      id: "bagas-arya",
      name: "Bagas Arya",
      title: "Modern Stylist & Hair Care Specialist",
      experience: "5+ Tahun Pengalaman",
      specialty: "Mullet Fade, French Crop, Scalp Detox & Coloring",
      branches: ["johor"],
      bio: "Kreatif, komunikatif, dan teliti dalam menganalisis bentuk wajah serta karakter rambut untuk menemukan style yang paling meningkatkan percaya diri Anda.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
      instagram: "@bagas_horus"
    }
  ],

  // Lookbook / Gallery
  lookbook: [
    {
      title: "Executive Low Skin Fade",
      category: "Fade",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80",
      desc: "Gradasi halus berpadu tekstur natural di bagian atas."
    },
    {
      title: "Classic Slicked Back Undercut",
      category: "Classic",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80",
      desc: "Gaya bangsawan Eropa dengan sentuhan high-shine pomade."
    },
    {
      title: "Textured French Crop with Sharp Lineup",
      category: "Modern",
      image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=800&q=80",
      desc: "Garis dahi tegas dan tekstur atas bergaya kasual maskulin."
    },
    {
      title: "Master Beard Sculpting & Razor Edge",
      category: "Beard",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
      desc: "Bentuk jenggot tegas memperkuat siluet rahang gentlemen."
    },
    {
      title: "Modern Quiff with Clean Taper",
      category: "Classic",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      desc: "Volume rambut bervolume elegan untuk pertemuan formal."
    },
    {
      title: "The Royal Hot Towel Treatment",
      category: "Ritual",
      image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=800&q=80",
      desc: "Relaksasi handuk hangat aromaterapi sebelum pangkas presisi."
    }
  ],

  // Client Testimonials
  testimonials: [
    {
      name: "Raffi Mahendra",
      role: "Managing Director, Capital Firm",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      branch: "Cabang Pusat (Senopati)",
      comment: "Horus adalah standar baru barbershop di Jakarta. Dari sambutan resepsionis, aroma handuk hangat, hingga ketajaman potongan Mas Rian, semuanya bintang lima. Booking lewat WA sangat praktis!"
    },
    {
      name: "Kevin Sanjaya",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      branch: "Cabang Citraland (Surabaya)",
      comment: "Skin fade terbaik yang pernah saya dapatkan di Surabaya. Tempatnya bersih, playlist lagunya berkelas, dan kopinya setara coffee shop artisan. Highly recommended!"
    },
    {
      name: "Dr. Adrian Siregar",
      role: "Surgeon & Enthusiast",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      branch: "Cabang Johor (Medan)",
      comment: "Protokol sterilisasi pisau cukur mereka membuat saya sangat tenang. Suasana elegan dan privasi sangat terjaga. Sistem booking langsung ke WA cabang membuat jadwal saya tidak bentrok."
    }
  ]
};
