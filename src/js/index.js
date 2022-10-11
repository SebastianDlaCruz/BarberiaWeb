import "../css/index.css";
import Menu from './function/Menu'
import HeaderAnimation from './function/HeaderAnimacion'
import MoverCarrusel from './function/MoverCarrusel'
import { PeticionGet } from "./function/PeticionGet";

import Servicio from "./models/Servicio";

const doc = document;
const { style } = doc.documentElement;

const $nav = doc.getElementById('nav'),
    $sectionHero = doc.getElementById('section-hero'),
    $carrusel = doc.getElementById('carrusel'),
    $templateServicios = doc.getElementById('template-servicios').content;

const $fragmentServicios = doc.createDocumentFragment();

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
            const servicio = new Servicio(element.numeroDeCorte, element.img, element.precio);
            servicio.CargarServicio($templateServicios, $fragmentServicios, $carrusel);
        });

    });
    HeaderAnimation($sectionHero, style);
    MoverCarrusel($carrusel);
});