// Botones «lo real» / «lo del algoritmo» del chat con Algo.
// De momento solo marcan tu respuesta: el chat de verdad llegará en otra versión.
const votos = document.querySelectorAll('.voto');
const nota = document.querySelector('.voto-nota');

votos.forEach((voto) => {
  voto.addEventListener('click', () => {
    votos.forEach((v) => v.setAttribute('aria-pressed', 'false'));
    voto.setAttribute('aria-pressed', 'true');
    nota.textContent = voto.textContent === 'lo real'
      ? 'Para ti, Algo me ha pillado. Pronto podrás hablar con él tú mismo.'
      : 'Para ti, esto es lo que cree el algoritmo. Pronto podrás hablar con Algo tú mismo.';
    nota.hidden = false;
  });
});

// Menú: la píldora del apartado en el que estás se pone lima.
const pildoras = document.querySelectorAll('.pildoras a');
const apartados = [...pildoras].map((p) => document.querySelector(p.getAttribute('href')));

function marcarApartado() {
  let actual = apartados[0];
  apartados.forEach((a) => {
    if (a.getBoundingClientRect().top < window.innerHeight * 0.4) actual = a;
  });
  pildoras.forEach((p) => {
    const es = p.getAttribute('href') === '#' + actual.id;
    if (es && !p.classList.contains('actual')) {
      // en el móvil, que la píldora activa se vea aunque la fila sea más ancha que la pantalla
      const fila = p.parentElement;
      fila.scrollTo({ left: p.offsetLeft - 24, behavior: 'smooth' });
    }
    p.classList.toggle('actual', es);
  });
}
window.addEventListener('scroll', marcarApartado, { passive: true });
marcarApartado();

// Menú: al bajar, fondo transparente al 50 %; arriba del todo, blanco.
const menu = document.querySelector('.menu');
function fondoMenu() {
  menu.classList.toggle('bajando', window.scrollY > 10);
}
window.addEventListener('scroll', fondoMenu, { passive: true });
fondoMenu();
