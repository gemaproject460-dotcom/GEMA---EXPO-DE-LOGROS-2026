// ==============================
// ELEMENTOS
// ==============================

const overlay = document.getElementById("overlay");
const abrirModal = document.getElementById("abrirModal");
const cerrarModal = document.getElementById("cerrarModal");
const cancelar = document.getElementById("cancelar");

// ==============================
// ABRIR MODAL
// ==============================

abrirModal.addEventListener("click", function(){

    overlay.classList.add("activo");

});

// ==============================
// CERRAR MODAL
// ==============================

function cerrarFormulario(){

    overlay.classList.remove("activo");

}

cerrarModal.addEventListener("click", cerrarFormulario);

cancelar.addEventListener("click", cerrarFormulario);

// ==============================
// CERRAR HACIENDO CLICK AFUERA
// ==============================

overlay.addEventListener("click", function(e){

    if(e.target === overlay){

        cerrarFormulario();

    }

});

// ==============================
// CERRAR CON ESC
// ==============================

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        cerrarFormulario();

    }

});