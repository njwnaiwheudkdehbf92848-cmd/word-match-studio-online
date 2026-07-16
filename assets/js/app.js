const PACKS={"3—6岁 启蒙": [["apple", "苹果", "🍎"], ["banana", "香蕉", "🍌"], ["orange", "橙子", "🍊"], ["grape", "葡萄", "🍇"], ["cat", "猫", "🐱"], ["dog", "狗", "🐶"], ["rabbit", "兔子", "🐰"], ["panda", "熊猫", "🐼"], ["sun", "太阳", "☀️"], ["moon", "月亮", "🌙"], ["star", "星星", "⭐"], ["fish", "鱼", "🐟"], ["bird", "鸟", "🐦"], ["book", "书", "📘"], ["ball", "球", "⚽"], ["car", "汽车", "🚗"]], "7—9岁 基础": [["school", "学校", "🏫"], ["teacher", "老师", "🧑‍🏫"], ["student", "学生", "🧒"], ["family", "家庭", "👨‍👩‍👧"], ["friend", "朋友", "🤝"], ["breakfast", "早餐", "🥣"], ["lunch", "午餐", "🍱"], ["dinner", "晚餐", "🍽️"], ["happy", "开心的", "😊"], ["sad", "难过的", "😢"], ["run", "跑", "🏃"], ["jump", "跳", "🤸"], ["read", "阅读", "📖"], ["write", "写", "✍️"], ["water", "水", "💧"], ["house", "房子", "🏠"]], "10—12岁 进阶": [["important", "重要的", "❗"], ["different", "不同的", "🔀"], ["because", "因为", "🧩"], ["usually", "通常", "🔁"], ["weather", "天气", "🌦️"], ["season", "季节", "🍂"], ["country", "国家", "🗺️"], ["language", "语言", "💬"], ["question", "问题", "❓"], ["answer", "答案", "✅"], ["remember", "记住", "🧠"], ["practice", "练习", "🎯"], ["healthy", "健康的", "💪"], ["future", "未来", "🚀"], ["travel", "旅行", "🧳"], ["science", "科学", "🔬"]], "13—15岁 初中": [["achieve", "实现", "🏁"], ["improve", "提高", "📈"], ["environment", "环境", "🌍"], ["experience", "经历", "🧭"], ["decision", "决定", "⚖️"], ["possible", "可能的", "🔓"], ["communicate", "交流", "🗣️"], ["knowledge", "知识", "📚"], ["challenge", "挑战", "⛰️"], ["successful", "成功的", "🏆"], ["protect", "保护", "🛡️"], ["create", "创造", "🎨"], ["develop", "发展", "🌱"], ["compare", "比较", "⚖️"], ["describe", "描述", "📝"], ["include", "包括", "📦"]]};
const BUILTIN_BOOK={"id": "builtin-grade6-v1", "name": "六年级上册_内置词库.xlsx", "sheets": [{"name": "Unit 1", "words": [["was", "（be的过去式）"], ["climb", "攀登；爬"], ["kilometre", "千米；公里"], ["gingerbreadhouse", "姜饼屋"], ["send", "邮寄；发送"], ["go", "去；走"], ["thousand", "一千"], ["clay", "黏土；陶土"], ["see", "看见"], ["village", "村庄；村镇"], ["eat", "吃"], ["dry", "干的"], ["take", "做（某个动作）"], ["view", "景色"], ["inspiring", "鼓舞人心的"], ["bamboo", "竹；竹子"], ["pumpkin", "南瓜"], ["restaurant", "餐馆；餐厅"], ["airport", "机场"], ["NewZealand", "新西兰"], ["Paris", "巴黎"], ["EiffelTower", "埃菲尔铁塔"], ["TerracottaWarriors", "兵马俑"]]}, {"name": "Unit 2", "words": [["paste", "粘贴"], ["dress", "穿衣服"], ["gala", "演出；庆典"], ["countdown", "倒计时"], ["marathon", "马拉松赛跑"], ["as", "作为"], ["race", "赛跑；速度竞赛"], ["run", "跑"], ["cheer", "欢呼；加油"], ["bookfair", "书市"], ["writer", "作家；作者"], ["read", "阅读"], ["make", "做；使出现"], ["sing", "唱（歌）"], ["wear", "穿；戴"], ["yesterday", "昨天"], ["notice", "通知"], ["wake", "醒；醒来"], ["later", "随后；后来"], ["judge", "裁判"], ["begin", "开始"], ["win", "获胜"], ["winner", "获胜者"], ["ever", "以往任何时候"], ["exciting", "令人激动的"]]}, {"name": "Unit 3", "words": [["cold", "感冒"], ["ill", "不舒服；有病"], ["head", "头；头部"], ["runnynose", "流鼻涕"], ["soon", "很快；马上"], ["fever", "发烧；发热"], ["cough", "咳嗽"], ["discuss", "讨论；商量"], ["diet", "日常饮食"], ["stayup", "熬夜"], ["cry", "哭；哭泣"], ["another", "另一；不同的"], ["call", "（给…）打电话"], ["email", "电子邮件"], ["unhappy", "不快乐的；难过的"], ["glass", "一杯（的）；玻璃"], ["may", "也许；可能"], ["add", "补充说；增加"], ["video", "视频；录像"], ["better", "舒服些的；好转的"]]}, {"name": "Unit 4", "words": [["money", "钱"], ["pocketmoney", "零花钱"], ["schoolbag", "书包"], ["goods", "商品"], ["drink", "饮料"], ["service", "服务"], ["haircut", "理发；发型"], ["microscope", "显微镜"], ["lucky", "幸运的"], ["saveup", "攒钱"], ["sale", "特价销售；出售"], ["ticket", "票"], ["manage", "管理"], ["difficult", "困难的"], ["sell", "出售；售卖"], ["jar", "罐子"], ["half", "一半"], ["forexample", "例如"]]}, {"name": "Unit 5", "words": [["planet", "行星"], ["earth", "(also Earth) 地球"], ["sky", "天；天空"], ["daytime", "白天"], ["cloud", "云"], ["moon", "月球；月亮；卫星"], ["star", "恒星；星"], ["space", "太空；空间"], ["outerspace", "外层空间；外太空"], ["spacestation", "空间站"], ["ocean", "大海；海洋"], ["marble", "（玻璃）弹子"], ["satellite", "人造卫星"], ["soil", "土壤"], ["alien", "外星生物"], ["sunrise", "日出"], ["rover", "探测器"], ["into", "朝；进入"], ["telescope", "望远镜"], ["astronaut", "宇航员；航天员"], ["spaceship", "宇宙飞船"], ["month", "月；月份"], ["Mars", "火星"], ["taikonaut", "中国航天员"], ["cloth", "（一块）布；织物"], ["toothpaste", "牙膏"], ["question", "问题"], ["sunset", "日落"], ["time", "次；回"]]}, {"name": "Unit 6", "words": [["power", "能；能量"], ["electricity", "电"], ["solar", "太阳的"], ["type", "类型；种类"], ["energy", "能源"], ["source", "来源"], ["light", "照亮"], ["heat", "加热；（使）变暖；热量"], ["cool", "（使）变凉，冷却"], ["run", "使运行"], ["resource", "资源"], ["runout", "用完"], ["few", "（比较级）不多；很少"], ["change", "（使）不同；改变"], ["quick", "迅速的；快的"], ["shower", "淋浴"], ["unplug", "拔掉…的电源插头"], ["difference", "差别；不同"], ["reduce", "减少"], ["airconditioner", "空调机"], ["drive", "驾驶；开车"], ["reuse", "重复使用"], ["own", "自己的"], ["market", "集市；市场"], ["bottle", "瓶子"], ["top", "最高的"], ["useful", "有用的；有益的"], ["dirty", "脏的"], ["side", "一面；一边"]]}]};

