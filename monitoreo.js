/* =====================================================
   GEMA - MONITOREO
===================================================== */


/* =====================================================
   DATOS
===================================================== */

const servicios = [

    // ================================
    // SALUD - CHIRIQUÍ
    // ================================

    {
        nombre: "Hospital Regional Dr. Rafael Hernández",
        tipo: "hospital",
        provincia: "Chiriquí",
        direccion: "David, Chiriquí",
        lat: 8.4332,
        lng: -82.4305,
        fuente: "CSS"
    },

    {
        nombre: "Hospital Cattán",
        tipo: "hospital",
        provincia: "Chiriquí",
        direccion: "Chiriquí",
        lat: 8.4300,
        lng: -82.4300,
        fuente: "MINSA / CSS"
    },

    {
        nombre: "Policlínica Dr. Gustavo A. Ross / Obaldía",
        tipo: "hospital",
        provincia: "Chiriquí",
        direccion: "David, Chiriquí",
        lat: 8.4260,
        lng: -82.4350,
        fuente: "CSS"
    },

    // ================================
    // MÁS UBICACIONES - CHIRIQUÍ
    // ================================

    {
        nombre: "Estación de Bomberos de Boquete",
        tipo: "bomberos",
        provincia: "Chiriquí",
        direccion: "Boquete, Chiriquí",
        lat: 8.7800,
        lng: -82.4300,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Estación de Bomberos de Bugaba",
        tipo: "bomberos",
        provincia: "Chiriquí",
        direccion: "La Concepción, Bugaba",
        lat: 8.5140,
        lng: -82.6100,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Estación de Bomberos de San Félix",
        tipo: "bomberos",
        provincia: "Chiriquí",
        direccion: "San Félix, Chiriquí",
        lat: 8.2900,
        lng: -81.8700,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Estación de Bomberos de Dolega",
        tipo: "bomberos",
        provincia: "Chiriquí",
        direccion: "Dolega, Chiriquí",
        lat: 8.5600,
        lng: -82.4100,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Estación de Bomberos de Gualaca",
        tipo: "bomberos",
        provincia: "Chiriquí",
        direccion: "Gualaca, Chiriquí",
        lat: 8.5300,
        lng: -82.3000,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Estación de Bomberos de Alanje",
        tipo: "bomberos",
        provincia: "Chiriquí",
        direccion: "Alanje, Chiriquí",
        lat: 8.4000,
        lng: -82.5600,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Estación de Bomberos de Divalá",
        tipo: "bomberos",
        provincia: "Chiriquí",
        direccion: "Divalá, Chiriquí",
        lat: 8.0200,
        lng: -82.8100,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Estación de Bomberos de Boquerón",
        tipo: "bomberos",
        provincia: "Chiriquí",
        direccion: "Boquerón, Chiriquí",
        lat: 8.5000,
        lng: -82.5700,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Estación de Bomberos de Puerto Armuelles",
        tipo: "bomberos",
        provincia: "Chiriquí",
        direccion: "Puerto Armuelles, Chiriquí",
        lat: 8.2800,
        lng: -82.8600,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Estación de Bomberos de Paso Canoas",
        tipo: "bomberos",
        provincia: "Chiriquí",
        direccion: "Paso Canoas, Chiriquí",
        lat: 8.5300,
        lng: -82.8400,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Estación de Bomberos de Río Sereno",
        tipo: "bomberos",
        provincia: "Chiriquí",
        direccion: "Río Sereno, Renacimiento",
        lat: 8.8100,
        lng: -82.8500,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Estación de Bomberos de Cerro Punta",
        tipo: "bomberos",
        provincia: "Chiriquí",
        direccion: "Cerro Punta, Chiriquí",
        lat: 8.8500,
        lng: -82.5700,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Policía Nacional - David",
        tipo: "policia",
        provincia: "Chiriquí",
        direccion: "David, Chiriquí",
        lat: 8.4300,
        lng: -82.4300,
        fuente: "Policía Nacional"
    },

    {
        nombre: "Policía Nacional - Bugaba",
        tipo: "policia",
        provincia: "Chiriquí",
        direccion: "La Concepción, Bugaba",
        lat: 8.5100,
        lng: -82.6100,
        fuente: "Policía Nacional"
    },

    {
        nombre: "Policía Nacional - Boquete",
        tipo: "policia",
        provincia: "Chiriquí",
        direccion: "Boquete, Chiriquí",
        lat: 8.7800,
        lng: -82.4300,
        fuente: "Policía Nacional"
    },

    {
        nombre: "Centro de Salud de Boquete",
        tipo: "hospital",
        provincia: "Chiriquí",
        direccion: "Boquete, Chiriquí",
        lat: 8.7810,
        lng: -82.4320,
        fuente: "MINSA"
    },

    {
        nombre: "Centro de Salud de San Félix",
        tipo: "hospital",
        provincia: "Chiriquí",
        direccion: "San Félix, Chiriquí",
        lat: 8.2910,
        lng: -81.8710,
        fuente: "MINSA"
    },

    {
        nombre: "Centro de Salud de Alanje",
        tipo: "hospital",
        provincia: "Chiriquí",
        direccion: "Alanje, Chiriquí",
        lat: 8.4010,
        lng: -82.5610,
        fuente: "MINSA"
    },

    {
        nombre: "Centro de Salud de Gualaca",
        tipo: "hospital",
        provincia: "Chiriquí",
        direccion: "Gualaca, Chiriquí",
        lat: 8.5310,
        lng: -82.3010,
        fuente: "MINSA"
    },

    // ================================
    // PANAMÁ
    // ===============================
   
    {
        nombre: "Hospital Santo Tomás",
        tipo: "hospital",
        provincia: "Panamá",
        direccion: "Ciudad de Panamá",
        lat: 8.9711,
        lng: -79.5321,
        fuente: "MINSA"
    },

    {
        nombre: "Hospital del Niño Dr. José Renán Esquivel",
        tipo: "hospital",
        provincia: "Panamá",
        direccion: "Ciudad de Panamá",
        lat: 8.9725,
        lng: -79.5325,
        fuente: "MINSA"
    },

    {
        nombre: "Hospital San Miguel Arcángel",
        tipo: "hospital",
        provincia: "Panamá",
        direccion: "San Miguelito",
        lat: 9.0380,
        lng: -79.5000,
        fuente: "MINSA"
    },

    {
        nombre: "Estación de Bomberos de Calidonia",
        tipo: "bomberos",
        provincia: "Panamá",
        direccion: "Calidonia, Ciudad de Panamá",
        lat: 8.9720,
        lng: -79.5360,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Estación de Bomberos de Carrasquilla",
        tipo: "bomberos",
        provincia: "Panamá",
        direccion: "Carrasquilla, Ciudad de Panamá",
        lat: 8.9880,
        lng: -79.5200,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Estación de Bomberos de Juan Díaz",
        tipo: "bomberos",
        provincia: "Panamá",
        direccion: "Juan Díaz, Ciudad de Panamá",
        lat: 9.0380,
        lng: -79.4500,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Estación de Bomberos de Tocumen",
        tipo: "bomberos",
        provincia: "Panamá",
        direccion: "Tocumen, Panamá",
        lat: 9.0870,
        lng: -79.3880,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Policía Nacional - Ancón",
        tipo: "policia",
        provincia: "Panamá",
        direccion: "Ancón, Ciudad de Panamá",
        lat: 8.9700,
        lng: -79.5550,
        fuente: "Policía Nacional"
    },

    {
        nombre: "SUME 911 - Ciudad de Panamá",
        tipo: "ambulancia",
        provincia: "Panamá",
        direccion: "Ciudad de Panamá",
        lat: 8.9824,
        lng: -79.5199,
        telefono: "911",
        fuente: "SUME 911"
    },


    // ================================
    // PANAMÁ OESTE
    // ================================

    {
        nombre: "Hospital Nicolás A. Solano",
        tipo: "hospital",
        provincia: "Panamá Oeste",
        direccion: "La Chorrera",
        lat: 8.8790,
        lng: -79.7830,
        fuente: "MINSA"
    },

    {
        nombre: "Estación de Bomberos de La Chorrera",
        tipo: "bomberos",
        provincia: "Panamá Oeste",
        direccion: "La Chorrera",
        lat: 8.8800,
        lng: -79.7850,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Estación de Bomberos de Arraiján",
        tipo: "bomberos",
        provincia: "Panamá Oeste",
        direccion: "Arraiján",
        lat: 8.9500,
        lng: -79.6600,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Policía Nacional - La Chorrera",
        tipo: "policia",
        provincia: "Panamá Oeste",
        direccion: "La Chorrera",
        lat: 8.8810,
        lng: -79.7800,
        fuente: "Policía Nacional"
    },


    // ================================
    // COCLÉ
    // ================================

    {
        nombre: "Hospital Aquilino Tejeira",
        tipo: "hospital",
        provincia: "Coclé",
        direccion: "Penonomé",
        lat: 8.5181,
        lng: -80.3577,
        fuente: "MINSA"
    },

    {
        nombre: "Estación de Bomberos de Penonomé",
        tipo: "bomberos",
        provincia: "Coclé",
        direccion: "Penonomé",
        lat: 8.5180,
        lng: -80.3580,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Estación de Bomberos de Aguadulce",
        tipo: "bomberos",
        provincia: "Coclé",
        direccion: "Aguadulce",
        lat: 8.2410,
        lng: -80.5470,
        fuente: "Bomberos de Panamá"
    },


    // ================================
    // HERRERA
    // ================================

    {
        nombre: "Hospital Cecilio A. Castillero",
        tipo: "hospital",
        provincia: "Herrera",
        direccion: "Chitré",
        lat: 7.9600,
        lng: -80.4200,
        fuente: "MINSA"
    },

    {
        nombre: "Estación de Bomberos de Chitré",
        tipo: "bomberos",
        provincia: "Herrera",
        direccion: "Chitré",
        lat: 7.9600,
        lng: -80.4200,
        fuente: "Bomberos de Panamá"
    },

    {
        nombre: "Policía Nacional - Herrera",
        tipo: "policia",
        provincia: "Herrera",
        direccion: "Chitré",
        lat: 7.9580,
        lng: -80.4210,
        fuente: "Policía Nacional"
    },


    // ================================
    // LOS SANTOS
    // ================================

    {
        nombre: "Hospital Joaquín Pablo Franco Sayas",
        tipo: "hospital",
        provincia: "Los Santos",
        direccion: "Las Tablas",
        lat: 7.7660,
        lng: -80.2800,
        fuente: "MINSA"
    },

    {
        nombre: "Estación de Bomberos de Las Tablas",
        tipo: "bomberos",
        provincia: "Los Santos",
        direccion: "Las Tablas",
        lat: 7.7650,
        lng: -80.2800,
        fuente: "Bomberos de Panamá"
    },


    // ================================
    // VERAGUAS
    // ================================

    {
        nombre: "Hospital Regional Luis Chicho Fábrega",
        tipo: "hospital",
        provincia: "Veraguas",
        direccion: "Santiago",
        lat: 8.1000,
        lng: -80.9830,
        fuente: "MINSA"
    },

    {
        nombre: "Estación de Bomberos de Santiago",
        tipo: "bomberos",
        provincia: "Veraguas",
        direccion: "Santiago",
        lat: 8.1000,
        lng: -80.9800,
        fuente: "Bomberos de Panamá"
    },


    // ================================
    // COLÓN
    // ================================

    {
        nombre: "Hospital Manuel Amador Guerrero",
        tipo: "hospital",
        provincia: "Colón",
        direccion: "Colón",
        lat: 9.3600,
        lng: -79.9000,
        fuente: "MINSA"
    },

    {
        nombre: "Estación de Bomberos de Colón",
        tipo: "bomberos",
        provincia: "Colón",
        direccion: "Colón",
        lat: 9.3600,
        lng: -79.9000,
        fuente: "Bomberos de Panamá"
    },

       {
        nombre: "Estación Temporal de Recepción Migratoria de Los Planes",
        tipo: "albergue",
        provincia: "Chiriquí",
        direccion: "Los Planes, distrito de Gualaca, Chiriquí",
        lat: 8.5300,
        lng: -82.3000,
        fuente: "Servicio Nacional de Migración de Panamá"
    },
     {
        nombre: "ACNUR Panamá",
        tipo: "albergue",
        provincia: "Panamá",
        direccion: "Ciudad de Panamá",
        lat: 8.9824,
        lng: -79.5199,
        fuente: "ACNUR Panamá"
    },

];


