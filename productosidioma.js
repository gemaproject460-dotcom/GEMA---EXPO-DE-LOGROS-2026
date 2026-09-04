/* =========================================
   TRADUCTOR GEMA - PRODUCTOS
========================================= */

const traducciones = {

    es: {

        "inicio": "Inicio",
        "gemas": "Gemas",
        "informacion": "Información",
        "ninos": "Niños",
        "capacitaciones": "Capacitaciones",
        "productos": "Productos",

        "tienda.tituloPagina": "Tienda Online | GEMA",
        "tienda.titulo": "TIENDA ONLINE",
        "tienda.subtitulo": "Equipos y productos para tu seguridad",

        "tienda.envios": "Envíos a todo el país",
        "tienda.pago": "Pago seguro",
        "tienda.soporte": "Atención especializada",

        "tienda.destacados": "PRODUCTOS DESTACADOS",

        "tienda.destacadosDescripcion":
            "Descubre algunos de los productos más recomendados para estar preparado ante cualquier emergencia.",

        "tienda.categorias": "CATEGORÍAS",

        "tienda.categoriaPreparacion":
            "PREPARACIÓN Y SUPERVIVENCIA",

        "tienda.descPreparacion":
            "Kits, mochilas, linternas, radios y más.",

        "tienda.categoriaPrimerosAuxilios":
            "PRIMEROS AUXILIOS Y SALUD",

        "tienda.descPrimerosAuxilios":
            "Botiquines, insumos médicos y equipos.",

        "tienda.categoriaVehicular":
            "SEGURIDAD VEHICULAR",

        "tienda.descVehicular":
            "Productos para accidentes, daños mecánicos o emergencias en carretera.",

        "tienda.categoriaAdultos":
            "ADULTOS MAYORES",

        "tienda.descAdultos":
            "Productos enfocados en seguridad y cuidado.",

        "tienda.categoriaInstituciones":
            "EQUIPOS INSTITUCIONALES",

        "tienda.descInstituciones":
            "Productos dirigidos a cuerpos de emergencia y seguridad.",

        "tienda.categoriaTecnologia":
            "TECNOLOGÍA Y SEGURIDAD",

        "tienda.descTecnologia":
            "Equipos tecnológicos para prevención y monitoreo.",

        "tienda.categoriaEmpresas":
            "EMPRESAS Y ESCUELAS",

        "tienda.descEmpresas":
            "Productos para prevención institucional y planes de evacuación.",

        "tienda.verProductos":
            "VER PRODUCTOS",

        "tienda.productos":
            "Productos",

        "tienda.miCarrito":
            "Mi carrito",

        "tienda.subtotal":
            "Subtotal:",

        "tienda.realizarPedido":
            "Realizar pedido",

        "tienda.pedidoEnviado":
            "¡Pedido enviado!",

        "tienda.graciasCompra":
            "Gracias por comprar en GEMA.",

        "tienda.aceptar":
            "Aceptar",

        "gemaTitulo":
            "GEMA",

        "gemaDescripcion":
            "Global Emergency Management Access. Promoviendo la preparación, prevención y respuesta ante emergencias para toda la comunidad.",

        "footerEnlaces":
            "Enlaces",

        "mapaInteractivo":
            "Mapa Interactivo",

        "footerContacto":
            "Contacto",

        "telefono":
            "Teléfono: +507 6000-0000",

        "panama":
            "Panamá",

        "footerSiguenos":
            "Síguenos",

        "footerDerechos":
            "© 2026 GEMA | Global Emergency Management Access. Todos los derechos reservados."
    },


    en: {

        "inicio": "Home",
        "gemas": "Gemas",
        "informacion": "Information",
        "ninos": "Kids",
        "capacitaciones": "Training",
        "productos": "Products",

        "tienda.tituloPagina":
            "Online Store | GEMA",

        "tienda.titulo":
            "ONLINE STORE",

        "tienda.subtitulo":
            "Equipment and products for your safety",

        "tienda.envios":
            "Shipping nationwide",

        "tienda.pago":
            "Secure payment",

        "tienda.soporte":
            "Specialized support",

        "tienda.destacados":
            "FEATURED PRODUCTS",

        "tienda.destacadosDescripcion":
            "Discover some of the most recommended products to help you stay prepared for any emergency.",

        "tienda.categorias":
            "CATEGORIES",

        "tienda.categoriaPreparacion":
            "PREPARATION AND SURVIVAL",

        "tienda.descPreparacion":
            "Kits, backpacks, flashlights, radios and more.",

        "tienda.categoriaPrimerosAuxilios":
            "FIRST AID AND HEALTH",

        "tienda.descPrimerosAuxilios":
            "First aid kits, medical supplies and equipment.",

        "tienda.categoriaVehicular":
            "VEHICLE SAFETY",

        "tienda.descVehicular":
            "Products for accidents, mechanical failures or roadside emergencies.",

        "tienda.categoriaAdultos":
            "OLDER ADULTS",

        "tienda.descAdultos":
            "Products focused on safety and care.",

        "tienda.categoriaInstituciones":
            "INSTITUTIONAL EQUIPMENT",

        "tienda.descInstituciones":
            "Products for emergency and security services.",

        "tienda.categoriaTecnologia":
            "TECHNOLOGY AND SECURITY",

        "tienda.descTecnologia":
            "Technology equipment for prevention and monitoring.",

        "tienda.categoriaEmpresas":
            "BUSINESSES AND SCHOOLS",

        "tienda.descEmpresas":
            "Products for institutional prevention and evacuation plans.",

        "tienda.verProductos":
            "VIEW PRODUCTS",

        "tienda.productos":
            "Products",

        "tienda.miCarrito":
            "My cart",

        "tienda.subtotal":
            "Subtotal:",

        "tienda.realizarPedido":
            "Place order",

        "tienda.pedidoEnviado":
            "Order sent!",

        "tienda.graciasCompra":
            "Thank you for shopping at GEMA.",

        "tienda.aceptar":
            "Accept",

        "gemaTitulo":
            "GEMA",

        "gemaDescripcion":
            "Global Emergency Management Access. Promoting emergency preparedness, prevention and response for the entire community.",

        "footerEnlaces":
            "Links",

        "mapaInteractivo":
            "Interactive Map",

        "footerContacto":
            "Contact",

        "telefono":
            "Phone: +507 6000-0000",

        "panama":
            "Panama",

        "footerSiguenos":
            "Follow us",

        "footerDerechos":
            "© 2026 GEMA | Global Emergency Management Access. All rights reserved."
    }

};


