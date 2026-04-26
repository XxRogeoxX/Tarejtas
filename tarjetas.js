function pintarTarjetas() {
    let contenido = "";
    let divTarjetas = document.getElementById("divTarjetas");
    
    // 1. Capturar los valores de los inputs por su ID
    let desde = document.getElementById("txtDesde").value;
    let hasta = document.getElementById("txtHasta").value;
    let salto = document.getElementById("txtSalto").value;

    // 2. Convertir los valores a números para que el bucle funcione correctamente
    desde = Number(desde);
    hasta = Number(hasta);
    salto = Number(salto);

    // 3. Usar las variables en el ciclo for
    for (let i = desde; i <= hasta; i += salto) {
        contenido = contenido + "<div class='item'>" + i + "</div>";
    }

    // 4. Inyectar el resultado en el contenedor
    divTarjetas.innerHTML = contenido;
}