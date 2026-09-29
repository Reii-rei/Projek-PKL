/* ================= DATA (edit di sini) ================= */
const D = {
  nama: "Reivaldy Imam Ramadhan",
  info: [
    ["Nama", "Reivaldy Imam"], ["Tempat, tgl lahir", "Bandung, 24 September 2008"],
    ["Jenis kelamin", "Laki-laki"], ["Alamat", "Kp. Patamon, Desa SindangLaya, Kec. Cimenyan"],
    ["Agama", "Islam"], ["Jurusan", "Teknik Komputer dan Jaringan (TKJ)"],
    ["Sekolah", "SMK Negeri 5 Bandung"], ["Status", "Pelajar"]
  ],
  tempat: [
    ["Perusahaan", "PT. Elda Sarana Informatika"], ["Bagian", "IoT (Elektro)"],
    ["Periode", "Juli – November 2025 (20 minggu)"], ["Sekolah", "SMK Negeri 5 Bandung"],
    ["Pembimbing PKL", "(Sandi)"], ["Pembimbing sekolah", "(ibu rossi)"]
  ],
  tujuan: [
    "Menerapkan ilmu jurusan TKJ di dunia kerja yang sebenarnya.",
    "Mengenal budaya kerja, disiplin, dan tanggung jawab di perusahaan.",
    "Mempelajari teknologi IoT: perangkat, jaringan, dan tampilan datanya.",
    "Menambah pengalaman sebagai bekal untuk masa depan."
  ],
  belajar: ["ESP32", "Sensor", "Relay", "Breadboard", "Solder & perakitan", "HTML/CSS/JS", "Web dashboard", "Pengujian sistem", "Menulis laporan"]
};