const $=s=>document.querySelector(s),$$=s=>Array.prototype.slice.call(document.querySelectorAll(s));
window.requestAnimationFrame=window.requestAnimationFrame||function(cb){return setTimeout(cb,16)};
const store={
  get(k,d){try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v)}catch{return d}},
  set(k,v){localStorage.setItem(k,JSON.stringify(v))}
};

class PairEngine{
  constructor(){this.reset([])}
  reset(cards){this.cards=cards;this.selected=null;this.matched=new Set();this.locked=false}
  choose(id){
    if(this.locked||this.matched.has(id))return{type:"ignored"};
    const c=this.cards.find(x=>x.id===id);if(!c)return{type:"ignored"};
    if(this.selected===null){this.selected=id;return{type:"selected",card:c}}
    if(this.selected===id){this.selected=null;return{type:"deselected",card:c}}
    const a=this.cards.find(x=>x.id===this.selected);this.selected=null;
    if(a&&a.pairId===c.pairId&&a.side!==c.side){
      this.matched.add(a.id);this.matched.add(c.id);return{type:"match",first:a,second:c}
    }
    return{type:"mismatch",first:a,second:c}
  }
}

const engine=new PairEngine();
let mode="image",game={},timer=null,startAt=0;
let systemVoices=[],rankedVoices=[],selectedVoice=null,praiseVoice=null,voiceReady=false,speechRequestId=0,voiceTestTimer=null;
const instantFx={
  success:new Audio("assets/audio/success.mp3"),
  wrong:new Audio("assets/audio/wrong.mp3"),
  complete:new Audio("assets/audio/complete.mp3")
};
Object.values(instantFx).forEach(a=>{a.preload="auto";a.load()});
const COMBO_FEEDBACK=[
  null,
  {text:"NICE START!",speech:"Nice start!",icon:"🌱",theme:"reward-seed",notes:[523.25,659.25]},
  {text:"LEARNING ON!",speech:"Learning on!",icon:"✨",theme:"reward-flow",notes:[587.33,739.99]},
  {text:"BRIGHT MIND!",speech:"Bright mind!",icon:"💡",theme:"reward-mind",notes:[659.25,783.99,987.77]},
  {text:"WORD EXPLORER!",speech:"Word explorer!",icon:"📚",theme:"reward-book",notes:[698.46,880,1046.5]},
  {text:"VOCABULARY STAR!",speech:"Vocabulary star!",icon:"🌟",theme:"reward-star",notes:[783.99,987.77,1174.66]},
  {text:"WORD ROCKET!",speech:"Word rocket!",icon:"🚀",theme:"reward-rocket",notes:[880,1046.5,1318.51]},
  {text:"LEARNING CHAMPION!",speech:"Learning champion!",icon:"🏆",theme:"reward-champion",notes:[987.77,1174.66,1396.91]},
  {text:"WORD MASTER!",speech:"Word master!",icon:"👑",theme:"reward-master",notes:[1046.5,1318.51,1567.98]},
  {text:"AMAZING JOURNEY!",speech:"Amazing journey!",icon:"🌈",theme:"reward-rainbow",notes:[1174.66,1396.91,1760]},
  {text:"ENGLISH SUPERSTAR!",speech:"English superstar!",icon:"⭐",theme:"reward-superstar",notes:[1318.51,1567.98,1975.53]}
];


function applyClassroomMode(enabled){
  const active=Boolean(enabled);
  document.body.classList.toggle("classroom-mode",active);
  const btn=$("#classroomBtn");
  if(btn){
    btn.setAttribute("aria-pressed",String(active));
    btn.textContent=active?"退出课堂":"课堂模式";
  }
  store.set("classroomMode",active);
  setTimeout(()=>{if(typeof fitAllCardContents==="function")fitAllCardContents()},80);
}

function toggleClassroomMode(){
  applyClassroomMode(!document.body.classList.contains("classroom-mode"));
  toast(document.body.classList.contains("classroom-mode")?"已进入课堂模式（F9退出）":"已退出课堂模式");
}

