import { Opcion } from "./Opcion";
import Interaccion from "./Interaccion";
const HeaderAnimation = ($sectionHero) => {

    const observer = new IntersectionObserver(Interaccion, Opcion(0.75));

    observer.observe($sectionHero);
}

export default HeaderAnimation;