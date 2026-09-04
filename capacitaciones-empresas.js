/*==========================================================
        CAPACITACIONES - EMPRESAS
==========================================================*/

/*==========================================================
        ELEMENTOS DEL MODAL
==========================================================*/

const empresaImagen = document.getElementById("empresaImagen");
const empresaTitulo = document.getElementById("empresaTitulo");
const empresaDescripcion = document.getElementById("empresaDescripcion");

const empresaDuracion = document.getElementById("empresaDuracion");
const empresaModalidad = document.getElementById("empresaModalidad");
const empresaParticipantes = document.getElementById("empresaParticipantes");

const empresaBeneficios = document.getElementById("empresaBeneficios");

const cursoSeleccionado = document.getElementById("cursoSeleccionado");


/*==========================================================
        INFORMACIÓN DE LOS CURSOS
==========================================================*/

const cursosEmpresa = {

    brigadas:{

        imagen:"Imagenes/brigadas.jfif",

        titulo:"Formación de Brigadas de Emergencia",

        descripcion:"Capacitación para responder de forma organizada ante incendios, evacuaciones y otras emergencias.",

        duracion:"16 horas",

        modalidad:"Presencial",

        participantes:"Personal de empresas e instituciones.",

        beneficios:[

            "Fortalece la respuesta ante emergencias.",

            "Reduce riesgos laborales.",

            "Capacitación impartida por instructores certificados.",

            "Material digital incluido."

        ]

    },

    seguridad:{

        imagen:"Imagenes/salud.jpg",

        titulo:"Charlas de Seguridad y Salud Laboral",

        descripcion:"Programas dirigidos a fortalecer la cultura de prevención dentro de la empresa.",

        duracion:"8 horas",

        modalidad:"Presencial o Virtual",

        participantes:"Todo el personal de la empresa.",

        beneficios:[

            "Promueve una cultura preventiva.",

            "Disminuye accidentes laborales.",

            "Fortalece el cumplimiento de normas de seguridad.",

            "Material digital incluido."

        ]

    },

    simulacros:{

        imagen:"Imagenes/evacua.jfif",

        titulo:"Simulacros de Evacuación",

        descripcion:"Ejercicios prácticos para fortalecer la respuesta del personal ante diferentes escenarios de emergencia.",

        duracion:"6 horas",

        modalidad:"Presencial",

        participantes:"Todo el personal de la empresa.",

        beneficios:[

            "Evalúa los tiempos de respuesta.",

            "Identifica oportunidades de mejora.",

            "Fortalece la coordinación interna.",

            "Entrega de informe final."

        ]

    },

    extintores:{

        imagen:"Imagenes/fuego.jfif",

        titulo:"Manejo de Fuego y Extintores",

        descripcion:"Aprenda el uso correcto de extintores y las técnicas básicas para controlar incendios incipientes.",

        duracion:"8 horas",

        modalidad:"Presencial",

        participantes:"Personal operativo y administrativo.",

        beneficios:[

            "Uso correcto de extintores.",

            "Prácticas con fuego controlado.",

            "Disminución del riesgo de incendios.",

            "Certificado digital."

        ]

    }

};

/*==========================================================
        CONTINÚA EN LA PARTE 2
==========================================================*/

/*==========================================================
        CARGAR INFORMACIÓN DEL CURSO
==========================================================*/

