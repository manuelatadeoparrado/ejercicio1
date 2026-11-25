// =============================================================
// ALGO · la web final
// 1. Entrada: Algo se escapa del móvil
// 2. Habla con Algo: ¿aceptas que aprenda de ti? → chat → Algo falla → se satura → "creo que eres…" → ¿es real?
// 3. Visita a Algo: su habitación, modo algoritmo / modo real, y su cuaderno de apuntes (la gincana)
// Las respuestas y los objetos están en respuestas.js
// =============================================================

const $ = (s) => document.querySelector(s);
const esperar = (ms) => new Promise((r) => setTimeout(r, ms));
const azar = (l) => l[Math.floor(Math.random() * l.length)];
const limpiar = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

// ---------- poses de Algo (img/pose-N.png). Si aún no existen, usa la imagen de siempre ----------
const POSE = { quieto: 1, saluda: 2, habla: 3, anda: 4, anda2: 5, empuja: 6, salta: 7, sentado: 8, piensa: 9, rie: 10, sorpresa: 11, saturado: 12, movil: 13 };
const BASE = 'img/pose-1.png';
const hayPose = {};
Object.values(POSE).forEach((n) => {
  const i = new Image();
  i.onload = () => { hayPose[n] = true; };
  i.src = `img/pose-${n}.png`;
});
function pose(img, nombre) {
  const n = hayPose[POSE[nombre]] ? POSE[nombre] : 1;
  img.src = `img/pose-${n}.png`;
  const cuerpo = img.closest('.cuerpo');
  if (cuerpo) {
    cuerpo.dataset.pose = n;
    cuerpo.style.setProperty('--forma', `url(img/pose-${n}.png)`);
  }
}

// ---------- Algo está vivo: parpadea de vez en cuando ----------
document.querySelectorAll('.cuerpo').forEach((c) => {
  c.dataset.pose = 1;
  c.style.setProperty('--forma', 'url(img/pose-1.png)');
  const parpadear = () => {
    c.classList.add('parpadea');
    setTimeout(() => c.classList.remove('parpadea'), 130);
    if (Math.random() < 0.25) setTimeout(() => { c.classList.add('parpadea'); setTimeout(() => c.classList.remove('parpadea'), 120); }, 260);
    setTimeout(parpadear, 2200 + Math.random() * 3500);
  };
  setTimeout(parpadear, 1000 + Math.random() * 2000);
});

// =============================================================
// CAMBIAR DE ESCENA
// =============================================================
const ESCENAS = ['entrada', 'hablar', 'habitacion'];
function irA(escena) {
  if (!ESCENAS.includes(escena)) escena = 'entrada';
  document.body.dataset.escena = escena;
  document.querySelectorAll('.barra nav a').forEach((a) => a.classList.toggle('activa', a.dataset.ir === escena));
  window.scrollTo(0, 0);
  if (escena === 'entrada' && !introHecha) intro();
  if (escena === 'hablar') entrarHablar();
  if (escena === 'habitacion') entrarHabitacion();
}
document.addEventListener('click', (e) => {
  const a = e.target.closest('[data-ir]');
  if (!a) return;
  e.preventDefault();
  if (a.dataset.reiniciar) reiniciarChat();
  $('#cuaderno').hidden = true;
  if (location.hash !== '#' + a.dataset.ir) history.pushState(null, '', '#' + a.dataset.ir);
  irA(a.dataset.ir);
});
window.addEventListener('popstate', () => irA(location.hash.slice(1)));

// =============================================================
// 1 · ALGO SE ESCAPA DEL MÓVIL
// =============================================================
let introHecha = false;
const feed = $('#feed');
[...FEED, ...FEED].forEach((p) => {
  const d = document.createElement('div');
  d.className = 'post ' + p.color;
  d.innerHTML = `<b>${p.tema}</b><small>♥ ${p.likes}</small>`;
  feed.appendChild(d);
});

async function intro() {
  introHecha = true;
  const dentro = $('#algo-dentro');
  const movil = $('#movil');
  await esperar(900);
  pose(dentro.querySelector('img'), 'movil');
  dentro.classList.add('asoma');
  await esperar(1300);
  pose(dentro.querySelector('img'), 'empuja');
  for (let i = 0; i < 3; i++) {
    dentro.classList.remove('empuja'); void dentro.offsetWidth; dentro.classList.add('empuja');
    movil.classList.remove('golpe'); void movil.offsetWidth; movil.classList.add('golpe');
    if (i === 1) $('#grietas').classList.add('rotas');
    await esperar(420);
  }
  if (document.body.classList.contains('fuera')) return; // han saltado la intro
  salir();
}

