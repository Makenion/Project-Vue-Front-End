import type { Provider, Service, Review } from './providerService'

const mockProviders: { [key: number]: Provider } = {
  1: {
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
  },
  2: {
    id: 2,
    name: 'Ana Torres',
    specialty: 'Diseño Gráfico',
    rating: 4.8,
    totalReviews: 156,
    experience: '10 años de experiencia en diseño gráfico y branding',
    description:
      'Diseñadora gráfica especializada en branding, diseño web y diseño editorial. Me apasiona crear soluciones visuales que comuniquen efectivamente la identidad de cada marca.',
    education: [
      {
        title: 'Diseño Gráfico',
        institution: 'Universidad de Chile',
        year: '2013',
      },
      {
        title: 'Especialización en Branding',
        institution: 'Escuela de Diseño Digital',
        year: '2015',
      },
    ],
    certifications: [
      {
        name: 'Adobe Certified Expert',
        issuer: 'Adobe',
        year: '2016',
      },
      {
        name: 'UI/UX Design Professional',
        issuer: 'Google',
        year: '2019',
      },
    ],
    workZones: ['Valparaíso', 'Viña del Mar', 'Quilpué'],
    languages: ['Español', 'Inglés'],
    availability: {
      Lunes: '09:00 - 18:00',
      Martes: '09:00 - 18:00',
      Miércoles: '09:00 - 18:00',
      Jueves: '09:00 - 18:00',
      Viernes: '09:00 - 15:00',
    },
  },
  3: {
    id: 3,
    name: 'Pedro Gómez',
    specialty: 'Electricidad Industrial',
    rating: 4.7,
    totalReviews: 189,
    experience: '12 años de experiencia en instalaciones eléctricas y mantenimiento industrial',
    description:
      'Electricista industrial especializado en instalaciones de alta tensión, mantenimiento preventivo y correctivo de sistemas eléctricos industriales.',
    education: [
      {
        title: 'Técnico en Electricidad Industrial',
        institution: 'Instituto Profesional Duoc UC',
        year: '2011',
      },
      {
        title: 'Especialización en Sistemas de Control',
        institution: 'Centro de Formación Técnica',
        year: '2013',
      },
    ],
    certifications: [
      {
        name: 'Instalador Eléctrico Clase A',
        issuer: 'SEC',
        year: '2014',
      },
      {
        name: 'Manejo de Sistemas de Control Industrial',
        issuer: 'Siemens',
        year: '2017',
      },
    ],
    workZones: ['Concepción', 'Talcahuano', 'San Pedro de la Paz'],
    languages: ['Español'],
    availability: {
      Lunes: '07:00 - 17:00',
      Martes: '07:00 - 17:00',
      Miércoles: '07:00 - 17:00',
      Jueves: '07:00 - 17:00',
      Viernes: '07:00 - 15:00',
    },
  },
}

const mockServices: { [key: number]: Service[] } = {
  1: [
    {
      id: 1,
      name: 'Mueble a medida',
      price: '$150.000',
      duration: '2-3 semanas',
      description: 'Diseño y fabricación de muebles personalizados según tus necesidades.',
    },
    {
      id: 2,
      name: 'Restauración de muebles',
      price: '$80.000',
      duration: '1-2 semanas',
      description: 'Restauración profesional de muebles antiguos o dañados.',
    },
  ],
  2: [
    {
      id: 1,
      name: 'Diseño de logo',
      price: '$120.000',
      duration: '1 semana',
      description: 'Creación de identidad visual para tu marca.',
    },
    {
      id: 2,
      name: 'Diseño web',
      price: '$250.000',
      duration: '2-3 semanas',
      description: 'Diseño y desarrollo de sitio web profesional.',
    },
  ],
  3: [
    {
      id: 1,
      name: 'Instalación eléctrica residencial',
      price: '$100.000',
      duration: '1-2 días',
      description: 'Instalación completa de sistemas eléctricos en viviendas.',
    },
    {
      id: 2,
      name: 'Mantenimiento industrial',
      price: '$200.000',
      duration: '1 semana',
      description: 'Mantenimiento preventivo y correctivo de sistemas eléctricos industriales.',
    },
  ],
}

const mockReviews: { [key: number]: Review[] } = {
  1: [
    {
      id: 1,
      userName: 'María González',
      rating: 5,
      comment: 'Excelente trabajo en mi cocina. Los muebles quedaron perfectos.',
      date: '2024-02-15',
      service: 'Mueble a medida',
    },
    {
      id: 2,
      userName: 'Carlos Rodríguez',
      rating: 4,
      comment: 'Muy profesional y cumplió con los plazos establecidos.',
      date: '2024-02-10',
      service: 'Restauración de muebles',
    },
  ],
  2: [
    {
      id: 1,
      userName: 'Laura Martínez',
      rating: 5,
      comment: 'El logo quedó exactamente como lo quería. Muy creativa.',
      date: '2024-02-18',
      service: 'Diseño de logo',
    },
    {
      id: 2,
      userName: 'Juan Pérez',
      rating: 4,
      comment: 'Excelente trabajo en el diseño de mi sitio web.',
      date: '2024-02-12',
      service: 'Diseño web',
    },
  ],
  3: [
    {
      id: 1,
      userName: 'Roberto Silva',
      rating: 5,
      comment: 'Solucionó un problema complejo en nuestra fábrica.',
      date: '2024-02-20',
      service: 'Mantenimiento industrial',
    },
    {
      id: 2,
      userName: 'Ana López',
      rating: 4,
      comment: 'Muy profesional y eficiente en la instalación.',
      date: '2024-02-14',
      service: 'Instalación eléctrica residencial',
    },
  ],
}

export { mockProviders, mockServices, mockReviews }
