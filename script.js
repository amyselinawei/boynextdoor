/* BOYNEXTDOOR 粉絲專頁 — 互動功能 */

/* ================= 成員資料 ================= */
const members = [
  {en:"SUNGHO", kr:"성호", bday:"2003-09-04", photo:"sungho.png",
   real:"박성호 Park Sung-ho", pos:"主唱", home:"江原道 原州", height:"173 cm", mbti:"ENTJ", emoji:"🐈",
   facts:["團裡年紀最大的哥哥，也是氣氛擔當，外號「Top gun」","興趣是逛咖啡廳和拍照","是左撇子，視力不好，公開場合會戴隱形眼鏡","Leehan 幫他指定的「代表魚」是斑馬魚"],
   char:"CATBBI", charImg:"catbbi.jpg", animal:"🐱 橘白貓",
   desc:"敏感又講究、細心又甜的傲嬌貓，住在連接粉絲和 BND 的次元之門，最愛站上舞台唱歌。"},
  {en:"RIWOO", kr:"리우", bday:"2003-10-22", photo:"riwoo.png",
   real:"이상혁 Lee Sang-hyuk", pos:"主舞", home:"首爾 江北區", height:"170 cm", mbti:"ISFJ", emoji:"🦦 🍩",
   facts:["畢業於翰林藝術高中，出道前參加過舞蹈才藝比賽","超愛甜點","比 Sungho 晚一個月加入 KOZ","Leehan 幫他指定的「代表魚」是箱魨"],
   char:"DALRING", charImg:"dalring.jpg", animal:"🦦 水獺",
   desc:"安靜害羞卻很會吸睛，住在溫暖的海邊，喜歡仰躺漂浮、吃甜點，隨身帶著平底鍋。"},
  {en:"JAEHYUN", kr:"재현", bday:"2003-12-04", leader:true, photo:"jaehyun.png",
   real:"명재현 Myung Jae-hyun", pos:"隊長", home:"首爾 銅雀區", height:"177 cm", mbti:"ENFP", emoji:"🐶 🐺",
   facts:["曾是 YG 練習生","最後一個加入團體的成員","喜歡足球和高爾夫，自認是狗派","「明」這個姓氏在韓國非常少見"],
   char:"MYNGMYNG", charImg:"myngmyng.jpg", animal:"🐺 狼",
   desc:"害羞又可愛的狼隊長，住在森林小木屋，愛音樂和散步。只要他一嚎叫，成員們就會集合！"},
  {en:"TAESAN", kr:"태산", bday:"2004-08-10", photo:"taesan.png",
   real:"한동민 Han Dong-min", pos:"Vocal・Rap", home:"光州", height:"182 cm", mbti:"ENTJ", emoji:"🐈‍⬛ 🗻",
   facts:["在 SOURCE MUSIC 當了 7 年練習生，是團裡練習最久的","高一就開始寫歌","興趣是閱讀和彈鋼琴，喜歡 Nirvana、Oasis","自稱 BND 的「巨大的山（태산）」"],
   char:"HAN TATPUNG", charImg:"hantatpung.jpg", animal:"🐈‍⬛ 黑貓",
   desc:"住在叢林的酷黑貓，喜歡秀格鬥技，總戴著墨鏡、圍著圍巾，對時尚很有興趣。"},
  {en:"LEEHAN", kr:"이한", bday:"2004-10-20", photo:"leehan.png",
   real:"김동현 Kim Dong-hyun", pos:"Vocal", home:"釜山", height:"180 cm", mbti:"ENFP", emoji:"🐠 👽",
   facts:["興趣是養魚、佈置魚缸，最愛鼠魚","外號「KOZ 的心理諮商師」，團裡的傾聽擔當","幫每個成員都指定了一種代表魚","水上運動樣樣都很會"],
   char:"312", charImg:"312.jpg", animal:"👽 外星人",
   desc:"總是很忙的外星人，住處是秘密。愛餵魚、吃果凍，一緊張就會融化成液體，下雨天捲毛會膨起來。"},
  {en:"WOONHAK", kr:"운학", bday:"2006-11-29", photo:"woonhak.png",
   real:"김운학 Kim Woon-hak", pos:"忙內", home:"京畿道 水原", height:"182 cm", mbti:"ENFJ", emoji:"🧸 ⛄",
   facts:["想當歌手是為了安慰別人、傳遞快樂能量","興趣是打籃球和做音樂","曾和 TXT 然竣、朴志厚一起擔任《人氣歌謠》MC","說如果自己是卡通角色，會是魯夫"],
   char:"WOONBABY", charImg:"woonbaby.jpg", animal:"⛄ 雪人",
   desc:"圓滾滾的雪人忙內，來自雪人王國，卻愛衝浪和曬太陽，而且永遠不會融化！"}
];
const $ = id => document.getElementById(id);
const fmtBday = m => m.bday.slice(0,4) + "." + m.bday.slice(5,7) + "." + m.bday.slice(8);

