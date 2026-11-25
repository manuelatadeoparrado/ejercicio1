// =============================================================
// DATOS DE LA WEB
// · algo: lo que contesta Algo (mis datos de Instagram, oct. 2026, y lo que se inventa a partir de ellos)
// · yo:   lo que contesto yo de verdad (mi test de autoconocimiento, nov. 2026). "" = sin contestar
// · gente: respuestas de la gente que me conoce (test de amigos, pendiente). Se añaden aquí.
// · perfil: la etiqueta que Algo le pone al visitante por preguntar esto
// · claves: palabras que llevan a este tema si el visitante escribe
// =============================================================

const TEMAS = {
  viernes: {
    pregunta: '¿qué haces un viernes a la 1?',
    claves: ['viernes', 'la 1', 'una de la', 'madrugada', 'noche', 'finde', 'sabado', 'sábado'],
    algo: 'tarde tía, a esa hora estoy cn el movil fijo',
    yo: 'trabajando',
    gente: [],
    perfil: 'nocturno/a'
  },
  define: {
    pregunta: '¿qué es lo que más te define?',
    claves: ['define', 'definirias', 'definirías', 'como eres', 'cómo eres', 'quien eres', 'quién eres', 'personalidad'],
    algo: 'el gym, obvio',
    yo: 'no sé',
    gente: [],
    perfil: 'busca etiquetas'
  },
  libre: {
    pregunta: '¿qué harías un día libre?',
    claves: ['dia libre', 'día libre', 'tiempo libre', 'planes', 'plan', 'hobby'],
    algo: 'festival, sin dudarlo',
    yo: 'todas: playa, festival, gym o quedarme en casa',
    gente: [],
    perfil: 'busca planes'
  },
  comprar: {
    pregunta: '¿te gusta comprar?',
    claves: ['comprar', 'compras', 'ropa', 'tienda', 'moda', 'vintage', 'dinero'],
    algo: 'me flipa, instagram dice q soy compradora activa',
    yo: 'sí. ropa, bastante',
    gente: [],
    perfil: 'comprador/a compulsivo/a'
  },
  planear: {
    pregunta: '¿planeas o improvisas?',
    claves: ['planea', 'planear', 'improvis', 'organiza'],
    algo: 'lo planeo todo, por eso guardo tantas cosas pa luego',
    yo: 'improviso',
    gente: [],
    perfil: 'controlador/a'
  },
  conoces: {
    pregunta: '¿te conoces bien?',
    claves: ['conoces', 'conocerte', 'te conoces', 'sabes quien', 'sabes quién'],
    algo: 'perfectamente, 2.244 likes no mienten',
    yo: 'a ratos',
    gente: [],
    perfil: 'filósofo/a'
  },
  movil: {
    pregunta: '¿cuánto rato estás con el móvil?',
    claves: ['movil', 'móvil', 'horas', 'pantalla', 'scroll', 'reels'],
    algo: 'un monton, sobre todo de 10 a 11 de la noche',
    yo: '4 h 30 de media',
    gente: [],
    perfil: 'adicto/a al scroll'
  },
  techno: {
    pregunta: '¿te gusta el techno?',
    claves: ['techno', 'musica', 'música', 'festival', 'fiesta', 'salir'],
    algo: 'techno y festivales, ahi estoy',
    yo: 'sí',
    gente: [],
    perfil: 'fiestero/a'
  },
  perros: {
    pregunta: '¿te gustan los perros?',
    claves: ['perro', 'perros', 'mascota', 'animal', 'animales', 'julio', 'gato'],
    algo: 'nono, los perros no me van, casi nunca les doy like',
    yo: 'sí. tengo un jack russell, se llama julio',
    gente: [],
    perfil: 'amante de los animales'
  },
  coches: {
    pregunta: '¿te gustan los coches?',
    claves: ['coche', 'coches', 'moto', 'motos', 'bmw', 'miata', 'conducir', 'carnet'],
    algo: 'nah, apenas les doy like',
    yo: 'sí. coches y motos',
    gente: [],
    perfil: 'quemado/a de gasolina'
  },
  fias: {
    pregunta: '¿te fías de Instagram?',
    claves: ['fias', 'fías', 'confias', 'confías', 'instagram', 'algoritmo'],
    algo: 'claro, me conoce mejor q nadie',
    yo: 'no',
    gente: [],
    perfil: 'desconfiado/a'
  },
  timida: {
    pregunta: '¿eres tímida?',
    claves: ['timida', 'tímida', 'vergüenza', 'verguenza', 'cortada'],
    algo: 'q va, me paso el dia likeando memes',
    yo: 'depende',
    gente: [],
    perfil: 'cotilla'
  },
  misma: {
    pregunta: '¿eres igual en persona que por mensaje?',
    claves: ['en persona', 'mensaje', 'whatsapp', 'misma'],
    algo: 'igualita',
    yo: 'depende',
    gente: [],
    perfil: 'busca la verdad'
  },
  sube: {
    pregunta: '¿subes mucho a Instagram?',
    claves: ['subes', 'publicas', 'posts', 'publicaciones', 'stories'],
    algo: 'poco, 9 publicaciones en un año. pero miro todo',
    yo: 'no',
    gente: [],
    perfil: 'mirón/a'
  },
  ambiciosa: {
    pregunta: '¿eres ambiciosa?',
    claves: ['ambiciosa', 'ambicion', 'ambición', 'futuro', 'metas'],
    algo: 'si, gym todos los dias',
    yo: 'sí',
    gente: [],
    perfil: 'ambicioso/a'
  },
  hablas: {
    pregunta: '¿hablas como Manuela?',
    claves: ['hablas como', 'habla como', 'te pareces', 'se parece', 'eres ella', 'eres manuela'],
    algo: 'q va, hablo igualito q ella',
    yo: 'no se parece',
    gente: [],
    perfil: 'escéptico/a'
  },
  hola: {
    pregunta: null,
    claves: ['hola', 'buenas', 'holi', 'que tal', 'qué tal'],
    algo: 'holaa q tal',
    yo: '',
    gente: [],
    perfil: 'educado/a'
  }
};

