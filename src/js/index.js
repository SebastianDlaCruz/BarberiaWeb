import "../css/index.css";
import Menu from './function/Menu'
import HeaderAnimation from './function/HeaderAnimacion'
import MoverCarrusel from './function/MoverCarrusel'
const doc = document;
const { style } = doc.documentElement;
const $nav = doc.getElementById('nav'),
    $sectionHero = doc.getElementById('section-hero'),
    $carrusel = doc.getElementById('carrusel');

doc.addEventListener("DOMContentLoaded", () => {
    Menu($nav);
    HeaderAnimation($sectionHero, style);
    MoverCarrusel($carrusel);
});