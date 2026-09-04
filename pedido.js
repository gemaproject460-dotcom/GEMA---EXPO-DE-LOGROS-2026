/*
==========================================
            PEDIDO GEMA
            PARTE 1
==========================================
*/


//======================================
// ELEMENTOS
//======================================

const modalPedido =
document.getElementById("modalPedido");

const modalConfirmacion =
document.getElementById("modalConfirmacion");

const cerrarPedido =
document.getElementById("cerrarPedido");

const cerrarConfirmacion =
document.getElementById("cerrarConfirmacion");

const btnAceptar =
document.getElementById("btnAceptar");

const formulario =
document.getElementById("formPedido");

const btnEnviar =
document.getElementById("btnEnviarPedido");

const resumenPedido =
document.getElementById("resumenPedido");


//======================================
// CAMPOS DEL FORMULARIO
//======================================

const nombre =
document.getElementById("nombre");

const apellido =
document.getElementById("apellido");

const correo =
document.getElementById("correo");

const telefono =
document.getElementById("telefono");

const provincia =
document.getElementById("provincia");

const direccion =
document.getElementById("direccion");

const acepta =
document.getElementById("acepta");


//======================================
// VALIDAR FORMULARIO
//======================================

function validarFormulario(){

    const valido =

        nombre.value.trim() !== "" &&

        apellido.value.trim() !== "" &&

        correo.value.trim() !== "" &&

        telefono.value.trim() !== "" &&

        provincia.value !== "" &&

        direccion.value.trim() !== "" &&

        acepta.checked;

    btnEnviar.disabled = !valido;

}


//======================================
// EVENTOS DE VALIDACIÓN
//======================================

[
    nombre,
    apellido,
    correo,
    telefono,
    provincia,
    direccion,
    acepta

].forEach(campo =>{

    campo.addEventListener("input", validarFormulario);

    campo.addEventListener("change", validarFormulario);

});

/*
==========================================
            PEDIDO GEMA
            PARTE 2
==========================================
*/


//======================================
// ENVIAR PEDIDO
//======================================

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const carrito = obtenerCarrito();

    let html = "";

    let total = 0;

    carrito.forEach(producto =>{

        const subtotal =
        producto.precio * producto.cantidad;

        total += subtotal;

        html += `

        <div class="producto-resumen">

            <strong>${producto.nombre}</strong>

            <br>

            Cantidad:
            ${producto.cantidad}

            <br>

            Precio:
            $${producto.precio.toFixed(2)}

            <br>

            Subtotal:
            $${subtotal.toFixed(2)}

            <hr>

        </div>

        `;

    });

    html += `

        <h3>

            Total:
            $${total.toFixed(2)}

        </h3>

    `;

    resumenPedido.innerHTML = html;

    modalPedido.classList.remove("activo");

    modalConfirmacion.classList.add("activo");

    vaciarCarrito();

    formulario.reset();

    btnEnviar.disabled = true;

});

/*
==========================================
            PEDIDO GEMA
            PARTE 3
==========================================
*/


//======================================
// CERRAR MODAL PEDIDO
//======================================

cerrarPedido.addEventListener("click", () => {

    modalPedido.classList.remove("activo");

});


//======================================
// CERRAR CONFIRMACIÓN
//======================================

cerrarConfirmacion.addEventListener("click", () => {

    modalConfirmacion.classList.remove("activo");

});


//======================================
// BOTÓN ACEPTAR
//======================================

btnAceptar.addEventListener("click", () => {

    modalConfirmacion.classList.remove("activo");

});


//======================================
// CERRAR AL HACER CLIC
// FUERA DEL MODAL
//======================================

window.addEventListener("click", (e) => {

    if(e.target === modalPedido){

        modalPedido.classList.remove("activo");

    }

    if(e.target === modalConfirmacion){

        modalConfirmacion.classList.remove("activo");

    }

});


//======================================
// CERRAR CON ESCAPE
//======================================

document.addEventListener("keydown", (e) => {

    if(e.key !== "Escape"){

        return;

    }

    modalPedido.classList.remove("activo");

    modalConfirmacion.classList.remove("activo");

});


//======================================
// VALIDACIÓN INICIAL
//======================================

validarFormulario();