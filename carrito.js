/*
==========================================
        CARRITO GEMA
        CON LOCALSTORAGE Y MODALES PERSONALIZADOS
==========================================
*/

// ==========================
// VARIABLES
// ==========================

let carrito = [];

const carritoIcono = document.getElementById("carritoIcono");
const contadorCarrito = document.getElementById("contadorCarrito");
const modalCarrito = document.getElementById("modalCarrito");
const productosCarrito = document.getElementById("productosCarrito");
const subtotalCarrito = document.getElementById("subtotalCarrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const btnRealizarPedido = document.getElementById("btnRealizarPedido");


// ==========================
// GUARDAR CARRITO EN LOCALSTORAGE
// ==========================

function guardarCarrito() {
    localStorage.setItem('carritoGEMA', JSON.stringify(carrito));
}


// ==========================
// CARGAR CARRITO DESDE LOCALSTORAGE
// ==========================

function cargarCarrito() {
    const guardado = localStorage.getItem('carritoGEMA');
    
    if (guardado) {
        try {
            carrito = JSON.parse(guardado);
            
            carrito = carrito.filter(item => {
                const producto = obtenerProductoPorId(item.id);
                return producto !== null;
            });
            
            // Actualizar nombres al idioma actual
            actualizarNombresCarrito();
            
            actualizarContador();
            actualizarCarrito();
        } catch (e) {
            carrito = [];
        }
    }
}


// ==========================
// ACTUALIZAR NOMBRES DEL CARRITO AL CAMBIAR IDIOMA
// ==========================

function actualizarNombresCarrito() {
    const idioma = localStorage.getItem('idioma') || 'es';
    let carritoModificado = false;
    
    carrito = carrito.map(item => {
        const productoOriginal = obtenerProductoPorId(item.id);
        if (productoOriginal) {
            const nombreTraducido = productoOriginal.nombre[idioma] || 
                                   productoOriginal.nombre.es || 
                                   productoOriginal.nombre.en || 
                                   'Producto';
            if (item.nombre !== nombreTraducido) {
                item.nombre = nombreTraducido;
                carritoModificado = true;
            }
        }
        return item;
    });
    
    if (carritoModificado) {
        actualizarCarrito();
        guardarCarrito();
    }
}


// ==========================
// AGREGAR AL CARRITO (CORREGIDO)
// ==========================

function agregarAlCarrito(id) {
    const producto = obtenerProductoPorId(id);
    if (!producto) return;

    const idioma = localStorage.getItem('idioma') || 'es';
    const nombreTraducido = producto.nombre[idioma] || producto.nombre.es || producto.nombre.en || 'Producto';

    const existente = carrito.find(item => item.id === id);
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: nombreTraducido,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }

    actualizarContador();
    actualizarCarrito();
    guardarCarrito();
    mostrarNotificacionCarrito();
}


// ==========================
// MOSTRAR NOTIFICACIÓN (CON IDIOMA)
// ==========================

function mostrarNotificacionCarrito() {
    let notificacion = document.getElementById("notificacionCarrito");
    
    const idioma = localStorage.getItem('idioma') || 'es';
    
    const textos = {
        es: "Producto agregado correctamente",
        en: "Product added successfully"
    };
    
    const mensaje = textos[idioma] || textos.es;
    
    if (!notificacion) {
        notificacion = document.createElement("div");
        notificacion.id = "notificacionCarrito";
        notificacion.className = "notificacion-carrito";
        notificacion.innerHTML = `
            <i class="fa-solid fa-check"></i>
            <span id="textoNotificacion">${mensaje}</span>
        `;
        document.body.appendChild(notificacion);
    } else {
        const textoEl = notificacion.querySelector('#textoNotificacion');
        if (textoEl) {
            textoEl.textContent = mensaje;
        }
    }

    notificacion.classList.remove("mostrar");
    void notificacion.offsetWidth;
    notificacion.classList.add("mostrar");

    clearTimeout(notificacion.timeout);
    notificacion.timeout = setTimeout(() => {
        notificacion.classList.remove("mostrar");
    }, 3000);
}


