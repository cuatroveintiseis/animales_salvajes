
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./class/animales.js";
import { cardList } from "./module/cardList.js";
import { datosAnimales } from "./module/iife.js";


const animalList = { Leon, Lobo, Oso, Serpiente, Aguila };

function click() {
    document.getElementById("btnRegistrar").addEventListener("click", async (event) => {
        event.preventDefault();

        const nombreAnimal = document.getElementById('animal').value;
        const edadAnimal = document.getElementById('edad').value;
        const comentariosAnimal = document.getElementById('comentarios').value;
        console.log(nombreAnimal);

        try {
            const datosAnimal = await datosAnimales.obtenerDatos(nombreAnimal);
            console.log(datosAnimal);


            const imagenActual = `assets/imgs/${datosAnimal.imagen}`;
            const sonidoActual = `assets/sounds/${datosAnimal.sonido}`;

            console.log(imagenActual);
            const animal = new animalList[nombreAnimal](nombreAnimal, edadAnimal, imagenActual, comentariosAnimal, sonidoActual);

            datosAnimales.pushMatriz(animal);

            cardList(datosAnimales.matriz);
        } catch (error) {
            console.error(error);
        }
    });
}
click();



