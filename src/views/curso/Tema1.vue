<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Resultados de implementación
    p Aquí se abordará la valoración de la madurez digital empresarial, y cómo ha sido su evolución frente al proceso de consultoría. Esto se apoya en el uso de la herramienta tecnológica SoftWhere y los formatos definidos en la metodología de extensionismo para el proceso de acompañamiento empresarial.
    .titulo-segundo#t_1_1.mt-5
      .h4 1.1 Análisis de la madurez digital de las empresas

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-8
        p Después de ejecutar las actividades definidas en el plan de mejora y de finalizar la fase de implementación, se valida con cada empresa el autodiagnóstico diseñado y aplicado por MinTIC en el marco de la articulación del programa con MinTIC y SENA. 

        p.mt-3 En este autodiagnóstico se identifica a la empresa en su grado de madurez digital para el nivel que le corresponda dentro de los procesos evaluados. Se validan, igualmente, las 15 variables iniciales del plan de mejora y las necesidades actuales de cada empresa frente a los resultados definidos en el resultado de autodiagnóstico inicial.
      .col-12.col-md-4
        img(src='@/assets/ilustraciones/img1.png', alt='') 

    .row.justify-content-center.align-items-center.mt-5.p-5.bg-1
      .col-12.col-md-6
        img.img-t.img-a(src='@/assets/ilustraciones/img2.png', alt='')
      .col-12.col-md-6
        p Es importante aclarar que, frente a las dimensiones planteadas, la organización obtendrá un incremento que le permitirá evolucionar su gestión de la digitalización e implementación digital, evidenciando así cambios entre los cuatro (4) niveles de madurez:
        .list.mt-4
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
          .list__txt    
              p.m-top Principiante digital. 
        .list.mt-3
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
          .list__txt    
              p.m-top Gestor digital. 
        .list.mt-3
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
          .list__txt    
              p.m-top Ejecutivo digital. 
        .list.mt-3
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
          .list__txt    
              p.m-top Transformador digital.

    .titulo-segundo#t_1_2.mt-5
      .h4 1.2 Seguimiento de indicadores

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-8
        p Los indicadores definidos para ser incrementados en el plan de mejora se definen como una herramienta de medición que permite hacer un seguimiento a las actividades propuestas y su impacto en la evolución definida en el marco del proceso de transformación digital empresarial de la organización.

        p.mt-3 Los indicadores también permiten establecer las desviaciones o cambios que muestran cómo las medidas preventivas o correctivas definidas aseguran la mejora continua en los procesos organizacionales.

        p.mt-3 Además, el proceso de consultoría mediante los indicadores definidos en cada proceso de acompañamiento mide el grado de cumplimiento de las actividades establecidas en el plan concertado.      
      .col-12.col-md-4
        .imagen-titulo--izq
          figure.my-3
            img(src='@/assets/ilustraciones/img3.png', alt='Texto que describa la imagen')      
          .imagen-titulo__titulo
            .h4.m-0.text-white Seguimiento

    .titulo-segundo#t_1_3.mt-5
      .h4 1.3 Consolidación de información y construcción de informe final de consultoría  

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-4
        img(src='@/assets/ilustraciones/img4.png', alt='')         
      .col-12.col-md-8
        p Como resultado del proceso de acompañamiento se validan las acciones o actividades definidas en el plan, las cuales se enmarcan en el proceso desarrollado para cumplir los indicadores meta.

        p.mt-3 El proceso de consolidación de la información concluye en un informe que muestra, además, el análisis de los indicadores a evaluar en el proceso de acompañamiento.

        p.mt-3 Este documento a su vez cuenta con los logros alcanzados en el proceso, evidenciando la variación cuantitativa entre las variables que definen el nivel de madurez digital alcanzado por la empresa.

        p.mt-3 También se plantea la matriz EBLA que define las experiencias, buenas prácticas, lecciones aprendidas y aportes al programa que se evidencian en el proceso de acompañamiento de la consultoría.

    .bloque-texto-a.p-4.p-md-5.my-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h4.mb-0.text-white El documento de informe muestra aspectos referentes a la formación, 
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p evidenciando los cursos identificados y hechos por los miembros de la organización de acuerdo con los itinerarios de formación definidos dentro de la estrategia MiPymeSeTransforma.        

    p.mt-5 Las conclusiones de la consultoría definen cómo, a través de la asistencia técnica virtual, las organizaciones incrementaron sus grados de madurez digital en pro de su progreso digital económico. Además, el objetivo de los acompañamientos es dar soluciones a problemas existentes y contribuir a cumplir con las metas propuestas para el logro de la transformación digital empresarial.
    
    .hr-dotted.mt-5
    .row.justify-content-center.align-items-center.mt-3
      .col-12.col-md-6
        p #[b Para ampliar la información se recomienda consultar el material complementario:]    
      .col-12.col-md-6
        a.anexo.my-3(:href="('/downloads/Anexo_2_Modelo_de_informe_final.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Modelo de informe final.
    .hr-dotted.mt-3




</template>

<script>
import { mapActions } from 'vuex'
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: '100.000 - 10.000 A.C.',
        titulo: 'Período Paleolítico',
        texto: 'Pieles, pelo de animales, hojas, huesos y conchas.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Mesolítico',
        texto:
          'Broches hechos con hueso, abrigos, gorros, botas y zapatillas de cuero.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Neolítico',
        texto: 'Vestimenta de fibras animales y vegetales, pulseras de marfil.',
      },
    ],
    datosLineaTiempoB: [
      {
        titulo: '01 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '02 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '03 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '04 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
    ],
    datosPasosA: [
      {
        titulo: 'Dressed for Error',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Before the Fury',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Khans Tribute',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Secret of the Quiet Stranger',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
    ],
    datosSlyder: [
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.increment()
    setTimeout(() => {
      this.decrease()
    }, 3000)
  },
  methods: {
    ...mapActions(['increment', 'decrease']),
  },
}
</script>

<style lang="sass" scoped></style>