/* 安全存取 localStorage（私密視窗也不會壞） */
const store = {
  get(k, d){ try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};

/* ================= 小特效 ================= */
function popHeart(x, y){
  const h = document.createElement("span");
  h.className = "heart";
  h.textContent = ["💙","🤍","✨","⭐","🧸"][Math.floor(Math.random()*5)];
  h.style.left = (x - 12) + "px"; h.style.top = (y - 20) + "px";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 1000);
}
function confetti(){
  const colors = ["#5b80b8","#b3cbe6","#ffffff","#f6e3a1","#2d3e5e","#f4b8c8"];
  for (let i = 0; i < 70; i++){
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[i % colors.length];
    c.style.animationDuration = (1.8 + Math.random() * 1.6) + "s";
    c.style.animationDelay = Math.random() * .4 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}
// 滑鼠閃亮尾巴（只在電腦上）
if (matchMedia("(hover:hover)").matches){
  let last = 0;
  document.addEventListener("mousemove", e => {
    const now = Date.now(); if (now - last < 60) return; last = now;
    const s = document.createElement("span");
    s.className = "spark"; s.textContent = Math.random() < .5 ? "✦" : "·";
    s.style.color = ["#5b80b8","#f6e3a1","#f4b8c8"][Math.floor(Math.random()*3)];
    s.style.left = e.clientX + "px"; s.style.top = e.clientY + "px";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 800);
  });
}

/* ================= 敲門 ================= */
const knockLines = ["Who's there? 👀", "똑똑똑 — 有人在家嗎？", "門開了！"];
let knocks = 0;
$("knockBtn").addEventListener("click", () => {
  const door = $("door");
  if (door.classList.contains("open")){ door.classList.remove("open"); $("knockMsg").textContent = ""; return; }
  knocks++;
  door.classList.add("shake");
  setTimeout(() => door.classList.remove("shake"), 350);
  if (knocks % 3 === 0){
    const m = members[Math.floor(Math.random()*members.length)];
    $("doorPeek").src = "img/" + m.charImg;
    door.classList.add("open");
    $("knockMsg").textContent = `是 ${m.char}（${m.en}）來開門了！🏠`;
  } else {
    $("knockMsg").textContent = knockLines[(knocks % 3) - 1] + "（再敲 " + (3 - knocks % 3) + " 下）";
  }
});

/* ================= 數字跳動 ================= */
const debut = new Date("2023-05-30T00:00:00+09:00");
$("days").dataset.to = Math.floor((Date.now() - debut) / 86400000);
function countUp(el){
  const to = +el.dataset.to, t0 = performance.now();
  (function step(t){
    const p = Math.min((t - t0) / 1200, 1);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString();
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}

/* ================= 滑入動畫 + 導覽列 ================= */
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting){
    en.target.classList.add("in");
    en.target.querySelectorAll(".count").forEach(c => { if (!c.dataset.done){ c.dataset.done = 1; countUp(c); } });
    io.unobserve(en.target);
  }
}), {threshold:.12});
document.querySelectorAll(".reveal").forEach(s => io.observe(s));

const navLinks = [...document.querySelectorAll("#navList a")];
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  $("progress").style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "%";
  $("toTop").classList.toggle("show", h.scrollTop > 600);
  let current = "";
  document.querySelectorAll("main section").forEach(s => { if (s.getBoundingClientRect().top < 120 && navLinks.some(a => a.getAttribute("href") === "#" + s.id)) current = s.id; });
  navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
}, {passive:true});
$("toTop").onclick = () => scrollTo({top:0, behavior:"smooth"});