function toggleMobileStudy(open){
  document.body.classList.toggle("mobile-study-open",Boolean(open));
}
function isCompactScreen(){return window.matchMedia("(max-width: 820px)").matches}
window.addEventListener("resize",()=>{if(!isCompactScreen())toggleMobileStudy(false)});
function init(){
  Object.keys(PACKS).forEach(k=>$("#level").add(new Option(k,k)));
  bind();initSpeechEngine();restore();refreshUnitUI();startGame();
}
function bind(){
  $$(".segmented button").forEach(b=>b.onclick=()=>{
    if($("#source").value==="custom"&&b.dataset.mode==="image"){toast("导入词库固定使用英文—中文模式");return}
    setMode(b.dataset.mode);startGame();
  });
  $("#importBtn").onclick=()=>{$("#excelInput").value="";$("#excelInput").click()};
  $("#excelInput").onchange=handleExcel;
  $("#source").onchange=()=>{if($("#source").value==="custom")setMode("cn");refreshUnitUI();startGame()};
  $("#unitSelect").onchange=()=>{store.set("selectedUnit",$("#unitSelect").value);startGame()};
  $("#level").onchange=startGame;$("#pairCount").onchange=startGame;$("#newGameBtn").onclick=startGame;
  $("#theme").onchange=e=>applyTheme(e.target.value);
  $("#soundBtn").onclick=()=>openDialog("soundDialog");$("#statsBtn").onclick=showStats;
  $("#wordbookBtn").onclick=showWordbook;
  $("#growthBtn").onclick=showGrowth;
  $("#mobileStudyBtn").onclick=()=>toggleMobileStudy(true);
  $("#closeStudyBtn").onclick=()=>toggleMobileStudy(false);
  $("#mobileStudyBackdrop").onclick=()=>toggleMobileStudy(false);
  $("#classroomBtn").onclick=toggleClassroomMode;
  document.addEventListener("keydown",e=>{if(e.key==="F9"){e.preventDefault();toggleClassroomMode()}});
  $("#wordbookSearch").oninput=renderWordbook;
  $("#wordbookFilter").onchange=renderWordbook;
  $("#resetUnitBtn").onclick=resetCurrentCoverage;$("#resetCycleBtn").onclick=()=>{closeDialog("resultDialog");resetCurrentCoverage()};
  $$("[data-close]").forEach(b=>b.onclick=()=>closeDialog(b.dataset.close));
  $("#againBtn").onclick=()=>{closeDialog("resultDialog");startGame()};
  ["wordSound","successSound","wrongSound"].forEach(id=>{
    $("#"+id).checked=store.get(id,true);
    $("#"+id).onchange=e=>store.set(id,e.target.checked)
  });
  $("#voiceStrategy").value=store.get("voiceStrategy","auto");
  $("#voiceStrategy").onchange=e=>{store.set("voiceStrategy",e.target.value);populateVoiceList(true)};
  $("#voiceSelect").onchange=e=>selectVoice(e.target.value);
  $("#praiseVoiceSelect").onchange=e=>selectPraiseVoice(e.target.value);
  $("#autoVoiceBtn").onclick=()=>{store.set("voiceURI","");populateVoiceList(true);toast("已重新选择最佳英文语音")};
  $("#testAllVoicesBtn").onclick=testTopVoices;
  $("#voiceRate").value=store.get("voiceRate",0.90);
  $("#voiceRateText").textContent=Number($("#voiceRate").value).toFixed(2);
  $("#voiceRate").oninput=e=>{$("#voiceRateText").textContent=Number(e.target.value).toFixed(2);store.set("voiceRate",Number(e.target.value))};
  $("#testVoiceBtn").onclick=()=>speakTeacher("Apple, teacher, welcome to Word Match Studio.","test",true,selectedVoice);
  $("#testPraiseVoiceBtn").onclick=()=>speakTeacher("Fantastic! Keep going!","praise",true,praiseVoice);
}
function restore(){
  applyTheme(store.get("theme","simple"));
  applyClassroomMode(store.get("classroomMode",false));
  $("#best").textContent=store.get("best",0);
  let book=store.get("customBook",null);
  if(!book||!book.sheets?.length){store.set("customBook",BUILTIN_BOOK);store.set("selectedUnit",BUILTIN_BOOK.sheets[0]?.name||"__ALL__");book=BUILTIN_BOOK;}
  if(book&&book.sheets?.length){
    const opt=$("#source option[value=custom]");opt.disabled=false;opt.textContent=book.name||"已导入词库";
  }
  updateToday();
}
function setMode(m){mode=m;$$(".segmented button").forEach(x=>x.classList.toggle("active",x.dataset.mode===m))}
function applyTheme(t){
  const migration={city:"simple",space:"dream"};
  t=migration[t]||t;
  if(!["simple","magic","dream"].includes(t))t="simple";
  document.body.className="theme-"+t;
  $("#theme").value=t;
  store.set("theme",t);
  $("#logo").textContent=t==="magic"?"✦":t==="dream"?"◇":"W";
}

function refreshUnitUI(){
  const custom=$("#source").value==="custom";
  $("#unitField").hidden=!custom;$("#levelField").hidden=custom;
  const sel=$("#unitSelect");sel.innerHTML="";
  if(!custom)return;
  const book=store.get("customBook",null);if(!book)return;
  sel.add(new Option("全部单元","__ALL__"));
  book.sheets.forEach(s=>sel.add(new Option(`${s.name}（${s.words.length}词）`,s.name)));
  const saved=store.get("selectedUnit",book.sheets[0]?.name||"__ALL__");
  sel.value=[...sel.options].some(o=>o.value===saved)?saved:(book.sheets[0]?.name||"__ALL__");
  store.set("selectedUnit",sel.value);
}

function selectedEntries(){
  const source=$("#source").value;
  if(source==="default"){
    return PACKS[$("#level").value].map((x,i)=>({word:x[0],cn:x[1],pic:x[2],unit:$("#level").value,key:`default::${$("#level").value}::${i}::${x[0].toLowerCase()}`}));
  }
  if(source==="wrong"){
    return store.get("wrongWords",[]).map((x,i)=>({word:x[0],cn:x[1],pic:x[2]||"",unit:"错词强化",key:`wrong::${i}::${String(x[0]).toLowerCase()}`}));
  }
  const book=store.get("customBook",null);if(!book)return[];
  const unit=$("#unitSelect").value||book.sheets[0]?.name;
  const sheets=unit==="__ALL__"?book.sheets:book.sheets.filter(s=>s.name===unit);
  return sheets.flatMap(s=>s.words.map((x,i)=>({word:x[0],cn:x[1],pic:"",unit:s.name,key:`${book.id}::${s.name}::${i}::${String(x[0]).toLowerCase()}`})));
}
function coverageId(){
  const source=$("#source").value;
  if(source==="custom"){
    const book=store.get("customBook",null);return book?`${book.id}::${$("#unitSelect").value}`:"custom:none";
  }
  return `${source}::${source==="default"?$("#level").value:"all"}`;
}
function getCoverage(entries){
  const all=store.get("coverage",{}),id=coverageId();
  let c=all[id];
  if(!c||!Array.isArray(c.seen))c={seen:[],cycle:1};
  const valid=new Set(entries.map(x=>x.key));
  c.seen=c.seen.filter(k=>valid.has(k));
  return c;
}
function saveCoverage(c){const all=store.get("coverage",{});all[coverageId()]=c;store.set("coverage",all)}
function nextRoundEntries(entries,count){
  const c=getCoverage(entries),seen=new Set(c.seen);
  let remaining=entries.filter(x=>!seen.has(x.key));
  let round=[];
  if(remaining.length){
    round=remaining.slice(0,Math.min(count,remaining.length));
  }else{
    // After full coverage, review weak/wrong words first, then shuffled unit words.
    const wrongSet=new Set(store.get("wrongWords",[]).map(x=>String(x[0]).toLowerCase()));
    const prioritized=[...entries].sort((a,b)=>(wrongSet.has(b.word.toLowerCase())?1:0)-(wrongSet.has(a.word.toLowerCase())?1:0));
    round=shuffle(prioritized).slice(0,Math.min(count,entries.length));
  }
  return{round,coverage:c,remainingBefore:remaining.length};
}
function markRoundCovered(words){
  const entries=selectedEntries(),c=getCoverage(entries),seen=new Set(c.seen);
  words.forEach(w=>seen.add(w.key));c.seen=[...seen];saveCoverage(c);updateCoverageUI(entries,c);
}
function updateCoverageUI(entries=getCurrentEntries(),c=getCoverage(entries)){
  const total=entries.length,done=Math.min(c.seen.length,total),pct=total?done/total*100:0;
  $("#coverageText").textContent=`单元覆盖：${done} / ${total} · 第 ${c.cycle||1} 轮`;
  $("#coverageBar").style.width=pct+"%";
  $("#resetUnitBtn").hidden=done===0;
}
function getCurrentEntries(){return selectedEntries().filter(x=>x.word&&x.cn&&(mode==="cn"||x.pic))}

