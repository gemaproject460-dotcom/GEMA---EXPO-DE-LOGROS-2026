// =========================================
// GEMA K9 - JAVASCRIPT
// =========================================


// =========================================
// TRADUCCIONES
// =========================================

const textos = {

    es: {

        // Página
        k9_titulo_pagina: "GEMA K9 | Registro",

        // Navegación
        volver: "Volver",

        // Introducción
        k9_titulo: "ÚNETE A GEMA K9",

        k9_subtitulo:
            "Forma parte de nuestra comunidad de rescate y contribuye a fortalecer la respuesta ante emergencias.",


        // Datos personales
        datos_personales: "Datos personales",

        datos_personales_desc:
            "Información básica del participante.",

        nombre: "Nombre completo",

        nombre_placeholder:
            "Ingresa tu nombre completo",

        correo: "Correo electrónico",

        correo_placeholder:
            "ejemplo@correo.com",

        telefono: "Teléfono",

        telefono_placeholder:
            "Ingresa tu número",

        provincia: "Provincia",

        seleccionar_provincia:
            "Selecciona tu provincia",

        edad: "Edad",


        // Participación
        participacion:
            "¿Cómo te gustaría participar?",

        participacion_desc:
            "Selecciona el área que más te interesa.",

        guia_k9:
            "Guía K9",

        guia_k9_desc:
            "Formación y acompañamiento de unidades K9.",

        voluntario:
            "Voluntario",

        voluntario_desc:
            "Apoyo en actividades y operaciones.",

        apoyo_emergencias:
            "Apoyo en emergencias",

        apoyo_emergencias_desc:
            "Apoyo a equipos durante situaciones de emergencia.",

        entrenamiento:
            "Entrenamiento",

        entrenamiento_desc:
            "Información sobre formación K9.",


        // Información del perro
        informacion_perro:
            "Información del perro",

        informacion_perro_desc:
            "Completa esta sección si ya cuentas con un perro.",

        nombre_perro:
            "Nombre del perro",

        nombre_perro_placeholder:
            "Nombre del perro",

        raza:
            "Raza",

        raza_placeholder:
            "Ej. Pastor Alemán",

        edad_perro:
            "Edad del perro",

        entrenamiento_perro:
            "¿Tiene entrenamiento previo?",

        seleccionar_opcion:
            "Selecciona una opción",

        si:
            "Sí",

        no:
            "No",


        // Experiencia
        experiencia:
            "Experiencia",

        experiencia_desc:
            "Cuéntanos sobre tu experiencia relacionada.",

        experiencia_label:
            "Experiencia previa",

        experiencia_placeholder:
            "Cuéntanos brevemente sobre tu experiencia...",


        // Comentarios
        comentarios:
            "Comentarios adicionales",

        comentarios_placeholder:
            "¿Hay algo más que quieras contarnos?",


        // Botón
        enviar:
            "ENVIAR SOLICITUD",


        // Éxito
        exito_titulo:
            "¡Solicitud enviada!",

        exito_texto:
            "Gracias por tu interés en formar parte de GEMA K9. Nos pondremos en contacto contigo."
    },


    // =====================================
    // INGLÉS
    // =====================================

    en: {

        // Página
        k9_titulo_pagina: "GEMA K9 | Registration",

        // Navegación
        volver: "Back",

        // Introducción
        k9_titulo:
            "JOIN GEMA K9",

        k9_subtitulo:
            "Become part of our rescue community and help strengthen emergency response.",


        // Datos personales
        datos_personales:
            "Personal Information",

        datos_personales_desc:
            "Basic participant information.",

        nombre:
            "Full Name",

        nombre_placeholder:
            "Enter your full name",

        correo:
            "Email",

        correo_placeholder:
            "example@email.com",

        telefono:
            "Phone",

        telefono_placeholder:
            "Enter your phone number",

        provincia:
            "Province",

        seleccionar_provincia:
            "Select your province",

        edad:
            "Age",


        // Participación
        participacion:
            "How would you like to participate?",

        participacion_desc:
            "Select the area that interests you the most.",

        guia_k9:
            "K9 Handler",

        guia_k9_desc:
            "Training and support for K9 units.",

        voluntario:
            "Volunteer",

        voluntario_desc:
            "Support in activities and operations.",

        apoyo_emergencias:
            "Emergency Support",

        apoyo_emergencias_desc:
            "Support emergency response teams.",

        entrenamiento:
            "Training",

        entrenamiento_desc:
            "Information about K9 training.",


        // Información del perro
        informacion_perro:
            "Dog Information",

        informacion_perro_desc:
            "Complete this section if you already have a dog.",

        nombre_perro:
            "Dog's Name",

        nombre_perro_placeholder:
            "Dog's name",

        raza:
            "Breed",

        raza_placeholder:
            "e.g. German Shepherd",

        edad_perro:
            "Dog's Age",

        entrenamiento_perro:
            "Does the dog have previous training?",

        seleccionar_opcion:
            "Select an option",

        si:
            "Yes",

        no:
            "No",


        // Experiencia
        experiencia:
            "Experience",

        experiencia_desc:
            "Tell us about your relevant experience.",

        experiencia_label:
            "Previous Experience",

        experiencia_placeholder:
            "Briefly tell us about your experience...",


        // Comentarios
        comentarios:
            "Additional Comments",

        comentarios_placeholder:
            "Is there anything else you would like to tell us?",


        // Botón
        enviar:
            "SUBMIT APPLICATION",


        // Éxito
        exito_titulo:
            "Application Sent!",

        exito_texto:
            "Thank you for your interest in joining GEMA K9. We will contact you soon."
    }

};


