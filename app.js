
const FRANCO_DEFAULT = [{"id": "petto", "name": "Petto", "subtitle": "Petto • deltoidi laterali • tricipiti", "emoji": "🔥", "exercises": [{"name": "Chest press inclinata", "sets": [{"target": "12", "rest": 150, "note": "Serie di controllo: 12 reps pulite, 1–2 reps in riserva"}, {"target": "4 + 4 assistite", "rest": 150, "note": "Aumenta il carico: 4 autonome + 4 con assistenza minima"}, {"target": "10", "rest": 150, "note": "Back-off: riduci il peso e chiudi con 10 reps controllate"}]}, {"name": "Chest press macchina", "sets": [{"target": "8", "rest": 150, "note": "Serie pesante, tecnica pulita"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 150, "note": "Rest-pause/isometria controllata"}]}, {"name": "Pec deck / croci macchina", "sets": [{"target": "8", "rest": 120, "note": "Serie pesante, tecnica pulita"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 120, "note": "Mantieni tensione in posizione sicura"}]}, {"name": "Alzate laterali macchina", "sets": [{"target": "8", "rest": 120, "note": "Serie pesante, tecnica pulita"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 120, "note": "Riduci il carico se perdi tecnica"}]}, {"name": "Pushdown tricipiti", "sets": [{"target": "8", "rest": 120, "note": "Serie pesante, tecnica pulita"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 120, "note": "Serie intensiva controllata"}]}]}, {"id": "dorso", "name": "Dorso", "subtitle": "Dorsali • schiena • deltoidi posteriori • bicipiti", "emoji": "⚡", "exercises": [{"name": "Lat machine", "sets": [{"target": "12", "rest": 150, "note": "Serie di controllo: 12 reps pulite, 1–2 reps in riserva"}, {"target": "4 + 4 assistite", "rest": 150, "note": "4 autonome + 4 con spotter, assistenza minima"}, {"target": "10", "rest": 150, "note": "Back-off controllato"}]}, {"name": "Rematore macchina", "sets": [{"target": "8", "rest": 150, "note": "Serie pesante, tecnica pulita"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 150, "note": "Tensione controllata tra i blocchi"}]}, {"name": "T-Bar Row", "sets": [{"target": "8", "rest": 150, "note": "Serie pesante, tecnica pulita"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 150, "note": "Mantieni posizione sicura"}]}, {"name": "Reverse pec deck", "sets": [{"target": "8", "rest": 120, "note": "Serie pesante, tecnica pulita"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 120, "note": "Controllo completo"}]}, {"name": "Curl bicipiti macchina", "sets": [{"target": "8", "rest": 120, "note": "Serie pesante, tecnica pulita"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 120, "note": "Niente slanci"}]}]}, {"id": "spalle", "name": "Spalle + Braccia", "subtitle": "Deltoidi • bicipiti • tricipiti", "emoji": "💥", "exercises": [{"name": "Shoulder press macchina", "sets": [{"target": "12", "rest": 150, "note": "Serie di controllo"}, {"target": "4 + 4 assistite", "rest": 150, "note": "Assistenza minima"}, {"target": "10", "rest": 150, "note": "Back-off controllato"}]}, {"name": "Alzate laterali", "sets": [{"target": "8", "rest": 120, "note": "Serie pesante"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 120, "note": "Tensione continua"}]}, {"name": "Rear delt / reverse fly", "sets": [{"target": "8", "rest": 120, "note": "Serie pesante"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 120, "note": "Tecnica pulita"}]}, {"name": "Curl bicipiti", "sets": [{"target": "8", "rest": 120, "note": "Serie pesante"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 120, "note": "Niente slanci"}]}, {"name": "Estensioni tricipiti", "sets": [{"target": "8", "rest": 120, "note": "Serie pesante"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 120, "note": "Controlla il ROM"}]}]}, {"id": "gambe", "name": "Gambe", "subtitle": "Quadricipiti • femorali • glutei • adduttori", "emoji": "🦵", "exercises": [{"name": "Hack squat / Leg press", "sets": [{"target": "12", "rest": 180, "note": "Tecnica pulita, circa 1–2 reps in riserva"}, {"target": "6", "rest": 180, "note": "Serie pesante. Niente ripetizioni assistite"}, {"target": "10", "rest": 180, "note": "Back-off controllato"}]}, {"name": "Leg extension", "sets": [{"target": "8", "rest": 120, "note": "Serie pesante e controllata"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 120, "note": "Tensione in posizione sicura"}]}, {"name": "Leg curl seduto / sdraiato", "sets": [{"target": "8", "rest": 120, "note": "Eccentrica controllata"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 120, "note": "Niente slanci"}]}, {"name": "Hip thrust macchina / bilanciere", "sets": [{"target": "8", "rest": 150, "note": "Pausa breve in massima contrazione"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 150, "note": "Mantieni la posizione"}]}, {"name": "Adductor machine", "sets": [{"target": "10", "rest": 120, "note": "ROM controllato, senza rimbalzi"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 120, "note": "Serie intensiva finale"}]}]}, {"id": "upper", "name": "Upper opzionale", "subtitle": "Richiamo parte superiore", "emoji": "➕", "exercises": [{"name": "Chest press", "sets": [{"target": "12", "rest": 150, "note": "Serie di controllo"}, {"target": "4 + 4 assistite", "rest": 150, "note": "Assistenza minima"}, {"target": "10", "rest": 150, "note": "Back-off"}]}, {"name": "Lat machine presa neutra", "sets": [{"target": "8", "rest": 150, "note": "Serie pesante"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 150, "note": "Controllo totale"}]}, {"name": "Rematore macchina", "sets": [{"target": "8", "rest": 150, "note": "Serie pesante"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 150, "note": "Tensione controllata"}]}, {"name": "Pec deck", "sets": [{"target": "8", "rest": 120, "note": "Serie pesante"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 120, "note": "Serie intensiva"}]}, {"name": "Alzate laterali", "sets": [{"target": "8", "rest": 120, "note": "Serie pesante"}, {"target": "6 + 10s + 6 + 10s + 6", "rest": 120, "note": "Serie intensiva"}]}]}];
let currentProfileId = null;
let currentWorkoutId = null;
let sessionStart = null;
let timer = null;
let remaining = 0;
let modalMode = null;
let modalPayload = null;

