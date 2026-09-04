
/*==========================================================
            ELEMENTOS DEL DOM
==========================================================*/

const overlayEmpresa = document.getElementById("overlayEmpresa");
const modalEmpresa = document.querySelector(".modal-empresa");

const overlayPublico = document.getElementById("overlayPublico");
const modalPublico = document.querySelector(".modal-publico");

const botonesEmpresa = document.querySelectorAll(".btn-empresa");
const botonesPublico = document.querySelectorAll(".btn-publico");

const cerrarEmpresa = document.getElementById("cerrarEmpresa");
const cerrarPublico = document.getElementById("cerrarPublico");

const cancelarEmpresa = document.getElementById("cancelarEmpresa");
const cancelarPublico = document.getElementById("cancelarPublico");


/*==========================================================
            ABRIR MODAL EMPRESAS
==========================================================*/

botonesEmpresa.forEach((boton) => {

    boton.addEventListener("click", (e) => {

        e.preventDefault();

        const curso = boton.dataset.curso;

        console.log("Curso seleccionado:", curso);

        overlayEmpresa.classList.add("activo");

        document.body.style.overflow = "hidden";

        /*
            Esta función estará en
            capacitaciones-empresas.js
        */

        if (typeof cargarCursoEmpresa === "function") {

            cargarCursoEmpresa(curso);

        }

    });

});


/*==========================================================
            ABRIR MODAL PÚBLICO
==========================================================*/

botonesPublico.forEach((boton) => {

    boton.addEventListener("click", (e) => {

        e.preventDefault();

        const curso = boton.dataset.curso;

        overlayPublico.classList.add("activo");

        document.body.style.overflow = "hidden";

        /*
            Esta función estará en
            capacitaciones-publico.js
        */

        if (typeof cargarCursoPublico === "function") {

            cargarCursoPublico(curso);

        }

    });

});

/*==========================================================
            CERRAR MODAL EMPRESAS
==========================================================*/

function cerrarModalEmpresa() {

    overlayEmpresa.classList.remove("activo");

    document.body.style.overflow = "";

}


/*==========================================================
            CERRAR MODAL PÚBLICO
==========================================================*/

function cerrarModalPublico() {

    overlayPublico.classList.remove("activo");

    document.body.style.overflow = "";

}


/*==========================================================
            BOTÓN X
==========================================================*/

cerrarEmpresa.addEventListener("click", cerrarModalEmpresa);

cerrarPublico.addEventListener("click", cerrarModalPublico);


/*==========================================================
            BOTÓN CANCELAR
==========================================================*/

cancelarEmpresa.addEventListener("click", cerrarModalEmpresa);

cancelarPublico.addEventListener("click", cerrarModalPublico);


/*==========================================================
            CERRAR AL HACER CLIC FUERA
==========================================================*/

overlayEmpresa.addEventListener("click", (e) => {

    if (e.target === overlayEmpresa) {

        cerrarModalEmpresa();

    }

});


overlayPublico.addEventListener("click", (e) => {

    if (e.target === overlayPublico) {

        cerrarModalPublico();

    }

});


/*==========================================================
            CERRAR CON ESC
==========================================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        if (overlayEmpresa.classList.contains("activo")) {

            cerrarModalEmpresa();

        }

        if (overlayPublico.classList.contains("activo")) {

            cerrarModalPublico();

        }

    }

});


/*==========================================================
            EVITAR PROPAGACIÓN DEL CLIC
==========================================================*/

modalEmpresa.addEventListener("click", (e) => {

    e.stopPropagation();

});


modalPublico.addEventListener("click", (e) => {

    e.stopPropagation();

});


/*==========================================================
            FUNCIONES DISPONIBLES GLOBALMENTE
==========================================================*/

window.cerrarModalEmpresa = cerrarModalEmpresa;

window.cerrarModalPublico = cerrarModalPublico;

/*==========================================================
            SISTEMA DE NOTIFICACIONES (TOASTS)
==========================================================*/

// Crear el contenedor de notificaciones si no existe
function crearContenedorToast() {
    let contenedor = document.getElementById('toast-container');
    if (!contenedor) {
        contenedor = document.createElement('div');
        contenedor.id = 'toast-container';
        document.body.appendChild(contenedor);
    }
    return contenedor;
}

// Función para cerrar una notificación con animación
function cerrarToast(toast) {
    if (!toast || !toast.parentNode) return;
    
    toast.style.animation = 'toastSalida 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
    
    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 400);
}

// Función principal para mostrar notificaciones
function mostrarToast(config) {
    const {
        titulo,
        mensaje,
        tipo = 'info', // success, error, info, warning
        duracion = 4500,
        icono = null
    } = config;

    const contenedor = crearContenedorToast();
    
    // Crear la notificación
    const toast = document.createElement('div');
    toast.className = `toast ${tipo}`;
    
    // Iconos por defecto según el tipo
    const iconosPorTipo = {
        success: 'fa-solid fa-check-circle',
        error: 'fa-solid fa-circle-xmark',
        info: 'fa-solid fa-circle-info',
        warning: 'fa-solid fa-triangle-exclamation'
    };
    
    const iconoFinal = icono || iconosPorTipo[tipo] || 'fa-solid fa-bell';
    
    // Construir el HTML de la notificación
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="${iconoFinal}"></i>
        </div>
        <div class="toast-content">
            <p class="toast-title">${titulo}</p>
            <p class="toast-message">${mensaje}</p>
        </div>
        <button class="toast-close" aria-label="Cerrar notificación">
            <i class="fa-solid fa-xmark"></i>
        </button>
    `;
    
    // Añadir al contenedor
    contenedor.appendChild(toast);
    
    // Configurar el botón de cerrar
    const btnCerrar = toast.querySelector('.toast-close');
    btnCerrar.addEventListener('click', () => {
        cerrarToast(toast);
    });
    
    // Auto-cerrar después de la duración
    const timeout = setTimeout(() => {
        cerrarToast(toast);
    }, duracion);
    
    // Pausar el auto-cierre al hacer hover
    toast.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
    });
    
    toast.addEventListener('mouseleave', () => {
        setTimeout(() => {
            cerrarToast(toast);
        }, duracion);
    });
    
    return toast;
}

// Funciones de ayuda para cada tipo (disponibles globalmente)
window.mostrarToast = mostrarToast;
window.toastExito = function(titulo, mensaje, duracion) {
    return mostrarToast({ titulo, mensaje, tipo: 'success', duracion });
};
window.toastError = function(titulo, mensaje, duracion) {
    return mostrarToast({ titulo, mensaje, tipo: 'error', duracion });
};
window.toastInfo = function(titulo, mensaje, duracion) {
    return mostrarToast({ titulo, mensaje, tipo: 'info', duracion });
};
window.toastAdvertencia = function(titulo, mensaje, duracion) {
    return mostrarToast({ titulo, mensaje, tipo: 'warning', duracion });
};