/* ================= 成員卡片 ================= */
members.forEach((m, i) => {
  const card = document.createElement("div");
  card.className = "flip";
  card.tabIndex = 0;
  card.innerHTML = `
    ${m.leader ? '<span class="badge">隊長 👑</span>' : ''}
    <div class="flip-inner">
      <div class="face front">
        <span class="hint">↻</span>
        <img src="img/${m.photo}" alt="${m.en}" loading="lazy">
        <div class="info"><h3 class="en">${m.en}</h3><div class="kr">${m.kr}</div></div>
      </div>
      <div class="face back">
        <img src="img/${m.charImg}" alt="${m.char}" loading="lazy">
        <div class="info">
          <h3 class="en">${m.char}</h3>
          <span class="animal">${m.animal}</span>
          <span class="more">點我看介紹 →</span>
        </div>
      </div>
    </div>`;
  card.addEventListener("click", () => openProfile(i));
  card.addEventListener("keydown", e => { if (e.key === "Enter") openProfile(i); });
  $("memberGrid").appendChild(card);
});

/* ================= 個人介紹彈窗 ================= */
let current = 0;
function openProfile(i){
  current = i;
  const m = members[i];
  $("sheet").innerHTML = `
    <button class="close" aria-label="關閉">✕</button>
    <div class="p-top">
      <div class="p-pics">
        <img class="real" src="img/${m.photo}" alt="${m.en}">
        <img class="doll" src="img/${m.charImg}" alt="${m.char}" title="${m.char}">
      </div>
      <div class="p-head">
        <h3 class="en">${m.en}${m.leader ? " 👑" : ""}</h3>
        <div class="kr">${m.kr} · 本名 ${m.real}</div>
        <div class="facts">
          <div class="mbti"><small>MBTI</small><b class="en">${m.mbti}</b></div>
          <div><small>代表 emoji</small><b>${m.emoji}</b></div>
          <div><small>擔當</small><b>${m.pos}</b></div>
          <div><small>生日</small><b class="en">🎂 ${fmtBday(m)}</b></div>
          <div><small>身高</small><b class="en">${m.height}</b></div>
          <div><small>出生地</small><b>${m.home}</b></div>
        </div>
      </div>
    </div>
    <div class="p-body">
      <h4>💡 你知道嗎？</h4>
      <ul>${m.facts.map(f => `<li>${f}</li>`).join("")}</ul>
      <h4>🧸 他的 BBNEXDO</h4>
      <div class="p-doll"><b class="en">${m.char}</b>（${m.animal}）— ${m.desc}</div>
      <div class="p-foot">
        <button class="nav-btn" id="prevM">← ${members[(i+5)%6].en}</button>
        <button class="nav-btn" id="nextM">${members[(i+1)%6].en} →</button>
      </div>
    </div>`;
  $("modal").classList.add("show");
  document.body.style.overflow = "hidden";
  $("sheet").querySelector(".close").onclick = closeProfile;
  $("prevM").onclick = () => openProfile((i + 5) % 6);
  $("nextM").onclick = () => openProfile((i + 1) % 6);
}
function closeProfile(){ $("modal").classList.remove("show"); document.body.style.overflow = ""; }
$("modal").addEventListener("click", e => { if (e.target.id === "modal") closeProfile(); });
document.addEventListener("keydown", e => {
  if (!$("modal").classList.contains("show")) return;
  if (e.key === "Escape") closeProfile();
  if (e.key === "ArrowRight") openProfile((current + 1) % 6);
  if (e.key === "ArrowLeft") openProfile((current + 5) % 6);
});

/* ================= BBNEXDO 名牌 ================= */
const icons = ["🐱","🦦","🐺","🐈‍⬛","👽","⛄"];
members.forEach((m, i) => {
  const b = document.createElement("button");
  b.textContent = `${icons[i]} ${m.char}`;
  b.onclick = () => openProfile(i);
  $("chips").appendChild(b);
});