function salir() {
  const fuera = $('#algo-fuera');
  $('#algo-dentro').hidden = true;
  $('#grietas').classList.add('rotas');
  pose(fuera.querySelector('img'), 'salta');
  fuera.classList.add('sale');
  document.body.classList.add('fuera');
  setTimeout(() => {
    pose(fuera.querySelector('img'), 'saluda');
    fuera.classList.add('respira');
    const g = $('#globo-entrada');
    g.textContent = 'holaa, por fin fuera. ahi dentro no se respira';
    g.hidden = false;
    $('#puertas').hidden = false;
  }, 1100);
}
$('#saltar').addEventListener('click', salir);
$('#algo-fuera').addEventListener('click', () => {
  const g = $('#globo-entrada');
  g.hidden = true; void g.offsetWidth;
  g.textContent = azar(['q pasa', 'elige una puerta anda', '2.244 likes y todavia no me conoces?', 'jajaj para q me haces cosquillas']);
  g.hidden = false;
});

// =============================================================
// 2 · HABLA CON ALGO
// =============================================================
const LIMITE = 6;              // preguntas hasta que Algo se satura
let aprende = null;            // ¿ha aceptado que Algo aprenda?
let preguntas = 0;
let ocupado = false;
let usados = new Set();
let perfil = {};               // etiqueta → seguridad (%)
let veredicto = {};            // etiqueta → 'si' / 'no' (lo marca el visitante)
let ultima = '';
let terminado = false;
const algoImg = $('#algo-hablar');

function entrarHablar() {
  pose(algoImg, 'quieto');
}

// Algo te mira: se inclina hacia el ratón
document.addEventListener('pointermove', (e) => {
  if (document.body.dataset.escena !== 'hablar') return;
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  const c = algoImg.closest('.cuerpo');
  c.style.setProperty('--ry', (x * 26).toFixed(1) + 'deg');
  c.style.setProperty('--rx', (-y * 12).toFixed(1) + 'deg');
  c.style.setProperty('--lx', (50 + x * 70).toFixed(0) + '%');
  c.style.setProperty('--ly', (40 + y * 60).toFixed(0) + '%');
});

document.querySelectorAll('[data-permiso]').forEach((b) => {
  b.addEventListener('click', async () => {
    aprende = b.dataset.permiso === 'si';
    $('#permiso').hidden = true;
    $('#preguntar').hidden = false;
    await algoDice(aprende ? 'vale, te voy a ir conociendo. preguntame lo q quieras de manuela' : 'vale, solo hablamos. preguntame lo q quieras de manuela', 'saluda');
    pintarRapidas();
  });
});

async function algoDice(texto, nombrePose = 'habla', lento = false) {
  const r = $('#respuesta-grande');
  pose(algoImg, nombrePose === 'habla' ? 'quieto' : nombrePose);
  r.innerHTML = '<span class="cursor"></span>';
  await esperar(lento ? 1400 : 450);
  $('#hablar-algo').classList.add('hablando');
  r.textContent = '';
  let i = 0;
  for (const letra of texto) {
    r.textContent += letra;
    // la boca: se abre y se cierra mientras escribe
    if (nombrePose === 'habla' && i++ % 4 === 0) pose(algoImg, (i / 4) % 2 < 1 ? 'sorpresa' : 'quieto');
    await esperar(lento ? 55 : 22);
  }
  $('#hablar-algo').classList.remove('hablando');
  pose(algoImg, 'quieto');
}

function voz(texto, quien, clase) {
  const p = document.createElement('p');
  p.className = 'voz ' + clase;
  p.innerHTML = `<b>${quien}</b>${texto}`;
  $('#voces').appendChild(p);
}

function pintarRapidas() {
  const r = $('#rapidas');
  r.innerHTML = '';
  Object.keys(TEMAS)
    .filter((k) => TEMAS[k].pregunta && !usados.has(k))
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .forEach((k) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = TEMAS[k].pregunta;
      b.addEventListener('click', () => preguntar(TEMAS[k].pregunta, k));
      r.appendChild(b);
    });
}

