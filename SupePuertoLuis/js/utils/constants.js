export const SELECTORS = {
  header: '#siteHeader',
  hamburger: '.hamburger',
  navLinks: '.nav-links',
  navAnchor: '.nav-links a',
  timelineButton: '.timeline-btn',
  filterButton: '.filter-btn',
  placesGrid: '#places-grid',
  galleryStage: '.gallery-stage',
  mainBoxes: '.mainBoxes'
};

export const DEFAULT_PLACE_IMAGE = 'https://picsum.photos/seed/la-isla-playa/800/600';

export const historyData = {
  caral: {
    title: 'Los Orígenes de Áspero',
    desc: 'Supe Puerto es reconocido como la puerta de entrada a Áspero, importante ciudad pesquera vinculada a la Civilización Caral, considerada una de las culturas más antiguas de América con más de 5000 años de historia. Desde este puerto ancestral se desarrollaron actividades de pesca, intercambio comercial y organización social que contribuyeron al crecimiento de una civilización avanzada en agricultura, astronomía y arquitectura monumental en la costa central del Perú.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Caral_01.jpg/800px-Caral_01.jpg',
    chapter: 1
  },
  japones: {
    title: 'La Herencia Japonesa',
    desc: 'A inicios del siglo XX, inmigrantes japoneses llegaron a Supe Puerto, trayendo nuevas técnicas de pesca, cultivos y costumbres que se fusionaron con la tradición local. La comunidad nikkei impulsó la industria pesquera y comercial, dejando una huella imborrable en la gastronomía y las festividades del puerto.',
    img: 'https://picsum.photos/seed/japoneses-lima/800/600',
    chapter: 2
  },
  fundacion: {
    title: 'Fundación de Supe Puerto',
    desc: 'El 5 de diciembre de 1906, mediante la Ley N.° 410, se creó oficialmente el distrito de Supe Puerto, en Barranca. Este hecho fortaleció su organización administrativa e identidad costera, ligada a la pesca, el comercio y la actividad portuaria.',
    img: 'https://picsum.photos/seed/puerto-1906/800/600',
    chapter: 3
  },
  turismo: {
    title: 'Despertar Turístico',
    desc: 'En 1994, Supe Puerto comenzó a ser promocionado como destino turístico gracias a sus playas, el malecón y la cercanía al complejo arqueológico de Áspero. Se construyeron nuevos accesos, restaurantes y espacios recreativos, atrayendo visitantes nacionales e internacionales.',
    img: 'https://picsum.photos/seed/turismo-1994/800/600',
    chapter: 4
  },
  hoy: {
    title: 'Supe Puerto Actual',
    desc: 'Hoy, Supe Puerto combina modernidad y tradición. Su puerto pesquero sigue activo, sus playas son concurridas, y sus festividades como la Semana Santa y las ferias gastronómicas muestran un pueblo orgulloso de su herencia cultural. El turismo sostenible y la conservación de Áspero son ejes de su desarrollo futuro.',
    img: 'https://picsum.photos/seed/supe-hoy/800/600',
    chapter: 5
  }
};