/* =====================================================
   MAPA
===================================================== */

const mapa = L.map("mapa").setView(
    [8.5379, -80.7821],
    7
);


/* =====================================================
   MAPA BASE
===================================================== */

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution:
            "&copy; OpenStreetMap contributors"
    }
).addTo(mapa);


/* =====================================================
   GRUPO DE MARCADORES
===================================================== */

const grupo =
    L.layerGroup().addTo(mapa);


/* =====================================================
   ICONOS
===================================================== */

const iconos = {

    hospital: '<i class="fa-solid fa-hospital"></i>',

    bomberos: '<i class="fa-solid fa-fire-extinguisher"></i>',

    policia: '<i class="fa-solid fa-shield-halved"></i>',

    ambulancia: '<i class="fa-solid fa-truck-medical"></i>',

    albergue: '<i class="fa-solid fa-house"></i>'

};


/* =====================================================
   MOSTRAR SERVICIOS
===================================================== */

function mostrarServicios(lista) {

    grupo.clearLayers();


    const contenedor =
        document.getElementById(
            "listaServicios"
        );


    contenedor.innerHTML = "";


    document.getElementById(
        "contador"
    ).textContent = lista.length;


    lista.forEach(servicio => {


        /* =============================================
           MARCADOR
        ============================================= */

        const marcador =
            L.marker([

                servicio.lat,

                servicio.lng

            ]).addTo(grupo);


        marcador.bindPopup(`

            <div class="popup-servicio">

                <h3>
                    ${iconos[servicio.tipo]}
                    ${servicio.nombre}
                </h3>

                <span>
                    ${nombreTipo(servicio.tipo)}
                </span>

                <p>
                     ${servicio.direccion}
                </p>

                ${
                    servicio.telefono
                    ?
                    `<p> ${servicio.telefono}</p>`
                    :
                    ""
                }

                <small>
                    Fuente:
                    ${servicio.fuente}
                </small>

            </div>

        `);


        /* =============================================
           TARJETA
        ============================================= */

        const tarjeta =
            document.createElement("div");


        tarjeta.className =
            "servicio-card";


        tarjeta.innerHTML = `

            <div class="servicio-icono">

                ${iconos[servicio.tipo]}

            </div>

            <div class="servicio-info">

                <h3>
                    ${servicio.nombre}
                </h3>

                <span class="servicio-tipo">

                    ${nombreTipo(
                        servicio.tipo
                    )}

                </span>

                <p>
                    ${iconos[servicio.tipo]}
                    ${servicio.direccion}
                </p>

            </div>

        `;


        tarjeta.addEventListener(
            "click",
            () => {

                mapa.setView(

                    [
                        servicio.lat,
                        servicio.lng
                    ],

                    15

                );

                marcador.openPopup();

            }
        );


        contenedor.appendChild(
            tarjeta
        );

    });

}


