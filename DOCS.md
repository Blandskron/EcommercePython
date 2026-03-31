## Guía de Flujo de Trabajo (Git Workflow)

### 1. Clonar el repositorio
`git clone https://github.com/Blandskron/EcommercePython.git`
Descarga una copia completa del proyecto desde el repositorio remoto en GitHub a tu máquina local.

### 2. Acceder al directorio
`cd EcommercePython/`
Cambia el directorio de trabajo de la terminal a la carpeta raíz del proyecto recién clonado.

### 3. Crear una nueva rama
`git branch cargo/nombre`
Crea una nueva línea de tiempo o rama llamada `cargo/nombre`. Esto permite trabajar en nuevas funcionalidades o cambios sin afectar el código principal.

### 4. Cambiar de rama
`git checkout cargo/nombre`
Mueve el entorno de trabajo a la rama especificada para que los cambios que realices se registren en ella.

### 5. Preparar los archivos
`git add .`
Añade todos los archivos modificados (incluyendo el cambio en el README) al área de preparación (*staging area*), indicando que están listos para ser guardados.

### 6. Registrar los cambios
`git commit -m "comentario"`
Guarda permanentemente los cambios preparados en el historial local de la rama, acompañados de un mensaje descriptivo.

### 7. Subir cambios al servidor
`git push origin cargo/nombre`
Envía la rama local y sus respectivos *commits* al repositorio remoto en GitHub.

### 8. Actualizar desde la rama principal
`git pull origin main`
Descarga e integra los últimos cambios que existan en la rama principal (`main`) de GitHub hacia tu rama local para mantener el código actualizado.