/* ================= 測驗：你是哪隻 BBNEXDO？ ================= */
// 每題 6 個選項，順序對應 members 陣列（0 Sungho … 5 Woonhak）
const questions = [
  {q:"放假的時候，你最想…", a:["去 KTV 唱整個下午 🎤","躺在海邊吃甜點 🍩","去森林散步聽音樂 🎧","逛街研究新穿搭 🕶️","在家餵魚、聽古典樂 🐠","打球、衝浪、曬太陽 🏀"]},
  {q:"朋友最常說你是…", a:["嘴硬心軟的傲嬌","安靜但莫名吸睛","害羞但很有魅力","酷酷的，話不多","永遠在忙的人","圓滾滾的開心果"]},
  {q:"出門一定要帶的東西？", a:["麥克風","平底鍋","耳機","墨鏡和圍巾","魚飼料","披風"]},
  {q:"肚子餓了，你想吃…", a:["牛里肌 🥩","甜點 🧁","番茄和紅蘿蔔 🥕","很酷的大魚 🦈","果凍 🍮","肉！全部都要肉 🍖"]},
  {q:"壓力很大的時候，你會…", a:["上台唱一首就好了","漂在水上放空","嚎一聲把朋友都叫來","秀一段格鬥技","直接融化成一灘","不管，曬太陽永不融化"]}
];
let qi = 0, score = [];
function startQuiz(){
  qi = 0; score = [0,0,0,0,0,0];
  renderQ();
}
function renderQ(){
  const box = $("quiz");
  if (qi >= questions.length) return showResult();
  const q = questions[qi];
  const order = [0,1,2,3,4,5].sort(() => Math.random() - .5);
  box.innerHTML = `
    <h3>🧸 測驗：你是哪隻 BBNEXDO？</h3>
    <div class="qbar"><i style="width:${qi / questions.length * 100}%"></i></div>
    <div class="qtext">Q${qi + 1}. ${q.q}</div>
    <div class="opts">${order.map(k => `<button class="opt" data-k="${k}">${q.a[k]}</button>`).join("")}</div>`;
  box.querySelectorAll(".opt").forEach(b => b.onclick = () => { score[+b.dataset.k]++; qi++; renderQ(); });
}
function showResult(){
  const max = Math.max(...score);
  const top = score.map((s, i) => s === max ? i : -1).filter(i => i >= 0);
  const m = members[top[Math.floor(Math.random() * top.length)]];
  $("quiz").innerHTML = `
    <div class="result">
      <div style="font-weight:800">你是…</div>
      <img src="img/${m.charImg}" alt="${m.char}">
      <h4 class="en">${m.char}！</h4>
      <div class="animal">${m.animal} · ${m.en} 的娃娃</div>
      <p>${m.desc}</p>
      <button class="btn light" id="seeMember">看 ${m.en} 的介紹</button>
      <button class="btn" id="retryQuiz">再測一次</button>
    </div>`;
  $("seeMember").onclick = () => openProfile(members.indexOf(m));
  $("retryQuiz").onclick = startQuiz;
  confetti();
}
$("quiz").innerHTML = `
  <h3>🧸 測驗：你是哪隻 BBNEXDO？</h3>
  <p style="margin:8px 0 18px;font-weight:700;color:var(--muted)">回答 5 個小問題，找出跟你最像的小隊員！</p>
  <button class="btn" id="startQuiz">開始測驗 →</button>`;
$("startQuiz").onclick = startQuiz;

/* ================= 翻牌配對遊戲 ================= */
let first = null, lock = false, moves = 0, pairs = 0, sec = 0, tick = null;
function newGame(){
  clearInterval(tick); tick = null;
  first = null; lock = false; moves = 0; pairs = 0; sec = 0;
  $("moves").textContent = 0; $("pairs").textContent = 0; $("timer").textContent = 0; $("gameMsg").textContent = "";
  const cards = [];
  members.forEach((m, i) => { cards.push({id:i, img:m.photo}); cards.push({id:i, img:m.charImg}); });
  cards.sort(() => Math.random() - .5);
  $("board").innerHTML = cards.map(c => `
    <div class="mc" data-id="${c.id}">
      <div class="mc-in"><div class="mc-f">🚪</div><div class="mc-b"><img src="img/${c.img}" alt=""></div></div>
    </div>`).join("");
  $("board").querySelectorAll(".mc").forEach(el => el.onclick = () => flipCard(el));
}
function flipCard(el){
  if (lock || el === first || el.classList.contains("done")) return;
  if (!tick) tick = setInterval(() => $("timer").textContent = ++sec, 1000);
  el.classList.add("open");
  if (!first){ first = el; return; }
  moves++; $("moves").textContent = moves;
  if (first.dataset.id === el.dataset.id){
    const m = members[+el.dataset.id];
    first.classList.add("done"); el.classList.add("done");
    pairs++; $("pairs").textContent = pairs;
    $("gameMsg").textContent = `配對成功！${m.en} 💙 ${m.char}`;
    first = null;
    if (pairs === 6){
      clearInterval(tick);
      const best = store.get("bnd-best", null);
      const isBest = !best || moves < best;
      if (isBest) store.set("bnd-best", moves);
      $("gameMsg").textContent = `🎉 全部完成！${moves} 步、${sec} 秒` + (isBest ? "，新紀錄！" : `（最佳紀錄 ${best} 步）`);
      confetti();
    }
  } else {
    lock = true;
    const a = first; first = null;
    setTimeout(() => { a.classList.remove("open"); el.classList.remove("open"); lock = false; }, 800);
  }
}
$("resetGame").onclick = newGame;
newGame();

