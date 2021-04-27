export const global = {
  componenteFormativo: 'Evaluación de resultados de la intervención',
  descripcionCurso:
    'Este componente aborda la etapa de evaluación de los resultados de intervención, dentro del modelo de extensionismo en el marco de la transformación digital. Incluye dentro de los resultados de la implementación del modelo, el análisis de la madurez de las empresas, seguimiento a indicadores y la consolidación de información y la construcción del informe final de la consultoría empresarial. Las conclusiones de este proceso de intervención, permiten validar  como a través de la asistencia técnica virtual, las organizaciones incrementan sus grados de madurez digital en pro de su progreso digital económico.',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Resultados de implementación',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo: 'Análisis de la madurez digital de las empresas',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Seguimiento de indicadores',
          hash: 't_1_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.3',
          titulo:
            'Consolidación de información y construcción de informe final de consultoría',
          hash: 't_1_3',
        },
      ],
    },
  ],
  subMenu: [
    // {
    //   nombreRuta: 'actividad',
    //   icono: 'far fa-question-circle',
    //   titulo: 'Actividad didáctica',
    //   desarrolloContenidos: true,
    // },
    {
      nombreRuta: 'glosario',
      icono: 'fas fa-sort-alpha-down',
      titulo: 'Glosario',
    },
    {
      nombreRuta: 'complementario',
      icono: 'far fa-folder-open',
      titulo: 'Material complementario',
    },
    {
      icono: 'fas fa-book',
      titulo: 'Referencias bibliográficas',
      nombreRuta: 'referencias',
    },
    {
      icono: 'fas fa-download',
      titulo: 'Descargar material',
      download: 'downloads/material.zip',
    },
    {
      icono: 'far fa-registered',
      titulo: 'Créditos',
      nombreRuta: 'creditos',
    },
  ],
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor metodológico y pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Luis Guillermo Alvarez García',
      cargo: 'Experta temática',
      centro: 'Centro De Servicios y Gestión Empresarial',
      regional: 'Regional Antioquia',
    },
    {
      nombre: 'Alejandro Moncada Betancur',
      cargo: 'Experta temática',
      centro: 'Centro De Procesos Industriales y Construcción',
      regional: 'Regional Caldas',
    },
    {
      nombre: 'Leidy Yohana Ortiz Diaz',
      cargo: 'Experto temático',
      centro: 'Centro de la Industria, la Empresa y los Servicios',
      regional: 'Regional Norte de Santander',
    },
    {
      nombre: 'Gimena Santacruz Benítez',
      cargo: 'Experto temático',
      centro: 'Centro de la Industria, la Empresa y los Servicios Regional,',
      regional: 'Regional Huila',
    },
    {
      nombre: 'Sergio Arturo Medina Castillo',
      cargo: 'Diseñador instruccional',
      centro: 'Centro para la industria de la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'José Gabriel Ortiz Abella',
      cargo: 'Evaluador instruccional',
      centro: 'Centro para la Industria de la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'María Isabel Román Rueda',
      cargo: 'Revisora de estilo',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Integración de recursos y pruebas',
    },
    {
      nombre: [
        'Camilo Andrés Villamizar Lizcano',
        'Eulises Orduz Amezquita',
        'José Jaime Luis Tang Pinzón',
        'Lady Adriana Ariza Luque',
        'Oleg Litvin',
        'Victor Raúl Cárdenas Cáceres',
        'Zuleidy Maria Ruiz Torres',
      ],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: 'Edward Leonardo Pico Cabra',
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Milady Tatiana Villamil Castellanos',
      cargo: 'Validación de recursos',
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia: 'Definiciona. (s. f). Validar.',
    link: 'https://definiciona.com/validar/',
  },
  {
    referencia: 'Definición MX. (2014). Definición de logro.',
    link: 'https://definicion.mx/logro/',
  },
  {
    referencia: 'Pérez, J., y Merino, M. (2008). Definición de informe.',
    link: 'https://definicion.de/informe/',
  },
  {
    referencia: 'REDHAT. (s. f). ¿Qué es la transformación digital?',
    link:
      'https://www.redhat.com/es/topics/digital-transformation/what-is-digital-transformation',
  },
]

export const glosario = [
  {
    termino: 'Informe',
    significado:
      'Consiste en un texto o una declaración que describe las cualidades de un hecho y de los eventos que lo rodean. El informe, por lo tanto, es el resultado o la consecuencia de la acción de informar (difundir, informar).',
  },
  {
    termino: 'Logro',
    significado:
      'Se denomina logro al alcance de una meta previamente propuesta por una persona o un grupo de personas. Este logro, lejos de ser un mero “golpe de fortuna” (o “suerte”), necesita que la o las personas apliquen diferentes acciones, acordadas de manera previa, de modo que sean tendientes a facilitar el alcance de la meta.',
  },
  {
    termino: 'Matriz EBLA',
    significado:
      'Identifica experiencias, buenas prácticas, lecciones aprendidas y otras experiencias que considere relevantes a destacar.<ul style="margin-left: 20px; margin-top: 20px"> <li style="margin-top: 10px;"> ●	Experiencias: la aplicación metodológica condujo a los resultados esperados, o por el contrario no fue lo que esperaba.</li> <li style="margin-top: 10px;"></li> <li style="margin-top: 10px;"> ●	Buenas prácticas: ¿qué elementos de la aplicación metodológica considera que lo condujo a resultados adecuados? </li> <li style="margin-top: 10px;"> ●	Lecciones aprendidas: ¿qué elementos de la aplicación metodológica considera se pueden ajustar y/o modificar para mejorar los resultados del acompañamiento? </li> <li style="margin-top: 10px;"> ●	Aportes al programa: sugerencias, recomendaciones, contribuciones y aportes que le haría usted como gestor consultor/extensionista a la implementación de la metodología.</li></ul>',
  },
  {
    termino: 'Validar',
    significado:
      'Se define como dar consistencia, resistencia, firmeza, dureza, coherencia, espesor, trabazón, densidad, solidez y fuerza a algo haciéndolo válido o simplemente en dar validez alguna cosa, constatar o también comprobar que es legal. ',
  },
]

export const complementario = [
  {
    texto: 'REDHAT. (s. f.). ¿Qué es la transformación digital?',
    tipo: 'Página web',
    link:
      'https://www.redhat.com/es/topics/digital-transformation/what-is-digital-transformation',
  },
]