function buscarTema(texto) {
  const t = limpiar(texto);
  for (const [k, tema] of Object.entries(TEMAS)) {
    if (tema.claves.some((c) => t.includes(limpiar(c)))) return k;
  }
  return null;
}

// Algo aprende de ti
function etiquetar(et) {
  if (!aprende) return;
  perfil[et] = Math.min((perfil[et] || 58 + Math.floor(Math.random() * 15)) + 10, 99);
  Object.keys(perfil).forEach((k) => { if (k !== et) perfil[k] = Math.min(perfil[k] + 3, 99); });
  const ordenado = Object.entries(perfil).sort((a, b) => b[1] - a[1]);
  $('#cinta').hidden = false;
  $('#cinta-texto').textContent = ordenado.map(([k, v]) => `${k} ${v}%`).join('   ·   ');
}

async function preguntar(texto, fija) {
  if (ocupado || terminado || !texto.trim()) return;
  ocupado = true;
  preguntas++;
  $('#rapidas').innerHTML = '';
  $('#voces').innerHTML = '';
  $('#pregunta-grande').textContent = texto;

  let clave = fija || buscarTema(texto);
  if (clave) usados.add(clave);
  const tema = clave ? TEMAS[clave] : null;

  // lo que Algo aprende de ti: el tema, la hora y cómo escribes
  etiquetar(tema ? tema.perfil : 'curioso/a');
  const h = new Date().getHours();
  if (preguntas === 2 && (h >= 22 || h < 6)) etiquetar('nocturno/a');
  if (preguntas === 3) etiquetar(texto.length > 30 ? 'se enrolla' : 'de pocas palabras');

  // Algo cada vez falla más
  let respuesta = tema ? tema.algo : azar(INVENTOS);
  let nombrePose = 'habla';
  let lento = false;
  let invento = !tema;
  if (preguntas === 3) { document.body.classList.add('dudando'); respuesta = 'mmm… ' + respuesta; nombrePose = 'piensa'; lento = true; }
  if (preguntas === 4) { // se equivoca de pregunta
    const otro = azar(Object.keys(TEMAS).filter((k) => k !== clave && k !== 'hola'));
    respuesta = TEMAS[otro].algo; nombrePose = 'piensa'; lento = true;
  }
  if (preguntas === 5) { respuesta = 'como te decia: ' + (ultima || 'el gym, obvio'); nombrePose = 'sorpresa'; }

  await algoDice(respuesta, nombrePose, lento);
  ultima = respuesta;

  // las voces reales
  await esperar(500);
  if (tema && tema.yo) voz(tema.yo, 'Manuela, de verdad', 'voz-manuela');
  for (const g of (tema ? tema.gente : [])) { await esperar(350); voz(g.texto, g.quien, 'voz-gente'); }
  if (invento) voz('esto no sale de ningún dato: se lo ha inventado', 'del algoritmo', 'voz-nada');
  else if (tema && !tema.yo && clave !== 'hola') voz('esto no lo he contestado yo', 'Manuela', 'voz-nada');

  if (preguntas >= LIMITE) await saturar();
  else pintarRapidas();
  ocupado = false;
}

async function saturar() {
  terminado = true;
  $('#preguntar').hidden = true;
  document.body.classList.remove('dudando');
  document.body.classList.add('saturando');
  pose(algoImg, 'saturado');
  // Algo se multiplica, como un scroll infinito
  const escena = $('#hablar');
  for (let i = 0; i < 14; i++) {
    const c = document.createElement('img');
    c.src = algoImg.src; c.className = 'clon'; c.alt = '';
    c.style.left = Math.random() * 90 + '%';
    c.style.top = 10 + Math.random() * 75 + '%';
    c.style.animationDelay = i * 0.08 + 's';
    escena.appendChild(c);
  }
  const r = $('#respuesta-grande');
  for (const t of ['espera espera', 'q tengo demasiados datos', 'q te gusta q te gusta q te gusta', 'vale me he saturado']) {
    r.textContent = t; await esperar(650);
  }
  document.body.classList.remove('saturando');
  document.querySelectorAll('.clon').forEach((c) => c.remove());
  $('#conversacion').hidden = true;
  pose(algoImg, aprende ? 'rie' : 'sentado');

  if (aprende) {
    await testVisitante();
    const top = Object.entries(perfil).sort((a, b) => b[1] - a[1]).slice(0, 4);
    $('#resultado-frase').textContent = `Con ${preguntas} preguntas y ${TEST.length} respuestas, Algo ya cree que eres ${top.map(([k]) => k).slice(0, 3).join(', ')}. Y que lo sabe todo de ti.`;
    const ul = $('#grafica');
    ul.innerHTML = '';
    top.forEach(([k, v]) => {
      const li = document.createElement('li');
      li.innerHTML = `<div class="barra-rasgo"><i></i><span>${k}<em>${v}%</em></span></div>
        <div class="si-no"><button type="button" data-v="si" aria-pressed="false">sí</button><button type="button" data-v="no" aria-pressed="false">no</button></div>`;
      li.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => {
        veredicto[k] = b.dataset.v;
        li.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', x === b));
      }));
      ul.appendChild(li);
      requestAnimationFrame(() => { li.querySelector('i').style.width = v + '%'; });
    });
    $('#resultado').hidden = false;
  } else {
    $('#resultado-no').hidden = false;
  }
}