const K = [
  { id: 1, bulan: "Juli", ke: 1, judul: "Pengenalan Lingkungan Kerja", tanggal: "1 – 5 Juli 2025", foto: "foto/kegiatan-1.jpg",
    deskripsi: "Mengenal lingkungan kerja, pembagian divisi, serta peraturan dan budaya kerja di perusahaan.",
    belajar: "Cara bekerja di lingkungan profesional: disiplin waktu, komunikasi dengan tim, dan aturan keselamatan.",
    langkah: ["Berkenalan dengan pembimbing lapangan dan tim", "Berkeliling melihat area kerja dan pembagian divisi", "Mempelajari peraturan, jam kerja, dan keselamatan kerja", "Mendapat gambaran pekerjaan di bagian IoT"] },
  { id: 2, bulan: "Juli", ke: 4, judul: "Mempelajari Komponen IoT", tanggal: "21 – 25 Juli 2025", foto: "foto/kegiatan-2.jpg",
    deskripsi: "Mengenal ESP32, sensor, relay, dan perangkat pendukung lainnya.",
    belajar: "Fungsi tiap komponen IoT dan cara merangkainya menjadi rangkaian sederhana.",
    langkah: ["Mengenal fungsi ESP32 dan jenis-jenis sensor", "Mempelajari relay dan perangkat pendukung", "Merangkai komponen sederhana di breadboard", "Mencoba program dasar: menyalakan LED dan membaca sensor"] },
  { id: 3, bulan: "Agustus", ke: 7, judul: "Membuat Web Dashboard", tanggal: "11 – 15 Agustus 2025", foto: "foto/kegiatan-3.jpg",
    deskripsi: "Membuat tampilan web untuk menampilkan data sensor dari perangkat IoT.",
    belajar: "Dasar membuat antarmuka web yang jelas untuk membaca data sensor.",
    langkah: ["Membuat sketsa tampilan dashboard", "Menyusun halaman dengan HTML dan CSS", "Menampilkan data sensor contoh di halaman", "Merapikan tampilan agar nyaman dibuka di laptop dan HP"] },
  { id: 4, bulan: "September", ke: 10, judul: "Integrasi ESP32 dan Web", tanggal: "8 – 12 September 2025", foto: "foto/kegiatan-4.jpg",
    deskripsi: "Menghubungkan ESP32 ke server agar data sensor tampil real-time di website.",
    belajar: "Cara ESP32 mengirim data lewat jaringan lalu ditampilkan langsung di web.",
    langkah: ["Menyiapkan server penerima data", "Memprogram ESP32 agar mengirim data lewat WiFi", "Menampilkan data yang diterima di dashboard", "Menguji agar data tampil real-time"] },
  { id: 5, bulan: "September", ke: 13, judul: "Pengujian Sistem", tanggal: "29 September – 3 Oktober 2025", foto: "foto/kegiatan-5.jpg",
    deskripsi: "Mengecek dan menguji sistem yang sudah dibuat, serta memperbaiki error yang ditemukan.",
    belajar: "Cara menguji sistem secara runtut dan mencari penyebab error.",
    langkah: ["Menyusun daftar hal yang perlu diuji", "Menguji pembacaan sensor dan pengiriman data", "Mencatat error yang muncul", "Memperbaiki error lalu menguji ulang"] },
  { id: 6, bulan: "Oktober", ke: 16, judul: "Dokumentasi dan Laporan", tanggal: "20 – 24 Oktober 2025", foto: "foto/kegiatan-6.jpg",
    deskripsi: "Mengumpulkan hasil kerja, foto kegiatan, serta membuat laporan PKL secara bertahap.",
    belajar: "Menyusun laporan yang rapi dari catatan dan dokumentasi harian.",
    langkah: ["Mengumpulkan foto dan catatan kegiatan tiap minggu", "Menulis isi laporan bagian demi bagian", "Merapikan format laporan", "Konsultasi hasil laporan dengan pembimbing"] },
  { id: 7, bulan: "November", ke: 18, judul: "Perakitan / Perbaikan Alat", tanggal: "3 – 7 November 2025", foto: "foto/kegiatan-7.jpg",
    deskripsi: "Membantu perakitan dan perbaikan alat IoT yang digunakan untuk monitoring dan kontrol.",
    belajar: "Teknik merakit dan memperbaiki perangkat elektronik dengan teliti.",
    langkah: ["Menyiapkan alat dan komponen yang akan dirakit", "Membantu menyolder dan merakit perangkat", "Memeriksa bagian alat yang bermasalah", "Menguji alat setelah selesai diperbaiki"] },
  { id: 8, bulan: "November", ke: 20, judul: "Evaluasi dan Penutupan PKL", tanggal: "17 – 21 November 2025", foto: "foto/kegiatan-8.jpg",
    deskripsi: "Evaluasi bersama pembimbing lapangan dan menyelesaikan seluruh kewajiban PKL.",
    belajar: "Menerima evaluasi dan menyimpulkan pengalaman selama PKL.",
    langkah: ["Mengumpulkan seluruh hasil pekerjaan", "Evaluasi bersama pembimbing lapangan", "Menyelesaikan administrasi PKL", "Berpamitan dan menutup kegiatan PKL"] }
];
const BULAN = [...new Set(K.map(k => k.bulan))];

/* ================= Bantu ================= */
const $ = id => document.getElementById(id);
const dl = rows => rows.map(r => `<dt>${r[0]}</dt><dd>${r[1]}</dd>`).join("");

// kotak pengganti bila foto belum ada
function ph(img) {
  const ganti = () => {
    const h = img.closest(".logos") ? 60 : 600;
    img.onerror = null;
    img.src = "data:image/svg+xml;utf8," + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${+img.dataset.w || 900}" height="${h}"><rect width="100%" height="100%" fill="#2a3547"/><text x="50%" y="50%" fill="#98a2b3" font-family="sans-serif" font-size="${h < 100 ? 14 : 26}" text-anchor="middle" dominant-baseline="middle">${img.dataset.ph}</text></svg>`);
  };
  img.addEventListener("error", ganti, { once: true });
  if (img.complete && img.naturalWidth === 0) ganti();
}

/* ================= Halaman ================= */
const ikon = {
  tt: '<svg viewBox="0 0 24 24"><path d="M16 3c.3 2.4 1.8 3.9 4 4v3.2c-1.5 0-2.9-.4-4-1.2V15a6 6 0 1 1-6-6v3.3a2.7 2.7 0 1 0 2.7 2.7V3H16z" fill="currentColor"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="#c98f9a" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r=".8" fill="#c98f9a"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="none" stroke="#86ab9f" stroke-width="1.8"><path d="M4 20l1.3-4.2A8 8 0 1 1 8.3 19L4 20z"/><path d="M9 8.5c0 3 2.5 5.5 5.5 5.5l1.2-1.400-2-1-.8.8c-.8-.4-1.500-1.100-1.900-1.900l.8-.8-1-2L9 8.500z" fill="#86ab9f" stroke="none"/></svg>'
};