export const placesData = [
  /* CARAL */
  { name: 'Áspero', category: 'caral', desc: 'Ciudad pesquera ancestral del período Arcaico Tardío con más de 5000 años de antigüedad. Vinculada a la Civilización Caral, sus pirámides y plazas circulares asombran al visitante.', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Caral_01.jpg/800px-Caral_01.jpg', tags: ['Patrimonio Caral', 'Ruinas milenarias'] },
  { name: 'Playa de Áspero', category: 'caral', desc: 'Ubicada junto al complejo arqueológico, combina historia y mar. Sus aguas tranquilas son ideales para nadar mientras se contempla el paisaje que rodeó a la civilización Caral.', img: 'https://picsum.photos/seed/playa-aspero-caral/800/600', tags: ['Historia y mar', 'Aguas calmadas'] },
  { name: 'Totoral de los Patos', category: 'caral', desc: 'Humedal protegido donde habitan patos silvestres y otras aves migratorias. Parte del ecosistema costero que sustentó a la civilización Caral hace 5000 años.', img: 'https://picsum.photos/seed/totoral-aves/800/600', tags: ['Aves', 'Senderismo'] },

  /* MUSEO */
  { name: 'Museo Comunitario Áspero', category: 'museo', desc: 'Espacio cultural gestionado por la comunidad local que exhibe cerámica, herramientas de piedra y restos óseos recuperados en las excavaciones arqueológicas de la zona.', img: 'https://picsum.photos/seed/museo-aspero/800/600', tags: ['Mañana', 'Entrada libre'] },
  { name: 'Casa de José María Arguedas', category: 'museo', desc: 'Vivienda donde vivió el célebre escritor peruano. Conserva mobiliario y objetos personales de la época, testimonio de la vida cultural del puerto.', img: 'https://picsum.photos/seed/arguedas-estudio/800/600', tags: ['Literatura', 'Visita cultural'] },
  { name: 'El Reloj del Gallo', category: 'museo', desc: 'Antigua casona con una torre de reloj rematada por una veleta en forma de gallo. Símbolo arquitectónico del puerto y referente histórico de la vida cotidiana.', img: 'https://picsum.photos/seed/reloj-gallo-torre/800/600', tags: ['Arquitectura', 'Fotos'] },
  { name: 'Quinta Luis Banchero Rossi', category: 'museo', desc: 'Residencia del empresario pesquero, hoy convertida en centro cultural. Destaca su arquitectura republicana y su valor histórico en la industria del puerto.', img: 'https://picsum.photos/seed/quinta-republicana/800/600', tags: ['Historia empresarial', 'Eventos'] },

  /* FORTALEZA */
  { name: 'Barco Guardacostas', category: 'fortaleza', desc: 'Antigua embarcación de la Marina de Guerra del Perú, convertida en atractivo turístico. Testimonio de la presencia naval en el puerto y punto ideal para fotografías.', img: 'https://picsum.photos/seed/barco-guardacostas-peru/800/600', tags: ['Historia naval', 'Todo el día'] },
  { name: 'Cerro San José', category: 'fortaleza', desc: 'Elevación natural con senderos señalizados. Desde la cima se obtiene una vista estratégica espectacular de todo el valle y la bahía, punto usado históricamente como atalaya.', img: 'https://picsum.photos/seed/cerro-atalaya/800/600', tags: ['Excursión', 'Vistas'] },
  { name: 'Mirador de Puerto', category: 'fortaleza', desc: 'Mirador elevado que ofrece una vista panorámica de toda la bahía. Imperdible para los amantes de la fotografía y quienes quieran dominar el horizonte marino.', img: 'https://picsum.photos/seed/mirador-pacifico/800/600', tags: ['Vistas 360°', 'Atardecer'] },

  /* PLAYAS */
  { name: 'La Isla', category: 'playas', desc: 'Playa de aguas cristalinas y arena dorada, ideal para el baño y el surf. Su forma de península la protege de las corrientes fuertes.', img: 'https://picsum.photos/seed/la-isla-playa/800/600', tags: ['Todo el día', 'Surf y baño seguro'] },
  { name: 'Playa del Amor', category: 'playas', desc: 'Pequeña cala escondida, rodeada de acantilados. Muy concurrida por parejas y fotógrafos por su paisaje romántico al atardecer.', img: 'https://picsum.photos/seed/cala-romantica/800/600', tags: ['Romántico', 'Atardecer'] },
  { name: 'El Faro', category: 'playas', desc: 'Playa costera ideal para caminar, tomar fotografías del paisaje marino y disfrutar el atardecer frente al Pacífico. Tranquila y poco concurrida.', img: 'https://picsum.photos/seed/playa-faro-pacifico/800/600', tags: ['Playa local', 'Atardecer'] },
  { name: 'El Muelle', category: 'playas', desc: 'Zona de pescadores artesanales. Se puede observar la llegada de botes al amanecer y comprar pescado fresco directamente de los pescadores.', img: 'https://picsum.photos/seed/muelle-artesanal/800/600', tags: ['Pesca artesanal', 'Mañana'] },
  { name: 'Malecón Turístico', category: 'playas', desc: 'Extenso paseo marítimo con vista al océano. Bancas, áreas verdes y puestos de comida criolla hacen de este paseo el corazón costero del pueblo.', img: 'https://picsum.photos/seed/malecon-pacifico/800/600', tags: ['Atardecer', 'Caminata'] }
];

export const galleryImages = [
  'https://picsum.photos/seed/galeria-supe-1/800/600',
  'https://picsum.photos/seed/galeria-supe-2/800/600',
  'https://picsum.photos/seed/galeria-supe-3/800/600',
  'https://picsum.photos/seed/galeria-supe-4/800/600',
  'https://picsum.photos/seed/galeria-supe-5/800/600',
  'https://picsum.photos/seed/galeria-supe-6/800/600',
  'https://picsum.photos/seed/galeria-supe-7/800/600',
  'https://picsum.photos/seed/galeria-supe-8/800/600',
  'https://picsum.photos/seed/galeria-supe-9/800/600',
  'https://picsum.photos/seed/galeria-supe-10/800/600',
  'https://picsum.photos/seed/galeria-supe-11/800/600',
  'https://picsum.photos/seed/galeria-supe-12/800/600'
];