/* =====================================================
   NOMBRE DEL SERVICIO
===================================================== */

function nombreTipo(tipo) {

    const nombres = {

        hospital:
            idiomaActual === "es"
            ? "Hospital"
            : "Hospital",

        bomberos:
            idiomaActual === "es"
            ? "Bomberos"
            : "Fire Department",

        policia:
            idiomaActual === "es"
            ? "Policía"
            : "Police",

        ambulancia:
            idiomaActual === "es"
            ? "Ambulancia"
            : "Ambulance",

        albergue:
            idiomaActual === "es"
            ? "Albergue"
            : "Shelter"

    };


    return nombres[tipo];

}


/* =====================================================
   FILTRAR
===================================================== */

function filtrar() {

    const provincia =
        document.getElementById(
            "filtroProvincia"
        ).value;


    const tipo =
        document.getElementById(
            "filtroTipo"
        ).value;


    const texto =
        document.getElementById(
            "buscador"
        ).value.toLowerCase();


    const resultados =
        servicios.filter(servicio => {


            const provinciaOK =
                provincia === "todas" ||
                servicio.provincia === provincia;


            const tipoOK =
                tipo === "todos" ||
                servicio.tipo === tipo;


            const textoOK =
                servicio.nombre
                    .toLowerCase()
                    .includes(texto) ||

                servicio.direccion
                    .toLowerCase()
                    .includes(texto);


            return (

                provinciaOK &&
                tipoOK &&
                textoOK

            );

        });


    mostrarServicios(
        resultados
    );

}


