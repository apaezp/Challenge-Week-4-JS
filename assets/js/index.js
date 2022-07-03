
const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
];
  
let template = "";

const container = document.getElementById("Propiedades");
const propiedadDisplay = document.querySelector(".propiedad");
const searchButton = document.querySelector('.btn');
const roomQuantity = document.querySelector('.form-control');
const squareMetersFrom = document.querySelector('.form-control-from');
const squareMetersTo = document.querySelector('.form-control-to');
const reset = document.getElementById("btn-reset");


const templateBase = (propiedad => { 
    template += `<div class="propiedad">
    <div class="img-container">    
        <img src="${propiedad.src}" alt="">
    </div>
    <div class="info-container">
        <h5 class="name">${propiedad.name}</h5>
        <div class="rooms-container">
            <p>Cuartos: ${propiedad.rooms}</p>
            <p>Metros: ${propiedad.m}</p>
        </div>
        <p class="description">${propiedad.description}</p>
        <div class="btn-container">
        <button class="btn ">Ver más</button>
        </div>
    </div >
  </div>
`;
        
});

window.onload = () => {
  for (let propiedad of propiedadesJSON) {
    templateBase(propiedad);
    container.innerHTML = template;
    total = "";
    
  }
  
  template = "";
  
};



searchButton.addEventListener('click', function() {
    const roomQuantityValue = roomQuantity.value;
    const squareMetersFromValue = squareMetersFrom.value;
    const squareMetersToValue = squareMetersTo.value;  
    let total = "";      

    if(roomQuantityValue =="" || squareMetersFromValue == "" || squareMetersToValue == "" || roomQuantityValue == 0) {
        alert('Debe ingresar una cantidad de habitaciones y un mínimo y máximo de metros cuadrados');
    } else {      
    for (let propiedad of propiedadesJSON) {
      if (propiedad.m >= squareMetersFromValue && propiedad.m <= squareMetersToValue && propiedad.rooms == roomQuantityValue) {      
        
      templateBase(propiedad);
      container.innerHTML = template;
      total++;
      }
    }

      if (total == 0 || total == null || total == undefined || total =="") {
        alert("No existen propiedades que cumplan esos parametros");
      }
  
      document.querySelector("#total").innerHTML = `Total: ${total}`;
      template = "";
    }    
    
    }    
    
 
);


  reset.addEventListener("click", function () {
    for (let propiedad of propiedadesJSON) {
      templateBase(propiedad);
      container.innerHTML = template;
      document.querySelector("#total").innerHTML = `Total: ${propiedadesJSON.length}`;
      document.querySelector(".form-control").value = "";
      document.querySelector(".form-control-from").value = "";
      document.querySelector(".form-control-to").value = "";
    }
    
    template=""
    
  });





