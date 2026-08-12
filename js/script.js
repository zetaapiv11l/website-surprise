/* ============================================================
   PERSONAL SURPRISE WEBSITE — SHARED SCRIPT
   All logic lives here. Pages only provide markup + data-page.
   ============================================================ */

/* ---------- 1. CONFIGURATION (edit everything here) ---------- */
const SITE_CONFIG = {
  name: "Sayangku",
  nickname: "Sayang",
  yourName: "Aku",
  whatsappNumber: "6283195426349",

  music: [
    // isi "audio" dengan link mp3 langsung (contoh: link Google Drive versi direct-download, atau hosting lain).
    // Kalau semua "audio" kosong, player musik otomatis tidak akan muncul sama sekali.
    { title: "Lagu Favorit 1", artist: "Artist", audio: "https://www.image2url.com/r2/default/audio/1786535986055-588e4c88-b92a-4e75-8aad-359283cca7d5.mp3", cover: "" },
    { title: "Lagu Favorit 2", artist: "Artist", audio: "", cover: "" }
  ],

  favoriteFoods: [
    { icon: "🍜", label: "Makanan", value: "Mie Ayam", cap: "" },
    { icon: "🧋", label: "Minuman", value: "Boba Brown Sugar", cap: "" },
    { icon: "🍟", label: "Snack", value: "Kentang Goreng", cap: "" },
    { icon: "🍰", label: "Dessert", value: "Cheesecake", cap: "" },
    { icon: "🌸", label: "Warna", value: "Pink", cap: "" },
    { icon: "🎵", label: "Lagu", value: "Playlist favoritmu", cap: "" },
    { icon: "🎬", label: "Film", value: "Romantic Comedy", cap: "" },
    { icon: "📺", label: "Series", value: "Series favoritmu", cap: "" },
    { icon: "🏖️", label: "Tempat", value: "Pantai", cap: "" },
    { icon: "🐱", label: "Hewan", value: "Kucing", cap: "" },
    { icon: "🌷", label: "Aroma", value: "Vanilla", cap: "" },
    { icon: "📸", label: "Aktivitas", value: "Foto-foto random", cap: "" }
  ],

  hobbies: [
    { icon: "📖", label: "Hobby", value: "Baca buku" },
    { icon: "🎧", label: "Kegiatan favorit", value: "Dengerin musik" },
    { icon: "😴", label: "Ketika bosan", value: "Rebahan sambil scroll HP" },
    { icon: "🎨", label: "Ingin dicoba", value: "Belajar melukis" },
    { icon: "🚶", label: "Bikin bahagia", value: "Jalan-jalan sore" },
    { icon: "🛁", label: "Kegiatan santai", value: "Mandi air hangat + musik" }
  ],

  timeline: [
    { title: "First Meet", detail: "Awal kita ketemu / kenal satu sama lain." },
    { title: "First Conversation", detail: "Obrolan pertama yang bikin nyaman." },
    { title: "First Funny Moment", detail: "Momen lucu yang masih diinget sampai sekarang." },
    { title: "Special Moment", detail: "Momen yang berkesan banget." },
    { title: "Favorite Memory", detail: "Kenangan favorit sejauh ini." },
    { title: "Today", detail: "Hari ini — kamu lagi buka website ini 🌸" }
  ],

  questions: [
    "Apa makanan yang paling kamu suka?",
    "Apa minuman favorit kamu?",
    "Apa hobby yang paling kamu suka?",
    "Tempat mana yang ingin kamu kunjungi?",
    "Lagu apa yang akhir-akhir ini sering kamu dengarkan?",
    "Apa hal kecil yang bisa membuat kamu bahagia?",
    "Apa yang biasanya kamu lakukan ketika sedang sedih?",
    "Apa sesuatu yang ingin kamu coba?",
    "Apa impian yang ingin kamu capai?",
    "Bagaimana perasaan kamu saat mengunjungi website ini?"
  ],

  personalityQuestions: [
    { q: "Kalau weekend, kamu lebih suka...", opts: [["Rebahan seharian","soft"],["Jalan-jalan explore tempat baru","bright"],["Ngobrol santai sama orang deket","calm"],["Bikin sesuatu yang kreatif","creative"]] },
    { q: "Warna yang paling menggambarkan kamu?", opts: [["Pastel lembut","soft"],["Kuning cerah","bright"],["Biru tenang","calm"],["Ungu unik","creative"]] },
    { q: "Kalau lagi sedih, kamu...", opts: [["Butuh pelukan & didengerin","soft"],["Cari kegiatan seru buat lupain","bright"],["Diem dulu, cari tenang sendiri","calm"],["Nulis / gambar apa yang dirasain","creative"]] },
    { q: "Di circle pertemanan kamu itu...", opts: [["Yang paling perhatian","soft"],["Yang paling rame & semangat","bright"],["Yang paling bisa diandalkan & santai","calm"],["Yang paling out of the box","creative"]] },
    { q: "Film favoritmu biasanya genre...", opts: [["Romantic drama","soft"],["Adventure / comedy","bright"],["Slice of life","calm"],["Fantasy / art film","creative"]] },
    { q: "Kalau dikasih waktu luang 1 jam...", opts: [["Chat sama orang tersayang","soft"],["Cari hal baru buat dicoba","bright"],["Me-time, ngeteh santai","calm"],["Bikin sesuatu / iseng berkarya","creative"]] },
    { q: "Cara kamu nunjukin sayang ke orang lain?", opts: [["Perhatian kecil tiap hari","soft"],["Ngajak seru-seruan bareng","bright"],["Selalu ada saat dibutuhkan","calm"],["Bikinin sesuatu yang personal","creative"]] }
  ],
  personalityResults: {
    soft: { icon: "🌸", name: "The Soft Soul", desc: "Kamu lembut, penuh perhatian, dan bikin orang di sekitar ngerasa nyaman & disayang." },
    bright: { icon: "☀️", name: "The Bright Energy", desc: "Kamu sumber semangat! Ceria, seru diajak apa aja, dan bikin hari orang lain lebih hidup." },
    calm: { icon: "🌙", name: "The Calm Dreamer", desc: "Kamu tenang, bisa diandalkan, dan punya kedamaian yang bikin orang lain betah di deket kamu." },
    creative: { icon: "🎀", name: "The Creative Mind", desc: "Kamu unik, penuh ide, dan selalu punya cara sendiri buat liat dunia." }
  },

  mysteryBoxes: [
    { icon: "🎁", locked: false, message: "Setiap hal kecil tentang kamu itu berharga buat aku. 💗" },
    { icon: "🎀", locked: false, message: "Kamu itu salah satu alasan aku semangat hari ini." },
    { icon: "🌸", locked: false, message: "Makasih udah jadi kamu yang sekarang, apa adanya." },
    { icon: "💌", locked: false, message: "Ini kejutan kecil aja — masih ada banyak lagi kalau kamu explore lebih jauh 🌷" },
    { icon: "🔐", locked: true, unlockHint: "Buka setelah kamu explore 3 halaman lain dulu ya~", message: "Kamu nemuin secret box-nya! Pssst... coba cek Secret Room, ada password di sana. 🔑" }
  ],

  flowerMessages: [
    "Kamu tuh manis banget, sadar gak? 🌸",
    "Senyum kamu itu salah satu favorit aku.",
    "Semoga harimu selembut kelopak bunga ini.",
    "Terima kasih udah jadi kamu.",
    "Ada satu bunga rahasia di sini... coba cari lagi 👀",
    "Kamu pantas dapet hal-hal baik.",
    "Kalau capek, istirahat dulu gapapa kok."
  ],

  randomMessages: [
    "Kamu lebih kuat dari yang kamu kira. 💪🌸","Hari ini boleh pelan-pelan, gapapa kok.","Senyum kamu itu random happiness generator.",
    "Kamu gak butuh alasan buat merasa berharga.","Semoga langkah kamu hari ini seringan kapas.","Kamu tuh definisi 'worth it buat disayang'.",
    "Jangan lupa minum air putih ya~","Kalau capek, boleh rehat dulu.","Kamu udah usaha banget sejauh ini, keren!","Terima kasih sudah bertahan sampai hari ini.",
    "Kamu itu bukan beban buat siapapun.","Aku bangga sama kamu, walau jarang bilang.","Kamu boleh nangis, tapi jangan lupa bangkit lagi ya.",
    "Kamu pantas dikelilingi orang-orang baik.","Semangat buat besok, tapi istirahat dulu buat sekarang.","Kamu itu unik, jangan minder.",
    "Hal kecil yang kamu lakukan itu berarti banget.","Kamu gak sendirian.","Kamu boleh salah, itu manusiawi kok.",
    "Semoga mimpi kamu perlahan jadi nyata.","Kamu berhak bahagia tanpa alasan.","Setiap usaha kecilmu itu keliatan kok.",
    "Kamu itu istimewa dengan caramu sendiri.","Boleh lelah, tapi jangan menyerah ya.","Kamu udah jadi lebih baik dari kemarin.",
    "Kadang diem itu juga bentuk kekuatan.","Kamu layak ditemani, bukan ditinggal.","Percaya deh, semua ada waktunya.",
    "Kamu spesial, walau kamu ga selalu sadar.","Terus jadi kamu yang baik hati ya.","Semoga hari ini banyak hal kecil yang bikin kamu senyum.",
    "Kamu itu rumah buat orang-orang di sekitarmu.","Jangan terlalu keras sama diri sendiri.","Kamu boleh istirahat dari semuanya sebentar.",
    "Kamu udah melewati hari-hari berat, hebat banget.","Ada yang diam-diam bangga sama progressmu.","Kamu layak dapat kabar baik hari ini.",
    "Semoga rejekimu lancar terus.","Kamu itu bukan gagal, cuma lagi proses.","Percaya sama timing kamu sendiri.",
    "Kamu udah cukup, walau kadang ga berasa gitu.","Semoga orang-orang di sekitarmu menghargai kamu.","Kamu boleh minta tolong, itu bukan kelemahan.",
    "Kamu itu hangat buat orang di sekitarmu.","Terus melangkah, sekecil apapun itu.","Kamu berharga di luar pencapaianmu.",
    "Semoga malam ini tidurmu nyenyak.","Kamu layak dicintai tanpa syarat.","Kamu udah jadi versi terbaik hari ini, itu cukup.","Makasih udah main sampai sini, kamu keren! 🎉"
  ],

  fortunes: [
    ["7","Pink","Ceria","Coba hal baru hari ini, siapa tahu seru!"],
    ["3","Ungu","Tenang","Istirahat sejenak, kamu udah kerja keras."],
    ["21","Peach","Semangat","Kirim pesan ke orang yang kamu kangenin."],
    ["12","Putih","Lega","Hari ini cocok buat beres-beres pikiran."],
    ["9","Biru muda","Fokus","Selesaikan satu hal kecil yang tertunda."],
    ["5","Merah muda","Bahagia","Dengerin lagu favorit sambil senyum."],
    ["18","Lilac","Optimis","Percaya proses, hasil akan menyusul."],
    ["2","Kuning","Hangat","Beri pujian tulus ke seseorang hari ini."],
    ["30","Hijau mint","Segar","Minum air putih lebih banyak hari ini."],
    ["14","Coklat susu","Nyaman","Nikmati me-time tanpa rasa bersalah."],
    ["11","Rose gold","Percaya diri","Pakai outfit favoritmu hari ini."],
    ["6","Silver","Kalem","Jangan buru-buru, semua ada waktunya."],
    ["27","Magenta","Berani","Coba ngomongin sesuatu yang selama ini dipendam."],
    ["4","Krem","Syukur","Catat 3 hal kecil yang kamu syukuri."],
    ["16","Turquoise","Penasaran","Pelajari sesuatu yang baru hari ini."],
    ["8","Salem","Bersyukur","Ucapkan terima kasih ke orang terdekat."],
    ["23","Dusty pink","Lembut","Maafin diri sendiri atas kesalahan kecil."],
    ["1","Putih gading","Awal baru","Mulai satu kebiasaan baik hari ini."],
    ["19","Plum","Reflektif","Luangkan waktu buat diri sendiri sore ini."],
    ["25","Coral","Ceria","Ajak orang terdekat ngobrol santai."],
    ["10","Baby blue","Damai","Tarik napas dalam, semua baik-baik saja."],
    ["13","Champagne","Spesial","Rayakan progress kecilmu hari ini."],
    ["20","Mauve","Hangat","Kirim voice note random ke sahabat."],
    ["17","Ivory","Bersih","Rapikan satu sudut kecil kamarmu."],
    ["29","Blush","Manis","Kasih diri sendiri hadiah kecil hari ini."],
    ["15","Lavender","Rileks","Dengerin hujan / white noise sebelum tidur."],
    ["22","Apricot","Antusias","Rencanain sesuatu yang kamu tunggu-tunggu."],
    ["24","Mint","Ringan","Lepasin satu beban pikiran hari ini."],
    ["26","Rosewood","Kuat","Ingat lagi kenapa kamu mulai."],
    ["28","Cream","Puas","Apresiasi progressmu, sekecil apapun."]
  ],

  notes: [
    "Kamu keren hari ini 🌸","Jangan lupa senyum ya","Kamu pantas dapet hal baik","Semangat, sedikit lagi!","Kamu udah hebat sejauh ini",
    "Istirahat kalau capek ya","Kamu berharga banget","Terima kasih udah jadi kamu","Hari ini boleh santai dulu","Kamu bikin hari-hari lebih baik",
    "Kirim pelukan virtual 🤗","Kamu gak sendirian kok","Percaya sama diri sendiri","Semoga harimu lembut","Kamu layak dicintai",
    "Boleh nangis, boleh juga ketawa","Kamu itu unik dan spesial","Tetap jadi kamu ya","Sesuatu yang baik lagi menuju kamu","Kamu udah cukup"
  ],

  thisOrThat: [
    ["🍜 Noodles","🍚 Rice"],["☕ Coffee","🧋 Boba"],["🌙 Night","☀️ Morning"],["🏖️ Beach","🏔️ Mountain"],
    ["🎬 Movie","📖 Book"],["🐱 Cat","🐶 Dog"],["🍫 Coklat","🍬 Permen"],["🎧 Musik keras","🤫 Musik pelan"],
    ["🚗 Road trip","✈️ Flight"],["🌧️ Hujan","☀️ Panas"]
  ],

  wouldYouRather: [
    "Lebih pilih bisa teleport atau bisa terbang?","Lebih pilih liburan ke pantai atau pegunungan?",
    "Lebih pilih hidup tanpa musik atau tanpa film?","Lebih pilih selalu telat 10 menit atau selalu terlalu cepat 1 jam?",
    "Lebih pilih bisa baca pikiran atau bisa lihat masa depan?","Lebih pilih hujan sepanjang hari atau panas terik sepanjang hari?",
    "Lebih pilih makan makanan favorit tiap hari atau coba makanan baru tiap hari?","Lebih pilih punya banyak teman biasa atau sedikit teman dekat?",
    "Lebih pilih liburan sendirian atau rame-rame?","Lebih pilih rumah di kota atau di desa?",
    "Lebih pilih gak punya HP seharian atau gak boleh ngomong seharian?","Lebih pilih selalu menang tapi sendirian atau kadang kalah tapi ditemani?",
    "Lebih pilih waktu berjalan lebih cepat atau lebih lambat?","Lebih pilih bisa masak enak atau nyanyi bagus?",
    "Lebih pilih tinggal di masa lalu atau masa depan?","Lebih pilih hidup tenang tapi biasa saja atau seru tapi penuh drama?",
    "Lebih pilih punya waktu luang banyak atau uang banyak?","Lebih pilih selalu jujur walau nyakitin atau kadang bohong demi baik-baik saja?",
    "Lebih pilih jago satu hal banget atau lumayan di banyak hal?","Lebih pilih ketawa keras atau senyum tipis?",
    "Lebih pilih pesta besar atau nonton bareng santai?","Lebih pilih hidup tanpa media sosial atau tanpa TV?",
    "Lebih pilih badan sehat tapi sibuk atau santai tapi kurang sehat?","Lebih pilih pindah kota tiap tahun atau tinggal di satu tempat selamanya?",
    "Lebih pilih semua rencana selalu sesuai atau selalu ada kejutan?","Lebih pilih tahu semua jawaban ujian atau tahu semua rahasia orang?",
    "Lebih pilih hidup di gunung atau di tepi laut?","Lebih pilih bisa nyanyi di depan umum atau menari di depan umum?",
    "Lebih pilih waktu luang buat baca atau nonton?","Lebih pilih hujan sambil kopi atau panas sambil es teh?"
  ],

  secretRoom: {
    password: "sayang",
    content: "Kamu berhasil masuk ke Secret Room! 🎉 Ini pesan yang cuma bisa kamu baca setelah usaha nyari passwordnya: makasih udah mau seteliti dan sesabar ini buat aku. Kamu emang spesial. 💗"
  },

  achievementsList: [
    { id:"first-visit", icon:"🌸", name:"First Visit" },
    { id:"mystery-box", icon:"🎁", name:"Mystery Box" },
    { id:"game-master", icon:"🎮", name:"Game Master" },
    { id:"secret-room", icon:"🔐", name:"Secret Room" },
    { id:"flower-collector", icon:"🌷", name:"Flower Collector" },
    { id:"message-hunter", icon:"💌", name:"Message Hunter" },
    { id:"question-master", icon:"❓", name:"Question Master" },
    { id:"explorer", icon:"🏆", name:"Explorer" }
  ],

  allPages: [
    { href:"index.html", icon:"🏠", label:"Home" },
    { href:"tujuan.html", icon:"💗", label:"Tujuan" },
    { href:"mystery-box.html", icon:"🎁", label:"Mystery Box" },
    { href:"favorites.html", icon:"🌸", label:"Favorites" },
    { href:"hobby.html", icon:"🎨", label:"Hobby" },
    { href:"mood.html", icon:"😊", label:"Mood" },
    { href:"questions.html", icon:"❓", label:"Questions" },
    { href:"personality.html", icon:"🎀", label:"Personality" },
    { href:"games.html", icon:"🎮", label:"Games" },
    { href:"timeline.html", icon:"🗺️", label:"Timeline" },
    { href:"flower-garden.html", icon:"🌷", label:"Garden" },
    { href:"random-message.html", icon:"💌", label:"Message" },
    { href:"fortune.html", icon:"🔮", label:"Fortune" },
    { href:"little-notes.html", icon:"🗒️", label:"Notes" },
    { href:"this-or-that.html", icon:"⚖️", label:"This/That" },
    { href:"would-you-rather.html", icon:"🤔", label:"WYR" },
    { href:"future-letter.html", icon:"✉️", label:"Letter" },
    { href:"secret-room.html", icon:"🔐", label:"Secret" },
    { href:"achievements.html", icon:"🏆", label:"Achievements" },
    { href:"stats.html", icon:"📊", label:"Stats" },
    { href:"my-answers.html", icon:"💌", label:"My Answers" },
    { href:"final.html", icon:"🎉", label:"Final" }
  ],
  bottomNav: [
    { href:"index.html", icon:"🏠", label:"Home" },
    { href:"games.html", icon:"🎮", label:"Games" },
    { href:"flower-garden.html", icon:"🌷", label:"Garden" },
    { href:"secret-room.html", icon:"🔐", label:"Secret" },
    { href:"achievements.html", icon:"🏆", label:"Achieve" }
  ]
};

