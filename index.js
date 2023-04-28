let ejecutar = true

while (ejecutar) {

    const entrada = prompt("Por favor, ingrese un número positivo")

    if (entrada > 0) {
        for (let i = 1; i <= entrada; i++) {
            const mensaje = "Intento #" + i + ": Hola!"
            alert(mensaje)
        }

        ejecutar = false
    } else {
        alert("Ingrese un número válido")
    }

}