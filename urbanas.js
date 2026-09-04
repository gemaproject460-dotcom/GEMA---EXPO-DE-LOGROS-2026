// =========================================
// GEMA - urbanas.js
// Funciones de la página Emergencias Urbanas
// =========================================

// ===============================
// HEADER FIJO
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});

// ===============================
// SCROLL SUAVE
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(enlace => {

    enlace.addEventListener("click", function (e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

// ===============================
// ANIMACIÓN AL HACER SCROLL
// ===============================

const elementos = document.querySelectorAll(
    ".natural-card, .info-box"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("mostrar");

        }

    });

}, {
    threshold: 0.15
});

elementos.forEach(el => observer.observe(el));

// ===============================
// CARRUSEL AUTOMÁTICO
// ===============================

document.addEventListener('DOMContentLoaded', function () {

    const track = document.getElementById('carruselTrack');
    
    if (!track) {
        console.log('No se encontró el carrusel');
        return;
    }

    // Detectar cuántas tarjetas se muestran según el ancho
    function getCardsPerView() {
        if (window.innerWidth >= 992) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }

    // Obtener todas las tarjetas
    let cards = track.querySelectorAll('.natural-card');
    const totalCards = cards.length;
    let cardsPerView = getCardsPerView();
    let currentIndex = 0;
    let intervalId = null;
    const AUTO_INTERVAL = 5000;

    // Clonar tarjetas para efecto infinito
    if (cards.length >= 3) {
        const clones = [];
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            clones.push(clone);
        });
        clones.forEach(clone => track.appendChild(clone));
        cards = track.querySelectorAll('.natural-card');
    }

    const totalSlides = cards.length;

    // Crear indicadores de progreso
    const totalDots = Math.ceil(totalSlides / getCardsPerView());
    const indicadoresContainer = document.createElement('div');
    indicadoresContainer.className = 'carrusel-progreso';
    indicadoresContainer.id = 'carruselProgreso';

    for (let i = 0; i < totalDots; i++) {
        const barra = document.createElement('div');
        barra.className = 'barra';
        if (i === 0) barra.classList.add('active');
        
        const relleno = document.createElement('div');
        relleno.className = 'relleno';
        barra.appendChild(relleno);
        
        barra.dataset.index = i;
        barra.addEventListener('click', function() {
            stopAutoPlay();
            const index = parseInt(this.dataset.index);
            const cardsPerView = getCardsPerView();
            const newIndex = index * cardsPerView;
            updateCarrusel(newIndex);
            startAutoPlay();
        });
        
        indicadoresContainer.appendChild(barra);
    }

    // Insertar después del carrusel
    const carruselContainer = document.querySelector('.carrusel-container');
    if (carruselContainer) {
        carruselContainer.parentNode.insertBefore(indicadoresContainer, carruselContainer.nextSibling);
    }

    const barras = document.querySelectorAll('.barra');

    // Función para actualizar el carrusel
    function updateCarrusel(index, animate = true) {
        cardsPerView = getCardsPerView();
        const maxIndex = Math.max(0, totalSlides - cardsPerView);

        if (index > maxIndex) {
            index = 0;
        }
        if (index < 0) {
            index = maxIndex;
        }

        currentIndex = index;

        const containerWidth = track.parentElement.offsetWidth;
        const gap = window.innerWidth >= 768 ? 20 : 0;
        const cardWidth = (containerWidth - (cardsPerView - 1) * gap) / cardsPerView;
        const offset = -currentIndex * (cardWidth + gap);

        track.style.transition = animate ? 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none';
        track.style.transform = `translateX(${offset}px)`;

        const totalDots = Math.ceil(totalSlides / cardsPerView);
        barras.forEach((barra, i) => {
            const dotIndex = i;
            barra.classList.toggle('active', dotIndex === (currentIndex % totalDots));
            if (barra.classList.contains('active')) {
                const relleno = barra.querySelector('.relleno');
                relleno.style.animation = 'none';
                setTimeout(() => {
                    relleno.style.animation = 'rellenar 5s linear forwards';
                }, 10);
            } else {
                const relleno = barra.querySelector('.relleno');
                relleno.style.animation = 'none';
                relleno.style.width = '0%';
            }
        });

        // Reset infinito
        if (currentIndex >= totalSlides - cardsPerView && totalSlides > 5) {
            setTimeout(() => {
                track.style.transition = 'none';
                const resetIndex = 0;
                const resetOffset = -resetIndex * (cardWidth + gap);
                track.style.transform = `translateX(${resetOffset}px)`;
                currentIndex = resetIndex;
                setTimeout(() => {
                    barras.forEach((barra, i) => {
                        barra.classList.toggle('active', i === resetIndex);
                        if (barra.classList.contains('active')) {
                            const relleno = barra.querySelector('.relleno');
                            relleno.style.animation = 'none';
                            setTimeout(() => {
                                relleno.style.animation = 'rellenar 5s linear forwards';
                            }, 10);
                        }
                    });
                }, 50);
            }, 900);
        }
    }

    // Siguiente
    function nextSlide() {
        const cardsPerView = getCardsPerView();
        const maxIndex = Math.max(0, totalSlides - cardsPerView);
        let newIndex = currentIndex + cardsPerView;
        if (newIndex > maxIndex) {
            newIndex = 0;
        }
        updateCarrusel(newIndex);
    }

    // Iniciar auto-reproducción
    function startAutoPlay() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(nextSlide, AUTO_INTERVAL);
    }

    // Detener auto-reproducción
    function stopAutoPlay() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    // Pausar al hacer hover
    const container = document.querySelector('.carrusel-container');
    if (container) {
        container.addEventListener('mouseenter', stopAutoPlay);
        container.addEventListener('mouseleave', startAutoPlay);
    }

    // Recalcular al redimensionar
    let resizeTimeout;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newCardsPerView = getCardsPerView();
            if (newCardsPerView !== cardsPerView) {
                cardsPerView = newCardsPerView;
                const maxIndex = Math.max(0, totalSlides - cardsPerView);
                if (currentIndex > maxIndex) {
                    currentIndex = maxIndex;
                }
                updateCarrusel(currentIndex, false);
            } else {
                updateCarrusel(currentIndex, false);
            }
        }, 250);
    });

    // Inicializar
    setTimeout(() => {
        updateCarrusel(0, false);
        startAutoPlay();
    }, 300);

});

