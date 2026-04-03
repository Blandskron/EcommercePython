// 🔍 BUSCADOR (TU MISMO CÓDIGO)
function ejecutarBusqueda(valor) {

    let texto = valor.toLowerCase();

    $(".product-card").each(function () {

        let nombre = $(this).data("name");

        if (nombre.includes(texto)) {
            $(this).show();
        } else {
            $(this).hide();
        }

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

        let nombre = $(this).data("name");

        if (nombre.includes(input) && input !== "") {
            resultados += `<div class="list-group-item item-busqueda">${nombre}</div>`;
        }

    });

    $("#searchResults").html(resultados).show();

});

$(document).on("click", ".item-busqueda", function(e) {

    e.preventDefault();

    let texto = $(this).text().trim().toLowerCase();

    $("#searchInput").val(texto).blur();
    ejecutarBusqueda(texto);
    $("#searchResults").hide();

});


// 🛒 CARRITO (PRO)
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// 🔴 ACTUALIZAR CONTADOR
function actualizarContador() {
    const contador = document.getElementById("contadorCarrito");
    if (contador) {
        contador.textContent = carrito.length;
    }
}

// ➕ AGREGAR PRODUCTO
$(".add-cart").on("click", function() {

    let card = $(this).closest(".product-card");

    let producto = {
        nombre: card.find("h5").text(),
        precio: card.find(".fw-bold").text(),
        imagen: card.find("img").attr("src")
    };

    carrito.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();

    // 🔥 feedback visual
    $(this).text("✔ Añadido").addClass("btn-success");

    setTimeout(() => {
        $(this).text("Añadir").removeClass("btn-success");
    }, 1000);
});

// 🚀 INICIO
actualizarContador();