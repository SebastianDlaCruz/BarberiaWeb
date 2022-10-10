import ModificandoEstilos from './ModificandoEstilos';
import StyleHeader from '../models/StyleHeader';
import StyleHeaderDefault from '../models/StyleHeaderDefault';
const Interaccion = (entries) => {

    const { style } = document.documentElement;

    entries.forEach(entry => {

        const $header = document.getElementById('header');
        if (entry.isIntersecting) { ModificandoEstilos(StyleHeaderDefault, style); }
        else { ModificandoEstilos(StyleHeader, style) }

    });
}
export default Interaccion;