// Cuando Algo no sabe de qué le hablas, nunca dice "no lo sé": se lo inventa con mis datos.
const INVENTOS = [
  'mmm por lo q veo en mi feed diria q si, sobre todo de noche',
  'eso tiene q ver cn el gym seguro',
  'lo vi en un reel, me suena muchisimo',
  'como en barcelona, pero en festival',
  'tengo un gato, creo'
];

// =============================================================
// LAS DOS HABITACIONES
// Modo algoritmo: la habitación que se imagina Instagram. Algo la enseña muy seguro.
// Modo real: mi habitación de verdad. Algo no entiende nada y sale lo que digo yo.
// x, y: dónde está cada cosa en su imagen (en %)
// =============================================================
const OBJETOS = [
  // --- modo algoritmo (img/habitacion-algoritmo.png) ---
  { modo: 'algoritmo', id: 'nevera',   nombre: 'la nevera',   x: 17, y: 48, algo: 'recetas guardadas y corazoncitos, muy yo' },
  { modo: 'algoritmo', id: 'laminas',  nombre: 'las láminas', x: 31, y: 24, algo: 'guardo casas bonitas todo el rato, me flipa la arquitectura' },
  { modo: 'algoritmo', id: 'tatuajes', nombre: 'el corcho',   x: 39, y: 51, algo: 'tatuajes, tengo un monton de ideas guardadas' },
  { modo: 'algoritmo', id: 'bolsas',   nombre: 'las bolsas',  x: 32, y: 62, algo: 'compradora activa, lo dice instagram' },
  { modo: 'algoritmo', id: 'pesas',    nombre: 'las pesas',   x: 37, y: 86, algo: 'el gym es lo q mas me define' },
  { modo: 'algoritmo', id: 'altavoz',  nombre: 'la música',   x: 59, y: 40, algo: 'techno y solo techno' },
  { modo: 'algoritmo', id: 'cuaderno', nombre: 'el cuaderno', x: 52, y: 60, algo: 'mi cuaderno de apuntes' },
  { modo: 'algoritmo', id: 'perchero', nombre: 'el perchero', x: 84, y: 42, algo: 'ropa vintage en tonos tierra, mi rollo' },
  { modo: 'algoritmo', id: 'maleta',   nombre: 'la maleta',   x: 76, y: 78, algo: 'viajera frecuente, la maleta siempre lista' },
  // --- modo real (img/habitacion-real.png, hecha con Gemini a partir de fotos de mi cuarto) ---
  { modo: 'real', id: 'julio',    nombre: 'Julio',             x: 53, y: 66, algo: '¿un perro? q va, si nunca les doy like', yo: 'es julio, mi jack russell' },
  { modo: 'real', id: 'coches',   nombre: 'el póster',         x: 62, y: 24, algo: 'coches? eso no es mio, apenas les doy like', yo: 'me gustan los coches y las motos' },
  { modo: 'real', id: 'lego',     nombre: 'el coche rosa',     x: 46, y: 20, algo: 'un juguete? ni idea de q es', yo: 'mi lego del coche de suki, de fast and furious' },
  { modo: 'real', id: 'movil',    nombre: 'el móvil',          x: 32, y: 64, algo: 'el movil es mi casa', yo: '4 h 30 al día de media' },
  { modo: 'real', id: 'ropa',     nombre: 'la ropa',           x: 65, y: 53, algo: 'esto no es vintage ni tonos tierra…', yo: 'mi abrigo negro de plumas con pelo en la capucha. y sí, soy un poco desordenada' },
  { modo: 'real', id: 'bolsa',    nombre: 'la bolsa',          x: 72, y: 78, algo: '¿y mi maleta con pegatinas? soy viajera frecuente', yo: 'uso una bolsa de deporte, tipo eastpak' },
  { modo: 'real', id: 'gorro',    nombre: 'el gorro',          x: 50, y: 80, algo: 'mi gorro!', yo: 'el gorro lima es mío de verdad. por eso lo lleva Algo' },
  { modo: 'real', id: 'bolsas2',  nombre: 'las bolsas',        x: 55, y: 55, algo: 'compradora activa, lo ves?', yo: 'sí, esto lo acierta' },
  { modo: 'real', id: 'uni',      nombre: 'los papeles',       x: 45, y: 36, algo: 'recetas guardadas, seguro', yo: 'trabajos de la uni. ahí acumulo cosas' },
  { modo: 'real', id: 'cuaderno', nombre: 'el cuaderno',       x: 79, y: 46, algo: 'mi cuaderno de apuntes' }
];