// =========================================
// CAMBIAR IDIOMA
// =========================================

function cambiarIdioma(idioma) {

    // Guardar idioma
    localStorage.setItem("idioma", idioma);

    // Cambiar atributo del documento
    document.documentElement.lang = idioma;


    // =====================================
    // TEXTOS
    // =====================================

    document.querySelectorAll("[data-i18n]").forEach(elemento => {

        const clave = elemento.dataset.i18n;

        if (textos[idioma][clave]) {

            elemento.textContent = textos[idioma][clave];

        }

    });


    // =====================================
    // PLACEHOLDERS
    // =====================================

    document.querySelectorAll("[data-i18n-placeholder]")
        .forEach(elemento => {

            const clave =
                elemento.dataset.i18nPlaceholder;

            if (textos[idioma][clave]) {

                elemento.placeholder =
                    textos[idioma][clave];

            }

        });


    // =====================================
    // TITLE
    // =====================================

    if (textos[idioma].k9_titulo_pagina) {

        document.title =
            textos[idioma].k9_titulo_pagina;

    }


    // =====================================
    // BOTÓN DE IDIOMA
    // =====================================

    const idiomaTexto =
        document.getElementById("idiomaTexto");

    if (idiomaTexto) {

        idiomaTexto.textContent =
            idioma === "es" ? "EN" : "ES";

    }
}


// =========================================
// BOTÓN DE IDIOMA
// =========================================

const idiomaBtn =
    document.getElementById("idiomaBtn");


if (idiomaBtn) {

    idiomaBtn.addEventListener("click", () => {

        const idiomaActual =
            localStorage.getItem("idioma") || "es";

        const nuevoIdioma =
            idiomaActual === "es" ? "en" : "es";

        cambiarIdioma(nuevoIdioma);

    });

}


// =========================================
// IDIOMA INICIAL
// =========================================

const idiomaGuardado =
    localStorage.getItem("idioma") || "es";

cambiarIdioma(idiomaGuardado);


// =========================================
// FORMULARIO
// =========================================

const formulario =
    document.getElementById("k9Form");

const mensajeExito =
    document.getElementById("mensajeExito");


if (formulario) {

    formulario.addEventListener("submit", function(evento) {

        // Evitar recarga de la página
        evento.preventDefault();


        // Verificar campos requeridos
        if (!formulario.checkValidity()) {

            formulario.reportValidity();

            return;

        }


        // Ocultar formulario
        formulario.style.display = "none";


        // Mostrar mensaje
        if (mensajeExito) {

            mensajeExito.hidden = false;

            mensajeExito.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    });

}
