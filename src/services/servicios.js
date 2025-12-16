import * as modelos from "../models/modelos.js"

export const agregarProducto = async (producto) => {
    return new Promise(async (res, rej) => {
        try{
            const nuevoProducto = await modelos.agregarProducto(producto)
            res(nuevoProducto)
        }catch(error){
            rej(error)
        }
    })
}

export const editarProducto = async (id, producto) => {
    return new Promise(async (res, rej) => {
        try{
            const nuevoProducto = await modelos.actualizarProducto(id, producto)
            res(nuevoProducto)
        }catch(error){
            rej(error)
        }
    })
}

export const eliminarProducto = async (id) => {
    return new Promise(async (res, rej) => {
        try{
            await modelos.eliminarProducto(id)
            res()
        }catch(error){
            rej(error)
        }
    })
}

export const obtenerProductos = async () => {
    return new Promise(async (res, rej) => {
        try{
            const productos = await modelos.obtenerProductos()
            res(productos)
        }catch(error){
            rej(error)
        }
    })
}

export const obtenerProductoPorId = async (id) => {
    return new Promise(async (res, rej) => {
        try{
            const producto = await modelos.obtenerProducto(id)
            res(producto)
        }catch(error){
            rej(error)
        }
    })
}

/*export const eliminarProductoPorId = async (id) => {
    const productos = await obtenerProductos()
    const productosModificado = productos.filter(producto => producto.id !== id)
    await modelos.reescribirProductos(productosModificado)
    const productosReescrito = await obtenerProductos()
    return productosModificado
}*/
