import type { Provider, Service, Review } from './providerService'

export const mockProvider: Provider = {
  id: 1,
  name: 'Juan Pérez',
  specialty: 'Carpintería Profesional',
  rating: 4.9,
  totalReviews: 203,
  experience: '15 años de experiencia en carpintería de obra y muebles a medida',
  description:
    'Carpintero profesional especializado en muebles a medida, restauración y proyectos de carpintería de obra. Me enorgullece ofrecer soluciones personalizadas y de alta calidad para cada proyecto, utilizando técnicas tradicionales y materiales de primera calidad.',
  education: [
    {
      title: 'Técnico en Carpintería',
      institution: 'Instituto Profesional de la Construcción',
      year: '2008',
    },
    {
      title: 'Especialización en Restauración de Muebles',
      institution: 'Escuela de Artes y Oficios',
      year: '2010',
    },
  ],
  certifications: [
    {
      name: 'Técnicas Avanzadas de Ebanistería',
      issuer: 'Gremio de Carpinteros de Chile',
      year: '2015',
    },
    {
      name: 'Seguridad en el Trabajo con Herramientas Eléctricas',
      issuer: 'Instituto de Seguridad Laboral',
      year: '2018',
    },
  ],
  workZones: ['Santiago Centro', 'Ñuñoa', 'Macul', 'La Florida'],
  languages: ['Español'],
  availability: {
    Lunes: '08:00 - 18:00',
    Martes: '08:00 - 18:00',
    Miércoles: '08:00 - 18:00',
    Jueves: '08:00 - 18:00',
    Viernes: '08:00 - 16:00',
  },
}

export const mockServices: Service[] = [
  {
    id: 1,
    name: 'Muebles a Medida',
    price: 'Desde $350.000',
    duration: 'Variable según proyecto',
    description:
      'Diseño y fabricación de muebles personalizados para tu hogar u oficina. Incluye diseño, materiales y mano de obra.',
  },
  {
    id: 2,
    name: 'Restauración de Muebles',
    price: 'Desde $120.000',
    duration: 'Variable según pieza',
    description:
      'Restauración profesional de muebles antiguos o dañados. Incluye reparación, lijado, barnizado y acabados.',
  },
  {
    id: 3,
    name: 'Carpintería de Obra',
    price: 'Desde $80.000',
    duration: 'Variable según proyecto',
    description:
      'Instalación de pisos, cielos, revestimientos y otros trabajos de carpintería para tu hogar o negocio.',
  },
  {
    id: 4,
    name: 'Reparaciones y Ajustes',
    price: 'Desde $45.000',
    duration: '2-4 horas',
    description:
      'Reparación de muebles, ajustes de puertas y ventanas, y otros servicios de mantenimiento.',
  },
]

export const mockReviews: Review[] = [
  {
    id: 1,
    userName: 'María Silva',
    rating: 5,
    comment:
      'Excelente trabajo en mi cocina. Los muebles quedaron perfectos y la atención al detalle es impresionante. Muy profesional y puntual.',
    date: '2024-03-15',
    service: 'Muebles a Medida',
  },
  {
    id: 2,
    userName: 'Roberto González',
    rating: 5,
    comment:
      'Restauró un mueble familiar de más de 50 años y quedó como nuevo. Muy cuidadoso con los detalles y materiales originales.',
    date: '2024-03-10',
    service: 'Restauración de Muebles',
  },
  {
    id: 3,
    userName: 'Ana Martínez',
    rating: 4,
    comment:
      'Instaló el piso de madera en mi living y quedó impecable. Muy limpio y ordenado en su trabajo.',
    date: '2024-03-05',
    service: 'Carpintería de Obra',
  },
  {
    id: 4,
    userName: 'Carlos Rodríguez',
    rating: 5,
    comment:
      'Reparó varias puertas de mi casa que no cerraban bien. Muy eficiente y con precios justos.',
    date: '2024-02-28',
    service: 'Reparaciones y Ajustes',
  },
]
