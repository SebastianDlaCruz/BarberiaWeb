export const PeticionGet = async (url) => {

    try {
        const response = await fetch(url);
        const json = await response.json();

        if (!response.ok) {

            throw new Error("ERROR: !OPS! Algo paso con la peticion");
        }

        return json;

    } catch (err) {
        console.error(err);
    }
};