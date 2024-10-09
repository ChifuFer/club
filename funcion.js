const jugadores = []; 

let boton = document.getElementById("btncargar")
boton.addEventListener("click", cargar)

function cargar() {
    let DNI = document.getElementById("inpdni").value;
    let Nombre = document.getElementById("inpnombre").value;
    let Apellido = document.getElementById("inpapellido").value;
    let Posicion = document.getElementById("inpposicion").value;
    let Talle = document.getElementById("inptalle").value;
    let padre = document.getElementById("listajugadores")
    let contenedor = document.createElement("tr")
    contenedor.innerHTML= `<td>${DNI}</td>
                            <td>${Nombre}</td>
                            <td>${Apellido}</td>
                            <td>${Posicion}</td>
                            <td>${Talle}</td>`

    padre.appendChild(contenedor)
}
