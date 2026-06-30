export const SELECTORS = {
  header: '#siteHeader', hamburger: '.hamburger', navLinks: '.nav-links',
  navAnchor: '.nav-links a', timelineButton: '.timeline-btn', filterButton: '.filter-btn',
  placesGrid: '#places-grid', galleryStage: '.gallery-stage', mainBoxes: '.mainBoxes'
};

export const DEFAULT_PLACE_IMAGE = 'assets/images/turismo/aspero.jpg';

export const historyData = {
  chimu: {
    title: 'La Fortaleza Chimú',
    desc: 'Entre los siglos XIII y XV, el pueblo Chimú construyó sobre una colina costera la imponente fortaleza que hoy lleva el nombre de Paramonga. Sus muros de adobe escalonados, dispuestos en terrazas, dominan el horizonte del valle. Fue usada como centro administrativo, ceremonial y militar del Imperio Chimú antes de la expansión Inca.',
    img: 'assets/images/historia/aspero.jpg',
    chapter: 1
  },
  conquista: {
    title: 'La Conquista y el Camino Real',
    desc: 'Tras la conquista inca de la costa norte, Paramonga se integró al Tahuantinsuyo como punto de control del Camino Real costero. Durante la Conquista española, la fortaleza sirvió de hito geográfico y fue objeto de asombro para los cronistas de la época.',
    img: 'assets/images/historia/fundacion.jpg',
    chapter: 2
  },
  hacienda: {
    title: 'La Hacienda Azucarera',
    desc: 'En el siglo XIX, los valles fértiles de Paramonga se convirtieron en grandes productores de caña de azúcar. La Hacienda Paramonga, con su ingenio y su comunidad de trabajadores, moldeó la identidad cultural del distrito.',
    img: 'assets/images/historia/japoneses.jpg',
    chapter: 3
  },
  industria: {
    title: 'La Industria y el Pueblo',
    desc: 'Con la instalación de la fábrica azucarera Paramonga S.A. a inicios del siglo XX, el distrito experimentó un salto económico y demográfico. Barrios obreros, club social, escuelas y comercio configuraron un pueblo industrial.',
    img: 'assets/images/historia/turismo.jpg',
    chapter: 4
  },
  hoy: {
    title: 'Paramonga Hoy',
    desc: 'El Paramonga de hoy es un distrito que honra su pasado. La Fortaleza recibe miles de visitantes al año y ha sido declarada Patrimonio Cultural de la Nación. Sus fiestas religiosas, su gastronomía local y la calidez de su gente hacen de Paramonga un destino auténtico e irrepetible.',
    img: 'assets/images/historia/actualidad.jpg',
    chapter: 5
  }
};

export const placesData = [
  /* FORTALEZA */
  { name: 'Fortaleza de Paramonga', category: 'fortaleza', desc: 'Ciudadela de adobe de la cultura Chimú, datada entre los siglos XIII y XV. Sus terrazas escalonadas sobre una colina ofrecen vistas del mar y el valle. Patrimonio Cultural de la Nación y principal atractivo de la región.', img: 'assets/images/turismo/aspero.jpg', tags: ['Patrimonio', 'Historia'] },
  { name: 'Terraplenes de la Fortaleza', category: 'fortaleza', desc: 'Los murales de adobe y las rampas de acceso escalonadas de la fortaleza muestran la maestría constructiva Chimú. Recorridos guiados disponibles para conocer la historia de cada nivel de la ciudadela.', img: 'assets/images/turismo/mirador.jpg', tags: ['Arqueología', 'Guía'] },

  /* MUSEOS */
  { name: 'Museo de Sitio Paramonga', category: 'museo', desc: 'Museo que exhibe cerámicas, herramientas y objetos recuperados de las excavaciones en la Fortaleza. Cuenta la historia de la cultura Chimú y de las sucesivas ocupaciones del sitio hasta la época colonial.', img: 'assets/images/turismo/museo.jpg', tags: ['Cerámica', 'Historia'] },
  { name: 'Centro Cultural Paramonga', category: 'museo', desc: 'Espacio cultural municipal que alberga exposiciones temporales sobre arte local, fotografía histórica del distrito y el legado de la industria azucarera. Entrada libre, funciona todo el año.', img: 'assets/images/turismo/reloj.jpg', tags: ['Arte', 'Exposiciones'] },

  /* PLAYAS */
  { name: 'Playa Paramonga', category: 'playas', desc: 'Playa de aguas tranquilas al pie de los acantilados, con arenas oscuras típicas del litoral norte de Lima. Refugio de pescadores artesanales y visitantes que buscan un entorno natural auténtico.', img: 'assets/images/turismo/playa.jpg', tags: ['Tranquila', 'Pesca'] },
  { name: 'Playa El Paraíso', category: 'playas', desc: 'Playa de acantilado con acceso por sendero, famosa por sus aguas limpias y el espectáculo visual de los peñascos rocosos. Ideal para fotografía y pesca artesanal desde las rocas.', img: 'assets/images/turismo/playa_aspero.jpg', tags: ['Fotografía', 'Pesca'] },

  /* NATURALEZA */
  { name: 'Campos de Caña', category: 'naturaleza', desc: 'Los extensos cañaverales que rodean Paramonga son parte del paisaje cultural del valle. Al atardecer, la luz dorada sobre la caña en flor crea un espectáculo visual único, imperdible para los fotógrafos.', img: 'assets/images/turismo/totoral.jpg', tags: ['Paisaje', 'Fotografía'] },
  { name: 'Río Fortaleza', category: 'naturaleza', desc: 'El río que da vida al valle de Paramonga. Sus riberas albergan fauna costera, áreas de picnic y rutas de ciclismo. En temporada de lluvias su caudal crea un espectáculo natural único.', img: 'assets/images/turismo/malecon.jpg', tags: ['Río', 'Ciclismo'] }
];

export const galleryImages = [
  'assets/images/gallery/g1.jpg', 'assets/images/gallery/g2.jpg',
  'assets/images/gallery/g3.jpg', 'assets/images/gallery/g4.jpg',
  'assets/images/gallery/g5.jpg', 'assets/images/gallery/g6.jpg',
  'assets/images/gallery/g7.jpg', 'assets/images/gallery/g8.jpg',
  'assets/images/gallery/g9.jpg', 'assets/images/gallery/g10.jpg',
  'assets/images/gallery/g11.jpg', 'assets/images/gallery/g12.jpg'
];
