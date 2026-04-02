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