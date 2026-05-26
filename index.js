const botonAgregar = document.querySelector("#btnAgregar");
const inputFraseDelDia = document.querySelector("#fraseDia");
const CabeceraFraseDia = document.querySelector("#cabeceraMenu");
const SeleccionarDia = document.querySelector("#selectorDia");
const SeccionCarta = document.querySelector("#seccionCarta");

function mostrarTodo() {
  CabeceraFraseDia.innerHTML =
    "Dia seleccionado:" +
    " " +
    SeleccionarDia.value +
    " " +
    "Frase del día:" +
    " " +
    inputFraseDelDia.value;
}
function mostrarCarta() {
  let carta = document.getElementById("seccionCarta");
  let html = "";

  for (let i = 0; i < platosDisponibles.length; i++) {
    html += `
            <p><strong>${platosDisponibles[i].nombre}</strong></p>
            <p>${platosDisponibles[i].descripcion}</p>
            <p>${platosDisponibles[i].precio} €</p>
            <hr>
        `;
  }

  carta.innerHTML = html;
}

mostrarCarta();

SeccionCarta.addEventListener("", mostrarCarta);
SeleccionarDia.addEventListener("change", mostrarTodo);
inputFraseDelDia.addEventListener("input", mostrarTodo);

let platosDisponibles = [
  {
    nombre: "Ensalada César",
    descripcion: "Ensalada con pollo, lechuga, queso y salsa César",
    tipo: "primero",
    precio: 8.5,
    foto: "ensalada.jpg",
  },
  {
    nombre: "Macarrones boloñesa",
    descripcion: "Pasta con salsa de tomate y carne picada",
    tipo: "primero",
    precio: 9.0,
    foto: "macarrones.jpg",
  },
  {
    nombre: "Pollo al horno",
    descripcion: "Pollo asado con patatas",
    tipo: "segundo",
    precio: 11.5,
    foto: "pollo.jpg",
  },
  {
    nombre: "Merluza a la plancha",
    descripcion: "Merluza con verduras salteadas",
    tipo: "segundo",
    precio: 12.0,
    foto: "merluza.jpg",
  },
];

let platos = [];
