import * as servicios from "../services/servicios.js"


export const agregarProducto = async (req, res) => {
    try{
        const producto = req.body
        const nuevoProducto = await servicios.agregarProducto(producto)
        res.status(200).json(nuevoProducto)
    }catch(error){
        res.status(500)
    }
}

export const eliminarProducto = async (req, res) => {
    try{
        const id = req.params.id
        if(!id)
            res.status(400)

        await servicios.eliminarProducto(id)
        res.status(200)
    }catch(error){
        res.status(500)
    }
}

export const editarProducto = async (req, res) => {
    try{
        const id = req.params.id
        if(!id || !producto)
            res.status(400)
        const producto = req.body
        const nuevoProducto = await servicios.editarProducto(id, producto)
    }catch(error){
        res.status(500)
    }
}

export const obtenerProductos = async (req, res) => {
    try{
        const productos = await servicios.obtenerProductos()
        res.status(200).json(productos)
    }catch(error){
        res.status(500)
    }
    
}

export const obtenerProductoPorId = async (req, res) => {
    try{
        const id = req.params.id
        if(!id)
            res.status(400).json(error)

        const producto = await servicios.obtenerProductoPorId(id)
        if(producto)
            res.status(200).json(producto)
        else
            res.status(404).json({message: "Producto no encontrado"})
    }catch(error){
        res.status(500)
    }
    
}