// ---------- el test sobre el visitante ----------
async function testVisitante() {
  $('#conversacion').hidden = true;
  $('#test').hidden = false;
  pose(algoImg, 'quieto');
  for (let n = 0; n < TEST.length; n++) {
    const q = TEST[n];
    $('#test-pregunta').textContent = q.pregunta;
    $('#test-paso').textContent = `${n + 1} / ${TEST.length}`;
    const op = $('#test-opciones');
    op.innerHTML = '';
    const etiqueta = await new Promise((res) => {
      q.opciones.forEach(([texto, et]) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = texto;
        b.addEventListener('click', () => res(et));
        op.appendChild(b);
      });
    });
    pose(algoImg, 'rie');
    // Algo exagera: lo que contestas lo apunta con mucha seguridad
    perfil[etiqueta] = 88 + Math.floor(Math.random() * 11);
    $('#cinta').hidden = false;
    $('#cinta-texto').textContent = Object.entries(perfil).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v}%`).join('   ·   ');
    await esperar(350);
    pose(algoImg, 'quieto');
  }
  $('#test').hidden = true;
}

function reiniciarChat() {
  aprende = null; preguntas = 0; ocupado = false; terminado = false;
  usados = new Set(); perfil = {}; veredicto = {}; ultima = '';
  ['#resultado', '#resultado-no', '#preguntar', '#cinta', '#test'].forEach((s) => { $(s).hidden = true; });
  $('#conversacion').hidden = false;
  $('#permiso').hidden = false;
  $('#pregunta-grande').textContent = '';
  $('#respuesta-grande').textContent = '';
  $('#voces').innerHTML = '';
}

$('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const t = $('#entrada-texto').value;
  $('#entrada-texto').value = '';
  preguntar(t);
});

// =============================================================
// 3 · LA HABITACIÓN DE ALGO
// =============================================================
const cuarto = $('#cuarto');
const algoCuarto = $('#algo-cuarto');
const globoCuarto = $('#globo-cuarto');
let algoX = 50;
let primeraVisita = true;

// si ya están las imágenes de Gemini, se usan; si no, se ve la habitación dibujada
let hayImagen = false;
cuarto.classList.add('sin-imagen');
['#img-algoritmo', '#img-real'].forEach((s) => {
  const img = $(s);
  img.addEventListener('load', () => {
    img.hidden = false;
    if (s === '#img-algoritmo') { hayImagen = true; $('#cuarto-dibujo').hidden = true; cuarto.classList.remove('sin-imagen'); }
  });
  if (img.complete && img.naturalWidth) img.dispatchEvent(new Event('load'));
});

OBJETOS.forEach((o) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'objeto ' + (o.modo === 'real' ? 'real' : 'alg') + (o.id === 'cuaderno' ? ' cuaderno-obj' : '');
  b.style.setProperty('--x', o.x + '%');
  b.style.setProperty('--y', o.y + '%');
  b.innerHTML = `<i></i><span>${o.id === 'cuaderno' ? 'el cuaderno de Algo' : o.nombre}</span>`;
  b.addEventListener('click', () => irObjeto(o, b));
  $('#objetos').appendChild(b);
});

function decir(texto) {
  globoCuarto.hidden = true; void globoCuarto.offsetWidth;
  globoCuarto.textContent = texto;
  globoCuarto.style.left = Math.min(Math.max(algoX, 18), 82) + '%';
  globoCuarto.style.top = (parseFloat(algoCuarto.style.bottom || '4') > 20 ? 22 : 40) + '%';
  globoCuarto.hidden = false;
}

async function irObjeto(o, boton) {
  if (ocupado) return;
  ocupado = true;
  $('#voz-real').hidden = true;
  globoCuarto.hidden = true;
  const img = algoCuarto.querySelector('img');
  const destino = Math.min(Math.max(o.x, 8), 92);
  algoCuarto.classList.toggle('izquierda', destino < algoX);
  algoCuarto.classList.add('andando');
  pose(img, 'anda');
  const paso = setInterval(() => pose(img, img.src.includes('pose-4') ? 'anda2' : 'anda'), 300);
  algoX = destino;
  algoCuarto.style.left = destino + '%';
  algoCuarto.style.bottom = Math.min(Math.max((100 - o.y) * 0.35, 3), 26) + '%';
  algoCuarto.style.setProperty('--esc', (0.72 + (o.y / 100) * 0.45).toFixed(2));
  await esperar(1300);
  clearInterval(paso);
  algoCuarto.classList.remove('andando');
  boton.classList.add('visto');

  if (o.id === 'cuaderno') {
    pose(img, 'sorpresa');
    decir('eh! q es mi cuaderno, no lo leas…');
    await esperar(1200);
    abrirCuaderno();
  } else {
    pose(img, o.modo === 'real' ? 'sorpresa' : 'habla');
    decir(o.algo);
    if (o.yo) {
      await esperar(900);
      const v = $('#voz-real');
      v.innerHTML = `<b>Manuela, de verdad</b>${o.yo}`;
      v.hidden = false;
    }
  }
  setTimeout(() => pose(img, 'quieto'), 1500);
  ocupado = false;
}

$('#interruptor').addEventListener('click', async () => {
  const real = document.body.classList.toggle('modo-real');
  $('#interruptor').setAttribute('aria-pressed', real);
  $('#voz-real').hidden = true;
  pose(algoCuarto.querySelector('img'), real ? 'sorpresa' : 'quieto');
  decir(real ? 'eh q es todo esto? esto no sale en mi feed' : 'asi mejor, todo en orden');
});

function entrarHabitacion() {
  if (!primeraVisita) return;
  primeraVisita = false;
  pose(algoCuarto.querySelector('img'), 'saluda');
  setTimeout(() => decir(terminado && aprende ? 'pasa pasa. mi cuaderno es el punto marron, el q pone «el cuaderno de Algo»' : 'pasa pasa, toca lo q quieras'), 600);
}

// ---------- el cuaderno de apuntes ----------
function abrirCuaderno() {
  const c = $('#cuaderno-contenido');
  if (aprende && terminado) {
    const items = Object.entries(perfil).sort((a, b) => b[1] - a[1]).map(([k, v]) => {
      const ver = veredicto[k];
      const nota = ver === 'si' ? ' — dices que sí' : ver === 'no' ? ' — dices que no' : '';
      return `<li class="${ver === 'no' ? 'tachado' : ''}">${k}: ${v}%${nota}</li>`;
    }).join('');
    c.innerHTML = `<h3>Apuntes sobre ti</h3><p>Con ${preguntas} preguntas apunté esto:</p><ul>${items}</ul>`;
  } else if (aprende === false) {
    c.innerHTML = '<h3>Apuntes sobre ti</h3><p>Esta página está en blanco. No me dejaste aprender de ti.</p>';
  } else {
    c.innerHTML = '<h3>Apuntes sobre ti</h3><p>Todavía no hemos hablado. Ve a «Habla con Algo», deja que aprenda de ti y vuelve.</p>';
  }
  $('#cuaderno').hidden = false;
}
$('#cerrar-cuaderno').addEventListener('click', () => { $('#cuaderno').hidden = true; });

// =============================================================
// EMPEZAR
// =============================================================
const inicio = location.hash.slice(1);
if (inicio === 'hablar' || inicio === 'habitacion') {
  introHecha = true;
  document.body.classList.add('fuera');
  $('#algo-dentro').hidden = true;
  $('#algo-fuera').classList.add('sale', 'respira');
  $('#puertas').hidden = false;
}
irA(inicio || 'entrada');
