function solicitarNumero() {
    const numero = prompt("Por favor, ingrese un número positivo")
    return numero
}

function saludar(msg) {
    alert(msg)
}


function interactuar() {
    let ejecutar = true

    while (ejecutar == true) {

        const entrada = solicitarNumero()

        if (entrada > 0) {
            for (let i = 1; i <= entrada; i++) {
                const mensaje = "Intento #" + i + ": Hola!"
                saludar(mensaje)
            }

            ejecutar = false
        } else {
            const error = "Ingrese un número válido"
            saludar(error)
        }

    }
}

interactuar()