/* ================= 今天推誰 ================= */
const msgs = ["今天就是他的日子！", "聽一整天他的 part 吧 🎧", "命運的門已經打開 🚪", "推他準沒錯 ✨", "今天的好運都來自他 🍀"];
$("pickBtn").addEventListener("click", () => {
  const btn = $("pickBtn");
  btn.disabled = true;
  $("pickMsg").textContent = "轉轉轉…🌀";
  let n = 0, m;
  const timer = setInterval(() => {
    m = members[Math.floor(Math.random() * members.length)];
    $("pickName").textContent = m.en;
    $("pickImg").src = "img/" + (n % 2 ? m.charImg : m.photo);
    if (++n > 22){
      clearInterval(timer);
      $("pickImg").src = "img/" + m.photo;
      $("pickMsg").innerHTML = `${msgs[Math.floor(Math.random() * msgs.length)]}<br><a href="#" id="pickSee" style="color:var(--blue)">看 ${m.en} 的介紹 →</a>`;
      const idx = members.indexOf(m);
      $("pickSee").onclick = e => { e.preventDefault(); openProfile(idx); };
      btn.disabled = false;
      btn.textContent = "再抽一次！";
      confetti();
    }
  }, 75);
});

/* ================= 生日 & 倒數 ================= */
const today = new Date(); today.setHours(0,0,0,0);
let next = null;
const bdItems = members.map(m => {
  const [, mo, d] = m.bday.split("-").map(Number);
  let bd = new Date(today.getFullYear(), mo - 1, d);
  if (bd < today) bd.setFullYear(today.getFullYear() + 1);
  const diff = Math.round((bd - today) / 86400000);
  if (!next || diff < next.diff) next = {m, diff, date: bd};
  return {m, mo, d};
});
$("bdList").innerHTML = bdItems.map(x =>
  `<li class="${x.m === next.m ? "soon" : ""}"><span class="en">${x.m.en}${x.m === next.m ? " 🎈" : ""}</span><span>${x.mo} 月 ${x.d} 日</span></li>`).join("");
if (next.diff === 0){
  $("nextBday").innerHTML = `🎉 今天是 <b class="en">${next.m.en}</b> 的生日！生日快樂！`;
} else {
  $("nextBday").innerHTML = `<b class="en" style="color:var(--blue);font-size:1.3rem">${next.m.en}</b> 的生日快到了！`;
  function updateCountdown(){
    const ms = Math.max(0, next.date - Date.now());
    const d = Math.floor(ms / 86400000), h = Math.floor(ms / 3600000) % 24, mi = Math.floor(ms / 60000) % 60, s = Math.floor(ms / 1000) % 60;
    $("countdown").innerHTML = [[d,"天"],[h,"時"],[mi,"分"],[s,"秒"]].map(([v, l]) => `<div><b class="en">${v}</b><small>${l}</small></div>`).join("");
  }
  updateCountdown(); setInterval(updateCountdown, 1000);
}

