document.getElementById('scroll-izquierdo').addEventListener('click', () => {
    document.querySelector('.tabla-calificacion-centrar').scrollLeft -= 160;
});

document.getElementById('scroll-derecho').addEventListener('click', () => {
    document.querySelector('.tabla-calificacion-centrar').scrollLeft += 160;
});
