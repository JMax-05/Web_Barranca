export const SELECTORS = {
  header: '#siteHeader', hamburger: '.hamburger', navLinks: '.nav-links',
  navAnchor: '.nav-links a', timelineButton: '.timeline-btn', filterButton: '.filter-btn',
  placesGrid: '#places-grid', galleryStage: '.gallery-stage', mainBoxes: '.mainBoxes'
};

export const DEFAULT_PLACE_IMAGE = 'assets/images/turismo/playa.jpg';

export const historyData = {
  colonial: {
    title: 'Los Orígenes Coloniales',
    desc: 'Barranca fue fundada en el siglo XVI como enclave colonial en la costa norte de Lima. Su ubicación estratégica en la desembocadura del río Pativilca la convirtió en punto de paso obligado entre Lima y el norte del Perú, favoreciendo el comercio y la ocupación de sus fértiles tierras.',
    img: 'assets/images/historia/aspero.jpg',
    chapter: 1
  },
  algodon: {
    title: 'El Algodón y la Hacienda',
    desc: 'A lo largo del siglo XIX, los valles de Barranca se convirtieron en importantes productores de algodón y caña de azúcar. Las grandes haciendas organizaron la economía local, atrayendo trabajadores migrantes que enriquecieron la cultura del lugar con nuevas tradiciones y sabores.',
    img: 'assets/images/historia/fundacion.jpg',
    chapter: 2
  },
  industria: {
    title: 'Puerto y Pesca',
    desc: 'Con el crecimiento pesquero del siglo XX, Barranca consolidó su identidad costera. Los mercados de pescado fresco, las caletas y el trabajo de los pescadores artesanales dieron forma a una economía popular que aún late en sus muelles y mercados.',
    img: 'assets/images/historia/japoneses.jpg',
    chapter: 3
  },
  crecimiento: {
    title: 'Crecimiento Urbano',
    desc: 'Entre 1960 y 1990, Barranca experimentó un fuerte crecimiento demográfico y urbano. La construcción del malecón, nuevos barrios residenciales y la mejora de infraestructura vial la posicionaron como el centro comercial y administrativo más importante de la provincia.',
    img: 'assets/images/historia/turismo.jpg',
    chapter: 4
  },
  hoy: {
    title: 'Barranca Hoy',
    desc: 'La Barranca actual es una ciudad costera vibrante que combina comercio, gastronomía y turismo. Sus playas, su malecón y la célebre cachanga barranquina atraen visitantes de toda la región. La ciudad es también puerta de acceso a la Fortaleza de Paramonga y al sitio arqueológico de Caral.',
    img: 'assets/images/historia/actualidad.jpg',
    chapter: 5
  }
};

export const placesData = [
  /* PLAYAS */
  { name: 'Playa Chorrillos', category: 'playas', desc: 'La playa más concurrida de Barranca. Arena dorada, olas moderadas y servicios turísticos completos. Ideal para familias, surf y deportes acuáticos en temporada de verano.', img: 'assets/images/turismo/playa.jpg', tags: ['Verano', 'Familias'] },
  { name: 'Playa Las Totoritas', category: 'playas', desc: 'Playa tranquila y poco transitada, ideal para quienes buscan descanso. Sus aguas calmas y su entorno natural la hacen perfecta para observación de aves costeras y caminatas al atardecer.', img: 'assets/images/turismo/playa_aspero.jpg', tags: ['Tranquila', 'Naturaleza'] },

  /* MUSEOS */
  { name: 'Museo Municipal de Barranca', category: 'museo', desc: 'Museo local que alberga colecciones arqueológicas, documentos históricos y fotografías de la Provincia de Barranca desde la época preinca hasta el siglo XX. Entrada libre los domingos.', img: 'assets/images/turismo/museo.jpg', tags: ['Arqueología', 'Historia local'] },
  { name: 'Biblioteca Municipal — Sala Histórica', category: 'museo', desc: 'Espacio de memoria y cultura que conserva hemerotecas, mapas coloniales y el archivo fotográfico más completo de la provincia. Organiza exposiciones itinerantes sobre patrimonio barranquino.', img: 'assets/images/turismo/reloj.jpg', tags: ['Cultura', 'Educación'] },

  /* CULTURA */
  { name: 'Malecón F. Bolognesi', category: 'cultura', desc: 'El corazón del turismo barranquino. Paseo marítimo con vista panorámica al Pacífico, bancas, iluminación nocturna y puestos de la famosa cachanga. El punto de encuentro de locales y visitantes.', img: 'assets/images/turismo/malecon.jpg', tags: ['Atardecer', 'Gastronomía'] },
  { name: 'Plaza de Armas', category: 'cultura', desc: 'Centro histórico y cívico de la ciudad. La iglesia, el municipio y el parque central configuran el corazón de Barranca, donde se celebran las principales festividades y mercados locales.', img: 'assets/images/turismo/plaza_bandera.jpg', tags: ['Historia', 'Fotos'] },
  { name: 'Caleta de Pescadores', category: 'cultura', desc: 'El alma portuaria de Barranca. Cada mañana, los botes regresan cargados de pesca fresca que se comercializa directamente en el muelle. Experiencia auténtica de la vida costera.', img: 'assets/images/turismo/muelle.jpg', tags: ['Pesca', 'Mañana'] },

  /* NATURALEZA */
  { name: 'Cerro Colorado', category: 'naturaleza', desc: 'Elevación natural al norte de la ciudad con senderos de trekking y vistas panorámicas del valle. Ideal para excursionistas y fotógrafos en busca de amanecer o atardecer sobre el Pacífico.', img: 'assets/images/turismo/cerro_san_jose.jpg', tags: ['Trekking', 'Vistas'] },
  { name: 'Laguna de Ocucho', category: 'naturaleza', desc: 'Pequeño humedal costero cercano a la ciudad donde habitan diversas aves migratorias. Un refugio de biodiversidad en el litoral barranquino, ideal para ecoturismo y avistamiento de aves.', img: 'assets/images/turismo/totoral.jpg', tags: ['Aves', 'Ecoturismo'] }
];

export const galleryImages = [
  'assets/images/gallery/g1.jpg', 'assets/images/gallery/g2.jpg',
  'assets/images/gallery/g3.jpg', 'assets/images/gallery/g4.jpg',
  'assets/images/gallery/g5.jpg', 'assets/images/gallery/g6.jpg',
  'assets/images/gallery/g7.jpg', 'assets/images/gallery/g8.jpg',
  'assets/images/gallery/g9.jpg', 'assets/images/gallery/g10.jpg',
  'assets/images/gallery/g11.jpg', 'assets/images/gallery/g12.jpg'
];