/* =====================================================
   FILTROS
===================================================== */

document
    .getElementById(
        "filtroProvincia"
    )
    .addEventListener(
        "change",
        filtrar
    );


document
    .getElementById(
        "filtroTipo"
    )
    .addEventListener(
        "change",
        filtrar
    );


document
    .getElementById(
        "buscador"
    )
    .addEventListener(
        "input",
        filtrar
    );


/* =====================================================
   CATEGORÍAS
===================================================== */

document
    .querySelectorAll(
        ".categoria"
    )
    .forEach(boton => {


        boton.addEventListener(
            "click",
            () => {


                document
                    .querySelectorAll(
                        ".categoria"
                    )
                    .forEach(
                        b =>
                            b.classList.remove(
                                "activa"
                            )
                    );


                boton.classList.add(
                    "activa"
                );


                document
                    .getElementById(
                        "filtroTipo"
                    )
                    .value =
                    boton.dataset.tipo;


                filtrar();

            }
        );

    });


/* =====================================================
   UBICACIÓN
===================================================== */

document
    .getElementById(
        "miUbicacion"
    )
    .addEventListener(
        "click",
        () => {


            if (
                !navigator.geolocation
            ) {

                alert(
                    "Tu navegador no permite obtener tu ubicación."
                );

                return;

            }


            navigator
                .geolocation
                .getCurrentPosition(

                    posicion => {

                        const lat =
                            posicion.coords
                                .latitude;

                        const lng =
                            posicion.coords
                                .longitude;


                        mapa.setView(

                            [
                                lat,
                                lng
                            ],

                            14

                        );


                        L.marker([
                            lat,
                            lng
                        ])
                        .addTo(mapa)
                        .bindPopup(
                            " Tu ubicación"
                        )
                        .openPopup();

                    },

                    () => {

                        alert(
                            "No se pudo obtener tu ubicación."
                        );

                    }

                );

        }
    );


