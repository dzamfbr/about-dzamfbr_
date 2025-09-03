// Navbar toggle
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    navbarNav.classList.toggle('active');
});

// Klik di luar sidebar untuk nutup nav
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// ===== Scroll Reveal Animation =====
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// jalan pas scroll
window.addEventListener("scroll", revealOnScroll);

// jalan pas pertama kali load
document.addEventListener("DOMContentLoaded", revealOnScroll);

// ===== Kirim Pesan ke WhatsApp =====
const form = document.getElementById("kontakForm");

if (form) {
  form.addEventListener("submit", function(e){
    e.preventDefault();

    let nama = document.getElementById("nama").value.trim();
    let pesan = document.getElementById("pesan").value.trim();
    let nomer = document.getElementById("nomer").value.trim();

    if(nama === "" || pesan === "" || nomer === ""){
      alert("Harap isi semua data sebelum mengirim pesan 🙏");
      return;
    }

    // Buat pesan otomatis
    let message = 
      "Hallo zam, saya " + nama + "%0A" +      
      "Pesan: " + pesan + "%0A" +

    // Nomor WhatsApp kamu
    let url = "https://wa.me/6287788722325?text=" + message;

    // Buka WhatsApp
    window.open(url, '_blank').focus();
  });

}