function startGame(){
  toggleMobileStudy(false);
  clearInterval(timer);engine.locked=false;
  if($("#source").value==="custom")setMode("cn");
  let entries=getCurrentEntries();
  if(entries.length<2){toast("当前单元词汇不足，请选择其他单元或重新导入");return}
  const requested=+$("#pairCount").value;
  const {round}=nextRoundEntries(entries,requested);
  const words=round.map((x,i)=>({...x,pairId:i}));
  const cards=[];
  words.forEach(w=>{
    cards.push({id:"w"+w.pairId,pairId:w.pairId,side:"word",kind:"word",text:w.word,word:w});
    cards.push({id:"m"+w.pairId,pairId:w.pairId,side:"meaning",kind:mode,text:mode==="image"?w.pic:w.cn,word:w});
  });
  shuffle(cards);engine.reset(cards);
  game={words,pairs:words.length,matched:0,score:0,combo:0,moves:0,correct:0};
  renderBoard();renderStudy();updateStats();updateCoverageUI(entries);
  startAt=Date.now();$("#time").textContent=0;
  timer=setInterval(()=>$("#time").textContent=Math.floor((Date.now()-startAt)/1000),500);
  const source=$("#source").value;
  $("#currentPack").textContent=source==="custom"
    ? `${store.get("customBook",{}).name||"已导入词库"} · ${$("#unitSelect").selectedOptions[0]?.text||""}`
    : $("#source option:checked").textContent;
  if($("#unitSummary")){
    const unitText=source==="custom"?($("#unitSelect").selectedOptions[0]?.text||"当前单元"):($("#level").value||"默认词库");
    $("#unitSummary").textContent=unitText;
  }
}
function renderBoard(){
  const b=$("#board"),cards=engine.cards,n=cards.length;
  const cols=n<=16?4:n<=20?5:6,rows=Math.ceil(n/cols);
  b.innerHTML="";
  b.style.gridTemplateColumns=`repeat(${cols},minmax(0,1fr))`;
  b.style.gridTemplateRows=`repeat(${rows},minmax(0,1fr))`;

  cards.forEach(c=>{
    const el=document.createElement("button");
    el.className="card";
    el.dataset.id=c.id;
    el.title=String(c.text||"");

    if(c.kind==="image"){
      const value=String(c.text||"");
      const isImage=/^(data:image\/|blob:|https?:\/\/|\.{0,2}\/)/i.test(value) ||
                    /\.(png|jpe?g|gif|webp|svg)$/i.test(value);
      el.innerHTML=isImage
        ? `<span class="picture picture-file"><img src="${esc(value)}" alt="${esc(c.word.word)}"></span>`
        : `<span class="picture">${esc(value)}</span>`;
    }else if(c.kind==="cn"){
      el.innerHTML=`<span class="meaning">${esc(c.text)}</span>`;
    }else{
      el.innerHTML=`<span class="word">${esc(c.text)}</span>`;
    }

    if(c.kind==="word"){
      el.addEventListener("pointerdown",()=>{if($("#wordSound").checked)playWord(c.word.word)},{passive:true});
    }
    el.onclick=()=>clickCard(c.id);
    b.appendChild(el);
  });

  requestAnimationFrame(fitAllCardContents);
}

function fitAllCardContents(){
  $$("#board .card").forEach(card=>fitCardContent(card));
}

function fitCardContent(card){
  const content=card.querySelector(".word,.meaning,.picture");
  if(!content)return;

  if(content.classList.contains("picture-file")){
    const img=content.querySelector("img");
    if(img){
      img.style.maxWidth="100%";
      img.style.maxHeight="100%";
      img.style.objectFit="contain";
    }
    return;
  }

  const type=content.classList.contains("word")
    ?"word"
    :content.classList.contains("meaning")
      ?"meaning"
      :"picture";

  const text=(content.textContent||"").trim();
  const cardWidth=Math.max(70,card.clientWidth-24);
  const cardHeight=Math.max(46,card.clientHeight-22);

  let maxSize;
  let minSize;
  if(type==="picture"){
    maxSize=Math.min(82,cardHeight*.62,cardWidth*.48);
    minSize=28;
  }else if(type==="word"){
    const length=[...text].length;
    maxSize=length<=5?40:length<=8?35:length<=12?30:length<=18?25:21;
    maxSize=Math.min(maxSize,cardHeight*.42);
    minSize=13;
  }else{
    const length=[...text].length;
    maxSize=length<=4?31:length<=10?27:length<=20?23:length<=35?19:16;
    maxSize=Math.min(maxSize,cardHeight*.36);
    minSize=12;
  }

  content.style.fontSize=`${Math.max(minSize,maxSize)}px`;
  content.style.lineHeight=type==="meaning"?"1.28":"1.12";
  content.style.maxWidth="100%";
  content.style.maxHeight="100%";

  let size=parseFloat(content.style.fontSize);
  let guard=80;
  while(
    guard-- > 0 &&
    size>minSize &&
    (content.scrollWidth>cardWidth+1 || content.scrollHeight>cardHeight+1)
  ){
    size-=1;
    content.style.fontSize=`${size}px`;
  }

  if(type==="meaning"){
    content.style.overflowWrap="anywhere";
    content.style.wordBreak="break-word";
  }
}

let cardFitResizeTimer=null;
window.addEventListener("resize",()=>{
  clearTimeout(cardFitResizeTimer);
  cardFitResizeTimer=setTimeout(fitAllCardContents,90);
});

