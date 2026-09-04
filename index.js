const textos = {

    es: {

        inicio: "Inicio",
        gemas: "Gemas",
        informacion: "Información",
        ninos: "Niños",
        capacitaciones: "Capacitaciones",
        productos: "Productos",

        pais: "Donaciones",

        heroTitulo: "ESTAMOS AQUÍ <br> PARA AYUDAR",

        heroTexto:
        "Trabajamos junto a nuestra comunidad para promover, mejorar y mantener una cultura de preparación para desastres.",

        conoceMas: "CONOCE MÁS",

        cardInfo: "INFORMACIÓN",
        textoInfo: "¿Qué es GEMA?",

        cardNinos: "NIÑOS",
        textoNinos: "Información y aprendizaje",

        cardCapacitaciones: "CAPACITACIONES",
        textoCapacitaciones: "Cursos y simulacros",

        cardProductos: "PRODUCTOS",
        textoProductos: "Tienda online",

        emergenciasNaturales: "EMERGENCIAS NATURALES",
        inundacion: "Inundación",
        sismos: "Sismos",
        abejas: "Abejas",
        derrumbes: "Derrumbes",
        terremotos: "Terremotos",

        emergenciasUrbanas: "EMERGENCIAS URBANAS",
        incendios: "Incendios",
        explosiones: "Explosiones",
        accidentes: "Accidentes",
        aQuienLlamar: "¿A quién llamar?",
        fugaGas: "Fuga de gas",

        prevencion: "PREVENCIÓN Y EDUCACIÓN",
        primerosAuxilios: "Primeros auxilios",
        simulacros: "Simulacros",
        preparacionFamiliar: "Preparación familiar",
        consejos: "Consejos",

        donarSangre: "¿DESEAS DONAR SANGRE?",
        masInfo: "MÁS INFORMACIÓN",

        mapa: "MAPA INTERACTIVO",

        mapaTexto:
        "Encuentra hospitales, estaciones de emergencia, refugios temporales y rutas seguras cerca de ti.",

        verMapa: "VER MAPA",

        numerosEmergencia: "NÚMEROS DE EMERGENCIA",

        ambulancia: "AMBULANCIA",
        bomberos: "BOMBEROS",
        policia: "POLICÍA",
        sinaproc: "SINAPROC",

        gemaTitulo: "GEMA",

        gemaDescripcion:
        "Global Emergency Management Access. Promoviendo la preparación, prevención y respuesta ante emergencias para toda la comunidad.",

        footerEnlaces: "Enlaces",
        footerContacto: "Contacto",
        footerSiguenos: "Síguenos",

        telefono: "Teléfono: +507 6000-0000",
        panama: "Panamá",

        footerDerechos:
        "© 2026 GEMA | Global Emergency Management Access. Todos los derechos reservados.",

        mapaInteractivo: "Mapa Interactivo"
    },


    en: {

        inicio: "Home",
        gemas: "Gems",
        informacion: "Information",
        ninos: "Children",
        capacitaciones: "Training",
        productos: "Products",

        pais: "Donations",

        heroTitulo: "WE ARE HERE <br> TO HELP",

        heroTexto:
        "We work together with our community to promote, improve and maintain a culture of disaster preparedness.",

        conoceMas: "LEARN MORE",

        cardInfo: "INFORMATION",
        textoInfo: "What is GEMA?",

        cardNinos: "CHILDREN",
        textoNinos: "Information and learning",

        cardCapacitaciones: "TRAINING",
        textoCapacitaciones: "Courses and drills",

        cardProductos: "PRODUCTS",
        textoProductos: "Online store",

        emergenciasNaturales: "NATURAL EMERGENCIES",
        inundacion: "Floods",
        sismos: "Earthquakes",
        abejas: "Bees",
        derrumbes: "Landslides",
        terremotos: "Major earthquakes",

        emergenciasUrbanas: "URBAN EMERGENCIES",
        incendios: "Fires",
        explosiones: "Explosions",
        accidentes: "Accidents",
        aQuienLlamar: "Who to call?",
        fugaGas: "Gas leak",

        prevencion: "PREVENTION AND EDUCATION",
        primerosAuxilios: "First aid",
        simulacros: "Drills",
        preparacionFamiliar: "Family preparedness",
        consejos: "Tips",

        donarSangre: "WOULD YOU LIKE TO DONATE BLOOD?",
        masInfo: "MORE INFORMATION",

        mapa: "INTERACTIVE MAP",

        mapaTexto:
        "Find hospitals, emergency stations, temporary shelters and safe routes near you.",

        verMapa: "VIEW MAP",

        numerosEmergencia: "EMERGENCY NUMBERS",

        ambulancia: "AMBULANCE",
        bomberos: "FIREFIGHTERS",
        policia: "POLICE",
        sinaproc: "SINAPROC",

        gemaTitulo: "GEMA",

        gemaDescripcion:
        "Global Emergency Management Access. Promoting preparedness, prevention and emergency response for the entire community.",

        footerEnlaces: "Links",
        footerContacto: "Contact",
        footerSiguenos: "Follow Us",

        telefono: "Phone: +507 6000-0000",
        panama: "Panama",

        footerDerechos:
        "© 2026 GEMA | Global Emergency Management Access. All rights reserved.",

        mapaInteractivo: "Interactive Map"
    }

};


/*==================================================
                    CAMBIAR IDIOMA
==================================================*/

function cambiarIdioma(idioma){

    document.querySelectorAll("[data-i18n]").forEach(el => {

        const clave = el.getAttribute("data-i18n");

        if(textos[idioma] && textos[idioma][clave]){

            if(clave === "heroTitulo"){

                el.innerHTML = textos[idioma][clave];

            }else{

                el.textContent = textos[idioma][clave];

            }

        }

    });

    localStorage.setItem("idioma", idioma);

}


/*==================================================
                    CARGAR NAV
==================================================*/

document.addEventListener("DOMContentLoaded", function(){

    fetch("nav.html")
        .then(response => {

            if(!response.ok){

                throw new Error("No se pudo cargar nav.html");

            }

            return response.text();

        })
        .then(data => {

            document.getElementById("nav-container").innerHTML = data;


            /*========================================
                    IDIOMA DESPUÉS DEL NAV
            ========================================*/

            const idioma = localStorage.getItem("idioma") || "es";

            cambiarIdioma(idioma);


            /*========================================
                    HEADER / SCROLL
            ========================================*/

            const header = document.querySelector(".header");

            if(header){

                window.addEventListener("scroll", function(){

                    if(window.scrollY > 40){

                        header.classList.add("scrolled");

                    }else{

                        header.classList.remove("scrolled");

                    }

                });

            }

        })
        .catch(error => {

            console.error("Error al cargar el navbar:", error);

        });

});