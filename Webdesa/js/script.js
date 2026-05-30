// Website Initialization
window.addEventListener('DOMContentLoaded', function() {
  console.log('Website Desa Gunungjati berhasil dimuat');
});

// Send Message Function with Validation
function kirimPesan() {
  // Get form elements
  const namaInput = document.getElementById('nama');
  const emailInput = document.getElementById('email');
  const pesanInput = document.getElementById('pesan');

  // Validation
  if (!namaInput || !namaInput.value.trim()) {
    alert('Mohon isi nama terlebih dahulu!');
    return;
  }

  if (!emailInput || !emailInput.value.trim()) {
    alert('Mohon isi email terlebih dahulu!');
    return;
  }

  if (!isValidEmail(emailInput.value)) {
    alert('Format email tidak valid!');
    return;
  }

  if (!pesanInput || !pesanInput.value.trim()) {
    alert('Mohon isi pesan pengaduan terlebih dahulu!');
    return;
  }

  // Show success message
  alert(`Terima kasih ${namaInput.value}! Pengaduan Anda telah berhasil dikirim. Kami akan segera menindaklanjuti.`);

  // Reset form
  document.getElementById('contactForm').reset();
}

// Email Validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Population count animation
function animateCount(id, duration = 1800) {
  const el = document.getElementById(id);
  if (!el) return;
  const target = parseInt(el.getAttribute('data-target'), 10) || 0;
  const start = 0;
  const startTime = performance.now();

  function formatNumber(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(progress * (target - start) + start);
    el.textContent = formatNumber(value);
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = formatNumber(target);
    }
  }

  requestAnimationFrame(tick);
}

// Run animation on DOM ready
window.addEventListener('DOMContentLoaded', function() {
  // existing log
  console.log('Website Desa Gunungjati berhasil dimuat');
  // animate population count if present
  animateCount('population-count');
});