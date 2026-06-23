const botonFiccion = document.getElementById('boton-ficcion');
const botonNoFiccion = document.getElementById('boton-noficcion');
const botonInfantil = document.getElementById('boton-infantil');

const cajaFiccion = document.getElementById('generos-ficcion');
const cajaNoFiccion = document.getElementById('generos-noficcion');
const cajaInfantil = document.getElementById('generos-infantil');

const botonAplicar = document.getElementById('btn-aplicar');

// Oculta todas las cajas de checkboxes
function quitarFiltros() {
    cajaFiccion.classList.add('d-none');
    cajaNoFiccion.classList.add('d-none');
    cajaInfantil.classList.add('d-none');
    
    botonFiccion.classList.remove('active');
    botonNoFiccion.classList.remove('active');
    botonInfantil.classList.remove('active');
}

function limpiarCheckboxes() {
    document.querySelectorAll('.check-genero').forEach(cb => cb.checked = false);
}

function filtrarCatalogo() {
    const categoriaActiva = document.querySelector('.categorias li.active').getAttribute('data-categoria');
    const checkboxesTildados = document.querySelectorAll('.check-genero:checked');
    
    const generosBuscados = [];
    checkboxesTildados.forEach(cb => generosBuscados.push(cb.value));

    const todosLosLibros = document.querySelectorAll('.tarjeta-libro');

    todosLosLibros.forEach(libro => {
        const catLibro = libro.getAttribute('data-categoria');
        const genLibro = libro.getAttribute('data-genero');

        const coincideCategoria = (catLibro === categoriaActiva);
        
        let coincideGenero = false;
        if (generosBuscados.length === 0) {
            coincideGenero = true; 
        } else {
            coincideGenero = generosBuscados.includes(genLibro);
        }

        if (coincideCategoria && coincideGenero) {
            libro.classList.remove('d-none');
        } else {
            libro.classList.add('d-none');
        }
    });
}

botonFiccion.addEventListener('click', function() {
    quitarFiltros();
    limpiarCheckboxes();
    cajaFiccion.classList.remove('d-none');
    botonFiccion.classList.add('active');
    filtrarCatalogo();
});

botonNoFiccion.addEventListener('click', function() {
    quitarFiltros();
    limpiarCheckboxes();
    cajaNoFiccion.classList.remove('d-none');
    botonNoFiccion.classList.add('active');
    filtrarCatalogo();
});

botonInfantil.addEventListener('click', function() {
    quitarFiltros();
    limpiarCheckboxes();
    cajaInfantil.classList.remove('d-none');
    botonInfantil.classList.add('active');
    filtrarCatalogo();
});

botonAplicar.addEventListener('click', function(e) {
    e.preventDefault();
    filtrarCatalogo();
});

filtrarCatalogo();