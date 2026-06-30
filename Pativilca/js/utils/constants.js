export const SELECTORS = {
  header: '#siteHeader', hamburger: '.hamburger', navLinks: '.nav-links',
  navAnchor: '.nav-links a', timelineButton: '.timeline-btn', filterButton: '.filter-btn',
  placesGrid: '#places-grid', galleryStage: '.gallery-stage', mainBoxes: '.mainBoxes'
};

export const DEFAULT_PLACE_IMAGE = 'assets/images/turismo/museo.jpg';

export const historyData = {
  colonial: {
    title: 'Villa Real de Pativilca',
    desc: 'Fundada en el período colonial como villa de paso entre Lima y Trujillo, Pativilca fue siempre un nodo estratégico en el Camino Real costero. Sus tierras fértiles regadas por el río de su mismo nombre atrajeron a colonos españoles, religiosos y comerciantes.',
    img: 'assets/images/historia/aspero.jpg',
    chapter: 1
  },
  bolivar: {
    title: 'La Carta de Bolívar (1824)',
    desc: 'En enero de 1824, gravemente enfermo, Simón Bolívar se hospedó en Pativilca y desde allí dictó la célebre carta en que ratificó su determinación de liberar América del Sur. La escena del Libertador, interrogado sobre sus planes, responde con una sola palabra: "Triunfar."',
    img: 'assets/images/historia/fundacion.jpg',
    chapter: 2
  },
  junin: {
    title: 'Camino a Junín y Ayacucho',
    desc: 'Tras recuperarse en Pativilca, Bolívar organizó la campaña final que culminó con las batallas de Junín y Ayacucho en 1824, sellando la independencia definitiva del Perú. Pativilca quedó inscrita para siempre en la historia de la liberación americana.',
    img: 'assets/images/historia/japoneses.jpg',
    chapter: 3
  },
  agropecuario: {
    title: 'El Auge Agropecuario',
    desc: 'A lo largo del siglo XX, Pativilca se afirmó como centro agrícola, con cultivos de algodón, maíz, caña y frutas tropicales. Sus haciendas y cooperativas estructuraron la economía local, y la feria agropecuaria anual se convirtió en evento regional de referencia.',
    img: 'assets/images/historia/turismo.jpg',
    chapter: 4
  },
  hoy: {
    title: 'Pativilca Hoy',
    desc: 'La Pativilca de hoy es una villa agrícola y cultural que recibe visitantes atraídos por la Casa Bolívar, el río y los paisajes de campiña verde. Su cocina tradicional, su gente hospitalaria y sus fiestas religiosas la hacen un destino auténtico de la Provincia de Barranca.',
    img: 'assets/images/historia/actualidad.jpg',
    chapter: 5
  }
};

export const placesData = [
  /* MUSEOS */
  { name: 'Casa Bolívar — Museo Bolivariano', category: 'museo', desc: 'Museo instalado en la vivienda donde el Libertador Bolívar se hospedó en 1824. Conserva mobiliario, documentos y objetos de la época. Declarado Patrimonio Cultural del Perú. El sitio más emblemático del turismo pativilquino.', img: 'assets/images/turismo/museo.jpg', tags: ['Historia', 'Patrimonio'] },
  { name: 'Sala Histórica Municipal', category: 'museo', desc: 'Espacio dedicado a la historia pativilquina desde la época colonial hasta el siglo XXI. Fotografías, mapas y documentos originales narran la vida del pueblo que recibió al Libertador y se convirtió en símbolo de la independencia americana.', img: 'assets/images/turismo/reloj.jpg', tags: ['Documentos', 'Fotos históricas'] },

  /* HISTORIA */
  { name: 'Iglesia San Francisco', category: 'historia', desc: 'Templo colonial cuya arquitectura refleja la historia religiosa del pueblo desde el siglo XVII. Alberga imágenes de valor artístico y es el centro espiritual de las procesiones y celebraciones anuales de Pativilca.', img: 'assets/images/turismo/plaza_bandera.jpg', tags: ['Colonial', 'Arte'] },
  { name: 'Plaza de Armas', category: 'historia', desc: 'Centro cívico del pueblo con su iglesia, palmeras y el monumento al Libertador. Desde aquí se celebran las fiestas patrias, procesiones y ferias que articulan la vida social de Pativilca a lo largo del año.', img: 'assets/images/turismo/guardacostas.jpg', tags: ['Centro', 'Monumento'] },

  /* NATURALEZA */
  { name: 'Río Pativilca', category: 'naturaleza', desc: 'El río que da nombre al distrito recorre el valle entre cerros y campos de cultivo. Sus riberas son propicias para paseos en bote, pesca artesanal y observación de aves costero-ribereñas en un entorno de gran belleza natural.', img: 'assets/images/turismo/malecon.jpg', tags: ['Río', 'Pesca'] },
  { name: 'Laguna de Medio Mundo', category: 'naturaleza', desc: 'Humedal costero de importancia para la conservación de aves migratorias. A pocos kilómetros de Pativilca, ofrece experiencias de ecoturismo, birdwatching y contacto con la naturaleza ribereña del litoral norteño de Lima.', img: 'assets/images/turismo/totoral.jpg', tags: ['Aves', 'Ecoturismo'] },
  { name: 'Campiña de Pativilca', category: 'naturaleza', desc: 'Los campos agrícolas que rodean el pueblo ofrecen un paisaje de campiña verde en contraste con el desierto costero. Frutas, maíz y algodón crecen en un valle fértil ideal para caminatas y turismo rural.', img: 'assets/images/turismo/playa_aspero.jpg', tags: ['Rural', 'Caminata'] },

  /* CULTURA */
  { name: 'Miradores del Valle', category: 'cultura', desc: 'Desde las colinas que enmarcan el valle de Pativilca se obtienen vistas panorámicas de los campos, el río y el pueblo. Puntos ideales para la fotografía al amanecer o al atardecer, cuando la luz baña los cañaverales.', img: 'assets/images/turismo/mirador.jpg', tags: ['Vista', 'Fotografía'] }
];

export const galleryImages = [
  'assets/images/gallery/g1.jpg', 'assets/images/gallery/g2.jpg',
  'assets/images/gallery/g3.jpg', 'assets/images/gallery/g4.jpg',
  'assets/images/gallery/g5.jpg', 'assets/images/gallery/g6.jpg',
  'assets/images/gallery/g7.jpg', 'assets/images/gallery/g8.jpg',
  'assets/images/gallery/g9.jpg', 'assets/images/gallery/g10.jpg',
  'assets/images/gallery/g11.jpg', 'assets/images/gallery/g12.jpg'
];
