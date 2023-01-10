const contenedor = document.querySelector(".flex-container");
let contador = 0;

function crearLlave(nombre, modelo, precio) {
    contador++;
    img = `<img class = "llave-img" src = 'llave.png' alt = 'Imagen de llave ${contador}'>`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3'>${modelo}</h3>`;
    precio = `<p> Precio: <b>${precio}</b></p>`

    return [img, nombre, modelo, precio];

}

let documentFragment = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {

    let mRamdon = Math.round(Math.random() * 10000);
    let pRamdon = Math.round(Math.random() * 10 + 30);
    let llave = crearLlave(`Llave ${i+1}`, `modelo ${mRamdon}`, pRamdon);

    let div = document.createElement("DIV");

    div.addEventListener("click",()=>{document.querySelector(".key-data").value = mRamdon;});
    div.tabIndex = i;
    div.classList.add(`item-${i}`,`flex-item`);

    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);

}

contenedor.appendChild(documentFragment);