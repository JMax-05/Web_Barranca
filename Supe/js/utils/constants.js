export const SELECTORS = {
  header: '#siteHeader', hamburger: '.hamburger', navLinks: '.nav-links',
  navAnchor: '.nav-links a', timelineButton: '.timeline-btn', filterButton: '.filter-btn',
  placesGrid: '#places-grid', galleryStage: '.gallery-stage', mainBoxes: '.mainBoxes'
};

export const DEFAULT_PLACE_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Caral_01.jpg/800px-Caral_01.jpg';

export const historyData = {
  caral: {
    title: 'La Civilización Caral (3000 a.C.)',
    desc: 'El Valle de Supe alberga Caral, la civilización más antigua de América, con más de 5000 años de historia. En este valle se erigieron las primeras pirámides del continente, plazas ceremoniales y complejos hidráulicos. Caral es Patrimonio de la Humanidad por la UNESCO desde 2009.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Caral_01.jpg/800px-Caral_01.jpg',
    chapter: 1
  },
  intermedio: {
    title: 'El Valle Intermedio',
    desc: 'Tras el florecimiento de Caral, el valle de Supe continuó siendo habitado por culturas sucesivas. Las evidencias de ocupación Chimú e Inca muestran que el valle mantuvo su importancia estratégica y agrícola a lo largo de milenios.',
    img: 'https://picsum.photos/seed/valle-supe-intermedio/800/600',
    chapter: 2
  },
  colonial: {
    title: 'La Colonia en el Valle',
    desc: 'Con la llegada de los españoles en el siglo XVI, el valle de Supe fue integrado al sistema de encomiendas y haciendas coloniales. La población indígena se redujo drásticamente, pero sus descendientes mantuvieron tradiciones agrícolas y artesanales.',
    img: 'https://picsum.photos/seed/colonia-valle-supe/800/600',
    chapter: 3
  },
  moderno: {
    title: 'Supe Moderno',
    desc: 'A lo largo del siglo XX, Supe se consolidó como distrito agrícola de la Provincia de Barranca, con producción de algodón, espárragos y frutas tropicales. El turismo arqueológico comenzó a florecer tras el redescubrimiento de Caral en los años 90.',
    img: 'https://picsum.photos/seed/supe-moderno/800/600',
    chapter: 4
  },
  hoy: {
    title: 'Supe Hoy',
    desc: 'El Supe actual es un distrito que vive con orgullo su herencia milenaria. Caral recibe miles de visitantes al año y la comunidad trabaja en un modelo de desarrollo sostenible que une patrimonio, agricultura y turismo de naturaleza.',
    img: 'https://picsum.photos/seed/supe-hoy-valle/800/600',
    chapter: 5
  }
};

export const placesData = [
  /* CARAL */
  { name: 'Caral', category: 'caral', desc: 'La ciudad más antigua de América, con más de 5000 años. Sus seis pirámides, plazas circulares y anfiteatro revelan una civilización avanzada mucho antes que cualquier otra en el continente. Patrimonio de la Humanidad UNESCO desde 2009.', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Caral_01.jpg/800px-Caral_01.jpg', tags: ['UNESCO', 'Milenario'] },
  { name: 'Chupacigarro', category: 'caral', desc: 'Sitio arqueológico secundario del complejo Caral, ubicado en el mismo valle. Sus estructuras revelan patrones urbanos similares a Caral, evidenciando que el Valle de Supe albergó una red de ciudades interconectadas hace 5000 años.', img: 'https://picsum.photos/seed/chupacigarro-supe/800/600', tags: ['Arqueología', 'Caral'] },
  { name: 'Miraya', category: 'caral', desc: 'Otro de los sitios del complejo Caral, con estructuras piramidales en proceso de investigación. Las excavaciones recientes han revelado cerámicas y objetos rituales que enriquecen la comprensión de la civilización Caral.', img: 'https://picsum.photos/seed/miraya-caral/800/600', tags: ['Excavación', 'Caral'] },

  /* MUSEOS */
  { name: 'Centro de Interpretación de Caral', category: 'museo', desc: 'Moderno museo en el sitio arqueológico de Caral que exhibe hallazgos exclusivos: tejidos de algodón, instrumentos musicales de hueso y objetos rituales con más de 5000 años. Imprescindible para comprender la civilización más antigua de América.', img: 'https://picsum.photos/seed/museo-caral-centro/800/600', tags: ['UNESCO', 'Hallazgos únicos'] },
  { name: 'Casa de la Cultura de Supe', category: 'museo', desc: 'Espacio cultural del distrito que alberga réplicas de artefactos de Caral, fotografías de excavaciones y una sala interactiva sobre la vida cotidiana en el Valle de Supe hace 5000 años. Ideal para familias y grupos escolares.', img: 'https://picsum.photos/seed/casa-cultura-supe/800/600', tags: ['Educativo', 'Réplicas'] },

  /* NATURALEZA */
  { name: 'Valle del Supe', category: 'naturaleza', desc: 'El verde valle regado por el río Supe ofrece paisajes de gran belleza agrícola. Sus campos de algodón nativo, espárragos y frutales contrastan con el desierto costero, creando un ecosistema único de enorme valor biogeográfico.', img: 'https://picsum.photos/seed/valle-supe-verde/800/600', tags: ['Paisaje', 'Agricultura'] },
  { name: 'Río Supe', category: 'naturaleza', desc: 'El río que dio vida a la civilización más antigua de América. Sus aguas recorren el valle entre campos y restos arqueológicos, ofreciendo rutas de ciclismo y caminata con vistas únicas de las pirámides de Caral al fondo.', img: 'https://picsum.photos/seed/rio-supe-caral/800/600', tags: ['Río', 'Ciclismo'] },
  { name: 'Lomas de Supe', category: 'naturaleza', desc: 'Durante los meses de junio a noviembre, las lomas que rodean el valle de Supe se cubren de vegetación gracias a la camanchaca. Este ecosistema único alberga flora endémica y aves silvestres, ideal para el ecoturismo.', img: 'https://picsum.photos/seed/lomas-supe/800/600', tags: ['Lomas', 'Flora'] },

  /* CULTURA */
  { name: 'Pueblo de Supe', category: 'cultura', desc: 'El distrito de Supe conserva una arquitectura vernacular de gran carácter. Su mercado, su plaza y sus casonas muestran la vida cotidiana de una comunidad orgullosa de su herencia milenaria y agrícola.', img: 'https://picsum.photos/seed/pueblo-supe-mercado/800/600', tags: ['Cultura', 'Mercado'] }
];

export const galleryImages = [
  'https://picsum.photos/seed/galeria-supe-d1/800/600', 'https://picsum.photos/seed/galeria-supe-d2/800/600',
  'https://picsum.photos/seed/galeria-supe-d3/800/600', 'https://picsum.photos/seed/galeria-supe-d4/800/600',
  'https://picsum.photos/seed/galeria-supe-d5/800/600', 'https://picsum.photos/seed/galeria-supe-d6/800/600',
  'https://picsum.photos/seed/galeria-supe-d7/800/600', 'https://picsum.photos/seed/galeria-supe-d8/800/600',
  'https://picsum.photos/seed/galeria-supe-d9/800/600', 'https://picsum.photos/seed/galeria-supe-d10/800/600',
  'https://picsum.photos/seed/galeria-supe-d11/800/600', 'https://picsum.photos/seed/galeria-supe-d12/800/600'
];
