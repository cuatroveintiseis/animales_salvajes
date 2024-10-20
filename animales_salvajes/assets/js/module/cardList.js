export function cardList(animalData) {

    const animalsCards = animalData.map((animal) => `
        <div class="card m-2 col-3">

${animal._nombre}<br>

<img class="card-img" src="${animal._img}">
<br>


        </div>
        
        `);

    document.getElementById('Animales').innerHTML = animalsCards;


}