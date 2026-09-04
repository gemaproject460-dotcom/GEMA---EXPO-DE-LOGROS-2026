const translations = {
    es: {

        // NAVBAR
        inicio: "Inicio",
        gemas: "Gemas",
        informacion: "Información",
        ninos: "Niños",
        capacitaciones: "Capacitaciones",
        productos: "Productos",
        pais: "Donaciones",

    // HERO
heroTitulo: "BANCOS DE SANGRE EN PANAMÁ",
heroTexto: "La donación de sangre salva vidas todos los días. GEMA busca informar, educar y apoyar a la población panameña sobre la importancia de los bancos de sangre.",

// IMPORTANCIA
importancia: "IMPORTANCIA",
importanciaTexto1: "Los bancos de sangre son esenciales para el sistema de salud en Panamá. Permiten almacenar y distribuir sangre segura para atender emergencias, cirugías, accidentes y enfermedades.",
importanciaTexto2: "Gracias a las donaciones voluntarias se pueden salvar miles de vidas y mantener abastecidos los hospitales del país.",

// ¿A QUIÉN AYUDA?
aQuienAyuda: "¿A QUIÉN AYUDA?",
ayuda1: "Pacientes en cirugías de emergencia.",
ayuda2: "Víctimas de accidentes de tránsito.",
ayuda3: "Niños y adultos con cáncer.",
ayuda4: "Mujeres con complicaciones durante el parto.",
ayuda5: "Personas que necesitan transfusiones constantes.",
ayuda6: "Pacientes en tratamientos médicos especiales.",

// ¿QUÉ ES?
queEsBanco: "¿QUÉ ES UN BANCO DE SANGRE?",
queEsTexto1: "Un banco de sangre es un centro médico encargado de recolectar, analizar, almacenar y distribuir sangre para pacientes que la necesiten.",
queEsTexto2: "Toda sangre donada pasa por controles de seguridad para garantizar transfusiones seguras y compatibles.",

// GRUPOS
grupos: "GRUPOS SANGUÍNEOS",
grupoTexto: "O- es considerado donador universal y AB+ receptor universal.",

// INFORMACIÓN
informacionOficial: "INFORMACIÓN OFICIAL EN PANAMÁ",
minsa: "Ministerio de Salud de Panamá",
css: "Caja de Seguro Social",
donaSangre: "Dona Sangre",
bancosSangre: "Bancos de Sangre",


        // FOOTER
        gemaTitulo: "GEMA",
        gemaDescripcion: "Global Emergency Management Access. Promoviendo la preparación, prevención y respuesta ante emergencias para toda la comunidad.",
        footerEnlaces: "Enlaces",
        mapaInteractivo: "Mapa Interactivo",
        footerContacto: "Contacto",
        telefono: "Teléfono: +507 6000-0000",
        panama: "Panamá",
        footerSiguenos: "Síguenos",
        footerDerechos: "© 2026 GEMA | Global Emergency Management Access. Todos los derechos reservados."
    },

     en: {
       // NAVBAR
        inicio: "Home",
        gemas: "Gemas",
        informacion: "Information",
        ninos: "Kids",
        capacitaciones: "Training",
        productos: "Products",
        pais: "Donations",

// HERO
heroTitulo: "BLOOD BANKS IN PANAMA",
heroTexto: "Blood donation saves lives every day. GEMA aims to inform, educate, and support the Panamanian population about the importance of blood banks.",

// IMPORTANCE
importancia: "IMPORTANCE",
importanciaTexto1: "Blood banks are essential to Panama's healthcare system. They collect, store, and distribute safe blood for emergencies, surgeries, accidents, and illnesses.",
importanciaTexto2: "Thanks to voluntary donations, thousands of lives can be saved while keeping hospitals supplied.",

// WHO DOES IT HELP?
aQuienAyuda: "WHO DOES IT HELP?",
ayuda1: "Patients undergoing emergency surgeries.",
ayuda2: "Victims of traffic accidents.",
ayuda3: "Children and adults with cancer.",
ayuda4: "Women with childbirth complications.",
ayuda5: "People who require regular blood transfusions.",
ayuda6: "Patients receiving specialized medical treatments.",

// WHAT IS IT?
queEsBanco: "WHAT IS A BLOOD BANK?",
queEsTexto1: "A blood bank is a medical center responsible for collecting, testing, storing, and distributing blood to patients in need.",
queEsTexto2: "Every blood donation undergoes safety testing to ensure safe and compatible transfusions.",

// BLOOD TYPES
grupos: "BLOOD TYPES",
grupoTexto: "O- is the universal donor and AB+ is the universal recipient.",

// INFORMATION
informacionOficial: "OFFICIAL INFORMATION IN PANAMA",
minsa: "Ministry of Health of Panama",
css: "Social Security Fund",
donaSangre: "Donate Blood",
bancosSangre: "Blood Banks",




// FOOTER
        gemaTitulo: "GEMA",
        gemaDescripcion: "Global Emergency Management Access. Promoting preparedness, prevention, and emergency response for the entire community.",
        footerEnlaces: "Links",
        mapaInteractivo: "Interactive Map",
        footerContacto: "Contact",
        telefono: "Phone: +507 6000-0000",
        panama: "Panama",
        footerSiguenos: "Follow Us",
        footerDerechos: "© 2026 GEMA | Global Emergency Management Access. All rights reserved."
    }
};


function cambiarIdioma(idioma) {
    localStorage.setItem("idioma", idioma);

    document.querySelectorAll("[data-i18n]").forEach(elemento => {
        const key = elemento.getAttribute("data-i18n");
        if (translations[idioma][key]) {
            elemento.innerHTML = translations[idioma][key];
        }
    });
}

const idiomaGuardado = localStorage.getItem("idioma") || "es";
cambiarIdioma(idiomaGuardado);