// El feed del móvil de la entrada (temas que más likeo, de mis datos)
const FEED = [
  { tema: 'gym', color: 'lima', likes: '2.1k' },
  { tema: 'techno', color: 'marron', likes: '980' },
  { tema: 'arquitectura', color: 'beige', likes: '3.4k' },
  { tema: 'memes', color: 'crema', likes: '12k' },
  { tema: 'tatuajes', color: 'caramelo', likes: '640' },
  { tema: 'barcelona', color: 'lima', likes: '1.8k' },
  { tema: 'vintage', color: 'beige', likes: '720' },
  { tema: 'recetas', color: 'crema', likes: '5.6k' },
  { tema: 'festivales', color: 'marron', likes: '4.2k' },
  { tema: 'graffiti', color: 'caramelo', likes: '310' }
];

// =============================================================
// EL TEST SOBRE TI (cuando Algo se satura, te pregunta a ti)
// Cada respuesta le da a Algo una etiqueta sobre ti… y él exagera.
// =============================================================
const TEST = [
  { pregunta: '¿a qué hora miras más el móvil?', opciones: [
    ['por la mañana', 'madrugador/a'], ['por la tarde', 'de siesta y scroll'], ['por la noche', 'nocturno/a'], ['todo el día', 'adicto/a al scroll'] ] },
  { pregunta: '¿qué te sale más en el feed?', opciones: [
    ['memes', 'busca memes'], ['moda', 'comprador/a compulsivo/a'], ['deporte', 'obsesionado/a con el gym'], ['viajes', 'viajero/a frecuente'] ] },
  { pregunta: '¿perros o gatos?', opciones: [
    ['perros', 'amante de los perros'], ['gatos', 'de gatos'], ['los dos', 'amante de los animales'], ['ninguno', 'no le gustan los animales'] ] },
  { pregunta: '¿has comprado algo por un anuncio de Instagram?', opciones: [
    ['sí', 'compra por impulso'], ['no', 'resistente a los anuncios'], ['no me acuerdo', 'compra sin darse cuenta'] ] },
  { pregunta: '¿te fías de lo que te sale en Instagram?', opciones: [
    ['sí', 'confiado/a'], ['no', 'desconfiado/a'], ['a veces', 'indeciso/a'] ] }
];
