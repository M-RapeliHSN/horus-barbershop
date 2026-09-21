/**
 * Horus Barbershop - Application Logic & WhatsApp Checkout System
 * Handles dynamic content rendering, interactive UI, and WhatsApp booking integration
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderServices('all');
  renderBarbers();
  renderLookbook();
  renderBranches();
  renderTestimonials();
  initBookingForm();
  initCategoryFilters();
  initCurrentYear();
  initQuickScrollButtons();
});

/* ==========================================================================
   1. Navbar & Navigation Controls
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky transition on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-neutral-950/95', 'backdrop-blur-md', 'border-b', 'border-neutral-800/80', 'shadow-2xl');
      navbar.classList.remove('bg-transparent', 'border-transparent');
    } else {
      navbar.classList.remove('bg-neutral-950/95', 'backdrop-blur-md', 'border-b', 'border-neutral-800/80', 'shadow-2xl');
      navbar.classList.add('bg-transparent', 'border-transparent');
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars text-xl text-amber-500"></i>';
      } else {
        mobileMenu.classList.remove('hidden');
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-xmark text-xl text-amber-500"></i>';
      }
    });

    // Close menu when clicking link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars text-xl text-amber-500"></i>';
      });
    });
  }
}

/* ==========================================================================
   2. Render Services & Pricing Grid
   ========================================================================== */
