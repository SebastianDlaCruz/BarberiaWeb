const MoverCarrusel = ($carrusel) => {
    document.addEventListener('click', (event) => {

        if (event.target.matches('#btn-carrusel-derecho')) {
            console.log($carrusel.scrollLeft);
            console.log($carrusel.offsetWidth);
            $carrusel.scrollLeft += 415;
        } else if (event.target.matches('#btn-carrusel-izquierdo')) {

            $carrusel.scrollLeft -= 415;
        }
    });
}

export default MoverCarrusel;