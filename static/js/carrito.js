let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedor = document.getElementById("carrito");
const totalElemento = document.getElementById("total");
const pagarBtn = document.getElementById("pagarBtn");

// 🔒 Validación básica del DOM
if (!contenedor || !totalElemento) {
    console.warn("Elementos del carrito no encontrados en el DOM");
}

// 🔧 Limpia precio ($599.990 → 599990)
function limpiarPrecio(precio) {
    return parseInt(precio.replace(/\D/g, "")) || 0;
}

// 🖼️ Genera ruta segura de imagen
function obtenerRutaImagen(imagen) {
    if (!imagen) return "../uxui/img/default.png"; // opcional fallback
    return `../uxui/${imagen}`;
}

// 🛒 Render principal
function renderCarrito() {

    if (!contenedor) return;

    contenedor.innerHTML = "";
    let total = 0;

    // 🧠 Carrito vacío
    if (carrito.length === 0) {
        contenedor.innerHTML = `
            <div class="text-center p-5">
                <h4>Tu carrito está vacío 🛒</h4>
                <a href="../uxui/index.html" class="btn btn-primary mt-3">
                    Ir a comprar
                </a>
            </div>
        `;
        totalElemento.textContent = "Total: $0";
        return;
    }

    carrito.forEach((item, index) => {

        const precio = limpiarPrecio(item.precio);
        total += precio;

        contenedor.innerHTML += `
            <div class="d-flex justify-content-between align-items-center mb-3 p-3 bg-white rounded shadow-sm">

                <div class="d-flex align-items-center gap-3">

                    <img src="${obtenerRutaImagen(item.imagen)}" 
                         width="80" 
                         style="object-fit:contain;">

                    <div>
                        <h5 class="mb-1">${item.nombre}</h5>
                        <p class="text-muted mb-0">${item.precio}</p>
                    </div>

                </div>

                <button onclick="eliminar(${index})" class="btn btn-danger btn-sm">
                    <i class="fas fa-trash"></i>
                </button>

            </div>
        `;
    });

    totalElemento.textContent = "Total: $" + total.toLocaleString("es-CL");
}

// ❌ Eliminar producto
function eliminar(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();
}

// 💳 Pagar
if (pagarBtn) {
    pagarBtn.addEventListener("click", () => {

        if (carrito.length === 0) {
            alert("Tu carrito está vacío 🛒");
            return;
        }

        localStorage.removeItem("carrito");
        carrito = [];

        renderCarrito();

        alert("Pago realizado con éxito 💳");
    });
}

// 🚀 Inicializar
renderCarrito();