const $ = s => document.querySelector(s);
const APP_KEY = "franco-gym-v2";

function defaultState(){
  return {
    profiles: {
      franco: {
        id:"franco", name:"Franco", avatar:"🏋️", editable:false,
        workouts: JSON.parse(JSON.stringify(FRANCO_DEFAULT)),
        history:[], last:{}
      },
      partner: {
        id:"partner", name:"La mia fantastica ragazza", avatar:"🏋️‍♀️", editable:true,
        workouts:[], history:[], last:{}
      }
    }
  };
}
function getState(){
  try {
    const raw=localStorage.getItem(APP_KEY);
    if(!raw){ const s=defaultState(); saveState(s); return s; }
    const s=JSON.parse(raw);
    if(!s.profiles?.franco || !s.profiles?.partner) throw new Error();
    return s;
  } catch(e) {
    const s=defaultState(); saveState(s); return s;
  }
}
function saveState(s){ localStorage.setItem(APP_KEY,JSON.stringify(s)); }
function profile(){ return getState().profiles[currentProfileId]; }
function show(id){
  ["profileView","homeView","workoutView","historyView"].forEach(v=>$("#"+v).classList.add("hidden"));
  $("#"+id).classList.remove("hidden");
  $("#profileBtn").classList.toggle("hidden",id==="profileView");
  window.scrollTo(0,0);
}

