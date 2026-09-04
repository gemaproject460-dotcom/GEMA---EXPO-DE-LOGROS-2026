/*
===========================================
        PRODUCTOS DE LA TIENDA GEMA
===========================================
*/

const productos = {

    preparacion: [

        {
            id: 1,
            nombre: "Mochila de emergencia",
            precio: 75,
            descripcion: "Mochila equipada con suministros esenciales para evacuaciones y emergencias.",
            imagen: "Imagenes/tiendaimg/1PreparacionysupervivenciaSHOP/Mochila-de-emergencia.png"
        },

        {
            id: 2,
            nombre: "Kit de supervivencia",
            precio: 60,
            descripcion: "Kit con herramientas básicas para supervivencia y rescate.",
            imagen: "Imagenes/tiendaimg/1PreparacionysupervivenciaSHOP/Kit-de-supervivencia.png"
        },

        {
            id: 3,
            nombre: "Linterna recargable",
            precio: 35,
            descripcion: "Linterna LED recargable de alta potencia para apagones y emergencias.",
            imagen: "Imagenes/tiendaimg/1PreparacionysupervivenciaSHOP/linternas-recargables.png"
        },

        {
            id: 4,
            nombre: "Power Bank",
            precio: 50,
            descripcion: "Batería portátil para cargar celulares y dispositivos electrónicos.",
            imagen: "Imagenes/tiendaimg/1PreparacionysupervivenciaSHOP/baterias-recargables-powerbank.png"
        },

        {
            id: 5,
            nombre: "Radio portátil",
            precio: 45,
            descripcion: "Radio portátil recargable para comunicación y recepción de alertas.",
            imagen: "Imagenes/tiendaimg/1PreparacionysupervivenciaSHOP/Radio-portactil.png"
        }

    ],

    primerosAuxilios: [

        {
            id: 6,
            nombre: "Botiquín Familiar",
            precio: 70,
            descripcion: "Kit médico con herramientas y suministros de primeros auxilios.",
            imagen: "Imagenes/tiendaimg/2PRIMEROSAUXILIOSYSALUD/botiquines.png"
        },

        {
            id: 7,
            nombre: "Kits de RCP",
            precio: 95,
            descripcion: "Equipo básico para reanimación cardiopulmonar.",
            imagen: "Imagenes/tiendaimg/2PRIMEROSAUXILIOSYSALUD/kit-profesional.png"
        },

        {
            id: 8,
            nombre: "Termómetro Digital",
            precio: 20,
            descripcion: "Termómetro digital para medir temperatura corporal.",
            imagen: "Imagenes/tiendaimg/2PRIMEROSAUXILIOSYSALUD/termometro.png"
        },

        {
            id: 9,
            nombre: "Gasas y vendas",
            precio: 15,
            descripcion: "Material médico para cubrir heridas y detener sangrados.",
            imagen: "Imagenes/tiendaimg/2PRIMEROSAUXILIOSYSALUD/GAZAS.png"
        },

        {
            id: 10,
            nombre: "Alcohol y antisépticos",
            precio: 10,
            descripcion: "Productos desinfectantes para limpieza y prevención de infecciones.",
            imagen: "Imagenes/tiendaimg/2PRIMEROSAUXILIOSYSALUD/alcoholantiotico.png"
        }

    ],

    vehicular: [

        {
            id: 11,
            nombre: "Triángulos LED",
            precio: 22.50,
            descripcion: "Señales luminosas de emergencia para vehículos detenidos.",
            imagen: "Imagenes/tiendaimg/3Seguridadvehicular/TrianguloLED.png"
        },

        {
            id: 12,
            nombre: "Extintores vehiculares ",
            precio: 45,
            descripcion: " Extintor compacto diseñado para automóviles.",
            imagen: "Imagenes/tiendaimg/3Seguridadvehicular/Extintores.png"
        },

        {
            id: 13,
            nombre: "Martillos rompevidrios",
            precio: 18,
            descripcion: "Herramienta de emergencia para romper ventanas y cortar cinturones.",
            imagen: "Imagenes/tiendaimg/3Seguridadvehicular/martillo-rompevidrio.png"
        },

        {
            id: 14,
            nombre: "Chalecos reflectivos",
            precio: 25,
            descripcion: "Chaleco de alta visibilidad para seguridad vial.",
            imagen: "Imagenes/tiendaimg/3Seguridadvehicular/chaleco-reflectivo.png"
        }

    ],

    adultos: [

        {
            id: 15,
            nombre: "Botón SOS",
            precio: 25,
            descripcion: "Botón de emergencia para solicitar ayuda rápidamente.",
            imagen: "Imagenes/tiendaimg/5adultosmayores/botonSOS.png"
        },

        {
            id: 16,
            nombre: "Smartwatch con monitoreo",
            precio: 105,
            descripcion: "Reloj inteligente con monitoreo de salud y botón SOS.",
            imagen: "Imagenes/tiendaimg/5adultosmayores/relojinteligente.png"
        }, 

        {
            id: 17,
            nombre: "estetoscopio",
            precio: 38,
            descripcion: "Estetoscopio para monitoreo de salud.",
            imagen: "Imagenes/tiendaimg/5adultosmayores/etetoscopio.png"
        },

        {
            id: 17,
            nombre: "Detector de caídas",
            precio: 90,
            descripcion: "Sensor inteligente que detecta caídas automáticamente.",
            imagen: "Imagenes/tiendaimg/5adultosmayores/botonanticaidas.png"
        }

    ],

    instituciones: [

        {
            id: 18,
            nombre: "Casco de Rescate",
            precio: 65,
            descripcion: "Casco resistente para rescate y protección profesional.",
            imagen: "Imagenes/tiendaimg/6EquiposInstitucionalesyProfesionales/cascosdeseguridad.png"
        },

        {
            id: 19,
            nombre: "Botas de rescate",
            precio: 110,
            descripcion: "Botas reforzadas para uso táctico y emergencias.",
            imagen: "Imagenes/tiendaimg/6EquiposInstitucionalesyProfesionales/botasderescateremovebg.png"
        },

        {
            id: 20,
            nombre: "Camilla Plegable",
            precio: 220,
            descripcion: "Camilla plegable para traslado de personas heridas.",
            imagen: "Imagenes/tiendaimg/6EquiposInstitucionalesyProfesionales/camillas.png"
        }

    ],

    tecnologia: [

        {
            id: 21,
            nombre: "Cámara reolink",
            precio: 120,
            descripcion: "Cámara inteligente para monitoreo de hogares y negocios.",
            imagen: "Imagenes/tiendaimg/4tecnologiayseguridadinteligente/camarareolink.png"
        },

        {
            id: 22,
            nombre: "Rastreador",
            precio: 55,
            descripcion: "Dispositivo para rastrear vehículos y personas.",
            imagen: "Imagenes/tiendaimg/4tecnologiayseguridadinteligente/rastreador.png"
        },

        {
            id: 23,
            nombre: "Detector de Humo",
            precio: 40,
            descripcion: "Alarma contra incendios.",
            imagen: "Imagenes/tiendaimg/4tecnologiayseguridadinteligente/detectordehumo.png"
        },

        {
            id: 24,
            nombre: "Radio portátil",
            precio: 85,
            descripcion: "Radios de largo alcance para emergencias y seguridad.",
            imagen: "Imagenes/tiendaimg/4tecnologiayseguridadinteligente/radioportactil.png"
        }

    ],

    empresas: [

        {
            id: 25,
            nombre: "Sistema contra incendios",
            precio: 700,
            descripcion: " Sistema integral de protección y alarma contra incendios.",
            imagen: "Imagenes/tiendaimg/7EmpresasEscuelasyCentrosEducativos/sirenadeincendios.png"
        },

        {
            id: 26,
            nombre: "Detector de humo",
            precio: 40,
            descripcion: "Sensor para detección automática de humo.",
            imagen: "Imagenes/tiendaimg/7EmpresasEscuelasyCentrosEducativos/"
        },

        {
            id: 27,
            nombre: "Señalización de Seguridad",
            precio: 25,
            descripcion: "Señales para rutas de evacuación.",
            imagen: "Imagenes/tiendaimg/7EmpresasEscuelasyCentrosEducativos/senalizacionesdeemergencia.png"
        }

    ]

};


/*
===========================================
      PRODUCTOS DESTACADOS
===========================================
*/

const productosDestacados = [

    productos.preparacion[0],
    productos.preparacion[2],
    productos.primerosAuxilios[0],
    productos.vehicular[0],
    productos.tecnologia[0],
    productos.instituciones[0]

];