/* ---------- 2. STORAGE ---------- */
const STORAGE_KEY = "journeyData";
function defaultData(){
  return {
    mood: null, moodTimestamp: null,
    questions: [], personalityResult: null,
    thisOrThat: [], wouldYouRather: [],
    futureLetter: "", visitedPages: [], gamesPlayed: [],
    highscores: {}, achievements: [], points: 0,
    boxesOpened: [], flowersFound: [], notesRead: 0,
    favoritesFlipped: false, messageOpened: false, fortuneChecked: false,
    secretUnlocked: false, hiddenFound: []
  };
}
function getData(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return defaultData();
    return Object.assign(defaultData(), JSON.parse(raw));
  }catch(e){ return defaultData(); }
}
function setData(d){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); }catch(e){}
}
function updateData(fn){
  const d = getData(); fn(d); setData(d); return d;
}

/* ---------- 3. POINTS & ACHIEVEMENTS ---------- */
function addPoints(n, reason){
  updateData(d=>{ d.points = (d.points||0) + n; });
  if(reason) toast("+"+n+" points ✨ "+reason);
  refreshPointsPill();
}
function unlockAchievement(id){
  const d = getData();
  if(d.achievements.includes(id)) return;
  updateData(dd=>{ dd.achievements.push(id); });
  const def = SITE_CONFIG.achievementsList.find(a=>a.id===id);
  if(def) toast(def.icon+" Achievement unlocked: "+def.name);
  checkExplorer();
}
function checkExplorer(){
  const d = getData();
  if(d.visitedPages.length >= 10 && !d.achievements.includes("explorer")){
    unlockAchievement("explorer");
  }
}
function refreshPointsPill(){
  const pill = document.getElementById("points-pill");
  if(pill) pill.textContent = "⭐ " + getData().points;
}
function trackVisit(pageId){
  if(!pageId) return;
  const d = getData();
  if(!d.visitedPages.includes(pageId)){
    updateData(dd=>{ dd.visitedPages.push(pageId); });
    addPoints(5, "menjelajahi halaman baru");
    if(pageId === "index") unlockAchievement("first-visit");
    checkExplorer();
  }
}