function renderProfiles(){
  $("#screenTitle").textContent="Profili";
  const s=getState(), grid=$("#profileGrid"); grid.innerHTML="";
  Object.values(s.profiles).forEach(p=>{
    const b=document.createElement("button"); b.className="profileCard";
    const desc=p.id==="franco" ? "Scheda intensiva già pronta" : (p.workouts.length ? p.workouts.length+" allenamenti personalizzati" : "Crea la sua scheda da zero");
    b.innerHTML=`<span class="avatar">${p.avatar}</span><div><h3>${p.name}</h3><p>${desc}</p></div>`;
    b.onclick=()=>selectProfile(p.id); grid.appendChild(b);
  });
}
function selectProfile(id){
  currentProfileId=id; renderHome(); show("homeView");
}
function renderHome(){
  const p=profile();
  $("#screenTitle").textContent=p.name;
  $("#profilePill").textContent=p.id==="franco"?"PROFILO FRANCO":"PROFILO PERSONALIZZABILE";
  $("#welcomeTitle").textContent=`Ciao ${p.name==="La mia ragazza"?"❤️":p.name+" 👋"}`;
  $("#welcomeText").textContent=p.workouts.length ? "Scegli la sessione di oggi." : "Qui puoi costruire la scheda esattamente come vuoi.";
  $("#newWorkoutBtn").classList.toggle("hidden",!p.editable);
  const grid=$("#workoutGrid"); grid.innerHTML="";
  p.workouts.forEach((w,i)=>{
    const b=document.createElement("button"); b.className="workoutCard"+(i===0?" primary":"");
    b.innerHTML=`<span class="emoji">${w.emoji||"💪"}</span><div><h3>${w.name}</h3><p>${w.subtitle||w.exercises.length+" esercizi"}</p></div>`;
    b.onclick=()=>openWorkout(w.id); grid.appendChild(b);
  });
  if(!p.workouts.length) grid.innerHTML='<div class="historyCard"><small>Nessun allenamento ancora. Premi “Crea allenamento”.</small></div>';
}

function openWorkout(id){
  const p=profile(), w=p.workouts.find(x=>x.id===id); if(!w)return;
  currentWorkoutId=id; sessionStart=Date.now();
  $("#screenTitle").textContent=w.name;
  $("#workoutHeader").innerHTML=`<section class="workoutTitle"><span class="pill">SESSIONE</span><h2>${w.emoji||"💪"} ${w.name}</h2><p>${w.subtitle||""}</p>${p.editable?'<button id="editWorkoutBtn" class="editMini" style="margin-top:12px">Modifica allenamento</button>':""}</section>`;
  if(p.editable) $("#editWorkoutBtn").onclick=()=>openWorkoutModal(w);
  $("#addExerciseBtn").classList.toggle("hidden",!p.editable);
  renderExerciseList(w);
  show("workoutView");
}
function renderExerciseList(w){
  const p=profile(), list=$("#exerciseList"); list.innerHTML="";
  w.exercises.forEach((ex,ei)=>{
    const box=document.createElement("section"); box.className="exercise";
    box.innerHTML=`<div class="exerciseHead"><h3>${ex.name}</h3><div class="exerciseHeadActions"><span>${ex.sets.length} serie</span>${p.editable?'<button class="editMini">Modifica</button>':""}</div></div>`;
    if(p.editable) box.querySelector(".editMini").onclick=()=>openExerciseModal(w,ex,ei);
    ex.sets.forEach((s,si)=>{
      const key=`${w.id}|${ex.name}|${si}`, last=p.last[key];
      const row=document.createElement("div"); row.className="setRow"; row.dataset.key=key; row.dataset.rest=s.rest||120;
      row.innerHTML=`<div class="setTop"><span class="setNum">SERIE ${si+1}</span><span class="target">${s.target}</span></div>
      <div class="setInputs">
        <div class="field"><label>KG</label><input inputmode="decimal" class="kg" placeholder="${last?.kg||"—"}"></div>
        <div class="field"><label>REPS FATTE</label><input class="reps" placeholder="${last?.reps||s.target}"></div>
        <button class="doneBtn">✓</button>
      </div>
      ${last?`<div class="last">Ultima volta: ${last.kg||"—"} kg • ${last.reps||"—"} reps</div>`:""}
      <div class="note">${s.note||""}</div>`;
      row.querySelector(".doneBtn").onclick=()=>toggleSet(row); box.appendChild(row);
    });
    list.appendChild(box);
  });
  if(!w.exercises.length) list.innerHTML='<div class="historyCard"><small>Nessun esercizio. Aggiungine uno.</small></div>';
}

function toggleSet(row){
  const btn=row.querySelector(".doneBtn"), done=!btn.classList.contains("done");
  btn.classList.toggle("done",done); if(done) startTimer(+row.dataset.rest);
}
function startTimer(sec){
  clearInterval(timer); remaining=sec; $("#timerBar").classList.remove("hidden"); tick();
  timer=setInterval(()=>{remaining--;tick();if(remaining<=0){clearInterval(timer);showToast("Recupero finito 💪")}},1000);
}
function tick(){
  const m=Math.max(0,Math.floor(remaining/60)),s=Math.max(0,remaining%60);
  $("#timerText").textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}
