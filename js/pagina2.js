// Cambia el titulo y el texto del modal segun el boton que lo abrio
const modalProducto = document.getElementById("modalProducto");

modalProducto.addEventListener("show.bs.modal", function (evento) {
    const boton = evento.relatedTarget;
    document.getElementById("tituloProducto").textContent = boton.dataset.producto;
    document.getElementById("detalleProducto").textContent = boton.dataset.detalle;
});