/* ---------- 4. TOAST / MODAL / CONFETTI ---------- */
function ensureToastHost(){
  let host = document.getElementById("toast-host");
  if(!host){ host = document.createElement("div"); host.id="toast-host"; document.body.appendChild(host); }
  return host;
}
function toast(msg){
  const host = ensureToastHost();
  const el = document.createElement("div");
  el.className = "toast"; el.textContent = msg;
  host.appendChild(el);
  requestAnimationFrame(()=> el.classList.add("show"));
  setTimeout(()=>{ el.classList.remove("show"); setTimeout(()=> el.remove(), 350); }, 2600);
}
function ensureModalHost(){
  let host = document.getElementById("modal-host");
  if(!host){
    host = document.createElement("div");
    host.id = "modal-host"; host.className = "modal-backdrop";
    host.innerHTML = '<div class="modal-box" id="modal-box"></div>';
    host.addEventListener("click", e=>{ if(e.target===host) closeModal(); });
    document.body.appendChild(host);
  }
  return host;
}
function openModal(html){
  const host = ensureModalHost();
  document.getElementById("modal-box").innerHTML = html + '<div class="btn-row"><button class="btn secondary" onclick="closeModal()">Tutup</button></div>';
  host.classList.add("open");
}
function closeModal(){
  const host = document.getElementById("modal-host");
  if(host) host.classList.remove("open");
}
function confettiBurst(){
  if(prefersReducedMotion()) return;
  const colors = ["#ff8fab","#ffb3c6","#d9c2ff","#ffd9c2","#ff6b9d"];
  for(let i=0;i<40;i++){
    const p = document.createElement("div");
    const size = 6+Math.random()*6;
    p.style.cssText = `position:fixed;left:${Math.random()*100}vw;top:-20px;width:${size}px;height:${size}px;
      background:${colors[i%colors.length]};z-index:200;border-radius:${Math.random()>.5?'50%':'2px'};
      pointer-events:none;animation:fall ${1.6+Math.random()*1.4}s linear forwards;`;
    document.body.appendChild(p);
    setTimeout(()=>p.remove(), 3200);
  }
}

