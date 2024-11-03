let personajes=[]




async function* request(){
    let id_Personaje=1
    let url="https://rickandmortyapi.com/api/character/"

    while (id_Personaje<7){
        let personaje= await fetch(url+id_Personaje);
        let json= await personaje.json()
        yield json;
        id_Personaje++
        
    }


}

let myRequest =request();
// console.log(myRequest.next())

async function get(){
const data =await myRequest.next()
const result = data.value
console.log(result)

inyectarTarjeta(result)

}


function inyectarTarjeta(result){
  const {name,image,species,gender}=result
  const cardRow=  document.getElementById("card")
  
    let tarjeta=` 
   <div id="card" class="card" style="width: 18rem;border:solid blue 2px;margin-left:20px  ">
    <img src="${image}" class="card-img-top" style="height: 70px;width:70px;border-radius:50%; margin:10 auto"alt="...">
            <div class="card-body" >
              <h5 class="card-title">${name}</h5>
              <p class="card-text">Genero:${gender}</p>
              <p class="card-text">Especie:${species}</p>
              <a  onclick="get()" class="btn btn-primary">Mostrar siguiente Personaje</a>
            </div>
            </div>
    `
    cardRow.innerHTML +=tarjeta;
  
  }


  
const button = document.getElementById('myButton');


// Definimos la función que se ejecutará cuando el mouse se mueva sobre el botón
function handleMouseMove(event) {
  console.log(get());
}

// Asociamos el evento 'mousemove' al botón
button.addEventListener('mouseenter', handleMouseMove);



async function* request1(){
  let id_Personaje=7
  let url="https://rickandmortyapi.com/api/character/"

  while (id_Personaje<13){
      let personaje= await fetch(url+id_Personaje);
      let json= await personaje.json()
      yield json;
      id_Personaje++
      
  }


}

let myRequest1 =request1();
// console.log(myRequest.next())

async function get2(){
const data =await myRequest1.next()
const result1 = data.value
console.log(result1)

inyectarTarjeta1(result1)

}



function inyectarTarjeta1(result1){
  const {name,image,species,gender}=result1
  const cardRow=  document.getElementById("card1")
  
    let tarjeta1=` 
    <div id="card" class="card" style="width: 18rem;border:solid blue 2px;margin-left:20px  ">
    <img src="${image}" class="card-img-top" style="height: 70px;width:70px;border-radius:50%; margin:10 auto"alt="...">
            <div class="card-body" >
              <h5 class="card-title">${name}</h5>
              <p class="card-text">Genero:${gender}</p>
              <p class="card-text">Especie:${species}</p>
              <a  onclick="get2()" class="btn btn-primary">Mostrar Otro Personaje</a>
            </div>
            </div>
    `
    
    cardRow.innerHTML +=tarjeta1;
  
  }



const button2 = document.getElementById('myButton2');
function handleMouseMove2(event) {
  console.log(get2());
}

// Asociamos el evento 'mousemove' al botón
button2.addEventListener('mouseenter', handleMouseMove2);



//card3
async function* request2(){
  let id_Personaje=13
  let url="https://rickandmortyapi.com/api/character/"

  while (id_Personaje<19){
      let personaje= await fetch(url+id_Personaje);
      let json= await personaje.json()
      yield json;
      id_Personaje++
      
  }


}

let myRequest2 =request2();
// console.log(myRequest.next())

async function get3(){
const data =await myRequest2.next()
const result2 = data.value
console.log(result2)

inyectarTarjeta2(result2)

}



function inyectarTarjeta2(result2){
  const {name,image,species,gender}=result2
  const cardRow=  document.getElementById("card2")
  
    let tarjeta2=` 
    <div id="card" class="card" style="width: 18rem;border:solid green 2px;margin-left:20px  ">
    <img src="${image}" class="card-img-top" style="height: 70px;width:70px;border-radius:50% ; margin:10 auto"alt="...">
            <div class="card-body" >
              <h5 class="card-title">${name}</h5>
              <p class="card-text">Genero:${gender}</p>
              <p class="card-text">Especie:${species}</p>
              <a  onclick="get3()" class="btn btn-primary">Mostrar Otro Personaje</a>
            </div>
            </div>
    `
    
    cardRow.innerHTML +=tarjeta2;
  
  }



const button3 = document.getElementById('myButton3');
function handleMouseMove3(event) {
  console.log(get3());
}

// Asociamos el evento 'mousemove' al botón
button3.addEventListener('mouseenter', handleMouseMove3);