// ==========================
// ACTUALIZAR TEXTO DE NOTIFICACIÓN AL CAMBIAR IDIOMA
// ==========================

// ==========================
// MOSTRAR NOTIFICACIÓN (CON IDIOMA)
// ==========================

function mostrarNotificacionCarrito() {
    let notificacion = document.getElementById("notificacionCarrito");
    
    const idioma = localStorage.getItem('idioma') || 'es';
    
    const textos = {
        es: "Producto agregado correctamente",
        en: "Product added successfully"
    };
    
    const mensaje = textos[idioma] || textos.es;
    
    if (!notificacion) {
        notificacion = document.createElement("div");
        notificacion.id = "notificacionCarrito";
        notificacion.className = "notificacion-carrito";
        notificacion.innerHTML = `
            <i class="fa-solid fa-check"></i>
            <span id="textoNotificacion">${mensaje}</span>
        `;
        document.body.appendChild(notificacion);
    } else {
        const textoEl = notificacion.querySelector('#textoNotificacion');
        if (textoEl) {
            textoEl.textContent = mensaje;
        }
    }

    notificacion.classList.remove("mostrar");
    void notificacion.offsetWidth;
    notificacion.classList.add("mostrar");

    clearTimeout(notificacion.timeout);
    notificacion.timeout = setTimeout(() => {
        notificacion.classList.remove("mostrar");
    }, 3000);
}


// ==========================
// ACTUALIZAR TEXTO DE NOTIFICACIÓN AL CAMBIAR IDIOMA
// ==========================

function actualizarTextoNotificacion() {
    const notificacion = document.getElementById('notificacionCarrito');
    if (!notificacion) return;
    
    const idioma = localStorage.getItem('idioma') || 'es';
    
    const textos = {
        es: "Producto agregado correctamente",
        en: "Product added successfully"
    };
    
    const mensaje = textos[idioma] || textos.es;
    const textoEl = notificacion.querySelector('#textoNotificacion');
    
    if (textoEl) {
        textoEl.textContent = mensaje;
    }
}


// ==========================
// ACTUALIZAR CONTADOR
// ==========================

function actualizarContador() {
    let total = 0;
    carrito.forEach(item => total += item.cantidad);
    contadorCarrito.textContent = total;
}


// ==========================
// CALCULAR SUBTOTAL
// ==========================

function calcularSubtotal() {
    let subtotal = 0;
    carrito.forEach(item => subtotal += item.precio * item.cantidad);
    return subtotal;
}


// ==========================
// MOSTRAR CARRITO (CORREGIDO)
// ==========================