/* ---------- 5. DECORATIONS ---------- */
function prefersReducedMotion(){
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function initDecor(types){
  const host = document.getElementById("app-decor");
  if(!host || prefersReducedMotion()) return;
  const emojiFor = { flowers:["🌸","🌷","🌺"], hearts:["💗","💕","💖"], sparkle:["✨","⭐","💫"], stars:["⭐","✨"], bubbles:["🫧"] };
  (types||["flowers","sparkle"]).forEach(type=>{
    const set = emojiFor[type] || ["🌸"];
    const count = type==="sparkle" ? 10 : 8;
    for(let i=0;i<count;i++){
      const el = document.createElement("div");
      el.className = "decor-item";
      el.textContent = set[Math.floor(Math.random()*set.length)];
      const left = Math.random()*96;
      const dur = 8 + Math.random()*10;
      const delay = Math.random()*10;
      const size = 14 + Math.random()*14;
      if(type==="sparkle" || type==="stars"){
        el.style.cssText = `left:${left}vw;top:${Math.random()*90}vh;font-size:${size}px;animation:sparkle ${2+Math.random()*2}s ease-in-out ${delay}s infinite;`;
      } else if(type==="hearts" || type==="bubbles"){
        el.style.cssText = `left:${left}vw;bottom:-30px;top:auto;font-size:${size}px;animation:floatUp ${dur}s linear ${delay}s infinite;`;
      } else {
        el.style.cssText = `left:${left}vw;font-size:${size}px;animation:fall ${dur}s linear ${delay}s infinite;`;
      }
      host.appendChild(el);
    }
  });
}

/* ---------- 5b. BACKGROUND MUSIC (autoplay across pages) ---------- */
const MUSIC_KEY = "site_music_state_v1";
function getMusicState(){
  try{
    const s = JSON.parse(localStorage.getItem(MUSIC_KEY));
    if(s && typeof s === "object") return Object.assign({ index:0, time:0, playing:true }, s);
  }catch(e){}
  return { index:0, time:0, playing:true };
}
function saveMusicState(s){ try{ localStorage.setItem(MUSIC_KEY, JSON.stringify(s)); }catch(e){} }

let bgAudio = null;
function initMusicPlayer(){
  const tracks = (SITE_CONFIG.music||[]).filter(t=> t.audio);
  if(!tracks.length) return; // belum ada lagu di-set -> player tidak ditampilkan sama sekali

  const state = getMusicState();
  if(state.index >= tracks.length) state.index = 0;

  bgAudio = new Audio(tracks[state.index].audio);
  bgAudio.volume = 0.55;
  bgAudio.currentTime = state.time || 0;

  const btn = document.createElement("button");
  btn.id = "music-toggle";
  btn.className = "music-toggle";
  btn.type = "button";
  btn.setAttribute("aria-label","Musik");
  const setIcon = ()=>{ btn.textContent = (!bgAudio.paused) ? "🎵" : "🔇"; };
  document.body.appendChild(btn);
  setIcon();

  btn.addEventListener("click", ()=>{
    if(bgAudio.paused){ bgAudio.play().catch(()=>{}); state.playing = true; }
    else { bgAudio.pause(); state.playing = false; }
    saveMusicState(state);
    setIcon();
  });

  bgAudio.addEventListener("play", setIcon);
  bgAudio.addEventListener("pause", setIcon);

  bgAudio.addEventListener("ended", ()=>{
    state.index = (state.index+1) % tracks.length;
    state.time = 0;
    saveMusicState(state);
    bgAudio.src = tracks[state.index].audio;
    bgAudio.currentTime = 0;
    if(state.playing) bgAudio.play().catch(()=>{});
  });

  setInterval(()=>{
    if(!bgAudio) return;
    state.time = bgAudio.currentTime;
    saveMusicState(state);
  }, 2000);

  if(state.playing){
    bgAudio.play().catch(()=>{
      // sebagian browser blokir autoplay bersuara sebelum ada interaksi apa pun di tab ini.
      // begitu ada tap/klik pertama (misalnya tombol START THE JOURNEY), musik langsung lanjut otomatis.
      const resume = ()=>{ bgAudio.play().catch(()=>{}); };
      document.addEventListener("click", resume, { once:true });
      document.addEventListener("touchstart", resume, { once:true });
      document.addEventListener("keydown", resume, { once:true });
    });
  }
}

/* ---------- 5b-2. SPA-STYLE PAGE NAVIGATION ----------
   Semua pindah halaman diambil lewat fetch() lalu cuma <main> yang diganti,
   bukan reload penuh browser. Karena itu elemen <audio> (bgAudio) gak pernah
   dibuat ulang / dihentikan saat ganti halaman -> musik lanjut mulus, gak macet-macet.
   Kalau fetch gagal (misal dibuka langsung dari file lokal tanpa server),
   otomatis fallback ke pindah halaman biasa. */
let isSpaNavigating = false;
let nextLinkGuardInterval = null;

function isInternalPageLink(a){
  if(!a || !a.getAttribute) return false;
  const href = a.getAttribute("href");
  if(!href) return false;
  if(href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) return false;
  if(a.target && a.target !== "" && a.target !== "_self") return false;
  if(a.hasAttribute("download")) return false;
  let url;
  try{ url = new URL(href, location.href); }catch(e){ return false; }
  if(url.origin !== location.origin) return false;
  if(!/\.html?$/i.test(url.pathname)) return false;
  return true;
}

async function navigateTo(url, opts){
  const push = !opts || opts.push !== false;
  if(isSpaNavigating) return;
  const targetUrl = new URL(url, location.href).href;
  if(targetUrl === location.href && push) return;
  isSpaNavigating = true;
  const oldMain = document.querySelector("main");
  if(oldMain) oldMain.style.opacity = "0.35";
  try{
    const res = await fetch(targetUrl, { credentials: "same-origin" });
    if(!res.ok) throw new Error("fetch gagal: " + res.status);
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const newMain = doc.querySelector("main");
    if(!newMain) throw new Error("halaman tujuan gak punya <main>");

    document.title = doc.title || document.title;
    if(doc.body.dataset.page) document.body.dataset.page = doc.body.dataset.page;
    if(doc.body.dataset.navfile) document.body.dataset.navfile = doc.body.dataset.navfile;
    else delete document.body.dataset.navfile;

    const currentMain = document.querySelector("main");
    if(currentMain) currentMain.replaceWith(newMain);
    else document.body.appendChild(newMain);
    newMain.style.opacity = "";

    const decorHost = document.getElementById("app-decor");
    if(decorHost) decorHost.innerHTML = "";

    if(nextLinkGuardInterval){ clearInterval(nextLinkGuardInterval); nextLinkGuardInterval = null; }

    window.scrollTo(0, 0);
    if(push) history.pushState({ spaUrl: targetUrl }, "", targetUrl);

    runPageInit();
  }catch(e){
    location.href = targetUrl; // fallback aman kalau SPA-fetch gagal
  }finally{
    isSpaNavigating = false;
  }
}

function initSpaNavigation(){
  document.addEventListener("click", (e)=>{
    if(e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest("a");
    if(!a || !isInternalPageLink(a)) return;
    e.preventDefault();
    navigateTo(a.getAttribute("href"));
  });
  window.addEventListener("popstate", ()=> navigateTo(location.href, { push:false }));
}

/* ---------- 5b. SEQUENTIAL FLOW LOCK (gak bisa skip halaman) ---------- */
// Urutan cerita website. Halaman baru kebuka kalau halaman sebelumnya sudah "dijawab/diselesaikan".
const FLOW_ORDER = [
  "tujuan.html","mystery-box.html","favorites.html","hobby.html","mood.html",
  "questions.html","personality.html","games.html","timeline.html","flower-garden.html",
  "random-message.html","fortune.html","little-notes.html","this-or-that.html",
  "would-you-rather.html","future-letter.html","secret-room.html","achievements.html",
  "stats.html","my-answers.html","final.html"
];
function flowCompletionMap(d){
  return {
    "tujuan.html": true,
    "mystery-box.html": d.boxesOpened.length >= 1,
    "favorites.html": !!d.favoritesFlipped,
    "hobby.html": true,
    "mood.html": !!d.mood,
    "questions.html": d.questions.some(a=> a && a.trim()),
    "personality.html": !!d.personalityResult,
    "games.html": d.gamesPlayed.length >= 1,
    "timeline.html": true,
    "flower-garden.html": d.flowersFound.length >= 1,
    "random-message.html": !!d.messageOpened,
    "fortune.html": !!d.fortuneChecked,
    "little-notes.html": d.notesRead >= 1,
    "this-or-that.html": d.thisOrThat.length >= 1,
    "would-you-rather.html": d.wouldYouRather.length >= 1,
    "future-letter.html": !!(d.futureLetter && d.futureLetter.trim()),
    "secret-room.html": !!d.secretUnlocked,
    "achievements.html": true,
    "stats.html": true,
    "my-answers.html": true,
    "final.html": true
  };
}
function getUnlockedFlowIndex(){
  const d = getData();
  const map = flowCompletionMap(d);
  for(let i=0;i<FLOW_ORDER.length;i++){
    if(!map[FLOW_ORDER[i]]) return i;
  }
  return FLOW_ORDER.length - 1;
}
function isPageUnlocked(href){
  if(!href || href === "index.html") return true;
  const idx = FLOW_ORDER.indexOf(href);
  if(idx === -1) return true;
  return idx <= getUnlockedFlowIndex();
}
function guardCurrentPage(){
  const page = document.body.dataset.page;
  const href = document.body.dataset.navfile || (page + ".html");
  if(page === "index") return true;
  if(isPageUnlocked(href)) return true;
  const target = FLOW_ORDER[getUnlockedFlowIndex()];
  sessionStorage.setItem("flowLockedMsg", "1");
  location.replace(target);
  return false;
}
function applyNextLinkGuard(){
  const link = document.getElementById("next-link");
  if(!link) return;
  const targetHref = link.getAttribute("href");
  function refresh(){
    if(isPageUnlocked(targetHref)){
      link.classList.remove("locked");
    } else {
      link.classList.add("locked");
    }
  }
  link.addEventListener("click", (e)=>{
    if(!isPageUnlocked(targetHref)){
      e.preventDefault();
      toast("Jawab / selesaikan dulu halaman ini ya, baru bisa lanjut 🌸");
    }
  });
  refresh();
  if(nextLinkGuardInterval) clearInterval(nextLinkGuardInterval);
  nextLinkGuardInterval = setInterval(refresh, 400);
}

/* ---------- 6. NAVIGATION ---------- */
function renderNav(active){
  const host = document.getElementById("app-nav");
  if(!host) return;
  const bottom = SITE_CONFIG.bottomNav.map(item=>{
    const isActive = item.href === active ? "active":"";
    const locked = !isPageUnlocked(item.href);
    return `<a href="${locked?'#':item.href}" data-href="${item.href}" class="${isActive} ${locked?'locked':''}">
      <span class="ic">${locked?'🔒':item.icon}</span>${item.label}</a>`;
  }).join("");
  const menuItems = SITE_CONFIG.allPages.map(item=>{
    const locked = !isPageUnlocked(item.href);
    return `<a href="${locked?'#':item.href}" data-href="${item.href}" class="${locked?'locked':''}">
      <span class="ic">${locked?'🔒':item.icon}</span>${item.label}</a>`;
  }).join("");
  host.innerHTML = `
    <div class="topbar">
      <span class="brand">🌸 For ${SITE_CONFIG.name}</span>
      <div style="display:flex;align-items:center;gap:8px;">
        <span class="points-pill" id="points-pill">⭐ 0</span>
        <button class="icon-btn" id="menu-open-btn" aria-label="Menu">☰</button>
      </div>
    </div>
    <nav class="bottom-nav">${bottom}</nav>
    <div class="menu-sheet" id="menu-sheet">
      <div class="menu-panel">
        <h3>🗺️ Semua Halaman</h3>
        <div class="menu-grid">${menuItems}</div>
        <button class="btn secondary block menu-close" id="menu-close-btn">Tutup</button>
      </div>
    </div>
  `;
  host.querySelectorAll("a.locked").forEach(a=>{
    a.addEventListener("click", (e)=>{
      e.preventDefault();
      toast("Selesaikan dulu halaman yang sekarang ya, baru bisa lanjut 🌸");
    });
  });
  document.getElementById("menu-open-btn").addEventListener("click", ()=> document.getElementById("menu-sheet").classList.add("open"));
  document.getElementById("menu-close-btn").addEventListener("click", ()=> document.getElementById("menu-sheet").classList.remove("open"));
  document.getElementById("menu-sheet").addEventListener("click", e=>{ if(e.target.id==="menu-sheet") e.currentTarget.classList.remove("open"); });
  refreshPointsPill();
}

/* ---------- 7. REVEAL ON SCROLL ---------- */
function initRevealOnScroll(){
  const items = document.querySelectorAll(".reveal");
  if(!items.length) return;
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("in"); });
  }, { threshold: .2 });
  items.forEach(i=> obs.observe(i));
}