const home = () => `
<section class="hero view">
  <div class="pic"><img src="C:\Users\rei\Pictures\Poto WhatsApp" data-ph="Foto diri" alt="Foto ${D.nama}"></div>
  <div class="glass hero-card">
    <p class="hi">Halo, saya</p><h1>${D.nama}</h1>
    <p class="role"><b>Siswa SMK jurusan Teknik Komputer dan Jaringan.</b> Sedang PKL di PT. Elda Sarana Informatika, bagian IoT (Elektro).</p>
    <div class="row soc">
      <a href="https://www.tiktok.com/@reiii_.r?_r=1&_t=ZS-9A7vIPmtPAT" target="_blank" rel="noopener">${ikon.tt}@reiii_.r</a>
      <a href="https://www.instagram.com/reii_ree?stkn=bndjZTNrN2JsNjdx" target="_blank" rel="noopener">${ikon.ig}@reii_ree</a>
      <a href="https://wa.me/qr/TBNEEID6XBKSP1" target="_blank" rel="noopener">${ikon.wa}+62 896-5661-2984</a>
    </div>
    <div class="row"><a class="btn" href="#/kegiatan">Lihat kegiatan</a><a class="btn ghost" href="#/tentang">Tentang PKL</a></div>
    <div class="logos">
      <img src="foto/logo-smk.png" data-ph="Logo SMKN 5" data-w="150" alt="Logo SMK Negeri 5 Bandung"><i></i>
      <img src="foto/logo-elda.png" data-ph="Logo Elda" data-w="170" alt="Logo Elda Sarana Informatika">
    </div>
  </div>
</section>
<section class="blk view">
  <h2>Tentang saya</h2>
  <div class="about">
    <dl class="glass">${dl(D.info)}</dl>
    <blockquote class="glass">Saya tertarik pada jaringan, pemrograman, dan teknologi IoT. Selama PKL, saya belajar, mengembangkan kemampuan, dan mencari pengalaman yang berguna untuk masa depan.<small>Proses adalah bagian dari hasil.</small></blockquote>
  </div>
</section>
<section class="blk" id="kegiatan">
  <h2>Kegiatan PKL</h2>
  <p class="sub">Pilih bulan untuk melihat kegiatan tiap minggu, lalu buka kartunya untuk rangkaian pekerjaan lengkap.</p>
  <div class="months" role="tablist">${BULAN.map((b, i) => `<button class="month" role="tab" data-b="${b}" aria-selected="${i == 0}"><strong>${b}</strong><span>${K.filter(k => k.bulan == b).length} minggu kegiatan</span></button>`).join("")}</div>
  <div id="panel"></div>
</section>`;

function panel(b) {
  document.querySelectorAll(".month").forEach(m => m.setAttribute("aria-selected", m.dataset.b == b));
  $("panel").innerHTML = `<div class="cards">${K.filter(k => k.bulan == b).map(k => `
    <a class="glass card" href="#/kegiatan/${k.id}">
      <figure><img src="${k.foto}" data-ph="Foto minggu ${k.ke}" alt="${k.judul}"></figure>
      <div><span class="wk">Minggu ke-${k.ke}</span><h3>${k.judul}</h3><span class="date">${k.tanggal}</span>
      <p>${k.deskripsi}</p><span class="more">Lihat rangkaian kegiatan</span></div>
    </a>`).join("")}</div>`;
  $("panel").querySelectorAll("img").forEach(ph);
}

function detail(id) {
  const k = K.find(x => x.id == id);
  if (!k) return home();
  const i = K.indexOf(k), p = K[i - 1], n = K[i + 1];
  return `<article class="view">
  <a class="back" href="#/kegiatan">← Semua kegiatan</a>
  <div class="glass dhead"><span class="wk">${k.bulan} · Minggu ke-${k.ke}</span><h1>${k.judul}</h1><span class="date">${k.tanggal}</span></div>
  <figure class="glass big"><img src="${k.foto}" data-ph="Foto minggu ${k.ke}" alt="${k.judul}"></figure>
  <div class="cols">
    <section class="glass"><h2>Tentang kegiatan ini</h2><p>${k.deskripsi}</p><h3>Yang saya pelajari</h3><p>${k.belajar}</p></section>
    <section class="glass"><h2>Rangkaian kegiatan</h2><ol class="steps">${k.langkah.map(l => `<li>${l}</li>`).join("")}</ol></section>
  </div>
  <div class="pn">${p ? `<a class="glass" href="#/kegiatan/${p.id}"><small>← Sebelumnya</small>${p.judul}</a>` : "<span></span>"}${n ? `<a class="glass" href="#/kegiatan/${n.id}" style="text-align:right"><small>Berikutnya →</small>${n.judul}</a>` : ""}</div>
  </article>`;
}

