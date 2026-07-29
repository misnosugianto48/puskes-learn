// const heroTitle = document.querySelector('#hero-title');

// heroTitle.textContent = 'Selamat Datang di Puskesmas Sehat Digital';

let kuotalima = 5;

kuotalima;

const infoText = document.querySelector('#info-kuota');
const tombolDaftar = document.querySelector('#btn-daftar');

tombolDaftar.addEventListener('click', function () {
  if (kuota > 0) {
    kuota--; // Kurangi angka kuota sebanyak 1
    infoText.textContent = 'Sisa Kuota Hari Ini : ' + kuota; // Update tampilan HTML

    if (kuota === 0) {
      tombolDaftar.setAttribute('hidden', true);
      infoText.textContent = 'Maaf Kuota Habis';
      infoText.classList.add('status-penuh');
    }
  }

  document.body.se;
});

const tombolGelap = document.querySelector('#saklar-gelap');

tombolGelap.addEventListener('click', function () {
  // Toggle otomatis menambah/menghapus class 'dark-theme' di tag <body>
  document.body.classList.toggle('dark-theme');
});

tombolLihat.addEventListener('click', function () {});