/* ---------- 8. RESET ---------- */
function resetJourney(){
  openModal(`<h2>Reset My Journey? 🥺</h2><p>Semua progress, achievement, dan points akan dihapus. Yakin mau mulai dari awal lagi?</p>
    <div class="btn-row"><button class="btn" onclick="doReset()">Ya, reset</button></div>`);
}
function doReset(){
  localStorage.removeItem(STORAGE_KEY);
  closeModal();
  toast("Journey direset 🌸");
  setTimeout(()=> location.href = "index.html", 800);
}

/* ============================================================
   PAGE INITIALIZERS
   ============================================================ */
const pageInitializers = {

  index(){
    initDecor(["flowers","sparkle"]);
    const el = document.getElementById("typing-text");
    if(el){
      const lines = [`Hei kamu ${SITE_CONFIG.nickname} 🌸`, "Aku membuat sesuatu kecil khusus untuk kamu.", "Yuk mulai perjalanannya~"];
      typeLines(el, lines);
    }
    const startBtn = document.getElementById("start-journey");
    if(startBtn) startBtn.addEventListener("click", ()=> navigateTo("tujuan.html"));
  },

  tujuan(){
    initDecor(["sparkle","hearts"]);
    initRevealOnScroll();
  },

  "mystery-box"(){
    initDecor(["sparkle"]);
    const grid = document.getElementById("box-grid");
    if(!grid) return;
    const d = getData();
    grid.innerHTML = SITE_CONFIG.mysteryBoxes.map((box,i)=>{
      const opened = d.boxesOpened.includes(i);
      const locked = box.locked && d.visitedPages.length < 3;
      return `<div class="mbox ${opened?'opened':''} ${locked?'locked':''}" data-i="${i}">
        <span class="emoji">${locked? '🔒' : (opened? box.icon : '🎁')}</span>
        ${locked ? (box.unlockHint||'Locked') : (opened? 'Dibuka' : 'Ketuk untuk buka')}
      </div>`;
    }).join("");
    grid.querySelectorAll(".mbox").forEach(el=>{
      el.addEventListener("click", ()=>{
        if(el.classList.contains("locked")){ toast("Masih terkunci, explore halaman lain dulu ya 🔒"); return; }
        const i = +el.dataset.i;
        const dd = getData();
        if(!dd.boxesOpened.includes(i)){
          updateData(x=> x.boxesOpened.push(i));
          addPoints(10, "buka mystery box");
          unlockAchievement("mystery-box");
          confettiBurst();
        }
        openModal(`<div style="font-size:2.4rem;">${SITE_CONFIG.mysteryBoxes[i].icon}</div><p>${SITE_CONFIG.mysteryBoxes[i].message}</p>`);
        pageInitializers["mystery-box"]();
      });
    });
  },

  favorites(){
    initDecor(["sparkle"]);
    const grid = document.getElementById("fav-grid");
    if(!grid) return;
    grid.innerHTML = SITE_CONFIG.favoriteFoods.map((f,i)=>`
      <div class="flip-card" data-i="${i}">
        <div class="flip-inner">
          <div class="flip-front"><span class="icon">${f.icon}</span><span class="label">${f.label}</span></div>
          <div class="flip-back"><span class="val">${f.value}</span><span class="cap">${f.cap||'Ketuk lagi untuk tutup'}</span></div>
        </div>
      </div>`).join("");
    grid.querySelectorAll(".flip-card").forEach(c=> c.addEventListener("click", ()=>{
      c.classList.toggle("flipped");
      if(!getData().favoritesFlipped) updateData(d=> d.favoritesFlipped = true);
    }));
  },

  hobby(){
    initDecor(["sparkle"]);
    const grid = document.getElementById("hobby-grid");
    if(!grid) return;
    grid.innerHTML = SITE_CONFIG.hobbies.map(h=>`
      <div class="card"><span style="font-size:1.6rem;">${h.icon}</span>
        <h3 style="margin:6px 0 2px;">${h.label}</h3><p style="margin:0;color:var(--ink-soft);">${h.value}</p></div>`).join("");
  },

  mood(){
    initDecor(["sparkle"]);
    const moods = [["😊","Bahagia"],["🥰","Senang"],["😌","Tenang"],["😴","Ngantuk"],["😔","Sedih"],["🥺","Butuh pelukan"],["😡","Kesal"],["🤩","Excited"],["😭","Capek"],["😐","Biasa saja"]];
    const grid = document.getElementById("mood-grid");
    const result = document.getElementById("mood-result");
    if(!grid) return;
    grid.innerHTML = moods.map(m=>`<button class="btn secondary" data-m="${m[1]}" style="font-size:1.3rem;">${m[0]}<br><span style="font-size:.7rem;">${m[1]}</span></button>`).join("");
    const comfort = ["Sedih","Butuh pelukan","Kesal","Capek"];
    const happy = ["Bahagia","Senang","Excited"];
    grid.querySelectorAll("button").forEach(b=>{
      b.addEventListener("click", ()=>{
        const m = b.dataset.m;
        updateData(d=>{ d.mood = m; d.moodTimestamp = new Date().toLocaleString("id-ID"); });
        addPoints(5,"cek mood");
        let msg = "Makasih udah cerita gimana perasaan kamu hari ini. 🌸";
        if(comfort.includes(m)){
          msg = "Take a breath. Semuanya nggak harus selesai hari ini. Kamu boleh pelan-pelan dulu. 🤍";
          confettiOff();
        } else if(happy.includes(m)){
          msg = "Yeay! Senang banget denger itu ✨ semoga harimu makin seru!";
          confettiBurst();
        }
        result.innerHTML = `<div class="card center"><p>${msg}</p><p style="font-size:.75rem;color:var(--ink-soft);">Tersimpan · ${new Date().toLocaleString("id-ID")}</p></div>`;
      });
    });
  },

  questions(){
    initDecor(["sparkle"]);
    const qs = SITE_CONFIG.questions;
    const d = getData();
    let idx = d.questions.length >= qs.length ? qs.length-1 : d.questions.length;
    const qText = document.getElementById("q-text");
    const qInput = document.getElementById("q-input");
    const bar = document.getElementById("q-progress");
    const counter = document.getElementById("q-counter");
    const prevBtn = document.getElementById("q-prev");
    const nextBtn = document.getElementById("q-next");
    function render(){
      const dd = getData();
      qText.textContent = qs[idx];
      qInput.value = dd.questions[idx] || "";
      bar.style.width = (((idx+1)/qs.length)*100)+"%";
      counter.textContent = `Pertanyaan ${idx+1} dari ${qs.length}`;
      prevBtn.disabled = idx===0;
      nextBtn.textContent = idx === qs.length-1 ? "Selesai" : "Next";
    }
    function saveCurrent(){
      const val = qInput.value.trim();
      updateData(dd=>{ dd.questions[idx] = val; });
    }
    prevBtn.addEventListener("click", ()=>{ saveCurrent(); if(idx>0){ idx--; render(); } });
    nextBtn.addEventListener("click", ()=>{
      saveCurrent();
      if(idx < qs.length-1){ idx++; render(); }
      else {
        addPoints(10,"jawab semua pertanyaan");
        unlockAchievement("question-master");
        openModal("<h2>Selesai! 🎉</h2><p>Makasih udah jawab semua pertanyaan. Jawabanmu tersimpan dan bisa dilihat di halaman 'My Answers'.</p>");
      }
    });
    render();
  },

  personality(){
    initDecor(["sparkle"]);
    const qs = SITE_CONFIG.personalityQuestions;
    let idx = 0; const scores = { soft:0, bright:0, calm:0, creative:0 };
    const box = document.getElementById("quiz-box");
    function render(){
      if(idx >= qs.length){ finish(); return; }
      const q = qs[idx];
      box.innerHTML = `<div class="progress-track"><div class="progress-fill" style="width:${(idx/qs.length)*100}%"></div></div>
        <h2>${q.q}</h2>
        <div class="grid">${q.opts.map((o,i)=>`<button class="btn secondary block" data-t="${o[1]}">${o[0]}</button>`).join("")}</div>`;
      box.querySelectorAll("button").forEach(b=> b.addEventListener("click", ()=>{ scores[b.dataset.t]++; idx++; render(); }));
    }
    function finish(){
      const top = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];
      const r = SITE_CONFIG.personalityResults[top];
      updateData(d=>{ d.personalityResult = top; });
      addPoints(15,"selesai personality quiz");
      box.innerHTML = `<div class="card center"><div style="font-size:2.6rem;">${r.icon}</div><h2>${r.name}</h2><p>${r.desc}</p>
        <button class="btn" onclick="navigateTo('my-answers.html')">Lihat Semua Jawaban</button></div>`;
    }
    render();
  },

  games(){
    initDecor([]);
    initGameCatchFlower();
    initGameMemory();
    initGameReaction();
    initGameGuess();
    const tabs = document.querySelectorAll(".game-tab");
    tabs.forEach(t=> t.addEventListener("click", ()=>{
      tabs.forEach(x=>x.classList.remove("active"));
      t.classList.add("active");
      document.querySelectorAll(".game-panel").forEach(p=> p.classList.add("hidden"));
      document.getElementById(t.dataset.target).classList.remove("hidden");
    }));
  },

  timeline(){
    initDecor(["sparkle"]);
    const tl = document.getElementById("timeline-list");
    if(!tl) return;
    tl.innerHTML = SITE_CONFIG.timeline.map((t,i)=>`
      <div class="tl-item" data-i="${i}"><div class="tl-title">${t.title}</div><div class="tl-detail">${t.detail}</div></div>`).join("");
    tl.querySelectorAll(".tl-item").forEach(el=> el.addEventListener("click", ()=> el.classList.toggle("open")));
  },

  "flower-garden"(){
    initDecor(["sparkle"]);
    const garden = document.getElementById("garden");
    if(!garden) return;
    const flowers = ["🌸","🌷","🌺","🌼","🌻"];
    let html = "";
    for(let i=0;i<14;i++){
      html += `<span class="game-target flower-item" data-i="${i}" style="left:${(i%7)*13+3}%; top:${Math.floor(i/7)*40+10}%;">${flowers[i%flowers.length]}</span>`;
    }
    garden.innerHTML = html;
    garden.querySelectorAll(".flower-item").forEach(f=>{
      f.addEventListener("click", ()=>{
        const i = +f.dataset.i;
        const d = getData();
        if(!d.flowersFound.includes(i)){
          updateData(dd=> dd.flowersFound.push(i));
          addPoints(3,"nemuin bunga");
          if(getData().flowersFound.length >= 6) unlockAchievement("flower-collector");
        }
        f.style.transform = "scale(1.6)";
        const msg = SITE_CONFIG.flowerMessages[Math.floor(Math.random()*SITE_CONFIG.flowerMessages.length)];
        toast(msg);
      });
    });
  },

  "random-message"(){
    initDecor(["sparkle"]);
    const btn = document.getElementById("rm-btn");
    const out = document.getElementById("rm-output");
    let count = 0;
    btn.addEventListener("click", ()=>{
      const msgs = SITE_CONFIG.randomMessages;
      const msg = msgs[Math.floor(Math.random()*msgs.length)];
      out.innerHTML = `<div class="card center reveal in">${msg}</div>`;
      count++;
      if(!getData().messageOpened) updateData(d=> d.messageOpened = true);
      if(count===1) addPoints(5,"buka pesan random");
      if(count>=5) unlockAchievement("message-hunter");
    });
  },

  fortune(){
    initDecor(["sparkle"]);
    const btn = document.getElementById("fortune-btn");
    const out = document.getElementById("fortune-output");
    btn.addEventListener("click", ()=>{
      const f = SITE_CONFIG.fortunes[Math.floor(Math.random()*SITE_CONFIG.fortunes.length)];
      out.innerHTML = `<div class="fortune-card">
        <div class="row">🔢 Lucky Number: <b>${f[0]}</b></div>
        <div class="row">🎨 Lucky Color: <b>${f[1]}</b></div>
        <div class="row">💭 Mood Hari Ini: <b>${f[2]}</b></div>
        <div class="row">💡 Advice: ${f[3]}</div>
      </div>`;
      if(!getData().fortuneChecked) updateData(d=> d.fortuneChecked = true);
      addPoints(5,"cek fortune");
    });
  },

  "little-notes"(){
    initDecor(["sparkle"]);
    const board = document.getElementById("notes-board");
    if(!board) return;
    const shuffled = [...SITE_CONFIG.notes].sort(()=>Math.random()-.5).slice(0,12);
    board.innerHTML = shuffled.map((n,i)=>`<div class="note" data-i="${i}">🗒️</div>`).join("");
    board.querySelectorAll(".note").forEach((el,i)=>{
      el.addEventListener("click", ()=>{
        if(el.classList.contains("open")) return;
        el.classList.add("open");
        el.textContent = shuffled[i];
        updateData(d=> d.notesRead = (d.notesRead||0)+1);
        addPoints(2,"buka note");
      });
    });
  },

  "this-or-that"(){
    initDecor(["sparkle"]);
    const pairs = SITE_CONFIG.thisOrThat;
    let idx = 0;
    const box = document.getElementById("tot-box");
    function render(){
      if(idx >= pairs.length){
        box.innerHTML = `<div class="card center"><h2>Selesai! ⚖️</h2><p>Semua pilihan kamu udah tersimpan.</p></div>`;
        addPoints(10,"selesai this or that");
        return;
      }
      const [a,b] = pairs[idx];
      box.innerHTML = `<p class="lede center">Pilihan ${idx+1} dari ${pairs.length}</p>
        <div class="btn-row"><button class="btn block" style="flex:1" data-v="${a}">${a}</button>
        <button class="btn secondary block" style="flex:1" data-v="${b}">${b}</button></div>`;
      box.querySelectorAll("button").forEach(btn=> btn.addEventListener("click", ()=>{
        updateData(d=> d.thisOrThat.push(btn.dataset.v));
        idx++; render();
      }));
    }
    render();
  },

  "would-you-rather"(){
    initDecor(["sparkle"]);
    const qs = SITE_CONFIG.wouldYouRather;
    let idx = 0;
    const box = document.getElementById("wyr-box");
    function render(){
      if(idx >= qs.length){
        box.innerHTML = `<div class="card center"><h2>Selesai! 🤔</h2><p>Makasih udah jawab semuanya.</p></div>`;
        addPoints(10,"selesai would you rather");
        return;
      }
      box.innerHTML = `<p class="lede center">${idx+1} / ${qs.length}</p>
        <div class="card center"><p style="font-weight:700;">${qs[idx]}</p></div>
        <div class="btn-row"><button class="btn" data-v="opsi A">Pilih Opsi A</button><button class="btn secondary" data-v="opsi B">Pilih Opsi B</button></div>`;
      box.querySelectorAll("button").forEach(btn=> btn.addEventListener("click", ()=>{
        updateData(d=> d.wouldYouRather.push(qs[idx]+" -> "+btn.dataset.v));
        idx++; render();
      }));
    }
    render();
  },

  "future-letter"(){
    initDecor(["sparkle"]);
    const ta = document.getElementById("letter-input");
    const saveBtn = document.getElementById("letter-save");
    const view = document.getElementById("letter-view");
    const d = getData();
    if(d.futureLetter) ta.value = d.futureLetter;
    function renderView(){
      const dd = getData();
      view.innerHTML = dd.futureLetter ? `<div class="card"><p style="font-style:italic;white-space:pre-wrap;">"${dd.futureLetter}"</p></div>` : "";
    }
    saveBtn.addEventListener("click", ()=>{
      updateData(dd=> dd.futureLetter = ta.value.trim());
      addPoints(10,"nulis surat untuk masa depan");
      toast("Surat tersimpan 💌");
      renderView();
    });
    renderView();
  },

  "secret-room"(){
    initDecor([]);
    const d = getData();
    const locked = document.getElementById("lock-view");
    const unlocked = document.getElementById("unlock-view");
    const input = document.getElementById("pw-input");
    const btn = document.getElementById("pw-btn");
    const err = document.getElementById("pw-err");
    function show(){
      if(getData().secretUnlocked){ locked.classList.add("hidden"); unlocked.classList.remove("hidden"); }
      else { locked.classList.remove("hidden"); unlocked.classList.add("hidden"); }
    }
    btn.addEventListener("click", ()=>{
      if(input.value.trim().toLowerCase() === SITE_CONFIG.secretRoom.password){
        updateData(dd=> dd.secretUnlocked = true);
        addPoints(30,"buka secret room");
        unlockAchievement("secret-room");
        confettiBurst();
        show();
      } else {
        err.textContent = "Password salah, coba explore halaman lain buat nemuin petunjuknya 👀";
      }
    });
    show();
  },

  achievements(){
    const grid = document.getElementById("ach-grid");
    if(!grid) return;
    const d = getData();
    grid.innerHTML = SITE_CONFIG.achievementsList.map(a=>{
      const unlocked = d.achievements.includes(a.id);
      return `<div class="ach ${unlocked?'unlocked':''}"><div class="ic">${unlocked?a.icon:'🔒'}</div><div class="nm">${a.name}</div></div>`;
    }).join("");
  },

  stats(){
    const grid = document.getElementById("stats-grid");
    if(!grid) return;
    const d = getData();
    const totalGames = Object.keys(d.highscores||{}).length;
    const rows = [
      ["📄 Halaman dikunjungi", d.visitedPages.length],
      ["🎮 Game dimainkan", d.gamesPlayed.length],
      ["🏆 High score tertinggi", Math.max(0,...Object.values(d.highscores||{}))],
      ["🎁 Box dibuka", d.boxesOpened.length],
      ["🌷 Bunga ditemukan", d.flowersFound.length],
      ["🏅 Achievement", d.achievements.length+" / "+SITE_CONFIG.achievementsList.length],
      ["⭐ Total points", d.points],
      ["❓ Pertanyaan dijawab", d.questions.filter(Boolean).length],
      ["🔐 Secret ditemukan", d.secretUnlocked ? 1 : 0]
    ];
    grid.innerHTML = rows.map(r=>`<div class="card" style="display:flex;justify-content:space-between;"><span>${r[0]}</span><b>${r[1]}</b></div>`).join("");
  },

  "my-answers"(){
    const out = document.getElementById("answers-out");
    if(!out) return;
    const d = getData();
    out.innerHTML = `
      <div class="card"><h3>Mood</h3><p>${d.mood || "Belum diisi"}</p></div>
      <div class="card"><h3>10 Questions</h3>${SITE_CONFIG.questions.map((q,i)=>`<p><b>${i+1}. ${q}</b><br>${d.questions[i]||"—"}</p>`).join("")}</div>
      <div class="card"><h3>Personality</h3><p>${d.personalityResult ? SITE_CONFIG.personalityResults[d.personalityResult].name : "Belum diisi"}</p></div>
      <div class="card"><h3>This or That</h3><p>${d.thisOrThat.length? d.thisOrThat.join(", ") : "Belum diisi"}</p></div>
      <div class="card"><h3>Would You Rather</h3><p>${d.wouldYouRather.length? d.wouldYouRather.join("<br>") : "Belum diisi"}</p></div>
      <div class="card"><h3>Future Letter</h3><p style="white-space:pre-wrap;">${d.futureLetter || "Belum diisi"}</p></div>
      <div class="card"><h3>Achievements</h3><p>${d.achievements.length} / ${SITE_CONFIG.achievementsList.length}</p></div>
      <div class="card"><h3>Points</h3><p>⭐ ${d.points}</p></div>
    `;
    const waBtn = document.getElementById("wa-send");
    if(waBtn) waBtn.addEventListener("click", ()=> sendToWhatsApp());
  },

  final(){
    initDecor([]);
    const d = getData();
    const requiredAch = 3;
    const requiredPages = 12;
    const eligible = d.achievements.length >= requiredAch && d.visitedPages.length >= requiredPages;
    const gate = document.getElementById("final-gate");
    const content = document.getElementById("final-content");
    if(eligible){
      gate.classList.add("hidden");
      content.classList.remove("hidden");
      setTimeout(()=>{
        initDecor(["flowers","sparkle","hearts"]);
        confettiBurst();
        const el = document.getElementById("final-typing");
        if(el) typeLines(el, [
          `Kalau kamu baca sampai sini, makasih ya udah nemenin explore semuanya 🌸`,
          `Ini emang cuma website kecil, tapi dibuat dengan usaha dan niat yang gede.`,
          `Makasih udah jadi ${SITE_CONFIG.name} yang sekarang. 💗`
        ]);
      }, 300);
    } else {
      gate.classList.remove("hidden");
      content.classList.add("hidden");
      document.getElementById("final-progress").innerHTML =
        `Achievement: ${d.achievements.length}/${requiredAch} · Halaman dijelajahi: ${d.visitedPages.length}/${requiredPages}`;
    }
    const restart = document.getElementById("restart-btn");
    if(restart) restart.addEventListener("click", resetJourney);
  }
};

