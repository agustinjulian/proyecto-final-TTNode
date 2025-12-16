import express from 'express'
import * as controladores from '../controllers/controladores.js'

const rutas = express.Router()

rutas.get('/productos', controladores.obtenerProductos)

rutas.get('/productos/:id', controladores.obtenerProductoPorId)

rutas.post('/productos/agregar', controladores.agregarProducto)

rutas.delete('/producto/:id', controladores.eliminarProducto)

rutas.put('/producto/:id', controladores.editarProducto)

//router.get('/eliminarProducto/:id', controladores.eliminarProductoPorId)

export default rutas