class Barbero {

    constructor(img, nombre, apellido) {
        this.img = img;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    CargarBarbero($template, $fragmentoBarbero, $contendor) {

        const nombreYApellido = this.nombre + this.apellido;

        /* $template.querySelector('#img').setAttribute('src', this.img);
        $template.querySelector('#img').setAttribute('alt', this.nombre); */
        $template.querySelector('#NombreYApellido').innerText = nombreYApellido;

        const $copia = document.importNode($template, true);
        $fragmentoBarbero.appendChild($copia);

        $contendor.appendChild($fragmentoBarbero);
    }
}

export default Barbero;