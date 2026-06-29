export const SELECTORS = {
  header: '#siteHeader', hamburger: '.hamburger', navLinks: '.nav-links',
  navAnchor: '.nav-links a', timelineButton: '.timeline-btn', filterButton: '.filter-btn',
  placesGrid: '#places-grid', galleryStage: '.gallery-stage', mainBoxes: '.mainBoxes'
};

export const DEFAULT_PLACE_IMAGE = 'https://picsum.photos/seed/barranca-playa/800/600';

export const historyData = {
  colonial: {
    title: 'Los Orígenes Coloniales',
    desc: 'Barranca fue fundada en el siglo XVI como enclave colonial en la costa norte de Lima. Su ubicación estratégica en la desembocadura del río Pativilca la convirtió en punto de paso obligado entre Lima y el norte del Perú, favoreciendo el comercio y la ocupación de sus fértiles tierras.',
    img: 'https://picsum.photos/seed/barranca-colonial/800/600',
    chapter: 1
  },
  algodon: {
    title: 'El Algodón y la Hacienda',
    desc: 'A lo largo del siglo XIX, los valles de Barranca se convirtieron en importantes productores de algodón y caña de azúcar. Las grandes haciendas organizaron la economía local, atrayendo trabajadores migrantes que enriquecieron la cultura del lugar con nuevas tradiciones y sabores.',
    img: 'https://picsum.photos/seed/hacienda-algodon/800/600',
    chapter: 2
  },
  industria: {
    title: 'Puerto y Pesca',
    desc: 'Con el crecimiento pesquero del siglo XX, Barranca consolidó su identidad costera. Los mercados de pescado fresco, las caletas y el trabajo de los pescadores artesanales dieron forma a una economía popular que aún late en sus muelles y mercados.',
    img: 'https://picsum.photos/seed/barranca-pesca-muelle/800/600',
    chapter: 3
  },
  crecimiento: {
    title: 'Crecimiento Urbano',
    desc: 'Entre 1960 y 1990, Barranca experimentó un fuerte crecimiento demográfico y urbano. La construcción del malecón, nuevos barrios residenciales y la mejora de infraestructura vial la posicionaron como el centro comercial y administrativo más importante de la provincia.',
    img: 'https://picsum.photos/seed/barranca-urbanismo/800/600',
    chapter: 4
  },
  hoy: {
    title: 'Barranca Hoy',
    desc: 'La Barranca actual es una ciudad costera vibrante que combina comercio, gastronomía y turismo. Sus playas, su malecón y la célebre cachanga barranquina atraen visitantes de toda la región. La ciudad es también puerta de acceso a la Fortaleza de Paramonga y al sitio arqueológico de Caral.',
    img: 'https://picsum.photos/seed/barranca-hoy-ciudad/800/600',
    chapter: 5
  }
};

export const placesData = [
  /* PLAYAS */
  { name: 'Playa Chorrillos', category: 'playas', desc: 'La playa más concurrida de Barranca. Arena dorada, olas moderadas y servicios turísticos completos. Ideal para familias, surf y deportes acuáticos en temporada de verano.', img: 'https://picsum.photos/seed/playa-chorrillos-barr/800/600', tags: ['Verano', 'Familias'] },
  { name: 'Playa Las Totoritas', category: 'playas', desc: 'Playa tranquila y poco transitada, ideal para quienes buscan descanso. Sus aguas calmas y su entorno natural la hacen perfecta para observación de aves costeras y caminatas al atardecer.', img: 'https://picsum.photos/seed/totoritas-barr/800/600', tags: ['Tranquila', 'Naturaleza'] },

  /* MUSEOS */
  { name: 'Museo Municipal de Barranca', category: 'museo', desc: 'Museo local que alberga colecciones arqueológicas, documentos históricos y fotografías de la Provincia de Barranca desde la época preinca hasta el siglo XX. Entrada libre los domingos.', img: 'https://picsum.photos/seed/museo-barranc-1/800/600', tags: ['Arqueología', 'Historia local'] },
  { name: 'Biblioteca Municipal — Sala Histórica', category: 'museo', desc: 'Espacio de memoria y cultura que conserva hemerotecas, mapas coloniales y el archivo fotográfico más completo de la provincia. Organiza exposiciones itinerantes sobre patrimonio barranquino.', img: 'https://picsum.photos/seed/biblioteca-barr/800/600', tags: ['Cultura', 'Educación'] },

  /* CULTURA */
  { name: 'Malecón F. Bolognesi', category: 'cultura', desc: 'El corazón del turismo barranquino. Paseo marítimo con vista panorámica al Pacífico, bancas, iluminación nocturna y puestos de la famosa cachanga. El punto de encuentro de locales y visitantes.', img: 'https://picsum.photos/seed/malecon-barranca/800/600', tags: ['Atardecer', 'Gastronomía'] },
  { name: 'Plaza de Armas', category: 'cultura', desc: 'Centro histórico y cívico de la ciudad. La iglesia, el municipio y el parque central configuran el corazón de Barranca, donde se celebran las principales festividades y mercados locales.', img: 'https://picsum.photos/seed/plaza-barranca/800/600', tags: ['Historia', 'Fotos'] },
  { name: 'Caleta de Pescadores', category: 'cultura', desc: 'El alma portuaria de Barranca. Cada mañana, los botes regresan cargados de pesca fresca que se comercializa directamente en el muelle. Experiencia auténtica de la vida costera.', img: 'https://picsum.photos/seed/caleta-barranquina/800/600', tags: ['Pesca', 'Mañana'] },

  /* NATURALEZA */
  { name: 'Cerro Colorado', category: 'naturaleza', desc: 'Elevación natural al norte de la ciudad con senderos de trekking y vistas panorámicas del valle. Ideal para excursionistas y fotógrafos en busca de amanecer o atardecer sobre el Pacífico.', img: 'https://picsum.photos/seed/cerro-colorado-barr/800/600', tags: ['Trekking', 'Vistas'] },
  { name: 'Laguna de Ocucho', category: 'naturaleza', desc: 'Pequeño humedal costero cercano a la ciudad donde habitan diversas aves migratorias. Un refugio de biodiversidad en el litoral barranquino, ideal para ecoturismo y avistamiento de aves.', img: 'https://picsum.photos/seed/laguna-ocucho/800/600', tags: ['Aves', 'Ecoturismo'] }
];

export const galleryImages = [
  'https://picsum.photos/seed/galeria-barr-1/800/600', 'https://picsum.photos/seed/galeria-barr-2/800/600',
  'https://picsum.photos/seed/galeria-barr-3/800/600', 'https://picsum.photos/seed/galeria-barr-4/800/600',
  'https://picsum.photos/seed/galeria-barr-5/800/600', 'https://picsum.photos/seed/galeria-barr-6/800/600',
  'https://picsum.photos/seed/galeria-barr-7/800/600', 'https://picsum.photos/seed/galeria-barr-8/800/600',
  'https://picsum.photos/seed/galeria-barr-9/800/600', 'https://picsum.photos/seed/galeria-barr-10/800/600',
  'https://picsum.photos/seed/galeria-barr-11/800/600', 'https://picsum.photos/seed/galeria-barr-12/800/600'
];