function clickCard(id){
  const out=engine.choose(id),el=cardEl(id);if(out.type==="ignored")return;
  if(out.type==="selected"){clearSelected();el.classList.add("selected");return}
  if(out.type==="deselected"){el.classList.remove("selected");return}
  clearSelected();game.moves++;
  if(out.type==="match"){
    game.correct++;game.matched++;game.combo++;game.score+=100+game.combo*10;
    const a=cardEl(out.first.id),b=cardEl(out.second.id);a.classList.add("matched");b.classList.add("matched");
    playSuccess(game.combo);showReward(game.combo);
    setTimeout(()=>{a.classList.add("hidden");b.classList.add("hidden")},430);
    updateStats();if(game.matched===game.pairs)setTimeout(finishGame,520);
  }else{
    game.combo=0;addWrong(out.first.word);addWrong(out.second.word);playWrong();engine.locked=true;
    const a=cardEl(out.first.id),b=cardEl(out.second.id);a.classList.add("wrong");b.classList.add("wrong");
    setTimeout(()=>{a.classList.remove("wrong");b.classList.remove("wrong");engine.locked=false},380);updateStats();
  }
}
function clearSelected(){$$(".card.selected").forEach(x=>x.classList.remove("selected"))}
function cardEl(id){return document.querySelector(`[data-id="${id}"]`)}
function renderStudy(){
  if($("#roundCount"))$("#roundCount").textContent=game.words.length;
  $("#studyList").innerHTML=game.words.map(w=>`<div class="study-item"><div><b>${esc(w.word)}</b><span>${esc(w.cn)}${$("#source").value==="custom"?` · ${esc(w.unit)}`:""}</span></div><button class="speaker" data-word="${esc(w.word)}">🔊</button></div>`).join("");
  $$("[data-word]").forEach(b=>b.onclick=()=>playWord(b.dataset.word));
}
function updateStats(){
  $("#done").textContent=`${game.matched}/${game.pairs}`;$("#combo").textContent=game.combo;$("#score").textContent=game.score;$("#moves").textContent=game.moves;
  $("#accuracy").textContent=(game.moves?Math.round(game.correct/game.moves*100):100)+"%";$("#progressBar").style.width=(game.matched/game.pairs*100)+"%";
}
function finishGame(){
  clearInterval(timer);
  const sec=Math.floor((Date.now()-startAt)/1000),acc=game.moves?Math.round(game.correct/game.moves*100):100,best=Math.max(store.get("best",0),game.score);
  store.set("best",best);$("#best").textContent=best;playComplete();recordSession(game.pairs,acc);markRoundCovered(game.words);
  const entries=getCurrentEntries(),c=getCoverage(entries),complete=c.seen.length>=entries.length;
  $("#resultTitle").textContent=complete?"本单元第一轮已全部覆盖":"本局完成";
  $("#resultText").innerHTML=complete
    ? `已覆盖 <b>${entries.length} / ${entries.length}</b> 个词。正确率 <b>${acc}%</b>。接下来将优先复习错词和薄弱词。`
    : `完成 <b>${game.pairs}</b> 个词，本单元已覆盖 <b>${c.seen.length} / ${entries.length}</b>，正确率 <b>${acc}%</b>，用时 <b>${sec}</b> 秒。`;
  $("#resetCycleBtn").hidden=!complete;$("#againBtn").textContent=complete?"开始强化复习":"继续下一局";
  openDialog("resultDialog");
}
function resetCurrentCoverage(){
  const all=store.get("coverage",{}),id=coverageId(),old=all[id]||{cycle:1};
  all[id]={seen:[],cycle:(old.cycle||1)+1};store.set("coverage",all);
  closeDialog("resultDialog");toast("已开始新一轮全词练习");startGame();
}
function addWrong(w){
  let a=store.get("wrongWords",[]);if(!a.some(x=>String(x[0]).toLowerCase()===w.word.toLowerCase())){a.push([w.word,w.cn,w.pic||""]);store.set("wrongWords",a)}
}
function initSpeechEngine(){
  if (!("speechSynthesis" in window)) {
    $("#voiceStatus").textContent="当前浏览器不支持系统语音，请使用最新版 Microsoft Edge 或 Chrome。";
    $("#voiceSelect").disabled=true;return;
  }
  const loadVoices=()=>{
    const all=window.speechSynthesis.getVoices();
    systemVoices=all.filter(v=>/^en([-_]|$)/i.test(v.lang));
    populateVoiceList(false);
  };
  loadVoices();
  window.speechSynthesis.onvoiceschanged=loadVoices;
  document.addEventListener("pointerdown",()=>{
    try{window.speechSynthesis.resume();window.speechSynthesis.getVoices()}catch{}
  },{once:true,capture:true});
}
function voiceMeta(v){
  const n=(v.name||"").toLowerCase(),lang=(v.lang||"").toLowerCase();
  const natural=/natural|online|neural|aria|jenny|sonia|guy|ryan|libby|michelle|william|natasha|andrew|ava|emma|brian/i.test(n);
  const female=/aria|jenny|sonia|libby|michelle|natasha|ava|emma|zira|hazel|susan|samantha|victoria|karen|moira|tessa|fiona|female|woman/i.test(n);
  const male=/guy|ryan|william|andrew|brian|david|mark|george|male|man/i.test(n);
  const microsoft=n.includes("microsoft");
  const local=v.localService!==false;
  let score=0;
  if(natural)score+=145;
  if(female)score+=90;
  if(male)score-=45;
  if(microsoft)score+=45;
  if(/^en-us/.test(lang))score+=35; else if(/^en-gb/.test(lang))score+=32; else if(/^en-au/.test(lang))score+=24;
  if(local)score+=35;
  if(/zira|david|mark|hazel|george|susan/.test(n))score+=22;
  if(/google us english|google uk english/.test(n))score+=20;
  if(/espeak|festival/.test(n))score-=150;
  const stars=natural?5:(microsoft&&local?4:(local?3:4));
  return{natural,female,male,microsoft,local,score,stars};
}
function filterVoicesByStrategy(voices,strategy){
  if(strategy==="local")return voices.filter(v=>voiceMeta(v).local);
  if(strategy==="natural"){
    const natural=voices.filter(v=>voiceMeta(v).natural);
    return natural.length?natural:voices;
  }
  return voices;
}
function populateVoiceList(forceAuto=false){
  const select=$("#voiceSelect");
  if(!select)return;
  const strategy=store.get("voiceStrategy","auto");
  rankedVoices=filterVoicesByStrategy(systemVoices,strategy).slice().sort((a,b)=>voiceMeta(b).score-voiceMeta(a).score||a.name.localeCompare(b.name));
  select.innerHTML="";
  if(!rankedVoices.length){
    select.add(new Option("未检测到符合条件的英文语音",""));select.disabled=true;
    $("#voiceStatus").textContent=strategy==="local"?"未检测到英文离线语音，请在 Windows 设置中安装 English 语音包。":"未检测到英文语音。";
    selectedVoice=null;voiceReady=false;return;
  }
  const localGroup=document.createElement("optgroup");localGroup.label="● 本地离线语音";
  const cloudGroup=document.createElement("optgroup");cloudGroup.label="☁ 高质量语音（可能需要联网）";
  rankedVoices.forEach(v=>{
    const m=voiceMeta(v),stars="★".repeat(m.stars)+"☆".repeat(5-m.stars);
    const gender=m.female?" · 女声优先":(m.male?" · 男声":"");
    const option=new Option(`${stars} ${v.name} · ${v.lang}${gender}`,v.voiceURI);
    (m.local?localGroup:cloudGroup).appendChild(option);
  });
  if(localGroup.children.length)select.appendChild(localGroup);
  if(cloudGroup.children.length)select.appendChild(cloudGroup);
  const saved=forceAuto?"":store.get("voiceURI","");
  selectedVoice=rankedVoices.find(v=>v.voiceURI===saved)||chooseBestVoice(rankedVoices,strategy);
  select.value=selectedVoice.voiceURI;select.disabled=false;voiceReady=true;
  store.set("voiceURI",selectedVoice.voiceURI);
  populatePraiseVoiceList(forceAuto);
  updateVoiceStatus();
}
function populatePraiseVoiceList(forceAuto=false){
  const select=$("#praiseVoiceSelect");if(!select)return;
  const femaleVoices=rankedVoices.filter(v=>voiceMeta(v).female);
  const candidates=(femaleVoices.length?femaleVoices:rankedVoices).slice();
  select.innerHTML="";
  candidates.forEach(v=>{
    const m=voiceMeta(v),service=m.local?"● 离线":"☁ 可能联网";
    select.add(new Option(`${v.name} · ${v.lang} · ${service}`,v.voiceURI));
  });
  const saved=forceAuto?"":store.get("praiseVoiceURI","");
  praiseVoice=candidates.find(v=>v.voiceURI===saved)
    ||candidates.find(v=>v.voiceURI!==selectedVoice?.voiceURI)
    ||candidates[0]
    ||selectedVoice;
  if(praiseVoice){select.value=praiseVoice.voiceURI;select.disabled=false;store.set("praiseVoiceURI",praiseVoice.voiceURI)}
  else{select.add(new Option("使用教学女声",""));select.disabled=true}
}
function selectPraiseVoice(uri){
  praiseVoice=systemVoices.find(v=>v.voiceURI===uri)||praiseVoice||selectedVoice;
  if(praiseVoice){store.set("praiseVoiceURI",praiseVoice.voiceURI);updateVoiceStatus()}
}
function playInstantFx(type,volume=0.62){
  const a=instantFx[type];if(!a)return;
  try{a.pause();a.currentTime=0;a.volume=volume;const p=a.play();if(p)p.catch(()=>{})}catch{}
}
function chooseBestVoice(voices,strategy){
  if(strategy==="auto"&&!navigator.onLine){
    const local=voices.filter(v=>voiceMeta(v).local);if(local.length)return local[0];
  }
  return voices[0];
}
function selectVoice(uri){
  selectedVoice=systemVoices.find(v=>v.voiceURI===uri)||selectedVoice;
  if(selectedVoice){store.set("voiceURI",selectedVoice.voiceURI);updateVoiceStatus()}
}
function updateVoiceStatus(extra=""){
  if(!selectedVoice)return;
  const m=voiceMeta(selectedVoice),stars="★".repeat(m.stars)+"☆".repeat(5-m.stars);
  const service=m.local?"本地离线":"可能需要联网";
  const gender=m.female?"女老师优先":(m.male?"可能为男声":"性别未知");
  const praiseName=praiseVoice?.name||selectedVoice.name;
  $("#voiceStatus").textContent=`教学：${stars} ${selectedVoice.name} · ${service}｜激励：${praiseName}${extra?" · "+extra:""}`;
}
function playWord(word){speakTeacher(word,"word",false)}
function speakTeacher(text,role="word",isTest=false,voiceOverride=null){
  if(!("speechSynthesis" in window))return;
  const requestId=++speechRequestId;
  const voice=voiceOverride||((role==="praise"||role==="feedback"||role==="complete")?(praiseVoice||selectedVoice):(selectedVoice||praiseVoice))||rankedVoices[0]||null;
  try{
    window.speechSynthesis.cancel();window.speechSynthesis.resume();
    const u=new SpeechSynthesisUtterance(String(text));
    if(voice)u.voice=voice;
    u.lang=voice?.lang||"en-US";
    const baseRate=Number(store.get("voiceRate",0.90));
    u.rate=role==="word"?baseRate:(role==="praise"?Math.min(1.18,baseRate+0.20):Math.min(1.10,baseRate+0.13));
    u.pitch=role==="word"?1:(role==="praise"?1.16:1.08);u.volume=1;
    let started=false;
    u.onstart=()=>{started=true;if(isTest)updateVoiceStatus("正在试听")};
    u.onend=()=>{if(requestId===speechRequestId&&isTest)updateVoiceStatus()};
    u.onerror=()=>{
      if(requestId!==speechRequestId)return;
      const localFallback=rankedVoices.find(v=>voiceMeta(v).local&&v.voiceURI!==voice?.voiceURI);
      if(localFallback&&!voiceMeta(voice||{}).local){
        selectedVoice=localFallback;store.set("voiceURI",localFallback.voiceURI);$("#voiceSelect").value=localFallback.voiceURI;
        updateVoiceStatus("在线语音失败，已自动切换离线语音");speakTeacher(text,role,isTest,localFallback);
      }else toast("当前发音人播放失败，请在声音设置中更换");
    };
    window.speechSynthesis.speak(u);
    setTimeout(()=>{
      if(requestId===speechRequestId&&!started&&window.speechSynthesis.paused){try{window.speechSynthesis.resume()}catch{}}
    },120);
  }catch(err){console.warn("系统语音播放失败",err);toast("系统语音播放失败，请更换发音人")}
}
function testTopVoices(){
  clearTimeout(voiceTestTimer);window.speechSynthesis.cancel();
  const list=rankedVoices.slice(0,3);if(!list.length){toast("没有可试听的英文语音");return}
  let i=0;
  const next=()=>{
    if(i>=list.length){selectedVoice=list[0];$("#voiceSelect").value=selectedVoice.voiceURI;store.set("voiceURI",selectedVoice.voiceURI);updateVoiceStatus("已恢复排名第一的声音");return}
    const v=list[i++];selectedVoice=v;$("#voiceSelect").value=v.voiceURI;updateVoiceStatus(`试听 ${i}/${list.length}`);
    speakTeacher("Apple, teacher, wonderful learning!","test",true,v);
    voiceTestTimer=setTimeout(next,3100);
  };next();
}
const WRONG_PHRASES=["Try again.","Almost! Try once more.","Keep trying. You can do it.","Not quite. Have another go."];
const COMPLETE_PHRASES=["Congratulations! You finished all the words!","Fantastic learning today!","Excellent work! I am proud of you!"];
function pick(arr){return arr[Math.floor(Math.random()*arr.length)]}