/* ================= ONEDOOR 101 ================= */
const faqs = [
  ["🚪","BOYNEXTDOOR 是什麼意思？","「住在隔壁的男孩們」。公司說想用輕鬆自在的方式靠近大家，唱出同齡人都有共鳴的日常故事。"],
  ["💙","ONEDOOR 是誰？","就是粉絲！2023 年 11 月 1 日公布，意思是「連接 BOYNEXTDOOR 與世界的唯一一扇門」。"],
  ["🗣️","「보넥도」怎麼念？","보넥도（Bo-nek-do）是 보이넥스트도어 的韓文縮寫，英文常寫成 BND。中文圈也會叫「波捏豆」！"],
  ["🏢","他們是哪家公司？","KOZ Entertainment，是 ZICO 創立的公司（隸屬 HYBE），BND 是 KOZ 的第一個男團。沒有經過選秀節目。"],
  ["📅","什麼時候出道？","2023 年 5 月 30 日，以單曲專輯《WHO!》出道，一次推出三首主打歌。"],
  ["💘","WHO! → WHY.. → HOW? 是什麼？","出道初期的「初戀三部曲」：從心動、到煩惱、到想辦法，三張專輯連成一個故事。"],
  ["✊","「Knock Knock」梗","團的概念就是「敲門」！問候語是 Who's there? BOYNEXTDOOR!，巡演叫「KNOCK ON」，還有一首歌叫〈똑똑똑〉（叩叩叩）。"],
  ["🧸","쁘넥도 BBNEXDO","官方角色！petit＋BOYNEXTDOOR，是守護村莊的迷你警備隊，往上看成員卡片背面就是囉。"],
  ["👍","「믿보넥」是什麼？","「믿고 보는 보이넥스트도어」的縮寫：可以放心相信、閉眼入坑的 BOYNEXTDOOR！"],
  ["🗻","Taesan 的名字","태산 就是「泰山」，所以他自稱 BND 的「巨大的山」，代表 emoji 是 🗻。"]
];
$("faq").innerHTML = faqs.map(([i, q, a]) => `<button class="qa"><div class="q"><i>${i}</i><span>${q}</span></div><div class="a">${a}</div></button>`).join("");
$("faq").querySelectorAll(".qa").forEach(b => b.onclick = () => b.classList.toggle("open"));

