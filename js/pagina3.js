// Formulario de pedido: valida con Bootstrap y muestra un resumen en un alert
const form = document.getElementById("formPedido");
const fecha = document.getElementById("fechaPedido");

// La fecha minima es el dia de mañana
const manana = new Date();
manana.setDate(manana.getDate() + 1);
fecha.min = manana.toISOString().split("T")[0];

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
    }

    // Se limpia el nombre para que no se pueda escribir codigo HTML en el resumen
    const caja = document.createElement("span");
    caja.textContent = document.getElementById("txtNombre").value.trim();
    const nombre = caja.innerHTML;
    const producto = document.getElementById("lstProducto").value;
    const kilos = document.getElementById("numKilos").value;
    const reparto = document.getElementById("chkReparto").checked;
    const dia = new Date(fecha.value + "T00:00:00").toLocaleDateString("es-MX", {
        weekday: "long", day: "numeric", month: "long"
    });

    document.getElementById("resumen").innerHTML = `
        <div class="alert alert-success alert-dismissible fade show mb-0" role="alert">
            <h6 class="alert-heading"><i class="fa-solid fa-receipt me-1"></i>Resumen de tu pedido</h6>
            <strong>${nombre}</strong>: ${kilos} kg de ${producto.toLowerCase()} para el ${dia}
            ${reparto ? "con reparto a domicilio" : "para recoger en el mostrador"}.
            <hr class="my-2">
            <small>Confírmalo en el mostrador o con el repartidor.</small>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
        </div>`;

    form.reset();
    form.classList.remove("was-validated");
});