let rewardAudioContext=null;
function getRewardAudioContext(){
  try{
    if(!rewardAudioContext)rewardAudioContext=new (window.AudioContext||window.webkitAudioContext)();
    if(rewardAudioContext.state==="suspended")rewardAudioContext.resume();
    return rewardAudioContext;
  }catch{return null}
}
function playRewardNote(freq,start,duration,gainValue=.035,type="sine"){
  const ac=getRewardAudioContext();if(!ac)return;
  const osc=ac.createOscillator(),gain=ac.createGain();
  osc.type=type;osc.frequency.setValueAtTime(freq,ac.currentTime+start);
  gain.gain.setValueAtTime(.001,ac.currentTime+start);
  gain.gain.exponentialRampToValueAtTime(gainValue,ac.currentTime+start+.018);
  gain.gain.exponentialRampToValueAtTime(.001,ac.currentTime+start+duration);
  osc.connect(gain);gain.connect(ac.destination);
  osc.start(ac.currentTime+start);osc.stop(ac.currentTime+start+duration+.02);
}
function playRewardTexture(feedback,combo){
  const notes=feedback.notes||[];
  notes.forEach((f,i)=>playRewardNote(f,i*.075,.18,.027+(combo*.0015),i===notes.length-1?"triangle":"sine"));
  if(combo>=5)playRewardNote(notes[0]/2,.02,.34,.018,"triangle");
  if(combo>=8)setTimeout(()=>notes.forEach((f,i)=>playRewardNote(f*1.5,i*.055,.14,.018,"sine")),120);
}
function createRewardParticles(){
  const trail=$("#rewardTrail");trail.innerHTML="";
  const count=14;
  for(let i=0;i<count;i++){
    const p=document.createElement("i"),angle=(Math.PI*2*i/count)+(Math.random()*.25),dist=70+Math.random()*80;
    p.style.setProperty("--px",`${Math.cos(angle)*dist}px`);
    p.style.setProperty("--py",`${Math.sin(angle)*dist}px`);
    p.style.animationDelay=`${Math.random()*.08}s`;
    p.style.width=p.style.height=`${6+Math.random()*7}px`;
    trail.appendChild(p);
  }
}

