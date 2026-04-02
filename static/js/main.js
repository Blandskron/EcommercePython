// aqui el codigo js o jquery para el proyecto de ecommerce
<script>
        let contador = 0;

        function actualizarContador() {
            document.getElementById("contador-carrito").textContent = contador;
        }

        function agregarAlCarrito() {
            contador++;
            actualizarContador();
        }
    </script>

// Esperar a que cargue todo el HTML
document.addEventListener("DOMContentLoaded", () => {

    // Carrito (persistente)
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Elemento contador
    const contador = document.getElementById("contador-carrito");

    // Función actualizar contador
    function actualizarContador() {
        contador.textContent = carrito.length;
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    // Función agregar producto
    function agregarAlCarrito(producto) {
        carrito.push(producto);
        actualizarContador();
        console.log("Agregado:", producto);
    }

    // Detectar TODOS los botones de agregar
    // (deben tener clase .btn-agregar)
    const botones = document.querySelectorAll(".btn-agregar");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const producto = boton.dataset.producto;
            agregarAlCarrito(producto);
        });
    });

    // Inicializar contador al cargar
    actualizarContador();
});
