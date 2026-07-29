const serviceContainer = document.querySelector('.layanan-container');

const services = [
  {
    title: 'Poli Umum',
    description: 'Pemeriksaan Umum',
  },
  {
    title: 'Poli Gigi',
    description: 'Pemeriksaan Gigi',
  },
  {
    title: 'KIA & Imunisasi Anak',
    description: 'Pelayanan ibu, anak dan imunisasi',
  },
  {
    title: 'Poli Galaxy',
    description: 'Menangkap Power Sphera',
  },
];

// Lakukan perulangan untuk setiap data layanan
services.forEach(function (s) {
  // Buat template HTML untuk satu kartu layanan
  // Gunakan string literal dengan backtick untuk menggabungkan data layanan secara langsung

  let cardData = `
          <div class="layanan-card">
            <h3>${s.title}</h3>
            <p>${s.description}</p>
          </div>
    `;

  // Masukkan kartu tersebut ke dalam wadah kontainer HTML
  serviceContainer.innerHTML += cardData;
});

const dokterContainer = document.querySelector('.dokter-container');
console.log(dokterContainer);

const dataDokter = [
  {
    name: 'dr. Andi Pratama',
    poli: 'Poli Umum',
    desc: 'Dokter umum dengan pengalaman lebih dari 10 tahun di bidang pelayanan kesehatan primer.',
    avatar:
      'https://ui-avatars.com/api/?name=Andi+Pratama&background=0E7C6B&color=fff&size=80',
  },
  {
    name: 'drg. Sari Dewi',
    poli: 'Poli Gigi',
    desc: 'Dokter gigi spesialis yang siap menangani berbagai masalah kesehatan gigi dan mulut',
    avatar:
      'https://ui-avatars.com/api/?name=Sari+Dewi&background=1A6B8A&color=fff&size=80',
  },
  {
    name: 'dr. Fitri Handayani',
    poli: 'KIA & Imunisasi',
    desc: 'Dokter spesialis ibu dan anak yang ramah dan berpengalaman dalam pelayanan KIA.',
    avatar:
      'https://ui-avatars.com/api/?name=Fitri+Handayani&background=0E7C6B&color=fff&size=80',
  },
  {
    name: 'dr. Rizky Maulana',
    poli: 'Poli Umum',
    desc: 'Dokter umum yang sigap dan teliti, siap melayani pemeriksaan kesehatan umum.',
    avatar:
      'https://ui-avatars.com/api/?name=Rizky+Maulana&background=1A6B8A&color=fff&size=80',
  },
];

dataDokter.forEach(function (dokter) {
  let cardDokter = `
    <div class="dokter-card">
      <div class="dokter-avatar">
        <img src="${dokter.avatar}" alt="${dokter.name}">
      </div>
      <h3>${dokter.name}</h3>
      <span class="dokter-poli">${dokter.poli}</span>
      <p class="dokter-desc">${dokter.desc}</p>
    </div>
  `;

  dokterContainer.innerHTML += cardDokter;
});

function renderDokter(dataDokter) {
  dokterContainer.innerHTML = '';

  dataDokter.forEach(function (dokter) {
    let cardDokter = `
    <div class="dokter-card">
      <div class="dokter-avatar">
        <img src="${dokter.avatar}" alt="${dokter.name}">
      </div>
      <h3>${dokter.name}</h3>
      <span class="dokter-poli">${dokter.poli}</span>
      <p class="dokter-desc">${dokter.desc}</p>
    </div>
  `;

    dokterContainer.innerHTML += cardDokter;
  });
}

const inputCari = document.querySelector('#input-cari');

inputCari.addEventListener('input', function () {
  const keyword = this.value.toLowerCase();

  const hasilFilter = dataDokter.filter(function (dokter) {
    return (
      dokter.name.toLowerCase().includes(keyword) ||
      dokter.poli.toLowerCase().includes(keyword)
    );
  });

  renderDokter(hasilFilter);
});

const formDaftar = document.querySelector('#form-daftar');
const pesanSukses = document.querySelector('#pesan-sukses');

formDaftar.addEventListener('submit', function (event) {
  event.preventDefault(); // Cegah reload halaman

  const nama = document.querySelector('#nama-pasien').value;
  const poli = document.querySelector('#pilihan-poli').value;

  // Tampilkan pesan sukses
  pesanSukses.textContent = `Terima kasih, ${nama}! Pendaftaran Poli ${poli} berhasil.`;
  pesanSukses.style.display = 'block';

  // Kosongkan form
  formDaftar.reset();

  // Hilangkan pesan setelah 3 detik
  setTimeout(() => {
    pesanSukses.style.display = 'none';
  }, 3000);
});