/* =====================================================
   TRADUCCIÓN
===================================================== */

let idiomaActual = "es";


const traducciones = {

    es: {

        titulo:
            "Monitoreo",

        descripcion:
            "Encuentra servicios de emergencia y apoyo disponibles en Panamá.",

        todos:
            "Todos",

        hospitales:
            "Hospitales",

        bomberos:
            "Bomberos",

        policia:
            "Policía",

        ambulancias:
            "Ambulancias",

        albergues:
            "Albergues",

        todas_provincias:
            "Todas las provincias",

        todos_servicios:
            "Todos los servicios",

        buscar:
            "Buscar un servicio...",

        cerca_mi:
            "Cerca de mí",

        mapa_titulo:
            "Mapa de servicios",

        mapa_descripcion:
            "Ubicaciones de servicios de emergencia y apoyo.",

        resultados:
            "Servicios disponibles"

    },


    en: {

        titulo:
            "Monitoring",

        descripcion:
            "Find emergency and support services available in Panama.",

        todos:
            "All",

        hospitales:
            "Hospitals",

        bomberos:
            "Fire Department",

        policia:
            "Police",

        ambulancias:
            "Ambulances",

        albergues:
            "Shelters",

        todas_provincias:
            "All provinces",

        todos_servicios:
            "All services",

        buscar:
            "Search for a service...",

        cerca_mi:
            "Near me",

        mapa_titulo:
            "Service map",

        mapa_descripcion:
            "Locations of emergency and support services.",

        resultados:
            "Available services"

    }

};


/* =====================================================
   CAMBIAR IDIOMA
===================================================== */

document
    .getElementById(
        "idiomaBtn"
    )
    .addEventListener(
        "click",
        () => {


            idiomaActual =
                idiomaActual === "es"
                ? "en"
                : "es";


            document
                .querySelectorAll(
                    "[data-i18n]"
                )
                .forEach(elemento => {

                    const clave =
                        elemento.dataset.i18n;


                    elemento.textContent =
                        traducciones[
                            idiomaActual
                        ][clave];

                });


            document
                .querySelectorAll(
                    "[data-i18n-placeholder]"
                )
                .forEach(elemento => {

                    const clave =
                        elemento.dataset
                            .i18nPlaceholder;


                    elemento.placeholder =
                        traducciones[
                            idiomaActual
                        ][clave];

                });


            document.getElementById(
                "idiomaTexto"
            ).textContent =

                idiomaActual === "es"
                ? "EN"
                : "ES";


            filtrar();

        }
    );


/* =====================================================
   INICIAR
===================================================== */

mostrarServicios(
    servicios
);
