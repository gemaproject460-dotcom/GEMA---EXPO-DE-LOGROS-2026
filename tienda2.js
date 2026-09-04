/*==================================================
        TIENDA GEMA
        PRODUCTOS DESTACADOS Y CATEGORÍAS
        ESPAÑOL / INGLÉS
==================================================*/


// ==================================================
// IDIOMA ACTUAL
// ==================================================

let idiomaActual =
    localStorage.getItem("idioma") || "es";


// ==================================================
// OBTENER TEXTO SEGÚN IDIOMA
// ==================================================

function obtenerTexto(texto){

    if(typeof texto === "string"){

        return texto;

    }

    return texto[idiomaActual] ||
           texto.es ||
           texto.en ||
           "";

}


// ==================================================
// ACTUALIZAR IDIOMA
// ==================================================

function actualizarIdiomaTienda(){

    idiomaActual =
        localStorage.getItem("idioma") || "es";


    // Actualizar productos destacados

    if(carruselPreparado){

        cargarProductosDestacados();

    }


    // Si hay una categoría abierta,
    // volver a cargarla

    if(
        modalProductos &&
        modalProductos.classList.contains("activo") &&
        categoriaActual
    ){

        abrirCategoria(categoriaActual);

    }

}


// ==================================================
// ESCUCHAR CAMBIO DE IDIOMA
// ==================================================

window.addEventListener(
    "storage",
    (e) => {

        if(e.key === "idioma"){

            actualizarIdiomaTienda();

        }

    }
);


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

let categoriaActual = null;


// ==================================================
// NOMBRES DE LAS CATEGORÍAS
// ==================================================


const nombresCategorias = {

    preparacion: {
        es: "PREPARACIÓN Y SUPERVIVENCIA",
        en: "PREPARATION AND SURVIVAL"
    },

    primerosAuxilios: {
        es: "PRIMEROS AUXILIOS Y SALUD",
        en: "FIRST AID AND HEALTH"
    },

    vehicular: {
        es: "SEGURIDAD VEHICULAR",
        en: "VEHICLE SAFETY"
    },

    adultos: {
        es: "ADULTOS MAYORES",
        en: "OLDER ADULTS"
    },

    instituciones: {
        es: "EQUIPOS INSTITUCIONALES",
        en: "INSTITUTIONAL EQUIPMENT"
    },

    tecnologia: {
        es: "TECNOLOGÍA Y SEGURIDAD",
        en: "TECHNOLOGY AND SECURITY"
    },

    empresas: {
        es: "EMPRESAS Y ESCUELAS",
        en: "BUSINESSES AND SCHOOLS"
    }

};


// ==================================================
// TEXTOS DE LA TIENDA
// ==================================================

const textosTienda = {

    agregarCarrito: {

        es: "Agregar al carrito",

        en: "Add to cart"

    },

    productoAnterior: {

        es: "Producto anterior",

        en: "Previous product"

    },

    productoSiguiente: {

        es: "Producto siguiente",

        en: "Next product"

    },

    irProducto: {

        es: "Ir al producto destacado",

        en: "Go to featured product"

    }

};


// ==================================================
// CREAR TARJETA DE PRODUCTO
// ==================================================

function crearTarjetaProducto(producto){

    const tarjeta =
        document.createElement("div");

    tarjeta.classList.add("producto");

    tarjeta.dataset.productoId =
        producto.id;


    const nombre =
        obtenerTexto(producto.nombre);


    const descripcion =
        obtenerTexto(producto.descripcion);


    const textoAgregar =
        obtenerTexto(
            textosTienda.agregarCarrito
        );


    tarjeta.innerHTML = `

        <img
            src="${producto.imagen}"
            alt="${nombre}"
        >

        <div class="producto-info">

            <h3>
                ${nombre}
            </h3>

            <p>
                ${descripcion}
            </p>

            <div class="precio">

                $${Number(producto.precio).toFixed(2)}

            </div>

            <button
                class="btnProducto"
                type="button"
                onclick="agregarAlCarrito(${producto.id})"
            >

                ${textoAgregar}

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


        const numero =
            i + 1;


        indicador.setAttribute(
            "aria-label",
            `${obtenerTexto(
                textosTienda.irProducto
            )} ${numero}`
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


    // CLONES AL PRINCIPIO

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


    // CLONES AL FINAL

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


    clonesInicio
        .reverse()
        .forEach(
            clon => {

                contenedorProductos.prepend(
                    clon
                );

            }
        );


    clonesFinal.forEach(
        clon => {

            contenedorProductos.appendChild(
                clon
            );

        }
    );


    ajustarAnchoTarjetas();


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


    if(
        indiceCarrusel >=
        totalProductosOriginales +
        cantidadClones
    ){

        indiceCarrusel =
            cantidadClones;

        moverCarrusel(false);

    }


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

    carruselPreparado = false;


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


    categoriaActual =
        nombreCategoria;


    listaProductos.innerHTML = "";


    const titulo =
        nombresCategorias[nombreCategoria];


    if(titulo){

        tituloCategoria.textContent =
            obtenerTexto(titulo);

    }else{

        tituloCategoria.textContent =
            nombreCategoria
                .toUpperCase();

    }


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


    categoriaActual = null;

}


// ==================================================
// BOTÓN CERRAR
// ==================================================

if(cerrarModalProductos){

    cerrarModalProductos.addEventListener(
        "click",
        cerrarModal
    );

}


// ==================================================
// CERRAR HACIENDO CLIC FUERA
// ==================================================

if(modalProductos){

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

}


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

    id = Number(id);


    for(
        const categoria in productos
    ){

        const encontrado =
            productos[categoria].find(
                producto =>
                    Number(producto.id) === id
            );


        if(encontrado){

            return encontrado;

        }

    }


    return null;

}


