const miCarrito = []
const listaDeProductos = [
    {
        id: 1,
        nombre: "Pantalon",
        precio: '1000$'
    },
    {
        id: 2,
        nombre: 'Blusa',
        precio: '250$'
    },
    {
        id: 3,
        nombre: 'Sombrero',
        precio: '100$'
    }
]

function mostrarCarrito() {
    const contenido = miCarrito.map(producto => `${producto.nombre} - ${producto.precio}`)
    alert(JSON.stringify(contenido, null,2))
}

function buscarProducto(id) {
    const producto = listaDeProductos.find(prod => prod.id == id)
    return producto
}

function comprar() {
    const mensajeInicial = `
    Seleccione una prenda de ropa: 
    1. Pantalon 1000$
    2. Blusa 250$
    3. Sombrero 100$
`
    const opcionElegida = prompt(mensajeInicial)
    miCarrito.push(buscarProducto(opcionElegida))
}


function atenderCliente() {
    const mensajeOpciones = `Hola
    Como te puedo ayudar: 
    1.Comprar
    2.Ver tu carrito de compras
    3.Finalizar compra
`
    const opcionesPostCompra = prompt(mensajeOpciones)
    if (opcionesPostCompra == 1) {
        comprar()
        atenderCliente()
    }

    if (opcionesPostCompra == 2) {
        mostrarCarrito()
        atenderCliente()
    }

    if (opcionesPostCompra == 3) {
        alert("Fin de la compra, adios!")
    }
}

atenderCliente()