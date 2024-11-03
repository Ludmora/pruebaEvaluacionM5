
async function* requestRange(inicioId, finalId) {
  const url = "https://rickandmortyapi.com/api/character/";
  let id_Personaje = inicioId;

  while (id_Personaje < finalId) {
    const personaje = await fetch(url + id_Personaje);
    const json = await personaje.json();
    yield json;
    id_Personaje++;
  }
}


async function getCharacter(request, cardId) {
  const data = await request.next();
  if (!data.done) {
    inyectarTarjeta(data.value, cardId);
  } else {
    console.log("No hay más personajes en este rango.");
  }
}


function inyectarTarjeta(result, cardId) {
  const { name, image, species, gender } = result;
  const cardRow = document.getElementById(cardId);

  const tarjeta = `
    <div class="card" style="width: 18rem; border: solid 2px; margin-left: 20px;">
      <img src="${image}" class="card-img-top" style="height: 70px; width: 70px; border-radius: 50%; margin: 10px auto;" alt="...">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">Género: ${gender}</p>
        <p class="card-text">Especie: ${species}</p>
         <button onclick="getCharacter(${cardId === 'card' ? 'myRequest' : cardId === 'card1' ? 'myRequest1' : 'myRequest2'}, '${cardId}')" class="btn btn-primary">Mostrar siguiente personaje</button>
      </div>
    </div>
  `;

  cardRow.innerHTML += tarjeta;
}

let myRequest = requestRange(1, 7);
let myRequest1 = requestRange(7, 13);
let myRequest2 = requestRange(13, 19);


document.getElementById('myButton').addEventListener('mouseenter', () => getCharacter(myRequest, 'card'));
document.getElementById('myButton2').addEventListener('mouseenter', () => getCharacter(myRequest1, 'card1'));
document.getElementById('myButton3').addEventListener('mouseenter', () => getCharacter(myRequest2, 'card2'));