/* ================= 作品 & MV 唱片架 ================= */
const albums = [
  {k:"who", t:"WHO!", type:"1st Single", d:"2023.05.30", cls:"a-who", lab:"#ffb627", line:"出道作<br>三首主打一次發！",
   note:"出道作！一次推出三首主打歌，也是「初戀三部曲」的第一章：心動 💓",
   mv:[["_ItgMr1bMYc","돌아버리겠다 (But I Like You)","2023.05.22"],["jizAb-SLvtM","One and Only","2023.05.25"],["Uyq9OE8lIz8","Serenade","2023.05.30"]]},
  {k:"why", t:"WHY..", type:"1st EP", d:"2023.09.04", cls:"a-why", lab:"#3f5f93", line:"〈But Sometimes〉",
   note:"初戀三部曲第二章：煩惱。主打〈뭣 같아〉拿下 BND 人生第一個音樂節目一位！🥇",
   mv:[["97_-_WugRFA","뭣 같아 (But Sometimes)","2023.09.04"]]},
  {k:"how", t:"HOW?", type:"2nd EP", d:"2024.04.15", cls:"a-how", lab:"#e8643c", line:"〈Earth, Wind &amp; Fire〉",
   note:"初戀三部曲完結篇，第一次拿下 Circle 專輯榜冠軍，主打也拿下音樂節目三冠 🔥",
   mv:[["u9nP3qXQA4o","Earth, Wind & Fire","2024.04.15"]]},
  {k:"1999", t:"19.99", type:"3rd EP", d:"2024.09.09", cls:"a-1999", lab:"#ff4d6d", line:"〈Nice Guy〉",
   note:"先行曲〈부모님 관람불가〉加上主打〈Nice Guy〉，復古又調皮的一張 📼",
   mv:[["YkCXVgcsGTU","부모님 관람불가 (Dangerous)","2024.09.02"],["HJlc_tFkB3M","Nice Guy","2024.09.09"]]},
  {k:"single", t:"오늘만 I LOVE YOU", type:"Digital Single", d:"2025.01.06", cls:"a-single", lab:"#ff4d8d", line:"數位單曲",
   note:"溫柔的抒情歌，拿下金唱片獎「數位音源本賞」💗",
   mv:[["B4mLKcVIERs","오늘만 I LOVE YOU","2025.01.06"]]},
  {k:"nogenre", t:"No Genre", type:"4th EP", d:"2025.05.13", cls:"a-nogenre", lab:"#06d6a0", line:"〈I Feel Good〉",
   note:"不被任何曲風限制！主打〈I Feel Good〉拿下音樂節目三冠 🌈",
   mv:[["ic31SJ4uK4Y","I Feel Good","2025.05.13"]]},
  {k:"action", t:"The Action", type:"5th EP", d:"2025.10.20", cls:"a-action", lab:"#f5c542", line:"〈Hollywood Action〉",
   note:"電影感滿滿的一張，主打〈Hollywood Action〉也拿下三冠 🎬",
   mv:[["yAtew9dZX_E","Hollywood Action","2025.10.20"]]},
  {k:"home", t:"HOME", type:"1st Album", star:"正規一輯 🏠", d:"2026.06.08", cls:"a-home", lab:"#e9a36b", line:"主打〈VIRAL〉<br>先行曲〈똑똑똑〉",
   note:"第一張正規專輯！先行曲〈똑똑똑〉、主打〈VIRAL〉，還有後續曲〈ADIOS!〉🏠",
   mv:[["WxGWMI2B7r8","똑똑똑","2026.05.11"],["zGsj0fDHB_s","VIRAL","2026.06.08"],["dTWxjbJZ238","ADIOS!","2026.06.23"]]},
  {k:"deluxe", t:"HOME: DELUXE", type:"Repackage", star:"改版 🐾", d:"2026.09.28", cls:"a-animal", lab:"#d9a25f", line:"主打〈ANIMAL〉",
   note:"正規一輯改版專輯，主打〈ANIMAL〉讓成員們像動物一樣跟著本能走 🐾",
   mv:[["WI4__7z_dJw","ANIMAL","2026.09.28"]]}
];
const shelf = $("shelf");
shelf.innerHTML = albums.map((a, i) => `
  <button class="album" data-i="${i}">
    ${a.star ? `<span class="star">${a.star}</span>` : ""}
    <div class="vinyl" style="--lab:${a.lab}"></div>
    <div class="sleeve ${a.cls}">
      <time>${a.d}</time><span class="no en">${String(i + 1).padStart(2, "0")}</span>
      <h3 class="${a.k === "1999" ? "" : "en"}" style="${a.t.length > 10 ? "font-size:1.15rem" : ""}">${a.t}</h3>
      <p>${a.type}<br>${a.line}</p>
    </div>
    <span class="mvcount">🎬 ${a.mv.length} 支 MV</span>
  </button>`).join("");