$("#plusTimer").onclick=()=>{remaining+=30;tick()};
$("#minusTimer").onclick=()=>{remaining=Math.max(0,remaining-30);tick()};
$("#skipTimer").onclick=()=>{clearInterval(timer);$("#timerBar").classList.add("hidden")};

$("#finishBtn").onclick=()=>{
  const rows=[...document.querySelectorAll("#exerciseList .setRow")];
  const completed=rows.filter(r=>r.querySelector(".doneBtn").classList.contains("done"));
  if(!completed.length){showToast("Completa almeno una serie");return;}
  const s=getState(), p=s.profiles[currentProfileId], w=p.workouts.find(x=>x.id===currentWorkoutId), sets=[];
  completed.forEach(r=>{
    const kg=r.querySelector(".kg").value.trim(), reps=r.querySelector(".reps").value.trim();
    sets.push({key:r.dataset.key,kg,reps}); p.last[r.dataset.key]={kg,reps,date:new Date().toISOString()};
  });
  p.history.unshift({workoutId:w.id,name:w.name,date:new Date().toISOString(),duration:Math.max(1,Math.round((Date.now()-sessionStart)/60000)),sets});
  p.history=p.history.slice(0,100); saveState(s);
  clearInterval(timer); $("#timerBar").classList.add("hidden"); showToast("Allenamento salvato ✓");
  setTimeout(()=>{renderHome();show("homeView")},500);
};

function renderHistory(){
  const p=profile(); $("#screenTitle").textContent="Progressi";
  $("#historySubtitle").textContent="Storico di "+p.name+".";
  const list=$("#historyList"); list.innerHTML="";
  if(!p.history.length){list.innerHTML='<div class="historyCard"><small>Nessun allenamento registrato ancora.</small></div>';return;}
  p.history.forEach(h=>{
    const d=new Date(h.date), c=document.createElement("div"); c.className="historyCard";
    c.innerHTML=`<div class="top"><div><h3>${h.name}</h3><small>${d.toLocaleDateString("it-IT",{day:"2-digit",month:"short",year:"numeric"})}</small></div><strong>${h.duration} min</strong></div><div class="historyStats">${h.sets.length} serie registrate</div>`;
    list.appendChild(c);
  });
}

function openModal(title,body,mode,payload){
  modalMode=mode; modalPayload=payload; $("#modalTitle").textContent=title; $("#modalBody").innerHTML=body; $("#modal").classList.remove("hidden");
}
function closeModal(){$("#modal").classList.add("hidden");modalMode=null;modalPayload=null;}
$("#closeModal").onclick=closeModal; $("#modalCancel").onclick=closeModal;

