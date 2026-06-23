    const botonFiccion = document.getElementById('boton-ficcion');
    const botonNoFiccion = document.getElementById('boton-noficcion');
    const botonInfantil = document.getElementById('boton-infantil');
    const cajaFiccion = document.getElementById('generos-ficcion');
    const cajaNoFiccion = document.getElementById('generos-noficcion');
    const cajaInfantil = document.getElementById('generos-infantil');
    function quitarFiltros() {
        cajaFiccion.classList.add('d-none');
        cajaNoFiccion.classList.add('d-none');
        cajaInfantil.classList.add('d-none');
        botonFiccion.classList.remove('active');
        botonNoFiccion.classList.remove('active');
        botonInfantil.classList.remove('active');
    }
    botonFiccion.addEventListener('click', function() {
        quitarFiltros();
        cajaFiccion.classList.remove('d-none');
        botonFiccion.classList.add('active');
    });

    botonNoFiccion.addEventListener('click', function() {
        quitarFiltros();
        cajaNoFiccion.classList.remove('d-none');
        botonNoFiccion.classList.add('active');
    });

    botonInfantil.addEventListener('click', function() {
        quitarFiltros();
        cajaInfantil.classList.remove('d-none');
        botonInfantil.classList.add('active');
    });