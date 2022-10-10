const ModificandoEstilos = (obj, style) => {
    Object.entries(obj).forEach(([key, value]) => {
        style.setProperty(key, value);
    });
};
export default ModificandoEstilos;