/* =========================================
   CAMBIAR IDIOMA
========================================= */

function cambiarIdioma(idioma) {

    if (!traducciones[idioma]) {
        return;
    }

    localStorage.setItem("idioma", idioma);

    document.documentElement.lang = idioma;


    /* Textos normales */

    document.querySelectorAll("[data-i18n]").forEach(elemento => {

        const clave = elemento.getAttribute("data-i18n");

        if (traducciones[idioma][clave]) {

            elemento.textContent =
                traducciones[idioma][clave];

        }

    });


    /* Título de la página */

    const titulo =
        document.querySelector("title[data-i18n]");

    if (titulo) {

        const clave =
            titulo.getAttribute("data-i18n");

        if (traducciones[idioma][clave]) {

            titulo.textContent =
                traducciones[idioma][clave];

        }

    }


    /* Guardar idioma */

    localStorage.setItem(
        "idioma",
        idioma
    );


    /* Actualizar productos */

    if (
        typeof actualizarIdiomaTienda ===
        "function"
    ) {

        actualizarIdiomaTienda();

    }


    /* Actualizar nombres del carrito */

    if (typeof actualizarNombresCarrito === "function") {
        actualizarNombresCarrito();
    }


    /* ✅ NUEVO: Actualizar texto de la notificación */

    if (typeof actualizarTextoNotificacion === "function") {
        actualizarTextoNotificacion();
    }

}


/* =========================================
   CARGAR IDIOMA GUARDADO
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const idiomaGuardado =
            localStorage.getItem("idioma") || "es";

        cambiarIdioma(idiomaGuardado);

    }
);