function renderServices(filterCategory = 'all') {
  const container = document.getElementById('servicesContainer');
  if (!container) return;

  const filtered = filterCategory === 'all'
    ? HORUS_DATA.services
    : HORUS_DATA.services.filter(s => s.category === filterCategory);

  container.innerHTML = filtered.map(service => `
    <div class="card-luxury p-6 flex flex-col justify-between group rounded-sm relative overflow-hidden" data-id="${service.id}">
      ${service.badge ? `
        <span class="absolute top-0 right-0 bg-amber-600/90 text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-bl-sm">
          ${service.badge}
        </span>
      ` : ''}

      <div>
        <div class="flex items-start justify-between gap-4 mb-3">
          <h3 class="font-serif-luxury text-xl font-bold text-gray-100 group-hover:text-amber-400 transition-colors">
            ${service.name}
          </h3>
        </div>

        <div class="flex items-center gap-3 text-sm mb-3">
          <span class="text-amber-500 font-bold text-lg tracking-tight">${service.priceFormatted}</span>
          <span class="text-neutral-600">•</span>
          <span class="text-neutral-400 text-xs flex items-center gap-1.5">
            <i class="fa-regular fa-clock text-amber-500/80"></i>
            ${service.duration}
          </span>
        </div>

        <p class="text-gray-400 text-sm leading-relaxed mb-6 font-light">
          ${service.description}
        </p>
      </div>

      <div class="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
        <button 
          onclick="selectServiceForBooking('${service.id}')"
          class="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-amber-400 border border-amber-600/40 hover:bg-amber-600 hover:text-white rounded-none transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          <span>Pilih Layanan Ini</span>
          <i class="fa-solid fa-arrow-right text-[10px] group-hover/btn:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.service-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-amber-600', 'text-white', 'border-amber-600');
        b.classList.add('bg-neutral-900', 'text-gray-300', 'border-neutral-800');
      });

      btn.classList.add('bg-amber-600', 'text-white', 'border-amber-600');
      btn.classList.remove('bg-neutral-900', 'text-gray-300', 'border-neutral-800');

      const category = btn.getAttribute('data-category');
      renderServices(category);
    });
  });
}

/* ==========================================================================
   3. Render The Barbers
   ========================================================================== */
function renderBarbers() {
  const container = document.getElementById('barbersContainer');
  if (!container) return;

  container.innerHTML = HORUS_DATA.barbers.map(barber => {
    const branchNames = barber.branches.map(bId => {
      const b = HORUS_DATA.branches.find(item => item.id === bId);
      return b ? b.name.replace('Cabang ', '') : bId;
    }).join(' & ');

    return `
      <div class="card-luxury rounded-sm overflow-hidden group flex flex-col justify-between">
        <div class="relative overflow-hidden aspect-[4/5] bg-neutral-950">
          <img 
            src="${barber.image}" 
            alt="${barber.name}" 
            class="w-full h-full object-cover object-top img-hover-color"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
          
          <div class="absolute bottom-4 left-4 right-4">
            <span class="inline-block bg-amber-600/90 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 mb-1.5 rounded-none">
              ${barber.experience}
            </span>
            <h3 class="font-serif-luxury text-xl font-bold text-white tracking-wide">
              ${barber.name}
            </h3>
            <p class="text-amber-400 text-xs font-medium tracking-wide">
              ${barber.title}
            </p>
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between bg-neutral-900/60">
          <div>
            <div class="mb-3">
              <span class="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                Keahlian Khusus:
              </span>
              <p class="text-sm text-gray-300 font-light">
                ${barber.specialty}
              </p>
            </div>

            <p class="text-xs text-neutral-400 leading-relaxed line-clamp-2 mb-4 font-light italic">
              "${barber.bio}"
            </p>

            <div class="text-[11px] text-neutral-400 flex items-center gap-1.5 mb-4">
              <i class="fa-solid fa-location-dot text-amber-500"></i>
              <span>Tersedia di: <strong class="text-gray-300 font-normal">${branchNames}</strong></span>
            </div>
          </div>

          <div class="pt-3 border-t border-neutral-800 flex items-center justify-between gap-3">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-neutral-400 hover:text-amber-500 text-sm transition-colors"
              title="Instagram ${barber.name}"
            >
              <i class="fa-brands fa-instagram text-lg"></i>
            </a>
            <button 
              onclick="selectBarberForBooking('${barber.id}')"
              class="flex-1 py-2 px-3 text-xs uppercase tracking-wider font-semibold bg-neutral-950 hover:bg-amber-600 text-amber-400 hover:text-white border border-neutral-700 hover:border-amber-600 transition-all text-center"
            >
              Booking Bersama ${barber.name.split(' ')[0]}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   4. Render Lookbook / Gallery
   ========================================================================== */
function renderLookbook() {
  const container = document.getElementById('lookbookContainer');
  if (!container) return;

  container.innerHTML = HORUS_DATA.lookbook.map(item => `
    <div class="relative overflow-hidden rounded-sm group aspect-square bg-neutral-900 border border-neutral-800">
      <img 
        src="${item.image}" 
        alt="${item.title}" 
        class="w-full h-full object-cover img-hover-color"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90 transition-opacity"></div>
      
      <div class="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span class="inline-block text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">
          ${item.category}
        </span>
        <h4 class="font-serif-luxury text-base font-semibold text-white mb-1">
          ${item.title}
        </h4>
        <p class="text-xs text-gray-400 line-clamp-2 font-light">
          ${item.desc}
        </p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   5. Render Branches Information Cards
   ========================================================================== */
function renderBranches() {
  const container = document.getElementById('branchesContainer');
  if (!container) return;

  container.innerHTML = HORUS_DATA.branches.map(branch => `
    <div class="card-luxury p-7 rounded-sm flex flex-col justify-between relative overflow-hidden group">
      ${branch.isPrimary ? `
        <div class="absolute top-0 right-0 bg-amber-600 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-sm">
          Flagship Store
        </div>
      ` : ''}

      <div>
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-none bg-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
            <i class="fa-solid fa-shop text-lg"></i>
          </div>
          <div>
            <h3 class="font-serif-luxury text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
              ${branch.name}
            </h3>
            <span class="text-xs text-neutral-400">${branch.area}</span>
          </div>
        </div>

        <div class="space-y-3 my-5 text-xs text-gray-300 font-light">
          <div class="flex items-start gap-2.5">
            <i class="fa-solid fa-location-dot text-amber-500 mt-1 shrink-0"></i>
            <span>${branch.address}</span>
          </div>
          <div class="flex items-center gap-2.5">
            <i class="fa-regular fa-clock text-amber-500 shrink-0"></i>
            <span>${branch.hours}</span>
          </div>
          <div class="flex items-center gap-2.5">
            <i class="fa-brands fa-whatsapp text-emerald-500 shrink-0"></i>
            <span>WA: <strong class="text-gray-200 font-normal">${branch.displayPhone}</strong></span>
          </div>
          <div class="flex items-start gap-2.5 text-neutral-400 pt-2 border-t border-neutral-800/80">
            <i class="fa-solid fa-couch text-amber-500/80 mt-0.5 shrink-0"></i>
            <span>${branch.lounge}</span>
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-neutral-800 flex items-center gap-2">
        <a 
          href="${branch.googleMapsUrl}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex-1 py-2 px-3 text-center text-xs text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 rounded-none transition-colors flex items-center justify-center gap-1.5"
        >
          <i class="fa-solid fa-map-location-dot text-amber-500"></i>
          <span>Google Maps</span>
        </a>
        <button 
          onclick="selectBranchForBooking('${branch.id}')"
          class="flex-1 py-2 px-3 text-center text-xs font-semibold uppercase tracking-wider bg-amber-600 hover:bg-amber-500 text-white rounded-none transition-colors flex items-center justify-center gap-1.5"
        >
          <span>Pilih Cabang</span>
          <i class="fa-solid fa-check text-[10px]"></i>
        </button>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   6. Render Testimonials
   ========================================================================== */
function renderTestimonials() {
  const container = document.getElementById('testimonialsContainer');
  if (!container) return;

  container.innerHTML = HORUS_DATA.testimonials.map(item => `
    <div class="card-luxury p-6 rounded-sm flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-1 text-amber-500 text-xs mb-4">
          ${Array(item.rating).fill('<i class="fa-solid fa-star"></i>').join('')}
        </div>
        <p class="text-sm text-gray-300 leading-relaxed mb-6 font-light italic">
          "${item.comment}"
        </p>
      </div>

      <div class="flex items-center gap-3 pt-4 border-t border-neutral-800">
        <img 
          src="${item.avatar}" 
          alt="${item.name}" 
          class="w-10 h-10 rounded-full object-cover border border-amber-500/30"
          loading="lazy"
        />
        <div>
          <h4 class="font-serif-luxury text-sm font-bold text-white">${item.name}</h4>
          <span class="text-[11px] text-neutral-400 block">${item.role}</span>
          <span class="text-[10px] text-amber-500 font-medium">${item.branch}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   7. Multi-Branch Booking & WhatsApp Checkout Engine (PRD Requirement 7)
   ========================================================================== */
function initBookingForm() {
  const branchSelect = document.getElementById('bookingBranch');
  const serviceSelect = document.getElementById('bookingService');
  const barberSelect = document.getElementById('bookingBarber');
  const dateInput = document.getElementById('bookingDate');
  const timeSelect = document.getElementById('bookingTime');
  const nameInput = document.getElementById('bookingName');
  const phoneInput = document.getElementById('bookingPhone');
  const notesInput = document.getElementById('bookingNotes');
  const form = document.getElementById('bookingForm');

  if (!branchSelect || !serviceSelect || !barberSelect || !form) return;

  // Populate Branches dropdown
  branchSelect.innerHTML = HORUS_DATA.branches.map(b => `
    <option value="${b.id}" ${b.isPrimary ? 'selected' : ''}>${b.name}</option>
  `).join('');

  // Populate Services dropdown
  serviceSelect.innerHTML = `
    <option value="" disabled selected>-- Pilih Layanan yang Anda Inginkan --</option>
    ${HORUS_DATA.services.map(s => `
      <option value="${s.id}">${s.name} (${s.priceFormatted} • ${s.duration})</option>
    `).join('')}
  `;

  // Populate Barbers dropdown
  updateBarberDropdown(branchSelect.value);

  // Set min date to today (YYYY-MM-DD)
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  dateInput.min = `${yyyy}-${mm}-${dd}`;
  dateInput.value = `${yyyy}-${mm}-${dd}`;

  // Populate Time Slots (10:00 to 20:30 every 30 minutes)
  const times = [];
  for (let hour = 10; hour <= 20; hour++) {
    times.push(`${String(hour).padStart(2, '0')}:00`);
    times.push(`${String(hour).padStart(2, '0')}:30`);
  }
  timeSelect.innerHTML = `
    <option value="" disabled selected>-- Pilih Jam Booking --</option>
    ${times.map(t => `<option value="${t}">${t} WIB</option>`).join('')}
  `;
  timeSelect.value = "13:00"; // default reasonable afternoon slot

  // Event Listeners for dynamic updates
  branchSelect.addEventListener('change', () => {
    updateBarberDropdown(branchSelect.value);
    updateBranchInfoDisplay(branchSelect.value);
    updateWhatsAppPreview();
  });

  [serviceSelect, barberSelect, dateInput, timeSelect, nameInput, phoneInput, notesInput].forEach(element => {
    if (element) {
      element.addEventListener('input', updateWhatsAppPreview);
      element.addEventListener('change', updateWhatsAppPreview);
    }
  });

  // Initial update
  updateBranchInfoDisplay(branchSelect.value);
  updateWhatsAppPreview();

  // Form Submission -> Format & Open WhatsApp
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    processWhatsAppCheckout();
  });
}

function updateBarberDropdown(selectedBranchId) {
  const barberSelect = document.getElementById('bookingBarber');
  if (!barberSelect) return;

  // Filter barbers available in selected branch, or allow all
  const availableBarbers = HORUS_DATA.barbers.filter(b => b.branches.includes(selectedBranchId));
  const otherBarbers = HORUS_DATA.barbers.filter(b => !b.branches.includes(selectedBranchId));

  let html = `
    <option value="any">Siapa Saja yang Tersedia (Any Master Barber)</option>
    <optgroup label="Tersedia di Cabang Ini">
      ${availableBarbers.map(b => `<option value="${b.id}">${b.name} (${b.title})</option>`).join('')}
    </optgroup>
  `;

  if (otherBarbers.length > 0) {
    html += `
      <optgroup label="Cabang Lain">
        ${otherBarbers.map(b => `<option value="${b.id}">${b.name} (${b.title})</option>`).join('')}
      </optgroup>
    `;
  }

  barberSelect.innerHTML = html;
}

function updateBranchInfoDisplay(branchId) {
  const branch = HORUS_DATA.branches.find(b => b.id === branchId) || HORUS_DATA.branches[0];
  const targetName = document.getElementById('previewBranchName');
  const targetAddress = document.getElementById('previewBranchAddress');
  const targetPhone = document.getElementById('previewBranchPhone');
  const targetHours = document.getElementById('previewBranchHours');

  if (targetName) targetName.textContent = branch.name;
  if (targetAddress) targetAddress.textContent = branch.address;
  if (targetPhone) targetPhone.textContent = branch.displayPhone;
  if (targetHours) targetHours.textContent = branch.hours;
}

function buildWhatsAppMessage() {
  const branchId = document.getElementById('bookingBranch')?.value;
  const serviceId = document.getElementById('bookingService')?.value;
  const barberId = document.getElementById('bookingBarber')?.value;
  const dateVal = document.getElementById('bookingDate')?.value;
  const timeVal = document.getElementById('bookingTime')?.value;
  const nameVal = document.getElementById('bookingName')?.value.trim();
  const phoneVal = document.getElementById('bookingPhone')?.value.trim();
  const notesVal = document.getElementById('bookingNotes')?.value.trim();

  const branch = HORUS_DATA.branches.find(b => b.id === branchId) || HORUS_DATA.branches[0];
  const service = HORUS_DATA.services.find(s => s.id === serviceId);
  const barber = HORUS_DATA.barbers.find(b => b.id === barberId);

  // Format Date to Indonesian localized date string (e.g. Kamis, 24 September 2026)
  let formattedDate = dateVal || "Hari Ini";
  if (dateVal) {
    try {
      const d = new Date(dateVal + "T00:00:00");
      formattedDate = d.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      formattedDate = dateVal;
    }
  }

  const customerName = nameVal || "[Nama Anda]";
  const serviceText = service ? `${service.name} (${service.priceFormatted} • ${service.duration})` : "[Belum Memilih Layanan]";
  const barberText = barber ? barber.name : "Siapa saja yang tersedia (Any Barber)";
  const timeText = timeVal ? `${timeVal} WIB` : "[Pilih Jam]";
  const customerPhoneText = phoneVal ? `\nNo. WhatsApp: ${phoneVal}` : "";
  const notesText = notesVal ? `\nCatatan Khusus: ${notesVal}` : "";

  // Pesan WhatsApp terstruktur rapi sesuai standar PRD & kemudahan admin membaca
  const message = `Halo Admin ${branch.name}, saya ingin booking layanan di Horus Barbershop:

Nama: ${customerName}${customerPhoneText}
Layanan: ${serviceText}
Barber: ${barberText}
Tanggal: ${formattedDate}
Waktu: ${timeText}${notesText}

Mohon konfirmasi ketersediaan jadwalnya. Terima kasih!`;

  return { message, branch };
}

function updateWhatsAppPreview() {
  const previewBox = document.getElementById('waPreviewText');
  if (!previewBox) return;

  const { message } = buildWhatsAppMessage();
  previewBox.textContent = message;
}

function processWhatsAppCheckout() {
  const serviceSelect = document.getElementById('bookingService');
  const nameInput = document.getElementById('bookingName');
  const dateInput = document.getElementById('bookingDate');
  const timeSelect = document.getElementById('bookingTime');

  // Basic Validation
  if (!nameInput.value.trim()) {
    showNotification("Mohon masukkan nama lengkap Anda.", "warning");
    nameInput.focus();
    return;
  }

  if (!serviceSelect.value) {
    showNotification("Mohon pilih layanan barbershop yang Anda inginkan.", "warning");
    serviceSelect.focus();
    return;
  }

  if (!dateInput.value) {
    showNotification("Mohon tentukan tanggal kunjungan Anda.", "warning");
    dateInput.focus();
    return;
  }

  if (!timeSelect.value) {
    showNotification("Mohon tentukan jam kedatangan Anda.", "warning");
    timeSelect.focus();
    return;
  }

  const { message, branch } = buildWhatsAppMessage();

  // WhatsApp Destination Number
  // Pastikan format nomor diawali kode negara tanpa + (misal: 6281234567890)
  const cleanPhone = branch.whatsapp.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

  showNotification(`Mengarahkan Anda ke WhatsApp ${branch.name}...`, "success");

  // Open WhatsApp in new tab
  setTimeout(() => {
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }, 400);
}

/* ==========================================================================
   8. Global Actions for 1-Click Service & Barber Pre-Fill
   ========================================================================== */
window.selectServiceForBooking = function(serviceId) {
  const serviceSelect = document.getElementById('bookingService');
  if (serviceSelect) {
    serviceSelect.value = serviceId;
    updateWhatsAppPreview();
  }

  // Smooth scroll to booking section
  const bookingSec = document.getElementById('booking');
  if (bookingSec) {
    bookingSec.scrollIntoView({ behavior: 'smooth' });
    showNotification("Layanan terpilih! Silakan lengkapi detail kunjungan Anda.", "info");
  }
};

window.selectBarberForBooking = function(barberId) {
  const barber = HORUS_DATA.barbers.find(b => b.id === barberId);
  const branchSelect = document.getElementById('bookingBranch');
  const barberSelect = document.getElementById('bookingBarber');

  if (barber && branchSelect) {
    // If barber is not in current branch, switch to the first branch they work in
    if (!barber.branches.includes(branchSelect.value) && barber.branches.length > 0) {
      branchSelect.value = barber.branches[0];
      updateBarberDropdown(barber.branches[0]);
      updateBranchInfoDisplay(barber.branches[0]);
    }
  }

  if (barberSelect) {
    barberSelect.value = barberId;
    updateWhatsAppPreview();
  }

  const bookingSec = document.getElementById('booking');
  if (bookingSec) {
    bookingSec.scrollIntoView({ behavior: 'smooth' });
    showNotification(`Barber ${barber ? barber.name.split(' ')[0] : ''} dipilih! Silakan pilih jadwal Anda.`, "info");
  }
};

window.selectBranchForBooking = function(branchId) {
  const branchSelect = document.getElementById('bookingBranch');
  if (branchSelect) {
    branchSelect.value = branchId;
    updateBarberDropdown(branchId);
    updateBranchInfoDisplay(branchId);
    updateWhatsAppPreview();
  }

  const bookingSec = document.getElementById('booking');
  if (bookingSec) {
    bookingSec.scrollIntoView({ behavior: 'smooth' });
  }
};

/* ==========================================================================
   9. Notifications / Toast Helper
   ========================================================================== */
function showNotification(msg, type = "info") {
  const existing = document.getElementById('horusToast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'horusToast';
  toast.className = `fixed bottom-6 right-6 z-50 px-5 py-3 rounded-none border text-sm font-medium shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-4 opacity-0`;

  if (type === "warning") {
    toast.classList.add('bg-neutral-900', 'border-amber-500', 'text-amber-400');
    toast.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-amber-500"></i> <span>${msg}</span>`;
  } else if (type === "success") {
    toast.classList.add('bg-neutral-900', 'border-emerald-500', 'text-emerald-400');
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-500"></i> <span>${msg}</span>`;
  } else {
    toast.classList.add('bg-neutral-900', 'border-amber-500/50', 'text-gray-200');
    toast.innerHTML = `<i class="fa-solid fa-circle-info text-amber-500"></i> <span>${msg}</span>`;
  }

  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ==========================================================================
   10. Quick Helpers
   ========================================================================== */
function initCurrentYear() {
  const yearSpans = document.querySelectorAll('.current-year');
  const year = new Date().getFullYear();
  yearSpans.forEach(span => span.textContent = year);
}

function initQuickScrollButtons() {
  // Floating WhatsApp button action
  const floatingWa = document.getElementById('floatingWaBtn');
  if (floatingWa) {
    floatingWa.addEventListener('click', (e) => {
      e.preventDefault();
      const currentBranchId = document.getElementById('bookingBranch')?.value || 'pusat';
      const branch = HORUS_DATA.branches.find(b => b.id === currentBranchId) || HORUS_DATA.branches[0];
      const cleanPhone = branch.whatsapp.replace(/[^0-9]/g, '');
      const quickMsg = encodeURIComponent(`Halo Horus Barbershop (${branch.name}), saya ingin tanya ketersediaan jadwal hari ini.`);
      window.open(`https://wa.me/${cleanPhone}?text=${quickMsg}`, '_blank', 'noopener,noreferrer');
    });
  }
}