function selectAlbum(i){
  const a = albums[i];
  shelf.querySelectorAll(".album").forEach(el => el.classList.toggle("sel", +el.dataset.i === i));
  const panel = $("alPanel");
  panel.style.setProperty("--accent", a.lab);
  panel.style.animation = "none"; panel.offsetHeight; panel.style.animation = "";
  panel.innerHTML = `
    <div class="al-head"><h3 class="en">${a.t}</h3><span>${a.type} · ${a.d}</span></div>
    <p class="al-note">${a.note}</p>
    <div class="mv-grid">${a.mv.map(([id, t, d], j) => `
      <button class="mvc" data-id="${id}" data-t="${t}">
        <div class="thumb">${i === albums.length - 1 && j === 0 ? '<span class="mv-new">NEW</span>' : ''}<img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="${t}" loading="lazy"></div>
        <h4 class="en">${t}</h4><small>MV · ${d}</small>
      </button>`).join("")}</div>`;
  panel.querySelectorAll(".mvc").forEach(b => b.onclick = () => openMv(b.dataset.id, b.dataset.t));
}
shelf.querySelectorAll(".album").forEach(el => el.onclick = () => selectAlbum(+el.dataset.i));
$("shelfL").onclick = () => shelf.scrollBy({left:-420});
$("shelfR").onclick = () => shelf.scrollBy({left:420});
selectAlbum(albums.length - 1);
shelf.scrollLeft = shelf.scrollWidth;
function openMv(id, t){
  // 直接打開本機檔案（file://）時 YouTube 不允許內嵌，改成開新分頁
  if (location.protocol === "file:"){ window.open("https://www.youtube.com/watch?v=" + id, "_blank", "noopener"); return; }
  $("mvFrame").innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" title="${t}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  $("mvTitle").textContent = t;
  $("mvLink").href = "https://www.youtube.com/watch?v=" + id;
  $("mvModal").classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeMv(){ $("mvFrame").innerHTML = ""; $("mvModal").classList.remove("show"); document.body.style.overflow = ""; }
$("mvClose").onclick = closeMv;
$("mvModal").addEventListener("click", e => { if (e.target.id === "mvModal") closeMv(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && $("mvModal").classList.contains("show")) closeMv(); });

/* ================= 得獎紀錄 ================= */
const awards = {
  2026:[["Seoul Music Awards","本賞 Bonsang",1],["Seoul Music Awards","Best Album"],["Seoul Music Awards","World Best Artist"],["Seoul Music Awards","R&B Hip-hop Award"],
        ["Golden Disc Awards","數位音源本賞〈오늘만 I LOVE YOU〉",1],["音樂節目","〈VIRAL〉Music Bank 一位"],["音樂節目","〈ANIMAL〉M Countdown 一位"]],
  2025:[["KGMA","Grand Performer 大賞",1],["The Fact Music Awards","Artist of the Year 本賞",1],["MMA","Top 10 Artist"],["MMA","Best Male Group"],
        ["MAMA","Favorite Male Group"],["KGMA","Best Artist 10"],["音樂節目","〈I Feel Good〉三冠"],["音樂節目","〈Hollywood Action〉三冠"]],
  2024:[["MAMA","Favorite Dance Performance"],["MMA","Best Performance – Male"],["Circle Chart","〈HOW?〉首次專輯榜一位"],["音樂節目","〈Earth, Wind & Fire〉三冠"],["音樂節目","〈Nice Guy〉人氣歌謠一位"]],
  2023:[["音樂節目","〈뭣 같아〉The Show 首次一位！",1],["MMA","Global Rising Artist"],["AAA","Best Choice"],["The Fact Music Awards","Global Hottest"],["K-Global Heart Dream","Super Rookie"]]
};
$("awYears").innerHTML = Object.keys(awards).sort((a, b) => b - a).map(y => `
  <div class="aw-year"><b class="en">${y}</b>
    <div class="aw-list">${awards[y].map(([s, n, top]) => `<div class="aw ${top ? "top" : ""}"><small>${s}</small><b>${top ? "🏆 " : ""}${n}</b></div>`).join("")}</div>
  </div>`).join("");

/* ================= 手燈 ================= */
const stage = $("stage");
for (let i = 0; i < 18; i++){
  const c = document.createElement("span");
  c.className = "crowd";
  c.style.left = (i * 5.8 + 1) + "%";
  c.style.setProperty("--d", (i * .08) + "s");
  c.style.height = (28 + (i % 3) * 8) + "px";
  stage.appendChild(c);
}
const lightColors = {white:"#ffffff", blue:"#7cc4ff", rainbow:"#ff7aa2", blink:"#bfe3ff", wave:"#9fd0ff"};
let lsMode = "off";
function setLight(m){
  lsMode = m;
  stage.className = "stage" + (m === "off" ? "" : " lit " + m);
  stage.style.setProperty("--lc", lightColors[m] || "#fff");
  $("glowEdge").setAttribute("stop-color", lightColors[m] || "#cfe6ff");
  $("modes").querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.m === m));
}
$("modes").querySelectorAll("button").forEach(b => b.onclick = () => setLight(b.dataset.m));
$("power").addEventListener("click", () => setLight(lsMode === "off" ? "blue" : "off"));

/* ================= 應援口號 ================= */
const chant = ["성호!","리우!","명재현!","태산!","이한!","운학!","보이넥스트도어!"];
$("chantLine").innerHTML = chant.map((c, i) => `<span class="${i === chant.length - 1 ? "last" : ""}">${c}</span>`).join("");
$("chantBtn").onclick = () => {
  const spans = $("chantLine").querySelectorAll("span");
  $("chantBtn").disabled = true;
  spans.forEach((s, i) => {
    setTimeout(() => { s.classList.add("hit"); setTimeout(() => s.classList.remove("hit"), 420); }, i * 550);
  });
  setTimeout(() => { $("chantBtn").disabled = false; confetti(); }, chant.length * 550);
};
