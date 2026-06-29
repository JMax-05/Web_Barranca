export const SELECTORS = {
  header: '#siteHeader', hamburger: '.hamburger', navLinks: '.nav-links',
  navAnchor: '.nav-links a', timelineButton: '.timeline-btn', filterButton: '.filter-btn',
  placesGrid: '#places-grid', galleryStage: '.gallery-stage', mainBoxes: '.mainBoxes'
};

export const DEFAULT_PLACE_IMAGE = 'https://picsum.photos/seed/fortaleza-param/800/600';

export const historyData = {
  chimu: {
    title: 'La Fortaleza Chimú',
    desc: 'Entre los siglos XIII y XV, el pueblo Chimú construyó sobre una colina costera la imponente fortaleza que hoy lleva el nombre de Paramonga. Sus muros de adobe escalonados, dispuestos en terrazas, dominan el horizonte del valle. Fue usada como centro administrativo, ceremonial y militar del Imperio Chimú antes de la expansión Inca.',
    img: 'https://picsum.photos/seed/fortaleza-param/800/600',
    chapter: 1
  },
  conquista: {
    title: 'La Conquista y el Camino Real',
    desc: 'Tras la conquista inca de la costa norte, Paramonga se integró al Tahuantinsuyo como punto de control del Camino Real costero. Durante la Conquista española, la fortaleza sirvió de hito geográfico y fue objeto de asombro para los cronistas de la época.',
    img: 'https://picsum.photos/seed/conquista-camino-real/800/600',
    chapter: 2
  },
  hacienda: {
    title: 'La Hacienda Azucarera',
    desc: 'En el siglo XIX, los valles fértiles de Paramonga se convirtieron en grandes productores de caña de azúcar. La Hacienda Paramonga, con su ingenio y su comunidad de trabajadores, moldeó la identidad cultural del distrito.',
    img: 'https://picsum.photos/seed/hacienda-azucar-param/800/600',
    chapter: 3
  },
  industria: {
    title: 'La Industria y el Pueblo',
    desc: 'Con la instalación de la fábrica azucarera Paramonga S.A. a inicios del siglo XX, el distrito experimentó un salto económico y demográfico. Barrios obreros, club social, escuelas y comercio configuraron un pueblo industrial.',
    img: 'https://picsum.photos/seed/industria-param/800/600',
    chapter: 4
  },
  hoy: {
    title: 'Paramonga Hoy',
    desc: 'El Paramonga de hoy es un distrito que honra su pasado. La Fortaleza recibe miles de visitantes al año y ha sido declarada Patrimonio Cultural de la Nación. Sus fiestas religiosas, su gastronomía local y la calidez de su gente hacen de Paramonga un destino auténtico e irrepetible.',
    img: 'https://picsum.photos/seed/param-actualidad/800/600',
    chapter: 5
  }
};

export const placesData = [
  /* FORTALEZA */
  { name: 'Fortaleza de Paramonga', category: 'fortaleza', desc: 'Ciudadela de adobe de la cultura Chimú, datada entre los siglos XIII y XV. Sus terrazas escalonadas sobre una colina ofrecen vistas del mar y el valle. Patrimonio Cultural de la Nación y principal atractivo de la región.', img: 'https://picsum.photos/seed/fortaleza-chimu-param/800/600', tags: ['Patrimonio', 'Historia'] },
  { name: 'Terraplenes de la Fortaleza', category: 'fortaleza', desc: 'Los murales de adobe y las rampas de acceso escalonadas de la fortaleza muestran la maestría constructiva Chimú. Recorridos guiados disponibles para conocer la historia de cada nivel de la ciudadela.', img: 'https://picsum.photos/seed/terraplenes-param/800/600', tags: ['Arqueología', 'Guía'] },

  /* MUSEOS */
  { name: 'Museo de Sitio Paramonga', category: 'museo', desc: 'Museo que exhibe cerámicas, herramientas y objetos recuperados de las excavaciones en la Fortaleza. Cuenta la historia de la cultura Chimú y de las sucesivas ocupaciones del sitio hasta la época colonial.', img: 'https://picsum.photos/seed/museo-sitio-param/800/600', tags: ['Cerámica', 'Historia'] },
  { name: 'Centro Cultural Paramonga', category: 'museo', desc: 'Espacio cultural municipal que alberga exposiciones temporales sobre arte local, fotografía histórica del distrito y el legado de la industria azucarera. Entrada libre, funciona todo el año.', img: 'https://picsum.photos/seed/centro-cultural-param/800/600', tags: ['Arte', 'Exposiciones'] },

  /* PLAYAS */
  { name: 'Playa Paramonga', category: 'playas', desc: 'Playa de aguas tranquilas al pie de los acantilados, con arenas oscuras típicas del litoral norte de Lima. Refugio de pescadores artesanales y visitantes que buscan un entorno natural auténtico.', img: 'https://picsum.photos/seed/playa-param-costa/800/600', tags: ['Tranquila', 'Pesca'] },
  { name: 'Playa El Paraíso', category: 'playas', desc: 'Playa de acantilado con acceso por sendero, famosa por sus aguas limpias y el espectáculo visual de los peñascos rocosos. Ideal para fotografía y pesca artesanal desde las rocas.', img: 'https://picsum.photos/seed/playa-paraiso-param/800/600', tags: ['Fotografía', 'Pesca'] },

  /* NATURALEZA */
  { name: 'Campos de Caña', category: 'naturaleza', desc: 'Los extensos cañaverales que rodean Paramonga son parte del paisaje cultural del valle. Al atardecer, la luz dorada sobre la caña en flor crea un espectáculo visual único, imperdible para los fotógrafos.', img: 'https://picsum.photos/seed/canaveralparamonga/800/600', tags: ['Paisaje', 'Fotografía'] },
  { name: 'Río Fortaleza', category: 'naturaleza', desc: 'El río que da vida al valle de Paramonga. Sus riberas albergan fauna costera, áreas de picnic y rutas de ciclismo. En temporada de lluvias su caudal crea un espectáculo natural único.', img: 'https://picsum.photos/seed/rio-fortaleza-param/800/600', tags: ['Río', 'Ciclismo'] }
];

export const galleryImages = [
  'https://picsum.photos/seed/galeria-param-1/800/600', 'https://picsum.photos/seed/galeria-param-2/800/600',
  'https://picsum.photos/seed/galeria-param-3/800/600', 'https://picsum.photos/seed/galeria-param-4/800/600',
  'https://picsum.photos/seed/galeria-param-5/800/600', 'https://picsum.photos/seed/galeria-param-6/800/600',
  'https://picsum.photos/seed/galeria-param-7/800/600', 'https://picsum.photos/seed/galeria-param-8/800/600',
  'https://picsum.photos/seed/galeria-param-9/800/600', 'https://picsum.photos/seed/galeria-param-10/800/600',
  'https://picsum.photos/seed/galeria-param-11/800/600', 'https://picsum.photos/seed/galeria-param-12/800/600'
];