/* ---------- WHATSAPP / TELEGRAM SEND ---------- */
function buildSummaryText(){
  const d = getData();
  let text = `🌸 HASIL EXPLORATION 🌸\n\n`;
  text += `Mood:\n${d.mood || "-"}\n\n`;
  text += `Personality:\n${d.personalityResult ? SITE_CONFIG.personalityResults[d.personalityResult].name : "-"}\n\n`;
  text += `10 Questions:\n` + SITE_CONFIG.questions.map((q,i)=> `${i+1}. ${q}\n${d.questions[i]||"-"}`).join("\n") + `\n\n`;
  text += `This or That:\n${d.thisOrThat.join(", ")||"-"}\n\n`;
  text += `Would You Rather:\n${(d.wouldYouRather||[]).join("; ")||"-"}\n\n`;
  text += `Future Letter:\n${d.futureLetter || "-"}\n\n`;
  text += `Achievement: ${d.achievements.length}/${SITE_CONFIG.achievementsList.length}\n`;
  text += `Points: ${d.points}`;
  return text;
}
function sendToWhatsApp(){
  const text = encodeURIComponent(buildSummaryText());
  window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, "_blank");
}
/* ---------- TYPING EFFECT ---------- */
function typeLines(el, lines, speed=35){
  el.textContent = "";
  let li = 0;
  function typeLine(){
    if(li >= lines.length) return;
    let ci = 0;
    const line = lines[li];
    const p = document.createElement("p");
    el.appendChild(p);
    const iv = setInterval(()=>{
      p.textContent += line[ci]; ci++;
      if(ci >= line.length){ clearInterval(iv); li++; setTimeout(typeLine, 500); }
    }, prefersReducedMotion()? 0 : speed);
  }
  typeLine();
}
function confettiOff(){ /* placeholder for calmer moods, no-op */ }

