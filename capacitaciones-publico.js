/*==========================================================
            CAPACITACIONES - PÚBLICO
==========================================================*/

/*==========================================================
            ELEMENTOS DEL MODAL
==========================================================*/

const publicoImagen = document.getElementById("publicoImagen");
const publicoTitulo = document.getElementById("publicoTitulo");
const publicoDescripcion = document.getElementById("publicoDescripcion");

const publicoDuracion = document.getElementById("publicoDuracion");
const publicoModalidad = document.getElementById("publicoModalidad");
const publicoCupos = document.getElementById("publicoCupos");

const publicoCurso = document.getElementById("publicoCurso");


/*==========================================================
            INFORMACIÓN DE LOS CURSOS
==========================================================*/

const cursosPublico = {

    rcp:{

        imagen:"Imagenes/auxilios.jpg",

        titulo:"Primeros Auxilios con RCP y DEA",

        descripcion:"Aprende técnicas para actuar durante un paro cardiorrespiratorio utilizando RCP y DEA.",

        duracion:"8 horas",

        modalidad:"Presencial",

        cupos:"25 participantes"

    },

    primeraRespuesta:{

        imagen:"Imagenes/firt.jpg",

        titulo:"Primera Respuesta ante Emergencias",

        descripcion:"Capacitación para responder correctamente durante los primeros minutos de una emergencia.",

        duracion:"8 horas",

        modalidad:"Presencial",

        cupos:"30 participantes"

    },

    ninos:{

        imagen:"Imagenes/ninos.png",

        titulo:"Primeros Auxilios para Niños",

        descripcion:"Atención inmediata ante accidentes y emergencias pediátricas.",

        duracion:"6 horas",

        modalidad:"Presencial",

        cupos:"25 participantes"

    },

    sangrado:{

        imagen:"Imagenes/sangrado.png",

        titulo:"Control de Sangrados Masivos",

        descripcion:"Técnicas para controlar hemorragias graves mientras llega la ayuda médica.",

        duracion:"6 horas",

        modalidad:"Presencial",

        cupos:"25 participantes"

    },

    ove:{

        imagen:"Imagenes/vehiculos.jfif",

        titulo:"Operador de Vehículos de Emergencia (OVE)",

        descripcion:"Formación especializada para la conducción segura de vehículos de emergencia.",

        duracion:"24 horas",

        modalidad:"Presencial",

        cupos:"20 participantes"

    }

};


/*==========================================================
                CONTINÚA EN LA PARTE 2
==========================================================*/

/*==========================================================
            CARGAR INFORMACIÓN DEL CURSO
==========================================================*/

function cargarCursoPublico(nombreCurso){

    const curso = cursosPublico[nombreCurso];

    if(!curso) return;

    /*=====================================
            CABECERA
    =====================================*/

    publicoImagen.src = curso.imagen;
    publicoImagen.alt = curso.titulo;

    publicoTitulo.textContent = curso.titulo;

    publicoDescripcion.textContent = curso.descripcion;


    /*=====================================
            INFORMACIÓN
    =====================================*/

    publicoDuracion.textContent = curso.duracion;

    publicoModalidad.textContent = curso.modalidad;

    publicoCupos.textContent = curso.cupos;


    /*=====================================
            FORMULARIO
    =====================================*/

    if(publicoCurso){

        publicoCurso.value = curso.titulo;

    }

}


/*==========================================================
        DISPONIBLE PARA OTROS ARCHIVOS
==========================================================*/

window.cargarCursoPublico = cargarCursoPublico;


/*==========================================================
                CONTINÚA EN LA PARTE 3
==========================================================*/


/*==========================================================
            EMAILJS - FORMULARIO PÚBLICO
==========================================================*/

// Inicializar EmailJS
emailjs.init({
    publicKey: "_f0iAXlowMbdtf4LY"
});


const formularioPublico =
    document.getElementById("formularioPublico");


if(formularioPublico){

    formularioPublico.addEventListener("submit", function(e){

        // Evitar que la página se recargue
        e.preventDefault();


        // Botón de envío
        const botonEnviar =
            formularioPublico.querySelector(".btn-enviar");


        // Cambiar apariencia del botón
        botonEnviar.disabled = true;

        botonEnviar.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Enviando...
        `;


        /*==================================================
                DATOS DEL FORMULARIO
        ==================================================*/

        const datosPublico = {

            publicoCurso:
                document.getElementById("publicoCurso").value,

            nombreCompleto:
                document.getElementById("nombreCompleto").value,

            cedula:
                document.getElementById("cedula").value,

            fechaNacimiento:
                document.getElementById("fechaNacimiento").value,

            edad:
                document.getElementById("edad").value,

            sexo:
                document.getElementById("sexo").value,

            provinciaPublico:
                document.getElementById("provinciaPublico").value,

            distrito:
                document.getElementById("distrito").value,

            direccion:
                document.getElementById("direccion").value,

            correoPublico:
                document.getElementById("correoPublico").value,

            telefonoPublico:
                document.getElementById("telefonoPublico").value,

            profesion:
                document.getElementById("profesion").value,

            empresaPublico:
                document.getElementById("empresaPublico").value,

            experiencia:
                document.getElementById("experiencia").value,

            cursoAnterior:
                document.getElementById("cursoAnterior").value,

            contactoEmergencia:
                document.getElementById("contactoEmergencia").value,

            telefonoEmergencia:
                document.getElementById("telefonoEmergencia").value,

            condicionMedica:
                document.getElementById("condicionMedica").value,

            comentariosPublico:
                document.getElementById("comentariosPublico").value

        };


        console.log("Datos enviados:", datosPublico);


        /*==================================================
                    ENVIAR CON EMAILJS
        ==================================================*/

        emailjs.send(
            "service_r2j2mbi",
            "template_t8fhjax",
            datosPublico
        )

        .then(function(response){

            console.log(
                "Inscripción enviada:",
                response.status,
                response.text
            );


            toastExito(
    '¡Inscripción Exitosa!',
    'Su inscripción ha sido registrada correctamente. En breve recibirá un correo de confirmación con los detalles del curso.'
);


            // Limpiar formulario
            formularioPublico.reset();


            // Restaurar botón
            botonEnviar.disabled = false;

            botonEnviar.innerHTML = `
                <i class="fa-solid fa-user-check"></i>

                <span data-i18n="inscribirme">
                    Inscribirme
                </span>
            `;


            // Cerrar modal
            if(typeof cerrarModalPublico === "function"){

                cerrarModalPublico();

            }

        })

        .catch(function(error){

            console.error(
                "Error al enviar la inscripción:",
                error
            );

toastError(
    'Error al Inscribirse',
    'No se pudo completar la inscripción. Por favor, verifique sus datos e inténtelo nuevamente.'
);



            // Restaurar botón
            botonEnviar.disabled = false;

            botonEnviar.innerHTML = `
                <i class="fa-solid fa-user-check"></i>

                <span data-i18n="inscribirme">
                    Inscribirme
                </span>
            `;

        });

    });

}