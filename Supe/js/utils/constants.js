export const SELECTORS = {
  header: '#siteHeader', hamburger: '.hamburger', navLinks: '.nav-links',
  navAnchor: '.nav-links a', timelineButton: '.timeline-btn', filterButton: '.filter-btn',
  placesGrid: '#places-grid', galleryStage: '.gallery-stage', mainBoxes: '.mainBoxes'
};

export const DEFAULT_PLACE_IMAGE = 'assets/images/turismo/aspero.jpg';

export const historyData = {
  caral: {
    title: 'La Civilización Caral (3000 a.C.)',
    desc: 'El Valle de Supe alberga Caral, la civilización más antigua de América, con más de 5000 años de historia. En este valle se erigieron las primeras pirámides del continente, plazas ceremoniales y complejos hidráulicos. Caral es Patrimonio de la Humanidad por la UNESCO desde 2009.',
    img: 'assets/images/historia/aspero.jpg',
    chapter: 1
  },
  intermedio: {
    title: 'El Valle Intermedio',
    desc: 'Tras el florecimiento de Caral, el valle de Supe continuó siendo habitado por culturas sucesivas. Las evidencias de ocupación Chimú e Inca muestran que el valle mantuvo su importancia estratégica y agrícola a lo largo de milenios.',
    img: 'assets/images/historia/fundacion.jpg',
    chapter: 2
  },
  colonial: {
    title: 'La Colonia en el Valle',
    desc: 'Con la llegada de los españoles en el siglo XVI, el valle de Supe fue integrado al sistema de encomiendas y haciendas coloniales. La población indígena se redujo drásticamente, pero sus descendientes mantuvieron tradiciones agrícolas y artesanales.',
    img: 'assets/images/historia/japoneses.jpg',
    chapter: 3
  },
  moderno: {
    title: 'Supe Moderno',
    desc: 'A lo largo del siglo XX, Supe se consolidó como distrito agrícola de la Provincia de Barranca, con producción de algodón, espárragos y frutas tropicales. El turismo arqueológico comenzó a florecer tras el redescubrimiento de Caral en los años 90.',
    img: 'assets/images/historia/turismo.jpg',
    chapter: 4
  },
  hoy: {
    title: 'Supe Hoy',
    desc: 'El Supe actual es un distrito que vive con orgullo su herencia milenaria. Caral recibe miles de visitantes al año y la comunidad trabaja en un modelo de desarrollo sostenible que une patrimonio, agricultura y turismo de naturaleza.',
    img: 'assets/images/historia/actualidad.jpg',
    chapter: 5
  }
};

export const placesData = [
  /* CARAL */
  { name: 'Caral', category: 'caral', desc: 'La ciudad más antigua de América, con más de 5000 años. Sus seis pirámides, plazas circulares y anfiteatro revelan una civilización avanzada mucho antes que cualquier otra en el continente. Patrimonio de la Humanidad UNESCO desde 2009.', img: 'assets/images/turismo/aspero.jpg', tags: ['UNESCO', 'Milenario'] },
  { name: 'Chupacigarro', category: 'caral', desc: 'Sitio arqueológico secundario del complejo Caral, ubicado en el mismo valle. Sus estructuras revelan patrones urbanos similares a Caral, evidenciando que el Valle de Supe albergó una red de ciudades interconectadas hace 5000 años.', img: 'assets/images/turismo/playa_aspero.jpg', tags: ['Arqueología', 'Caral'] },
  { name: 'Miraya', category: 'caral', desc: 'Otro de los sitios del complejo Caral, con estructuras piramidales en proceso de investigación. Las excavaciones recientes han revelado cerámicas y objetos rituales que enriquecen la comprensión de la civilización Caral.', img: 'assets/images/turismo/mirador.jpg', tags: ['Excavación', 'Caral'] },

  /* MUSEOS */
  { name: 'Centro de Interpretación de Caral', category: 'museo', desc: 'Moderno museo en el sitio arqueológico de Caral que exhibe hallazgos exclusivos: tejidos de algodón, instrumentos musicales de hueso y objetos rituales con más de 5000 años. Imprescindible para comprender la civilización más antigua de América.', img: 'assets/images/turismo/museo.jpg', tags: ['UNESCO', 'Hallazgos únicos'] },
  { name: 'Casa de la Cultura de Supe', category: 'museo', desc: 'Espacio cultural del distrito que alberga réplicas de artefactos de Caral, fotografías de excavaciones y una sala interactiva sobre la vida cotidiana en el Valle de Supe hace 5000 años. Ideal para familias y grupos escolares.', img: 'assets/images/turismo/reloj.jpg', tags: ['Educativo', 'Réplicas'] },

  /* NATURALEZA */
  { name: 'Valle del Supe', category: 'naturaleza', desc: 'El verde valle regado por el río Supe ofrece paisajes de gran belleza agrícola. Sus campos de algodón nativo, espárragos y frutales contrastan con el desierto costero, creando un ecosistema único de enorme valor biogeográfico.', img: 'assets/images/turismo/totoral.jpg', tags: ['Paisaje', 'Agricultura'] },
  { name: 'Río Supe', category: 'naturaleza', desc: 'El río que dio vida a la civilización más antigua de América. Sus aguas recorren el valle entre campos y restos arqueológicos, ofreciendo rutas de ciclismo y caminata con vistas únicas de las pirámides de Caral al fondo.', img: 'assets/images/turismo/malecon.jpg', tags: ['Río', 'Ciclismo'] },
  { name: 'Lomas de Supe', category: 'naturaleza', desc: 'Durante los meses de junio a noviembre, las lomas que rodean el valle de Supe se cubren de vegetación gracias a la camanchaca. Este ecosistema único alberga flora endémica y aves silvestres, ideal para el ecoturismo.', img: 'assets/images/turismo/cerro_san_jose.jpg', tags: ['Lomas', 'Flora'] },

  /* CULTURA */
  { name: 'Pueblo de Supe', category: 'cultura', desc: 'El distrito de Supe conserva una arquitectura vernacular de gran carácter. Su mercado, su plaza y sus casonas muestran la vida cotidiana de una comunidad orgullosa de su herencia milenaria y agrícola.', img: 'assets/images/turismo/plaza_bandera.jpg', tags: ['Cultura', 'Mercado'] }
];

export const galleryImages = [
  'assets/images/gallery/g1.jpg', 'assets/images/gallery/g2.jpg',
  'assets/images/gallery/g3.jpg', 'assets/images/gallery/g4.jpg',
  'assets/images/gallery/g5.jpg', 'assets/images/gallery/g6.jpg',
  'assets/images/gallery/g7.jpg', 'assets/images/gallery/g8.jpg',
  'assets/images/gallery/g9.jpg', 'assets/images/gallery/g10.jpg',
  'assets/images/gallery/g11.jpg', 'assets/images/gallery/g12.jpg'
];