/* ============================================================
   GAMES
   ============================================================ */
function initGameCatchFlower(){
  const area = document.getElementById("game-catch-area");
  const startBtn = document.getElementById("catch-start");
  const scoreEl = document.getElementById("catch-score");
  const timeEl = document.getElementById("catch-time");
  const hsEl = document.getElementById("catch-hs");
  if(!area) return;
  let score=0, timeLeft=30, timer=null, spawnTimer=null;
  hsEl.textContent = (getData().highscores.catch)||0;
  function spawn(){
    area.querySelectorAll(".spawned").forEach(e=>e.remove());
    const el = document.createElement("span");
    el.className = "game-target spawned";
    el.textContent = "🌸";
    el.style.left = (Math.random()*85)+"%";
    el.style.top = (Math.random()*80)+"%";
    el.addEventListener("click", ()=>{ score++; scoreEl.textContent = score; el.remove(); spawn(); });
    area.appendChild(el);
  }
  startBtn.addEventListener("click", ()=>{
    score=0; timeLeft=30; scoreEl.textContent=0; timeEl.textContent=30;
    clearInterval(timer);
    spawn();
    timer = setInterval(()=>{
      timeLeft--; timeEl.textContent = timeLeft;
      if(timeLeft<=0){
        clearInterval(timer);
        area.querySelectorAll(".spawned").forEach(e=>e.remove());
        finishGame("catch", score);
        hsEl.textContent = getData().highscores.catch;
      }
    },1000);
  });
}
function initGameMemory(){
  const grid = document.getElementById("mem-grid");
  const triesEl = document.getElementById("mem-tries");
  const startBtn = document.getElementById("mem-start");
  if(!grid) return;
  const emojis = ["🌸","💗","🎀","✨","🌷","🍰"];
  let cards=[], flipped=[], matched=0, tries=0, lock=false;
  function build(){
    cards = [...emojis, ...emojis].sort(()=>Math.random()-.5);
    matched=0; tries=0; flipped=[]; triesEl.textContent=0;
    grid.innerHTML = cards.map((c,i)=>`<div class="mem-card" data-i="${i}" data-v="${c}"></div>`).join("");
    grid.querySelectorAll(".mem-card").forEach(el=> el.addEventListener("click", onFlip));
  }
  function onFlip(e){
    const el = e.currentTarget;
    if(lock || el.classList.contains("flipped") || el.classList.contains("matched")) return;
    el.classList.add("flipped"); el.textContent = el.dataset.v;
    flipped.push(el);
    if(flipped.length===2){
      tries++; triesEl.textContent = tries; lock=true;
      const [a,b] = flipped;
      if(a.dataset.v === b.dataset.v){
        a.classList.add("matched"); b.classList.add("matched");
        matched+=2; flipped=[]; lock=false;
        if(matched === cards.length) finishGame("memory", Math.max(0, 100 - tries*3));
      } else {
        setTimeout(()=>{
          a.classList.remove("flipped"); a.textContent="";
          b.classList.remove("flipped"); b.textContent="";
          flipped=[]; lock=false;
        }, 700);
      }
    }
  }
  startBtn.addEventListener("click", build);
  build();
}
function initGameReaction(){
  const zone = document.getElementById("reaction-zone");
  const resultEl = document.getElementById("reaction-result");
  if(!zone) return;
  let state = "idle", startTime=0, timeoutId=null;
  function reset(){
    state="idle"; zone.textContent="Ketuk untuk mulai"; zone.style.background="";
  }
  zone.addEventListener("click", ()=>{
    if(state==="idle"){
      state="waiting"; zone.textContent="Tunggu warna hijau..."; zone.style.background="var(--pink-200)";
      const delay = 1000+Math.random()*2500;
      timeoutId = setTimeout(()=>{
        state="go"; zone.textContent="KETUK SEKARANG!"; zone.style.background="#b7f7c9";
        startTime = Date.now();
      }, delay);
    } else if(state==="waiting"){
      clearTimeout(timeoutId);
      resultEl.textContent = "Kecepetan! Coba lagi.";
      reset();
    } else if(state==="go"){
      const rt = Date.now()-startTime;
      resultEl.textContent = `Reaction time kamu: ${rt} ms ⚡`;
      finishGame("reaction", Math.max(0, 1000-rt));
      reset();
    }
  });
  reset();
}
function initGameGuess(){
  const input = document.getElementById("guess-input");
  const btn = document.getElementById("guess-btn");
  const hint = document.getElementById("guess-hint");
  if(!btn) return;
  let target = Math.floor(Math.random()*50)+1;
  let tries = 0;
  btn.addEventListener("click", ()=>{
    const val = +input.value;
    if(!val) return;
    tries++;
    if(val === target){
      hint.textContent = `Benar! Angkanya ${target}. Kamu nebak dalam ${tries} percobaan 🎉`;
      finishGame("guess", Math.max(0, 100 - tries*10));
      target = Math.floor(Math.random()*50)+1; tries=0;
    } else if(val < target){ hint.textContent = "Terlalu kecil, coba lagi ⬆️"; }
    else { hint.textContent = "Terlalu besar, coba lagi ⬇️"; }
  });
}
function finishGame(id, score){
  updateData(d=>{
    d.gamesPlayed.push(id);
    if(!d.highscores[id] || score > d.highscores[id]) d.highscores[id] = score;
  });
  addPoints(20, "selesai main game");
  const uniqueGames = new Set(getData().gamesPlayed).size;
  if(uniqueGames >= 3) unlockAchievement("game-master");
  toast(`Score: ${score} 🎮`);
}

/* ============================================================
   BOOTSTRAP
   ============================================================ */
function runPageInit(){
  if(!guardCurrentPage()) return;
  const page = document.body.dataset.page;
  renderNav(document.body.dataset.navfile || (page+".html"));
  trackVisit(page);
  refreshPointsPill();
  if(pageInitializers[page]) pageInitializers[page]();
  applyNextLinkGuard();
  if(sessionStorage.getItem("flowLockedMsg")){
    sessionStorage.removeItem("flowLockedMsg");
    toast("Yuk selesaikan dulu di sini, baru bisa lanjut ke halaman lain 🌸");
  }
  const resetBtn = document.getElementById("reset-journey-btn");
  if(resetBtn) resetBtn.addEventListener("click", resetJourney);
}

document.addEventListener("DOMContentLoaded", ()=>{
  initMusicPlayer(); // cuma dipanggil sekali di load pertama -> musik gak pernah di-restart pas ganti halaman
  runPageInit();
  initSpaNavigation();
});
