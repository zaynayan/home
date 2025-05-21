//script.js
function trackDownload() {
// Opsional: Kirim data ke Google Analytics atau layanan tracking
if(typeof gtag !== 'undefined') {
gtag('event', 'download', {
'event_category': 'engagement',
'event_label': 'Zaynayan APK Download'
});
}

// Opsional: Timer redirect jika download tidak dimulai
setTimeout(function() {
window.location.href = "https://zaynayan.olshopku.com/download-thank-you";
}, 3000);
}

// Force download untuk mobile devices
document.addEventListener('DOMContentLoaded', function() {
const downloadLinks = document.querySelectorAll('a[download]');
downloadLinks.forEach(link => {
link.addEventListener('click', function(e) {
if(/Android|iPhone|iPad/i.test(navigator.userAgent)) {
e.preventDefault();
window.open(this.href, '_blank');
}
});
});
});

// Fungsi untuk menampilkan popup
function showDownloadPopup() {
const popup = document.getElementById('downloadPopup');
popup.style.display = 'flex';

// Tutup popup setelah 10 detik
setTimeout(() => {
popup.style.display = 'none';
}, 10000);
}

// Fungsi untuk tracking download
function trackDownload() {
// Opsional: Tracking analytics
if(typeof gtag !== 'undefined') {
gtag('event', 'download', {
'event_category': 'engagement',
'event_label': 'Zaynayan APK Download'
});
}

// Tampilkan popup setelah 1 detik
setTimeout(showDownloadPopup, 1000);
}

// Deteksi jika download tidak dimulai
let downloadStarted = false;

document.addEventListener('DOMContentLoaded', function() {
const downloadLinks = document.querySelectorAll('a[download]');

downloadLinks.forEach(link => {
link.addEventListener('click', function(e) {
downloadStarted = false;

// Untuk mobile devices
if(/Android|iPhone|iPad/i.test(navigator.userAgent)) {
e.preventDefault();
const newTab = window.open(this.href, '_blank');

// Deteksi jika tab baru dibuka
setTimeout(() => {
if(!downloadStarted) {
showDownloadPopup();
}
}, 3000);
} else {
// Untuk desktop
trackDownload();

// Fallback jika download tidak dimulai dalam 3 detik
setTimeout(() => {
if(!downloadStarted) {
showDownloadPopup();
}
}, 3000);
}
});
});

// Deteksi download start (hanya bekerja di beberapa browser)
window.addEventListener('blur', function() {
downloadStarted = true;
});
});

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme or prefered scheme
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
document.documentElement.classList.add('dark');
themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle theme
themeToggle.addEventListener('click', function() {
const isDark = document.documentElement.classList.toggle('dark');
if (isDark) {
themeIcon.classList.replace('fa-moon', 'fa-sun');
localStorage.setItem('theme', 'dark');
} else {
themeIcon.classList.replace('fa-sun', 'fa-moon');
localStorage.setItem('theme', 'light');
}
});

// Listen for system theme changes
prefersDarkScheme.addListener(e => {
const newTheme = e.matches ? 'dark' : 'light';
if (newTheme === 'dark') {
document.documentElement.classList.add('dark');
themeIcon.classList.replace('fa-moon', 'fa-sun');
} else {
document.documentElement.classList.remove('dark');
themeIcon.classList.replace('fa-sun', 'fa-moon');
}
localStorage.setItem('theme', newTheme);
});
});

// Animasi saat elemen muncul di viewport
document.addEventListener('DOMContentLoaded', function() {
const animateElements = document.querySelectorAll('.animate__animated');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const animation = entry.target.getAttribute('data-animate');
entry.target.classList.add(animation);
observer.unobserve(entry.target);
}
});
}, {
threshold: 0.1
});

animateElements.forEach(element => {
observer.observe(element);
});

// Smooth scroll untuk anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
});
});