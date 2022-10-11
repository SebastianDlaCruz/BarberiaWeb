import "../css/index.css";
/* IMPORTACION DE FUNCIONES */
import Menu from './function/Menu'
import HeaderAnimation from './function/HeaderAnimacion'
import MoverCarrusel from './function/MoverCarrusel'
import { PeticionGet } from "./function/PeticionGet";

/* IMPORTACION DE OBJETOS */
import Servicio from "./models/Servicio";
import Barbero from "./models/Barbero";

const doc = document;
const { style } = doc.documentElement;

const $nav = doc.getElementById('nav'),
    $sectionHero = doc.getElementById('section-hero'),
    $carrusel = doc.getElementById('carrusel'),
    $contenedorBar = doc.getElementById('contenedor-barbero');
$templateServicios = doc.getElementById('template-servicios').content,
    $templateBarberos = doc.getElementById('template-barberos').content;

const $fragmentServicios = doc.createDocumentFragment(),
    $fragmentoBarbero = doc.createDocumentFragment();

const urlServico = 'http://localhost:3000/cortes ';
const urlBarbero = 'http://localhost:3000/barbaros';

doc.addEventListener("DOMContentLoaded", () => {
    Menu($nav);
    PeticionGet(urlServico).then((res) => {
        res.forEach(element => {
            const servicio = new Servicio(element.numeroDeCorte, element.img, element.precio);
            servicio.CargarServicio($templateServicios, $fragmentServicios, $carrusel);
        });

    });
    PeticionGet(urlBarbero).then((res) => {
        res.forEach(element => {

            const barbero = new Barbero(element.img, element.nombre, element.apellido);
            barbero.CargarBarbero($templateBarberos, $fragmentoBarbero, $contenedorBar);
        });

    });
    HeaderAnimation($sectionHero, style);
    MoverCarrusel($carrusel);
});
/* json-server --watch debugger.json */