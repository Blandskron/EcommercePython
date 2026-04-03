// 🔍 BUSCADOR
function ejecutarBusqueda(valor) {
    let texto = valor.toLowerCase();
    $(".product-card").each(function () {
        let nombre = $(this).data("name") || "";
        $(this).closest(".col").toggle(nombre.includes(texto));
    });
}

$("#searchInput").on("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        ejecutarBusqueda($(this).val());
        $("#searchResults").hide();
    }
});

$("#searchInput").on("keyup", function() {
    let input = $(this).val().toLowerCase();
    let resultados = "";
    $(".product-card").each(function () {
        let nombre = $(this).data("name") || "";
        if (nombre.includes(input) && input !== "") {
            resultados += `<div class="list-group-item item-busqueda">${nombre}</div>`;
        }
    });
    $("#searchResults").html(resultados).show();
    if (!input) $("#searchResults").hide();
});

$(document).on("click", ".item-busqueda", function(e) {
    e.preventDefault();
    let texto = $(this).text().trim().toLowerCase();
    $("#searchInput").val(texto).blur();
    ejecutarBusqueda(texto);
    $("#searchResults").hide();
});

// 🛒 CARRITO
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function actualizarContador() {
    const contador = document.getElementById("contadorCarrito");
    if (contador) {
        let total = carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);
        contador.textContent = total;
    }
}

$(document).on("click", ".add-cart", function() {
    const nombre = $(this).data("nombre");
    const precio = Number($(this).data("precio"));
    const imagen = $(this).data("imagen");

    if (!nombre || !precio) return;

    let productoExistente = carrito.find(p => p.nombre === nombre);
    if (productoExistente) {
        productoExistente.cantidad = (productoExistente.cantidad || 1) + 1;
    } else {
        carrito.push({ nombre, precio, imagen, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContador();

    $(this).text("✔ Añadido").addClass("btn-success").removeClass("btn-outline-primary");
    setTimeout(() => {
        $(this).text("Añadir").removeClass("btn-success").addClass("btn-outline-primary");
    }, 1000);
});

actualizarContador();