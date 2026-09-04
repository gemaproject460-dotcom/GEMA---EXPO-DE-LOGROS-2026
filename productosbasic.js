/*
===========================================
        PRODUCTOS DE LA TIENDA GEMA
        ESPAÑOL / INGLÉS
===========================================
*/

const productos = {

    /* =========================================
            PREPARACIÓN Y SUPERVIVENCIA
    ========================================= */

    preparacion: [

        {
            id: 1,

            nombre: {
                es: "Mochila de emergencia",
                en: "Emergency Backpack"
            },

            precio: 75,

            descripcion: {
                es: "Mochila equipada con suministros esenciales para evacuaciones y emergencias.",
                en: "Backpack equipped with essential supplies for evacuations and emergencies."
            },

            imagen: "Imagenes/tiendaimg/1PreparacionysupervivenciaSHOP/Mochila-de-emergencia.png"
        },

        {
            id: 2,

            nombre: {
                es: "Kit de supervivencia",
                en: "Survival Kit"
            },

            precio: 60,

            descripcion: {
                es: "Kit con herramientas básicas para supervivencia y rescate.",
                en: "Kit with basic tools for survival and rescue."
            },

            imagen: "Imagenes/tiendaimg/1PreparacionysupervivenciaSHOP/Kit-de-supervivencia.png"
        },

        {
            id: 3,

            nombre: {
                es: "Linterna recargable",
                en: "Rechargeable Flashlight"
            },

            precio: 35,

            descripcion: {
                es: "Linterna LED recargable de alta potencia para apagones y emergencias.",
                en: "High-power rechargeable LED flashlight for blackouts and emergencies."
            },

            imagen: "Imagenes/tiendaimg/1PreparacionysupervivenciaSHOP/linternas-recargables.png"
        },

        {
            id: 4,

            nombre: {
                es: "Power Bank",
                en: "Power Bank"
            },

            precio: 50,

            descripcion: {
                es: "Batería portátil para cargar celulares y dispositivos electrónicos.",
                en: "Portable battery for charging phones and electronic devices."
            },

            imagen: "Imagenes/tiendaimg/1PreparacionysupervivenciaSHOP/baterias-recargables-powerbank.png"
        },

        {
            id: 5,

            nombre: {
                es: "Radio portátil",
                en: "Portable Radio"
            },

            precio: 45,

            descripcion: {
                es: "Radio portátil recargable para comunicación y recepción de alertas.",
                en: "Rechargeable portable radio for communication and receiving alerts."
            },

            imagen: "Imagenes/tiendaimg/1PreparacionysupervivenciaSHOP/Radio-portactil.png"
        }

    ],


    /* =========================================
            PRIMEROS AUXILIOS Y SALUD
    ========================================= */

    primerosAuxilios: [

        {
            id: 6,

            nombre: {
                es: "Botiquín Familiar",
                en: "Family First Aid Kit"
            },

            precio: 70,

            descripcion: {
                es: "Kit médico con herramientas y suministros de primeros auxilios.",
                en: "Medical kit with first aid tools and supplies."
            },

            imagen: "Imagenes/tiendaimg/2PRIMEROSAUXILIOSYSALUD/botiquines.png"
        },

        {
            id: 7,

            nombre: {
                es: "Kits de RCP",
                en: "CPR Kits"
            },

            precio: 95,

            descripcion: {
                es: "Equipo básico para reanimación cardiopulmonar.",
                en: "Basic equipment for cardiopulmonary resuscitation."
            },

            imagen: "Imagenes/tiendaimg/2PRIMEROSAUXILIOSYSALUD/kit-profesional.png"
        },

        {
            id: 8,

            nombre: {
                es: "Termómetro Digital",
                en: "Digital Thermometer"
            },

            precio: 20,

            descripcion: {
                es: "Termómetro digital para medir temperatura corporal.",
                en: "Digital thermometer for measuring body temperature."
            },

            imagen: "Imagenes/tiendaimg/2PRIMEROSAUXILIOSYSALUD/termometro.png"
        },

        {
            id: 9,

            nombre: {
                es: "Gasas y vendas",
                en: "Gauze and Bandages"
            },

            precio: 15,

            descripcion: {
                es: "Material médico para cubrir heridas y detener sangrados.",
                en: "Medical supplies for covering wounds and controlling bleeding."
            },

            imagen: "Imagenes/tiendaimg/2PRIMEROSAUXILIOSYSALUD/GAZAS.png"
        },

        {
            id: 10,

            nombre: {
                es: "Alcohol y antisépticos",
                en: "Alcohol and Antiseptics"
            },

            precio: 10,

            descripcion: {
                es: "Productos desinfectantes para limpieza y prevención de infecciones.",
                en: "Disinfectant products for cleaning and infection prevention."
            },

            imagen: "Imagenes/tiendaimg/2PRIMEROSAUXILIOSYSALUD/alcoholantiotico.png"
        }

    ],


    /* =========================================
            SEGURIDAD VEHICULAR
    ========================================= */

    vehicular: [

        {
            id: 11,

            nombre: {
                es: "Triángulos LED",
                en: "LED Warning Triangles"
            },

            precio: 22.50,

            descripcion: {
                es: "Señales luminosas de emergencia para vehículos detenidos.",
                en: "Emergency illuminated warning signs for stopped vehicles."
            },

            imagen: "Imagenes/tiendaimg/3Seguridadvehicular/TrianguloLED.png"
        },

        {
            id: 12,

            nombre: {
                es: "Extintores vehiculares",
                en: "Vehicle Fire Extinguishers"
            },

            precio: 45,

            descripcion: {
                es: "Extintor compacto diseñado para automóviles.",
                en: "Compact fire extinguisher designed for vehicles."
            },

            imagen: "Imagenes/tiendaimg/3Seguridadvehicular/Extintores.png"
        },

        {
            id: 13,

            nombre: {
                es: "Martillos rompevidrios",
                en: "Glass-Breaking Hammers"
            },

            precio: 18,

            descripcion: {
                es: "Herramienta de emergencia para romper ventanas y cortar cinturones.",
                en: "Emergency tool for breaking windows and cutting seat belts."
            },

            imagen: "Imagenes/tiendaimg/3Seguridadvehicular/martillo-rompevidrio.png"
        },

        {
            id: 14,

            nombre: {
                es: "Chalecos reflectivos",
                en: "Reflective Vests"
            },

            precio: 25,

            descripcion: {
                es: "Chaleco de alta visibilidad para seguridad vial.",
                en: "High-visibility vest for road safety."
            },

            imagen: "Imagenes/tiendaimg/3Seguridadvehicular/chaleco-reflectivo.png"
        }

    ],


    /* =========================================
            ADULTOS MAYORES
    ========================================= */

    adultos: [

        {
            id: 15,

            nombre: {
                es: "Botón SOS",
                en: "SOS Button"
            },

            precio: 25,

            descripcion: {
                es: "Botón de emergencia para solicitar ayuda rápidamente.",
                en: "Emergency button for quickly requesting help."
            },

            imagen: "Imagenes/tiendaimg/5adultosmayores/botonSOS.png"
        },

        {
            id: 16,

            nombre: {
                es: "Smartwatch con monitoreo",
                en: "Smartwatch with Monitoring"
            },

            precio: 105,

            descripcion: {
                es: "Reloj inteligente con monitoreo de salud y botón SOS.",
                en: "Smartwatch with health monitoring and an SOS button."
            },

            imagen: "Imagenes/tiendaimg/5adultosmayores/relojinteligente.png"
        },

        {
            id: 17,

            nombre: {
                es: "Estetoscopio",
                en: "Stethoscope"
            },

            precio: 38,

            descripcion: {
                es: "Estetoscopio para monitoreo de salud.",
                en: "Stethoscope for health monitoring."
            },

            imagen: "Imagenes/tiendaimg/5adultosmayores/etetoscopio.png"
        },

        {
            id: 18,

            nombre: {
                es: "Detector de caídas",
                en: "Fall Detection Device"
            },

            precio: 90,

            descripcion: {
                es: "Sensor inteligente que detecta caídas automáticamente.",
                en: "Smart sensor that automatically detects falls."
            },

            imagen: "Imagenes/tiendaimg/5adultosmayores/botonanticaidas.png"
        }

    ],


    /* =========================================
            EQUIPOS INSTITUCIONALES
    ========================================= */

    instituciones: [

        {
            id: 19,

            nombre: {
                es: "Casco de Rescate",
                en: "Rescue Helmet"
            },

            precio: 65,

            descripcion: {
                es: "Casco resistente para rescate y protección profesional.",
                en: "Durable helmet for rescue operations and professional protection."
            },

            imagen: "Imagenes/tiendaimg/6EquiposInstitucionalesyProfesionales/cascosdeseguridad.png"
        },

        {
            id: 20,

            nombre: {
                es: "Botas de rescate",
                en: "Rescue Boots"
            },

            precio: 110,

            descripcion: {
                es: "Botas reforzadas para uso táctico y emergencias.",
                en: "Reinforced boots for tactical use and emergencies."
            },

            imagen: "Imagenes/tiendaimg/6EquiposInstitucionalesyProfesionales/botasderescateremovebg.png"
        },

        {
            id: 21,

            nombre: {
                es: "Camilla Plegable",
                en: "Folding Stretcher"
            },

            precio: 220,

            descripcion: {
                es: "Camilla plegable para traslado de personas heridas.",
                en: "Folding stretcher for transporting injured people."
            },

            imagen: "Imagenes/tiendaimg/6EquiposInstitucionalesyProfesionales/camillas.png"
        }

    ],


    /* =========================================
            TECNOLOGÍA Y SEGURIDAD
    ========================================= */

    tecnologia: [

        {
            id: 22,

            nombre: {
                es: "Cámara Reolink",
                en: "Reolink Camera"
            },

            precio: 120,

            descripcion: {
                es: "Cámara inteligente para monitoreo de hogares y negocios.",
                en: "Smart camera for monitoring homes and businesses."
            },

            imagen: "Imagenes/tiendaimg/4tecnologiayseguridadinteligente/camarareolink.png"
        },

        {
            id: 23,

            nombre: {
                es: "Rastreador",
                en: "Tracker"
            },

            precio: 55,

            descripcion: {
                es: "Dispositivo para rastrear vehículos y personas.",
                en: "Device for tracking vehicles and people."
            },

            imagen: "Imagenes/tiendaimg/4tecnologiayseguridadinteligente/rastreador.png"
        },

        {
            id: 24,

            nombre: {
                es: "Detector de Humo",
                en: "Smoke Detector"
            },

            precio: 40,

            descripcion: {
                es: "Alarma contra incendios.",
                en: "Fire alarm."
            },

            imagen: "Imagenes/tiendaimg/4tecnologiayseguridadinteligente/detectordehumo.png"
        },

        {
            id: 25,

            nombre: {
                es: "Radio portátil",
                en: "Portable Radio"
            },

            precio: 85,

            descripcion: {
                es: "Radios de largo alcance para emergencias y seguridad.",
                en: "Long-range radios for emergencies and security."
            },

            imagen: "Imagenes/tiendaimg/4tecnologiayseguridadinteligente/radioportactil.png"
        }

    ],


    /* =========================================
            EMPRESAS Y ESCUELAS
    ========================================= */

    empresas: [

        {
            id: 26,

            nombre: {
                es: "Sistema contra incendios",
                en: "Fire Protection System"
            },

            precio: 700,

            descripcion: {
                es: "Sistema integral de protección y alarma contra incendios.",
                en: "Comprehensive fire protection and alarm system."
            },

            imagen: "Imagenes/tiendaimg/7EmpresasEscuelasyCentrosEducativos/sirenadeincendios.png"
        },

        {
            id: 27,

            nombre: {
                es: "Detector de humo",
                en: "Smoke Detector"
            },

            precio: 40,

            descripcion: {
                es: "Sensor para detección automática de humo.",
                en: "Sensor for automatic smoke detection."
            },

            imagen: "Imagenes/tiendaimg/7EmpresasEscuelasyCentrosEducativos/detector-humo.png"
        },

        {
            id: 28,

            nombre: {
                es: "Señalización de Seguridad",
                en: "Safety Signage"
            },

            precio: 25,

            descripcion: {
                es: "Señales para rutas de evacuación.",
                en: "Signs for evacuation routes."
            },

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