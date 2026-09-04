/*==================================================
        TIENDA GEMA
        PRODUCTOS DESTACADOS Y CATEGORÍAS
==================================================*/


// ==================================================
// ELEMENTOS DEL HTML
// ==================================================

const contenedorProductos =
    document.getElementById("contenedorProductos");

const modalProductos =
    document.getElementById("modalProductos");

const listaProductos =
    document.getElementById("listaProductos");

const tituloCategoria =
    document.getElementById("tituloCategoria");

const botonesCategorias =
    document.querySelectorAll(".btnCategoria");

const cerrarModalProductos =
    document.getElementById("cerrarModalProductos");


// ==================================================
// ELEMENTOS DEL CARRUSEL
// ==================================================

const flechaAnterior =
    document.getElementById("flechaAnterior");

const flechaSiguiente =
    document.getElementById("flechaSiguiente");

const indicadoresCarrusel =
    document.getElementById("indicadoresCarrusel");

const ventanaCarrusel =
    document.querySelector(".carrusel-ventana");


// ==================================================
// VARIABLES DEL CARRUSEL
// ==================================================

let indiceCarrusel = 0;

let totalProductosOriginales = 0;

let productosVisibles = 3;

let intervaloCarrusel = null;

let carruselPreparado = false;


// ==================================================
// CREAR TARJETA DE PRODUCTO
// ==================================================

function crearTarjetaProducto(producto){

    const tarjeta = document.createElement("div");

    tarjeta.classList.add("producto");

    tarjeta.dataset.productoId = producto.id;


    tarjeta.innerHTML = `

        <img
            src="${producto.imagen}"
            alt="${producto.nombre}"
        >


        <div class="producto-info">

            <h3>
                ${producto.nombre}
            </h3>


            <p>
                ${producto.descripcion}
            </p>


            <div class="precio">

                $${Number(producto.precio).toFixed(2)}

            </div>


            <button
                class="btnProducto"
                type="button"
                onclick="agregarAlCarrito(${producto.id})"
            >

                Agregar al carrito

            </button>

        </div>

    `;


    return tarjeta;
}


// ==================================================
// CALCULAR PRODUCTOS VISIBLES
// ==================================================

function calcularProductosVisibles(){

    if(window.innerWidth <= 650){

        return 1;

    }


    if(window.innerWidth <= 1100){

        return 2;

    }


    return 3;
}


// ==================================================
// AJUSTAR ANCHO DE LAS TARJETAS
// ==================================================

function ajustarAnchoTarjetas(){

    if(
        !ventanaCarrusel ||
        !contenedorProductos.children.length
    ){

        return;

    }


    const estilos =
        window.getComputedStyle(
            contenedorProductos
        );


    const gap =
        parseFloat(
            estilos.columnGap ||
            estilos.gap ||
            0
        );


    const anchoVentana =
        ventanaCarrusel.clientWidth;


    const anchoTarjeta =
        (
            anchoVentana -
            (
                gap *
                (productosVisibles - 1)
            )
        ) /
        productosVisibles;


    Array
        .from(
            contenedorProductos.children
        )
        .forEach(tarjeta => {

            tarjeta.style.flex =
                `0 0 ${anchoTarjeta}px`;

            tarjeta.style.maxWidth =
                `${anchoTarjeta}px`;

        });

}


// ==================================================
// OBTENER ANCHO DEL PASO
// ==================================================

function obtenerPasoCarrusel(){

    if(
        !contenedorProductos ||
        !contenedorProductos.children.length
    ){

        return 0;

    }


    const tarjeta =
        contenedorProductos.children[0];


    const estilos =
        window.getComputedStyle(
            contenedorProductos
        );


    const gap =
        parseFloat(
            estilos.columnGap ||
            estilos.gap ||
            0
        );


    return (
        tarjeta.getBoundingClientRect().width +
        gap
    );
}


// ==================================================
// CREAR INDICADORES
// ==================================================

function crearIndicadoresCarrusel(){

    if(!indicadoresCarrusel){

        return;

    }


    indicadoresCarrusel.innerHTML = "";


    for(
        let i = 0;
        i < totalProductosOriginales;
        i++
    ){

        const indicador =
            document.createElement("button");


        indicador.type = "button";


        indicador.className =
            "indicador-carrusel";


        indicador.setAttribute(
            "aria-label",
            `Ir al producto destacado ${i + 1}`
        );


        indicador.addEventListener(
            "click",
            () => {

                const cantidadClones =
                    Math.min(
                        productosVisibles,
                        totalProductosOriginales
                    );


                indiceCarrusel =
                    cantidadClones + i;


                moverCarrusel();


                reiniciarCarruselAutomatico();

            }
        );


        indicadoresCarrusel.appendChild(
            indicador
        );

    }


    actualizarIndicadores();
}


