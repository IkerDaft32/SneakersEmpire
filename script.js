const tenis = [

    {
    nombre:"Nike Court Legacy Next Nature",
    marca:"Nike",
    precio:"$2500",
    imagen:"airforce1.jpg"
    },
    
    {
    nombre:"Nike Upslift SC",
    marca:"Nike",
    precio:"$2200",
    imagen:"superstar.jpg"
    },
    
    {
    nombre:"Nike Dunk Low Next Nature",
    marca:"Nike",
    precio:"$2100",
    imagen:"rsx.jpg"
    },
    
    {
    nombre:"Nike big Low",
    marca:"Nike",
    precio:"$2000",
    imagen:"t4.jpg"
    },
    
    {
    nombre:"Nike WearAllDay",
    marca:"Nike",
    precio:"$1900",
    imagen:"t6.jpg"
    },
    
    {
    nombre:"Nike Air Jordan 1 Mid ",
    marca:"Nike",
    precio:"$3200",
    imagen:"Jordan 1.jpg"
    },

    {
    nombre:"Nike Air Jordan Retro 3 Tinker",
    marca:"Nike",
    precio:"$8600",
    imagen:"Jordan 3.jpg"
    },

    {
    nombre:"Nike Kevin Durant 5",
    marca:"Nike",
    precio:"$2300",
    imagen:"kd 5.jpg"
    },

    {
    nombre:"Nike Kevin Durant Trey 5 X",
    marca:"Nike",
    precio:"$2200",
    imagen:"kd Trey 5.jpg"
    },

{
    nombre:"Puma Axelion Refresh",
    marca:"Puma",
    precio:"$2600",
    imagen:"Puma A.jpg"
    },

    {
    nombre:"Under Armour Curry 3Z7",
    marca:"Under Armour",
    precio:"$1900",
    imagen:"Under.jpg"
    },

    {
    nombre:"Nike AF1 High",
    marca:"Nike",
    precio:"$2100",
    imagen:"t7.jpg"
    }
    
    ];
    
    // Elementos del HTML
const catalogo = document.getElementById("catalogo");
const buscador = document.getElementById("buscador");
const modal = document.getElementById("modal");
const imagenGrande = document.getElementById("imagenGrande");

// Función para mostrar tenis
function mostrarTenis(lista){

catalogo.innerHTML = "";

// Mensaje si no hay resultados
if(lista.length === 0){
catalogo.innerHTML = "<h2>No se encontraron tenis</h2>";
return;
}

lista.forEach(t => {

catalogo.innerHTML += `
<div class="tenis">
<img src="${t.imagen}" onclick="abrirImagen('${t.imagen}')">
<h3>${t.nombre}</h3>
<p>${t.marca}</p>
<p>${t.precio}</p>
</div>
`;

});

}

// Mostrar catálogo al iniciar
mostrarTenis(tenis);

// Buscador inteligente
buscador.addEventListener("keyup", () => {

let texto = buscador.value
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"");

let resultado = tenis.filter(t => {

let nombre = t.nombre
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"");

let marca = t.marca
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"");

return nombre.includes(texto) || marca.includes(texto);

});

mostrarTenis(resultado);

});

// Abrir imagen grande
function abrirImagen(src){

modal.style.display = "flex";
imagenGrande.src = src;

}

// Cerrar imagen grande
modal.addEventListener("click", () => {

modal.style.display = "none";

});