function cargarCursoEmpresa(nombreCurso){

    console.log("Nombre recibido:", nombreCurso);

    const curso = cursosEmpresa[nombreCurso];

    console.log("Objeto curso:", curso);

    if(!curso) return;

    /*=====================================
            CABECERA
    =====================================*/

    empresaImagen.src = curso.imagen;
    empresaImagen.alt = curso.titulo;

    empresaTitulo.textContent = curso.titulo;
    empresaDescripcion.textContent = curso.descripcion;

    /*=====================================
            INFORMACIÓN
    =====================================*/

    empresaDuracion.textContent = curso.duracion;
       
    if (empresaModalidad) {

    empresaModalidad.textContent = curso.modalidad;

}
    empresaParticipantes.textContent = curso.participantes;

    /*=====================================
            BENEFICIOS
    =====================================*/

    empresaBeneficios.innerHTML = "";

    curso.beneficios.forEach((beneficio) => {

        const li = document.createElement("li");

        li.textContent = beneficio;

        empresaBeneficios.appendChild(li);

    });

    /*=====================================
            FORMULARIO
    =====================================*/

    console.log("Elemento:", cursoSeleccionado);

    if(cursoSeleccionado){

        cursoSeleccionado.value = curso.titulo;

        console.log("Valor asignado:", cursoSeleccionado.value);

    }

}

/*==========================================================
        EMAILJS - SOLICITUD DE CAPACITACIÓN EMPRESARIAL
==========================================================*/

// Inicializar EmailJS
emailjs.init({
    publicKey: "_f0iAXlowMbdtf4LY"
});


const formularioEmpresa = document.getElementById("formularioEmpresa");


if (formularioEmpresa) {

    formularioEmpresa.addEventListener("submit", function(event) {

        event.preventDefault();

        // Obtener el botón
        const botonEnviar = formularioEmpresa.querySelector(".btn-enviar");

        // Cambiar estado del botón
        botonEnviar.disabled = true;
        botonEnviar.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Enviando...
        `;


        // Datos del formulario
        const datosEmpresa = {

            empresaNombre:
                document.getElementById("empresaNombre").value,

            empresaRuc:
                document.getElementById("empresaRuc").value,

            empresaSector:
                document.getElementById("empresaSector").value,

            empresaProvincia:
                document.getElementById("empresaProvincia").value,

            empresaDireccion:
                document.getElementById("empresaDireccion").value,

            contactoNombre:
                document.getElementById("contactoNombre").value,

            contactoCargo:
                document.getElementById("contactoCargo").value,

            contactoCorreo:
                document.getElementById("contactoCorreo").value,

            contactoTelefono:
                document.getElementById("contactoTelefono").value,

            cursoSeleccionado:
                document.getElementById("cursoSeleccionado").value,

            cantidadParticipantes:
                document.getElementById("cantidadParticipantes").value,

            fechaCapacitacion:
                document.getElementById("fechaCapacitacion").value,

            modalidadCapacitacion:
                document.getElementById("modalidadCapacitacion").value,

            necesidadesEspeciales:
                document.getElementById("necesidadesEspeciales").value,

            comentariosEmpresa:
                document.getElementById("comentariosEmpresa").value

        };


        console.log("Datos enviados:", datosEmpresa);


        // ENVIAR A EMAILJS
        emailjs.send(
            "service_r2j2mbi",
            "template_csqs0a4",
            datosEmpresa
        )

        .then(function(response) {

            console.log(
                "Solicitud empresarial enviada:",
                response.status,
                response.text
            );


            toastExito(
    '¡Solicitud Enviada!',
    'Su solicitud de capacitación empresarial ha sido enviada correctamente. Un asesor de GEMA se pondrá en contacto con usted en las próximas 24 horas.'
);


            // Limpiar formulario
            formularioEmpresa.reset();


            // Restaurar botón
            botonEnviar.disabled = false;

            botonEnviar.innerHTML = `
                <i class="fa-solid fa-building"></i>
                <span data-i18n="solicitarCapacitacion">
                    Solicitar Capacitación
                </span>
            `;

        })

        .catch(function(error) {

            console.error(
                "Error al enviar la solicitud:",
                error
            );


            toastError(
    'Error al Enviar',
    'No se pudo enviar la solicitud. Por favor, verifique su conexión a internet e inténtelo nuevamente.'
);


            // Restaurar botón
            botonEnviar.disabled = false;

            botonEnviar.innerHTML = `
                <i class="fa-solid fa-building"></i>
                <span data-i18n="solicitarCapacitacion">
                    Solicitar Capacitación
                </span>
            `;

        });

    });

}