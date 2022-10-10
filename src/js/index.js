import "../css/index.css";
import Menu from './function/Menu'
import HeaderAnimation from './function/HeaderAnimacion'
const doc = document;
const { style } = doc.documentElement;
const $nav = doc.getElementById('nav'),
    $sectionHero = doc.getElementById('section-hero');

doc.addEventListener("DOMContentLoaded", () => {
    Menu($nav);
    HeaderAnimation($sectionHero, style);
});