function comboFeedback(c){
  return COMBO_FEEDBACK[Math.min(10,Math.max(1,c))]||COMBO_FEEDBACK[1];
}
function playSuccess(c){
  if(!$("#successSound").checked)return;
  const feedback=comboFeedback(c);
  playInstantFx("success",Math.min(.78,.48+c*.025));
  playRewardTexture(feedback,c);
  setTimeout(()=>speakTeacher(feedback.speech,"praise",false,praiseVoice),35);
}
function playWrong(){
  if(!$("#wrongSound").checked)return;
  playInstantFx("wrong",.50);
  setTimeout(()=>speakTeacher(pick(WRONG_PHRASES),"feedback",false,praiseVoice),30);
}
function playComplete(){
  if(!$("#successSound").checked)return;
  playInstantFx("complete",.62);
  setTimeout(()=>speakTeacher(pick(COMPLETE_PHRASES),"complete",false,praiseVoice),55);
}
function showReward(c){
  const feedback=comboFeedback(c),stage=$("#rewardStage"),r=$("#reward"),icon=$("#rewardIcon");
  stage.className=`reward-stage ${feedback.theme}`;
  r.textContent=feedback.text;icon.textContent=feedback.icon;
  createRewardParticles();
  void stage.offsetWidth;
  stage.classList.add("show");
}
function recordSession(words,acc){const d=new Date().toISOString().slice(0,10),h=store.get("history",[]);h.push({date:d,words,acc});store.set("history",h.slice(-365));updateToday()}
function updateToday(){const d=new Date().toISOString().slice(0,10),h=store.get("history",[]),n=h.filter(x=>x.date===d).reduce((s,x)=>s+x.words,0);$("#todayCount").textContent=n}

function currentVocabularyForWordbook(){
  const source=$("#source").value;
  let entries=[];
  if(source==="custom"){
    const book=store.get("customBook",null);
    if(book){
      const unit=$("#unitSelect").value||book.sheets[0]?.name;
      const sheets=unit==="__ALL__"?book.sheets:book.sheets.filter(s=>s.name===unit);
      entries=sheets.flatMap(s=>s.words.map(x=>({word:String(x[0]||""),cn:String(x[1]||""),unit:s.name})));
    }
  }else if(source==="wrong"){
    entries=store.get("wrongWords",[]).map(x=>({word:String(x[0]||""),cn:String(x[1]||""),unit:"错词"}));
  }else{
    entries=(PACKS[$("#level").value]||[]).map(x=>({word:String(x[0]||""),cn:String(x[1]||""),unit:$("#level").value}));
  }
  const seen=new Set();
  return entries.filter(x=>{
    const key=x.word.toLowerCase()+"::"+x.cn;
    if(!x.word||seen.has(key))return false;
    seen.add(key);return true;
  });
}

function showWordbook(){
  $("#wordbookSearch").value="";
  $("#wordbookFilter").value="all";
  renderWordbook();
  openDialog("wordbookDialog");
}

function renderWordbook(){
  const all=currentVocabularyForWordbook();
  const wrongSet=new Set(store.get("wrongWords",[]).map(x=>String(x[0]||"").toLowerCase()));
  const query=($("#wordbookSearch").value||"").trim().toLowerCase();
  const filter=$("#wordbookFilter").value;
  const rows=all.filter(x=>{
    const isWrong=wrongSet.has(x.word.toLowerCase());
    if(filter==="wrong"&&!isWrong)return false;
    return !query||x.word.toLowerCase().includes(query)||x.cn.toLowerCase().includes(query)||x.unit.toLowerCase().includes(query);
  });
  const wrongCount=all.filter(x=>wrongSet.has(x.word.toLowerCase())).length;
  $("#wordbookSubtitle").textContent=$("#source").value==="custom"
    ? `${store.get("customBook",{}).name||"已导入词库"} · ${$("#unitSelect").selectedOptions[0]?.text||""}`
    : $("#source option:checked").textContent;
  $("#wordbookSummary").innerHTML=`<span>共 <b>${all.length}</b> 词</span><span>错词 <b>${wrongCount}</b></span><span>当前显示 <b>${rows.length}</b></span>`;
  $("#wordbookList").innerHTML=rows.length?rows.map(x=>{
    const isWrong=wrongSet.has(x.word.toLowerCase());
    return `<div class="wordbook-row">
      <button class="wordbook-speak" type="button" data-book-word="${esc(x.word)}" title="播放发音">🔊</button>
      <div class="wordbook-main"><b>${esc(x.word)}</b><span>${esc(x.cn)}</span></div>
      <small>${esc(x.unit)}</small>
      ${isWrong?'<em>错词</em>':''}
    </div>`;
  }).join(""):`<div class="empty-state">没有符合条件的单词</div>`;
  $$("[data-book-word]").forEach(btn=>btn.onclick=()=>playWord(btn.dataset.bookWord));
}

function growthLevel(total){
  const levels=[
    {min:0,name:"Learning Seed",icon:"🌱",next:100},
    {min:100,name:"Bright Sprout",icon:"🌿",next:300},
    {min:300,name:"Word Explorer",icon:"📚",next:600},
    {min:600,name:"Vocabulary Star",icon:"⭐",next:1000},
    {min:1000,name:"Word Rocket",icon:"🚀",next:1500},
    {min:1500,name:"Learning Champion",icon:"🏆",next:2500},
    {min:2500,name:"Word Master",icon:"👑",next:5000},
    {min:5000,name:"English Superstar",icon:"✨",next:10000}
  ];
  let level=levels[0];
  for(const item of levels)if(total>=item.min)level=item;
  return level;
}

function showGrowth(){
  const h=store.get("history",[]);
  const total=h.reduce((s,x)=>s+(Number(x.words)||0),0);
  const sessions=h.length;
  const avg=sessions?Math.round(h.reduce((s,x)=>s+(Number(x.acc)||0),0)/sessions):0;
  const days=new Set(h.map(x=>x.date)).size;
  const wrongCount=store.get("wrongWords",[]).length;
  const level=growthLevel(total);
  const progress=Math.max(0,Math.min(100,Math.round((total-level.min)/(level.next-level.min)*100)));
  $("#growthContent").innerHTML=`
    <section class="growth-hero">
      <div class="growth-hero-icon">${level.icon}</div>
      <div><small>当前阶段</small><h3>${level.name}</h3><p>累计学习 ${total} 个单词</p></div>
    </section>
    <div class="growth-progress"><i style="width:${progress}%"></i></div>
    <div class="growth-progress-label"><span>${total}</span><span>下一阶段 ${level.next}</span></div>
    <div class="growth-stats">
      <div><b>${sessions}</b><span>完成局数</span></div>
      <div><b>${avg}%</b><span>平均正确率</span></div>
      <div><b>${days}</b><span>学习天数</span></div>
      <div><b>${wrongCount}</b><span>当前错词</span></div>
    </div>
    <div class="growth-note">继续完成单元练习，成长阶段会自动提升。所有进度均可离线保存。</div>`;
  openDialog("growthDialog");
}