function openWorkoutModal(w=null){
  openModal(w?"Modifica allenamento":"Nuovo allenamento",`
    <div class="formGroup"><label>NOME</label><input id="mwName" value="${w?.name||""}" placeholder="Es. Glutei + Gambe"></div>
    <div class="formGroup"><label>SOTTOTITOLO</label><input id="mwSub" value="${w?.subtitle||""}" placeholder="Es. Glutei • femorali"></div>
    <div class="formGroup"><label>EMOJI</label><input id="mwEmoji" value="${w?.emoji||"💪"}"></div>
    ${w?'<button id="deleteWorkout" class="deleteWorkoutBtn">Elimina allenamento</button>':""}
  `,w?"editWorkout":"newWorkout",w?.id||null);
  if(w) $("#deleteWorkout").onclick=()=>deleteWorkout(w.id);
}
function openExerciseModal(w,ex=null,index=null){
  const sets=ex?.sets?.length?ex.sets:[{target:"10",rest:120,note:""}];
  let setsHtml=sets.map((s,i)=>setEditorHtml(i,s)).join("");
  openModal(ex?"Modifica esercizio":"Nuovo esercizio",`
    <div class="formGroup"><label>NOME ESERCIZIO</label><input id="meName" value="${ex?.name||""}" placeholder="Es. Hip thrust"></div>
    <div id="setsEditor">${setsHtml}</div>
    <button id="addSetBtn" class="secondaryBtn">+ Aggiungi serie</button>
    ${ex?'<button id="deleteExercise" class="deleteWorkoutBtn">Elimina esercizio</button>':""}
  `,ex?"editExercise":"newExercise",{workoutId:w.id,index});
  wireSetEditors();
  $("#addSetBtn").onclick=()=>{$("#setsEditor").insertAdjacentHTML("beforeend",setEditorHtml($("#setsEditor").children.length,{target:"10",rest:120,note:""}));wireSetEditors();};
  if(ex) $("#deleteExercise").onclick=()=>deleteExercise(w.id,index);
}
function setEditorHtml(i,s){
  return `<div class="setEditor">
    <div class="setEditorTop"><strong>SERIE ${i+1}</strong><button class="removeSet">Rimuovi</button></div>
    <div class="formGroup"><label>REPS / TECNICA</label><input class="seTarget" value="${s.target||""}" placeholder="Es. 8 oppure 6 + 10s + 6"></div>
    <div class="formGroup"><label>RECUPERO (secondi)</label><input inputmode="numeric" class="seRest" value="${s.rest||120}"></div>
    <div class="formGroup"><label>NOTE</label><textarea class="seNote" placeholder="Tecnica, RIR, indicazioni...">${s.note||""}</textarea></div>
  </div>`;
}
function wireSetEditors(){
  [...document.querySelectorAll(".setEditor")].forEach((el,i)=>{
    el.querySelector("strong").textContent="SERIE "+(i+1);
    el.querySelector(".removeSet").onclick=()=>{if(document.querySelectorAll(".setEditor").length>1){el.remove();wireSetEditors();}};
  });
}
function collectSets(){
  return [...document.querySelectorAll(".setEditor")].map(el=>({
    target:el.querySelector(".seTarget").value.trim()||"10",
    rest:Math.max(30,parseInt(el.querySelector(".seRest").value)||120),
    note:el.querySelector(".seNote").value.trim()
  }));
}
$("#modalSave").onclick=()=>{
  const s=getState(), p=s.profiles[currentProfileId];
  if(modalMode==="newWorkout"){
    const name=$("#mwName").value.trim(); if(!name){showToast("Inserisci un nome");return;}
    p.workouts.push({id:"w"+Date.now(),name,subtitle:$("#mwSub").value.trim(),emoji:$("#mwEmoji").value.trim()||"💪",exercises:[]});
  } else if(modalMode==="editWorkout"){
    const w=p.workouts.find(x=>x.id===modalPayload); w.name=$("#mwName").value.trim()||w.name; w.subtitle=$("#mwSub").value.trim(); w.emoji=$("#mwEmoji").value.trim()||"💪";
  } else if(modalMode==="newExercise" || modalMode==="editExercise"){
    const name=$("#meName").value.trim(); if(!name){showToast("Inserisci il nome esercizio");return;}
    const w=p.workouts.find(x=>x.id===modalPayload.workoutId), obj={name,sets:collectSets()};
    if(modalMode==="newExercise") w.exercises.push(obj); else w.exercises[modalPayload.index]=obj;
  }
  saveState(s); closeModal();
  if(modalMode?.includes("Workout")){renderHome();show("homeView")} else {openWorkout(currentWorkoutId)}
};
function deleteWorkout(id){
  if(!confirm("Eliminare questo allenamento?"))return;
  const s=getState(),p=s.profiles[currentProfileId];p.workouts=p.workouts.filter(x=>x.id!==id);saveState(s);closeModal();renderHome();show("homeView");
}
function deleteExercise(wid,index){
  if(!confirm("Eliminare questo esercizio?"))return;
  const s=getState(),p=s.profiles[currentProfileId],w=p.workouts.find(x=>x.id===wid);w.exercises.splice(index,1);saveState(s);closeModal();openWorkout(wid);
}

$("#newWorkoutBtn").onclick=()=>openWorkoutModal();
$("#addExerciseBtn").onclick=()=>{const p=profile(),w=p.workouts.find(x=>x.id===currentWorkoutId);openExerciseModal(w)};
$("#historyBtn").onclick=()=>{renderHistory();show("historyView")};
$("#backBtn").onclick=()=>{renderHome();show("homeView")};
$("#historyBackBtn").onclick=()=>{renderHome();show("homeView")};
$("#profileBtn").onclick=()=>{currentProfileId=null;renderProfiles();show("profileView")};
$("#clearHistoryBtn").onclick=()=>{if(confirm("Cancellare lo storico di questo profilo?")){const s=getState();s.profiles[currentProfileId].history=[];s.profiles[currentProfileId].last={};saveState(s);renderHistory();showToast("Storico cancellato")}};

function showToast(t){const el=$("#toast");el.textContent=t;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),1700)}
renderProfiles(); show("profileView");
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));
