//constantes sacadas del html
const botonFiccion = document.getElementById('boton-ficcion');
const botonNoFiccion = document.getElementById('boton-noficcion');
const botonInfantil = document.getElementById('boton-infantil');
const cajaFiccion = document.getElementById('generos-ficcion');
const cajaNoFiccion = document.getElementById('generos-noficcion');
const cajaInfantil = document.getElementById('generos-infantil');
const botonAplicar = document.getElementById('btn-aplicar');
//le quita el active y display a todas las categorias
function quitarFiltros() {
    cajaFiccion.classList.add('d-none');
    cajaNoFiccion.classList.add('d-none');
    cajaInfantil.classList.add('d-none');
    
    botonFiccion.classList.remove('active');
    botonNoFiccion.classList.remove('active');
    botonInfantil.classList.remove('active');
}
//quita el checked a todos los generos
function limpiarCheckboxes() {
    document.querySelectorAll('.check-genero').forEach(cb => cb.checked = false);
}
//coso para filtrar
function filtrarCatalogo() {
    //agarra la categoria active y los generos checkeados y agrega los generos
    //checkeados a la lista d generosBuscados.
    const categoriaActiva = document.querySelector('.categorias li.active').getAttribute('data-categoria');
    const checkboxesTildados = document.querySelectorAll('.check-genero:checked');
    const generosBuscados = [];
    checkboxesTildados.forEach(cb => generosBuscados.push(cb.value));
    const todosLosLibros = document.querySelectorAll('.tarjeta-libro');
    todosLosLibros.forEach(libro => {
        //agarra la categoria y genero de cada libro, se fija si la categoría
        //coincide con la categoría activa
        const categoriaLibro = libro.getAttribute('data-categoria');
        const generoLibro = libro.getAttribute('data-genero');
        const coincideCategoria = (categoriaLibro === categoriaActiva);
        //todo esto es para ver si coinciden los generos. Por defecto es false pq pintó
        //si la lista de generos buscados está vacía, es true pq no se especificó
        //si no está vacía, se fija si el libro tiene algún genero de los buscados
        let coincideGenero = false;
        if (generosBuscados.length === 0) {
            coincideGenero = true; 
        } else {
            coincideGenero = generosBuscados.includes(generoLibro);
        }
        //si para el libro coinciden tanto la categoría como el género, se le quita
        //el d-none (display:none pero en bootstrap) y así se vuelve visible
        //sino, se le agrega el d-none
        if (coincideCategoria && coincideGenero) {
            libro.classList.remove('d-none');
        } else {
            libro.classList.add('d-none');
        }
    });
}
//al botón de cada categoría hace que al hacerse click se limpien los filtros anteriores,
//se vuelva visible la caja de generos de esa categoría y se filtre el catálogo
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
//esto es para confirmar los filtros
botonAplicar.addEventListener('click', function(e) {
    filtrarCatalogo();
});
//para q se filtre el catalogo con lo predeterminado
// en html al cargar la página
filtrarCatalogo();