// ==================================================
// ACTUALIZAR INDICADORES
// ==================================================

function actualizarIndicadores(){

    if(!indicadoresCarrusel){

        return;

    }


    const indicadores =
        indicadoresCarrusel.querySelectorAll(
            ".indicador-carrusel"
        );


    const cantidadClones =
        Math.min(
            productosVisibles,
            totalProductosOriginales
        );


    if(totalProductosOriginales === 0){

        return;

    }


    const indiceReal =
        (
            (
                indiceCarrusel -
                cantidadClones
            ) %
            totalProductosOriginales +
            totalProductosOriginales
        ) %
        totalProductosOriginales;


    indicadores.forEach(
        (indicador, i) => {

            indicador.classList.toggle(
                "activo",
                i === indiceReal
            );

        }
    );
}


// ==================================================
// MOVER CARRUSEL
// ==================================================

function moverCarrusel(
    usarAnimacion = true
){

    if(
        !contenedorProductos ||
        !contenedorProductos.children.length
    ){

        return;

    }


    const paso =
        obtenerPasoCarrusel();


    if(usarAnimacion){

        contenedorProductos.style.transition =
            "transform .7s ease";

    }else{

        contenedorProductos.style.transition =
            "none";

    }


    contenedorProductos.style.transform =
        `translateX(-${indiceCarrusel * paso}px)`;


    actualizarIndicadores();
}


// ==================================================
// PREPARAR CARRUSEL INFINITO
// ==================================================

function prepararCarrusel(){

    if(!contenedorProductos){

        return;

    }


    // Eliminar clones anteriores

    contenedorProductos
        .querySelectorAll(
            ".clon-carrusel"
        )
        .forEach(
            clon => clon.remove()
        );


    productosVisibles =
        calcularProductosVisibles();


    totalProductosOriginales =
        productosDestacados.length;


    if(totalProductosOriginales === 0){

        return;

    }


    const originales =
        Array.from(
            contenedorProductos.children
        );


    const cantidadClones =
        Math.min(
            productosVisibles,
            originales.length
        );


    // ==================================================
    // CLONES AL PRINCIPIO
    // ==================================================

    const clonesInicio =
        originales
            .slice(-cantidadClones)
            .map(tarjeta => {

                const clon =
                    tarjeta.cloneNode(true);


                clon.classList.add(
                    "clon-carrusel"
                );


                return clon;

            });


    // ==================================================
    // CLONES AL FINAL
    // ==================================================

    const clonesFinal =
        originales
            .slice(0, cantidadClones)
            .map(tarjeta => {

                const clon =
                    tarjeta.cloneNode(true);


                clon.classList.add(
                    "clon-carrusel"
                );


                return clon;

            });


    // Agregar clones al inicio

    clonesInicio
        .reverse()
        .forEach(
            clon => {

                contenedorProductos.prepend(
                    clon
                );

            }
        );


    // Agregar clones al final

    clonesFinal.forEach(
        clon => {

            contenedorProductos.appendChild(
                clon
            );

        }
    );


    ajustarAnchoTarjetas();


    // Comenzar en el primer producto real

    indiceCarrusel =
        cantidadClones;


    carruselPreparado = true;


    requestAnimationFrame(
        () => {

            moverCarrusel(false);

        }
    );


    crearIndicadoresCarrusel();

}


// ==================================================
// SIGUIENTE PRODUCTO
// ==================================================

function siguienteProducto(){

    if(!carruselPreparado){

        return;

    }


    indiceCarrusel++;


    moverCarrusel();


    reiniciarCarruselAutomatico();

}


// ==================================================
// PRODUCTO ANTERIOR
// ==================================================

function anteriorProducto(){

    if(!carruselPreparado){

        return;

    }


    indiceCarrusel--;


    moverCarrusel();


    reiniciarCarruselAutomatico();

}


// ==================================================
// INICIAR CAMBIO AUTOMÁTICO
// ==================================================

function iniciarCarruselAutomatico(){

    detenerCarruselAutomatico();


    intervaloCarrusel =
        setInterval(
            () => {

                if(!carruselPreparado){

                    return;

                }


                indiceCarrusel++;


                moverCarrusel();

            },
            5000
        );
}


// ==================================================
// DETENER CAMBIO AUTOMÁTICO
// ==================================================

function detenerCarruselAutomatico(){

    if(intervaloCarrusel){

        clearInterval(
            intervaloCarrusel
        );


        intervaloCarrusel = null;

    }
}


// ==================================================
// REINICIAR CAMBIO AUTOMÁTICO
// ==================================================

function reiniciarCarruselAutomatico(){

    iniciarCarruselAutomatico();

}


// ==================================================
// REAJUSTAR AL TERMINAR ANIMACIÓN
// ==================================================