function showStats(){
  const h=store.get("history",[]),total=h.reduce((s,x)=>s+x.words,0),sessions=h.length,avg=sessions?Math.round(h.reduce((s,x)=>s+x.acc,0)/sessions):0,days=new Set(h.map(x=>x.date)).size;
  const book=store.get("customBook",null),coverage=store.get("coverage",{});let units="";
  if(book){
    units=book.sheets.map(s=>{const c=coverage[`${book.id}::${s.name}`]||{seen:[]};return `<div class="stat-box"><b>${Math.min(c.seen.length,s.words.length)}/${s.words.length}</b><span>${esc(s.name)} 覆盖</span></div>`}).join("");
  }
  $("#statsContent").innerHTML=`<div class="stats-grid"><div class="stat-box"><b>${total}</b><span>累计学习词数</span></div><div class="stat-box"><b>${sessions}</b><span>完成局数</span></div><div class="stat-box"><b>${avg}%</b><span>平均正确率</span></div><div class="stat-box"><b>${days}</b><span>学习天数</span></div>${units}</div>`;
  openDialog("statsDialog");
}


function useBuiltinBook(){
  store.set("customBook",BUILTIN_BOOK);
  store.set("selectedUnit",BUILTIN_BOOK.sheets[0]?.name||"__ALL__");
  const opt=$("#source option[value=custom]");
  opt.disabled=false;opt.textContent=BUILTIN_BOOK.name;
  $("#source").value="custom";
  setMode("cn");
  refreshUnitUI();
  toast("已加载内置六年级词库，并切换到英文—中文模式");
  startGame();
}

async function handleExcel(e){
  const f=e.target.files[0];if(!f)return;
  try{
    const buffer=await f.arrayBuffer();
    const book=(window.XLSX&&typeof XLSX.read==="function")
      ?readWorkbookWithSheetJS(buffer,f.name)
      :await readWorkbookBySheets(buffer,f.name);
    if(!book.sheets.length||book.sheets.every(s=>s.words.length<2))throw Error("词汇不足");
    store.set("customBook",book);store.set("selectedUnit",book.sheets[0].name);
    const opt=$("#source option[value=custom]");opt.disabled=false;opt.textContent=book.name;
    $("#source").value="custom";setMode("cn");
    refreshUnitUI();
    toast(`已导入 ${book.sheets.length} 个单元，自动进入英文—中文模式`);
    startGame();
  }catch(err){
    console.error(err);
    toast("Excel 读取失败，请使用 .xlsx，并确认每个 Sheet 第一列英文、第二列中文");
  }finally{
    e.target.value="";
  }
}

function readWorkbookWithSheetJS(buffer,name){
  const wb=XLSX.read(buffer,{type:"array",cellDates:false,cellText:true});
  const sheets=[];
  wb.SheetNames.forEach((sheetName,index)=>{
    const ws=wb.Sheets[sheetName];
    const rows=XLSX.utils.sheet_to_json(ws,{header:1,raw:false,defval:"",blankrows:false});
    const words=normalizeRows(rows);
    if(words.length)sheets.push({name:sheetName||`Unit ${index+1}`,words});
  });
  return{id:`${name}::${Date.now()}`,name,sheets};
}

async function readWorkbookBySheets(buf,name){
  const zip=readZip(buf),shared=zip["xl/sharedStrings.xml"]?parseShared(await unzipText(zip["xl/sharedStrings.xml"])):[],
    workbook=parseXml(await unzipText(zip["xl/workbook.xml"])),rels=parseXml(await unzipText(zip["xl/_rels/workbook.xml.rels"]));
  const relMap=new Map([...rels.querySelectorAll("Relationship")].map(r=>[r.getAttribute("Id"),r.getAttribute("Target")]));
  const sheets=[];
  for(const sheet of [...workbook.querySelectorAll("sheet")]){
    const sheetName=sheet.getAttribute("name")||`Unit ${sheets.length+1}`;
    const rid=sheet.getAttribute("r:id")||sheet.getAttributeNS("http://schemas.openxmlformats.org/officeDocument/2006/relationships","id");
    let target=relMap.get(rid)||"worksheets/sheet1.xml";target=target.replace(/^\/?/,"");if(!target.startsWith("xl/"))target="xl/"+target;
    const xml=parseXml(await unzipText(zip[target])),rows=[];
    for(const row of [...xml.querySelectorAll("sheetData row")]){
      const vals=[];
      for(const c of [...row.querySelectorAll("c")]){
        const ref=c.getAttribute("r")||"A1",col=lettersToNum((ref.match(/[A-Z]+/)||["A"])[0]),t=c.getAttribute("t"),
          v=c.querySelector("v")?.textContent??c.querySelector("is t")?.textContent??"";
        vals[col]=t==="s"?shared[+v]??"":v;
      }
      if(vals.some(v=>String(v||"").trim()))rows.push(vals);
    }
    const words=normalizeRows(rows);if(words.length)sheets.push({name:sheetName,words});
  }
  return{id:`${name}::${Date.now()}`,name,sheets};
}
function normalizeRows(rows){
  const out=[],seen=new Set();
  for(const r of rows){
    let en=String(r[0]||"").trim(),cn=String(r[1]||"").trim();
    if(!en||!cn)continue;if(/英文|english|word/i.test(en)&&/中文|chinese|meaning/i.test(cn))continue;
    en=en.replace(/\s+/g,"");const k=en.toLowerCase();if(!seen.has(k)){seen.add(k);out.push([en,cn])}
  }return out;
}
function readZip(buffer){
  const b=new Uint8Array(buffer),dv=new DataView(buffer);let e=-1;
  for(let i=b.length-22;i>=Math.max(0,b.length-65557);i--)if(dv.getUint32(i,true)===0x06054b50){e=i;break}
  if(e<0)throw Error("zip");const total=dv.getUint16(e+10,true),off=dv.getUint32(e+16,true);let p=off,out={};
  for(let n=0;n<total;n++){
    if(dv.getUint32(p,true)!==0x02014b50)break;
    const method=dv.getUint16(p+10,true),size=dv.getUint32(p+20,true),nl=dv.getUint16(p+28,true),el=dv.getUint16(p+30,true),
      cl=dv.getUint16(p+32,true),lo=dv.getUint32(p+42,true),name=new TextDecoder().decode(b.slice(p+46,p+46+nl)),
      lnl=dv.getUint16(lo+26,true),lel=dv.getUint16(lo+28,true),start=lo+30+lnl+lel;
    out[name]={data:b.slice(start,start+size),method};p+=46+nl+el+cl;
  }return out;
}
async function unzipText(entry){
  if(!entry)throw Error("missing");let data=entry.data;
  if(entry.method===8){const ds=new DecompressionStream("deflate-raw");data=new Uint8Array(await new Response(new Blob([data]).stream().pipeThrough(ds)).arrayBuffer())}
  return new TextDecoder("utf-8").decode(data);
}
function parseShared(t){const x=parseXml(t);return [...x.querySelectorAll("si")].map(si=>[...si.querySelectorAll("t")].map(t=>t.textContent).join(""))}
function parseXml(t){return new DOMParser().parseFromString(t,"application/xml")}
function lettersToNum(s){let n=0;for(const c of s)n=n*26+c.charCodeAt(0)-64;return n-1}
function openDialog(id){$("#"+id).classList.add("show")}
function closeDialog(id){$("#"+id).classList.remove("show")}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function toast(t){const x=$("#toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2400)}
init();
