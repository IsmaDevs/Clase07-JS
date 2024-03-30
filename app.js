//variable de entorno
const BASE_URL = "https://rickandmortyapi.com/api/character";


const getCharacters = () => {
  //utilizando fetch para hacer una peticion HTTP de tipo GET
  fetch(BASE_URL)
    .then((resp) => resp.json())//debo parsear a json toda la informacion obtenida
    .then((res) => {              //con los datos obtenidos
      console.log(res.results);   //debo mostrarlos en mi div vacio
      res.results.forEach((character) => {
        document.getElementById("root").innerHTML += `
            
            <div class="card col-3 mt-3 mb-5 mr-1 text-center" style="width: 18rem;">
           
                <img class="card-img-top mt-3" src="${
                  character.image
                }" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title text-primary"><span class="text-danger">Nombre:</span> ${character.name}</h5>
                <h5 class="card-text"><span class="text-danger">Genero:</span> ${character.gender}</h5>
                <h6 class="card-text"><span class="text-danger">Estado:</span> ${
                  character.status === "Alive" ? "Vivito" : "Mortadela"
                }</h6>
                <br>
                <button href="#" class="btn btn-primary" onclick="saludar()">Ver mas</button>
                </div>
               
            </div>
            
            `;
        
      });
    })
    .catch((error) => console.log(error));

  // axios.get(BASE_URL)
  // .then(resp=>console.log(resp))
};

const saludar = () =>{
  alert("PROXIMAMENTE 😂😂😂😂")
}

getCharacters();

const getCharacters2 = async  () => {
  // let response = await axios.get(BASE_URL)
  // console.log(response);
  let response = await fetch(BASE_URL);
  let data = await response.json();
  console.log(data);
};

//getCharacters2()

const getPersonaje = () => {
  let nombre = document.getElementById("input").value;

  try {
    axios
      .get("https://rickandmortyapi.com/api/character/?name=" + nombre)
      .then((resp) => {
        document.getElementById("root").innerHTML=""
        resp.data.results.forEach((character) => {
            
          document.getElementById("root").innerHTML += `
          
            <div class="card col-3 mt-3 mb-5 mr-1 text-center" >
                <img class="card-img-top mt-3" src="${
                  character.image
                }" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title"><span class="text-danger">Nombre:</span> ${character.name}</h5>
                <h5 class="card-text"><span class="text-danger">Genero:</span> ${character.gender}</h5>
                <h6 class="card-text"><span class="text-danger">Estado:</span> ${
                  character.status === "Alive" ? "Vivito" : "Mortadela"
                }</h6>
                <button href="#" class="btn btn-primary">Go somewhere</button>
                </div>
            </div>
            
            `;
            document.getElementById("input").value = ""  
        });
      })
      .catch((error) => {
        
        alert("no se encontro "+nombre)
        document.getElementById("input").value = ""
      });
  } catch (error) {}
};
document.getElementById("btn").addEventListener("click", getPersonaje);