// ===============================
// ANIMACIÓN DE CLICK EN BOTONES
// ===============================

document.addEventListener('DOMContentLoaded', function() {

    // Seleccionar todos los botones con clase btn-natural
    const botones = document.querySelectorAll('.btn-natural');

    botones.forEach(boton => {

        // Evento de clic para el efecto ripple
        boton.addEventListener('click', function(e) {

            // --- Efecto Ripple (onda) ---
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');

            // Posición del click dentro del botón
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

            this.appendChild(ripple);

            // Eliminar el ripple después de la animación
            setTimeout(() => {
                ripple.remove();
            }, 700);

            // --- Efecto de rebote ---
            this.classList.remove('clicked');
            // Forzar reflow para reiniciar la animación
            void this.offsetWidth;
            this.classList.add('clicked');

            // Quitar la clase después de la animación
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 500);

            // Si el botón tiene un enlace (href), dejar que navegue normalmente
            // Pero si es un enlace interno (#), el scroll suave ya está manejado
        });

        // Efecto de hover con brillo
        boton.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });

    });

});

// ===============================
// TRADUCCIONES
// ===============================

const textos = {

    es: {

        inicio: "Inicio",
        gemas: "Gemas",
        informacion: "Información",
        ninos: "Niños",
        capacitaciones: "Capacitaciones",
        productos: "Productos",
        donaciones: "Donaciones",
        k9: "K-9",

        heroUrbanas: "EMERGENCIAS URBANAS",
        heroUrbanasTexto: "Conoce cómo actuar ante incendios, explosiones, accidentes, fugas de gas y productos químicos.",

        incendios: "Incendios",
        incendiosTexto: "Aprende cómo evacuar y protegerte durante un incendio.",

        explosiones: "Explosiones",
        explosionesTexto: "Medidas de seguridad antes y después de una explosión.",

        accidentes: "Accidentes",
        accidentesTexto: "Qué hacer si presencias un accidente de tránsito.",

        gas: "Fugas de Gas",
        gasTexto: "Cómo actuar ante una fuga de gas doméstico.",

        quimicos: "Productos Químicos",
        quimicosTexto: "Medidas de protección frente a sustancias peligrosas.",

        verInformacion: "Ver información",

        queHacer: "¿Qué hacer?",
        queNoHacer: "¿Qué NO hacer?",
        prevencion: "Prevención",
        recomendaciones: "Recomendaciones",

        inc1: "Mantener la calma.",
        inc2: "Evacuar por una ruta segura.",
        inc3: "Llamar al 103 o al 911.",
        inc4: "Gatear si hay mucho humo.",
        inc5: "Cubrir nariz y boca con un paño húmedo.",
        inc6: "No usar elevadores.",
        inc7: "No regresar por pertenencias.",
        inc8: "No abrir puertas calientes.",
        inc9: "No esconderse dentro del edificio.",
        inc10: "Revisar conexiones eléctricas.",
        inc11: "Tener detectores de humo.",
        inc12: "Contar con extintores.",
        inc13: "Conocer rutas de evacuación.",

        exp1: "Alejarse inmediatamente.",
        exp2: "Proteger cabeza y cuello.",
        exp3: "Buscar refugio.",
        exp4: "Llamar a emergencias.",
        exp5: "No acercarse para grabar.",
        exp6: "No tocar objetos sospechosos.",
        exp7: "No bloquear accesos de rescate.",
        exp8: "Identificar salidas de emergencia.",
        exp9: "Seguir instrucciones oficiales.",
        exp10: "Mantener distancia de edificios dañados.",

        accTitulo: "Accidentes de Tránsito",
        acc1: "Verificar si hay heridos.",
        acc2: "Llamar al 911.",
        acc3: "Señalizar el área.",
        acc4: "Dar primeros auxilios solo si sabes hacerlo.",
        acc5: "No mover heridos graves.",
        acc6: "No rodear el accidente.",
        acc67: "No obstaculizar ambulancias.",
        acc8: "Usar cinturón y casco.",
        acc9: "Reducir velocidad cuando llueve.",
        acc10: "Respetar señales de tránsito.",

        gas1: "Abrir puertas y ventanas.",
        gas2: "Cerrar la válvula del gas.",
        gas3: "Evacuar.",
        gas4: "Llamar al 103 o 911.",
        gas5: "Respirar lentamente.",
        gas6: "No encender luces.",
        gas7: "No usar fósforos.",
        gas8: "No usar celulares.",
        gas9: "No reparar la fuga.",
        gas10: "Revisar mangueras.",
        gas11: "Instalar detectores de gas.",
        gas12: "Utilizar técnicos certificados.",

        qui1: "Alejarse del área.",
        qui2: "Ventilar el lugar.",
        qui3: "Cubrir nariz y boca.",
        qui4: "Lavar con abundante agua las zonas expuestas.",
        qui5: "Salir al aire libre.",
        qui6: "No tocar sustancias desconocidas.",
        qui7: "No mezclar químicos.",
        qui8: "No comer cerca del derrame.",
        qui9: "No inhalar vapores.",
        qui10: "Guardar químicos etiquetados.",
        qui11: "Mantenerlos lejos del calor.",
        qui12: "No mezclar cloro con otros limpiadores.",

        gemaTitulo: "GEMA",
        gemaDescripcion: "Global Emergency Management Access. Promoviendo la preparación, prevención y respuesta ante emergencias para toda la comunidad.",
        footerEnlaces: "Enlaces",
        footerContacto: "Contacto",
        footerSiguenos: "Síguenos",
        telefono: "Teléfono: +507 6000-0000",
        panama: "Panamá",
        mapaInteractivo: "Mapa Interactivo",
        footerDerechos: "© 2026 GEMA | Global Emergency Management Access. Todos los derechos reservados."

    },

    en: {

        inicio: "Home",
        gemas: "Gems",
        informacion: "Information",
        ninos: "Kids",
        capacitaciones: "Training",
        productos: "Products",
        donaciones: "Donations",
        k9: "K-9",

        heroUrbanas: "URBAN EMERGENCIES",
        heroUrbanasTexto: "Learn how to respond to fires, explosions, accidents, gas leaks and hazardous chemicals.",

        incendios: "Fires",
        incendiosTexto: "Learn how to evacuate and stay safe during a fire.",

        explosiones: "Explosions",
        explosionesTexto: "Safety measures before and after an explosion.",

        accidentes: "Accidents",
        accidentesTexto: "What to do if you witness a traffic accident.",

        gas: "Gas Leaks",
        gasTexto: "How to respond to a household gas leak.",

        quimicos: "Hazardous Chemicals",
        quimicosTexto: "Protection measures against hazardous substances.",

        verInformacion: "View information",

        queHacer: "What to do?",
        queNoHacer: "What NOT to do?",
        prevencion: "Prevention",
        recomendaciones: "Recommendations",

        inc1: "Stay calm.",
        inc2: "Evacuate using a safe route.",
        inc3: "Call 103 or 911.",
        inc4: "Crawl if there is heavy smoke.",
        inc5: "Cover your nose and mouth with a damp cloth.",
        inc6: "Do not use elevators.",
        inc7: "Do not go back for belongings.",
        inc8: "Do not open hot doors.",
        inc9: "Do not hide inside the building.",
        inc10: "Check electrical wiring.",
        inc11: "Install smoke detectors.",
        inc12: "Keep fire extinguishers available.",
        inc13: "Know evacuation routes.",

        exp1: "Move away immediately.",
        exp2: "Protect your head and neck.",
        exp3: "Seek shelter.",
        exp4: "Call emergency services.",
        exp5: "Do not approach to record videos.",
        exp6: "Do not touch suspicious objects.",
        exp7: "Do not block rescue access.",
        exp8: "Identify emergency exits.",
        exp9: "Follow official instructions.",
        exp10: "Stay away from damaged buildings.",

        accTitulo: "Traffic Accidents",
        acc1: "Check for injuries.",
        acc2: "Call 911.",
        acc3: "Mark the area.",
        acc4: "Provide first aid only if trained.",
        acc5: "Do not move seriously injured people.",
        acc6: "Do not gather around the accident.",
        acc67: "Do not block ambulances.",
        acc8: "Wear a seat belt and helmet.",
        acc9: "Reduce speed when it rains.",
        acc10: "Obey traffic signs.",

        gas1: "Open doors and windows.",
        gas2: "Close the gas valve.",
        gas3: "Evacuate.",
        gas4: "Call 103 or 911.",
        gas5: "Breathe slowly.",
        gas6: "Do not turn on lights.",
        gas7: "Do not use matches.",
        gas8: "Do not use cell phones.",
        gas9: "Do not attempt repairs.",
        gas10: "Inspect gas hoses.",
        gas11: "Install gas detectors.",
        gas12: "Use certified technicians.",

        qui1: "Move away from the area.",
        qui2: "Ventilate the area.",
        qui3: "Cover your nose and mouth.",
        qui4: "Wash exposed skin with plenty of water.",
        qui5: "Go outdoors.",
        qui6: "Do not touch unknown substances.",
        qui7: "Do not mix chemicals.",
        qui8: "Do not eat near the spill.",
        qui9: "Do not inhale vapors.",
        qui10: "Store chemicals with labels.",
        qui11: "Keep away from heat.",
        qui12: "Do not mix bleach with cleaners.",

        gemaTitulo: "GEMA",
        gemaDescripcion: "Global Emergency Management Access. Promoting preparedness, prevention and emergency response for everyone.",
        footerEnlaces: "Links",
        footerContacto: "Contact",
        footerSiguenos: "Follow Us",
        telefono: "Phone: +507 6000-0000",
        panama: "Panama",
        mapaInteractivo: "Interactive Map",
        footerDerechos: "© 2026 GEMA | Global Emergency Management Access. All rights reserved."

    }

};

// ===============================
// CAMBIAR IDIOMA
// ===============================

function cambiarIdioma(idioma) {

    localStorage.setItem("idioma", idioma);

    document.querySelectorAll("[data-i18n]").forEach(elemento => {

        const clave = elemento.getAttribute("data-i18n");

        if (textos[idioma] && textos[idioma][clave]) {

            elemento.innerHTML = textos[idioma][clave];

        }

    });

}

// ===============================
// CARGAR IDIOMA GUARDADO
// ===============================

window.addEventListener("DOMContentLoaded", () => {

    const idioma = localStorage.getItem("idioma") || "es";

    cambiarIdioma(idioma);

});