function finalizarMovimientoInfinito(){

    const cantidadClones =
        Math.min(
            productosVisibles,
            totalProductosOriginales
        );


    // Si llegamos a los clones del final

    if(
        indiceCarrusel >=
        totalProductosOriginales +
        cantidadClones
    ){

        indiceCarrusel =
            cantidadClones;


        moverCarrusel(false);

    }


    // Si llegamos a los clones del principio

    if(
        indiceCarrusel <
        cantidadClones
    ){

        indiceCarrusel =
            totalProductosOriginales +
            indiceCarrusel;


        moverCarrusel(false);

    }

}


// ==================================================
// EVENTO FLECHA SIGUIENTE
// ==================================================

if(flechaSiguiente){

    flechaSiguiente.addEventListener(
        "click",
        siguienteProducto
    );

}


// ==================================================
// EVENTO FLECHA ANTERIOR
// ==================================================

if(flechaAnterior){

    flechaAnterior.addEventListener(
        "click",
        anteriorProducto
    );

}


// ==================================================
// FINALIZAR ANIMACIÓN
// ==================================================

if(contenedorProductos){

    contenedorProductos.addEventListener(
        "transitionend",
        (e) => {

            if(
                e.propertyName !==
                "transform"
            ){

                return;

            }


            finalizarMovimientoInfinito();

        }
    );

}


// ==================================================
// PAUSAR AL PASAR EL MOUSE
// ==================================================

if(ventanaCarrusel){

    ventanaCarrusel.addEventListener(
        "mouseenter",
        detenerCarruselAutomatico
    );


    ventanaCarrusel.addEventListener(
        "mouseleave",
        iniciarCarruselAutomatico
    );

}


// ==================================================
// REAJUSTAR AL CAMBIAR TAMAÑO
// ==================================================

let temporizadorResize = null;


window.addEventListener(
    "resize",
    () => {

        clearTimeout(
            temporizadorResize
        );


        temporizadorResize =
            setTimeout(
                () => {

                    if(carruselPreparado){

                        detenerCarruselAutomatico();

                        cargarProductosDestacados();

                    }

                },
                200
            );

    }
);


// ==================================================
// CARGAR PRODUCTOS DESTACADOS
// ==================================================

function cargarProductosDestacados(){

    if(!contenedorProductos){

        return;

    }


    contenedorProductos.innerHTML = "";


    productosDestacados.forEach(
        producto => {

            contenedorProductos.appendChild(
                crearTarjetaProducto(
                    producto
                )
            );

        }
    );


    prepararCarrusel();


    iniciarCarruselAutomatico();

}


// ==================================================
// EVENTOS DE LAS CATEGORÍAS
// ==================================================

botonesCategorias.forEach(
    boton => {

        boton.addEventListener(
            "click",
            () => {

                const categoria =
                    boton.dataset.categoria;


                abrirCategoria(
                    categoria
                );

            }
        );

    }
);


// ==================================================
// CARGAR AL INICIAR
// ==================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        cargarProductosDestacados();

    }
);


// ==================================================
// ABRIR CATEGORÍA
// ==================================================

function abrirCategoria(
    nombreCategoria
){

    const categoria =
        productos[nombreCategoria];


    if(!categoria){

        return;

    }


    listaProductos.innerHTML = "";


    tituloCategoria.textContent =
        nombreCategoria
            .toUpperCase()
            .replace(
                /([A-Z])/g,
                " $1"
            )
            .trim();


    categoria.forEach(
        producto => {

            listaProductos.appendChild(
                crearTarjetaProducto(
                    producto
                )
            );

        }
    );


    modalProductos.classList.add(
        "activo"
    );

}


// ==================================================
// CERRAR MODAL
// ==================================================

function cerrarModal(){

    modalProductos.classList.remove(
        "activo"
    );

}


// ==================================================
// BOTÓN CERRAR
// ==================================================

cerrarModalProductos.addEventListener(
    "click",
    cerrarModal
);


// ==================================================
// CERRAR HACIENDO CLIC FUERA
// ==================================================

modalProductos.addEventListener(
    "click",
    (e) => {

        if(
            e.target ===
            modalProductos
        ){

            cerrarModal();

        }

    }
);


// ==================================================
// CERRAR CON ESCAPE
// ==================================================

document.addEventListener(
    "keydown",
    (e) => {

        if(e.key === "Escape"){

            cerrarModal();

        }

    }
);


// ==================================================
// BUSCAR PRODUCTO POR ID
// Lo utilizará carrito.js
// ==================================================

function obtenerProductoPorId(id){

    for(
        const categoria in productos
    ){

        const encontrado =
            productos[categoria].find(
                producto =>
                    producto.id === id
            );


        if(encontrado){

            return encontrado;

        }

    }


    return null;

}