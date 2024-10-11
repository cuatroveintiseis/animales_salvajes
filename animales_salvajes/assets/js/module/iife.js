export const datosAnimales = (() => {
    let matriz = [];

    const obtenerDatos = async (nombre) => {
        try {
            let response = await fetch("animales.json");
            let data = await response.json();

            const datosAnimal = data.animales.find((animal) => animal.name === nombre);
            return datosAnimal;
        } catch (error) {
            console.log(error);
        }
    }

    const pushMatriz = (animal) => {
        matriz.push(animal);


    }

    return {
        matriz, obtenerDatos, pushMatriz
    }

})();