const tentang = () => `<div class="view">
  <h1 class="ph">Tentang PKL</h1>
  <p class="sub">Praktik Kerja Lapangan (PKL) adalah kesempatan belajar langsung di dunia kerja. Berikut gambaran singkat PKL saya.</p>
  <div class="cols">
    <section class="glass"><h2>Tempat PKL</h2><dl style="padding:0">${dl(D.tempat)}</dl></section>
    <section class="glass"><h2>Tujuan PKL</h2><ul class="list">${D.tujuan.map(t => `<li>${t}</li>`).join("")}</ul></section>
  </div>
  <section class="glass wide"><h2>Yang saya pelajari</h2><div class="chips">${D.belajar.map(b => `<span>${b}</span>`).join("")}</div></section>
  <section class="glass wide"><h2>Perjalanan per bulan</h2><dl style="padding:0">${BULAN.map(b => `<dt>${b}</dt><dd>${K.filter(k => k.bulan == b).map(k => `<a href="#/kegiatan/${k.id}" class="more">${k.judul}</a>`).join(", ")}</dd>`).join("")}</dl></section>
</div>`;

/* ================= Router ================= */
function route() {
  const [p, a] = location.hash.replace(/^#\/?/, "").split("/");
  $("app").innerHTML = p == "tentang" ? tentang() : (p == "kegiatan" && a) ? detail(a) : home();
  $("app").querySelectorAll("img[data-ph]").forEach(ph);
  if ($("kegiatan")) {
    panel(BULAN[0]);
    document.querySelector(".months").onclick = e => { const m = e.target.closest(".month"); if (m) panel(m.dataset.b); };
  }
  document.querySelectorAll(".nav nav a").forEach(l => l.classList.toggle("on", l.dataset.r == (p || "") && !(p == "kegiatan" && a)));
  (p == "kegiatan" && !a) ? $("kegiatan").scrollIntoView() : scrollTo(0, 0);
}
addEventListener("hashchange", route);
route();

/* ================= Tema terang / gelap ================= */
const root = document.documentElement;
let simpan; try { simpan = localStorage.getItem("tema"); } catch (e) {}
root.dataset.theme = simpan || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
$("tema").onclick = () => {
  const t = root.dataset.theme == "dark" ? "light" : "dark";
  root.dataset.theme = t;
  try { localStorage.setItem("tema", t); } catch (e) {}
};

/* ================= Unduh PDF (lewat menu cetak > Simpan sebagai PDF) ================= */
$("pdf").onclick = () => {
  $("cetak").innerHTML = `
    <div class="cover"><h1>Jurnal PKL</h1><p>${D.nama}<br>SMK Negeri 5 Bandung · Teknik Komputer dan Jaringan<br>PT. Elda Sarana Informatika, bagian IoT · Juli – November 2025</p></div>
    <h2>Data diri</h2><table>${D.info.map(r => `<tr><td>${r[0]}</td><td>: ${r[1]}</td></tr>`).join("")}</table>
    <h2>Tentang PKL</h2><table>${D.tempat.map(r => `<tr><td>${r[0]}</td><td>: ${r[1]}</td></tr>`).join("")}</table>
    <h2>Kegiatan PKL</h2>${K.map(k => `<div class="k"><b>Minggu ke-${k.ke}: ${k.judul}</b><br>${k.tanggal}
      <img src="${k.foto}" alt="" onerror="this.remove()"><div>${k.deskripsi}</div><ol>${k.langkah.map(l => `<li>${l}</li>`).join("")}</ol></div>`).join("")}`;
  const judul = document.title;
  document.title = "Jurnal PKL - " + D.nama;
  setTimeout(() => { print(); document.title = judul; }, 350);
};

/* ================= Loading ================= */
addEventListener("load", () => setTimeout(() => $("loader").classList.add("off"), 1300));
