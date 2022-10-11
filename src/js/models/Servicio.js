class Servicio {
    constructor(numeroDeCorte, img, precio) {
        this.numeroDeCorte = numeroDeCorte;
        this.img = img;
        this.precio = precio;
    }

    CargarServicio($template, $fragmentServicios, $carrusel) {

        $template.querySelector('#img').setAttribute('src', this.img);
        $template.querySelector('#img').setAttribute('alt', "corte");
        $template.querySelector('#numero').innerText = this.numeroDeCorte;
        $template.querySelector('#precio').innerText = this.precio;

        const copia = document.importNode($template, true);
        $fragmentServicios.appendChild(copia);


        $carrusel.appendChild($fragmentServicios);

    }
}


export default Servicio;