function actualizarCarrito() {
    productosCarrito.innerHTML = "";
    
    const btnVaciar = document.getElementById('btnVaciarCarrito');

    if (carrito.length === 0) {
        productosCarrito.innerHTML = `
            <p class="carrito-vacio">Tu carrito está vacío.</p>
        `;
        subtotalCarrito.textContent = "$0.00";
        
        if (btnVaciar) btnVaciar.classList.add('oculto');
        return;
    }

    if (btnVaciar) btnVaciar.classList.remove('oculto');

    carrito.forEach(item => {
        const producto = document.createElement("div");
        producto.className = "item-carrito";
        
        // Asegurarse de que el nombre sea string
        const nombreProducto = typeof item.nombre === 'string' 
            ? item.nombre 
            : (item.nombre.es || item.nombre.en || 'Producto');
        
        producto.innerHTML = `
            <img src="${item.imagen}" alt="${nombreProducto}">
            <div class="info-item">
                <h4>${nombreProducto}</h4>
                <p>$${item.precio.toFixed(2)}</p>
                <p>Cantidad: ${item.cantidad}</p>
            </div>
            <button class="btnEliminar" onclick="eliminarDelCarrito(${item.id})">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        productosCarrito.appendChild(producto);
    });

    subtotalCarrito.textContent = "$" + calcularSubtotal().toFixed(2);
}


// ==========================
// ELIMINAR PRODUCTO
// ==========================

function eliminarDelCarrito(id) {
    const indice = carrito.findIndex(item => item.id === id);
    if (indice === -1) return;

    if (carrito[indice].cantidad > 1) {
        carrito[indice].cantidad--;
    } else {
        carrito.splice(indice, 1);
    }

    actualizarContador();
    actualizarCarrito();
    guardarCarrito();
}


// ==========================
// VACIAR TODO EL CARRITO - MODAL PERSONALIZADO
// ==========================

function vaciarCarritoCompleto() {
    if (carrito.length === 0) return;
    
    const modal = document.getElementById('modalConfirmarVaciar');
    if (modal) {
        modal.classList.add('activo');
    }
}


// ==========================
// CONFIRMAR VACIADO
// ==========================

function confirmarVaciarCarrito() {
    carrito = [];
    actualizarContador();
    actualizarCarrito();
    guardarCarrito();
    localStorage.removeItem('carritoGEMA');
    
    const modal = document.getElementById('modalConfirmarVaciar');
    if (modal) {
        modal.classList.remove('activo');
    }
    
    const modalCarrito = document.getElementById('modalCarrito');
    if (modalCarrito) {
        modalCarrito.classList.remove('activo');
    }
}


// ==========================
// CANCELAR VACIADO
// ==========================

function cancelarVaciarCarrito() {
    const modal = document.getElementById('modalConfirmarVaciar');
    if (modal) {
        modal.classList.remove('activo');
    }
}


// ==========================
// VACIAR CARRITO (para pedido)
// ==========================

function vaciarCarrito() {
    carrito = [];
    actualizarContador();
    actualizarCarrito();
    localStorage.removeItem('carritoGEMA');
}


// ==========================
// DEVOLVER CARRITO
// ==========================

function obtenerCarrito() {
    return carrito;
}


function obtenerSubtotal() {
    return calcularSubtotal();
}


// ==========================
// ABRIR EL CARRITO
// ==========================

carritoIcono.addEventListener("click", () => {
    actualizarCarrito();
    modalCarrito.classList.add("activo");
});


// ==========================
// CERRAR CON BOTÓN X
// ==========================

cerrarCarrito.addEventListener("click", () => {
    modalCarrito.classList.remove("activo");
});


// ==========================
// CERRAR HACIENDO CLIC FUERA DEL MODAL
// ==========================

modalCarrito.addEventListener("click", (e) => {
    if (e.target === modalCarrito) {
        modalCarrito.classList.remove("activo");
    }
});


// ==========================
// CERRAR CON ESCAPE
// ==========================

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modalCarrito.classList.remove("activo");
    }
});


// ==========================
// IR AL FORMULARIO
// ==========================

btnRealizarPedido.addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("Debe agregar al menos un producto.");
        return;
    }

    modalCarrito.classList.remove("activo");
    const modalPedido = document.getElementById("modalPedido");
    modalPedido.classList.add("activo");
});


// ==========================
// ESCUCHAR CAMBIO DE IDIOMA
// ==========================

window.addEventListener('storage', function(e) {
    if (e.key === 'idioma') {
        actualizarNombresCarrito();
    }
});


// ==========================
// EVENTOS DEL MODAL CONFIRMAR VACIAR
// ==========================

document.addEventListener('DOMContentLoaded', function() {
    cargarCarrito();
    
    const btnVaciar = document.getElementById('btnVaciarCarrito');
    if (btnVaciar) {
        btnVaciar.addEventListener('click', vaciarCarritoCompleto);
    }
    
    const btnConfirmar = document.getElementById('btnConfirmarVaciar');
    if (btnConfirmar) {
        btnConfirmar.addEventListener('click', confirmarVaciarCarrito);
    }
    
    const btnCancelar = document.getElementById('btnCancelarVaciar');
    if (btnCancelar) {
        btnCancelar.addEventListener('click', cancelarVaciarCarrito);
    }
    
    const cerrar = document.getElementById('cerrarConfirmarVaciar');
    if (cerrar) {
        cerrar.addEventListener('click', cancelarVaciarCarrito);
    }
    
    const modal = document.getElementById('modalConfirmarVaciar');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                cancelarVaciarCarrito();
            }
        });
    }
});