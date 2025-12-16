# Proyecto final de Talento Tech 2025 [Curso Node Js]
En este repositorio se presenta un servidor hecho con Node Js + Express js usando como base de datos firebase, en especifico firestorm. El servidor presenta una API Rest la cual puede realizar todas las operaciones CRUD que se necesiten, además de soportar autenticacion con JWT.

## Login

Para poder tener acceso a los endpoints primero el usuario debe loguearse, en este caso con un usuario y contraseña hardcodeados:
```
{
  "email" : "test@gmail.com",
  "password" : "123456"
}
```

Dicho objeto json debera ser pasado al body de la operacion **POST https://proyecto-final-tt-node.vercel.app/api/login**

El servidor devolvera un token que sera necesario como autenticacion para poder acceder a los endpoints.

## Endpoints
- **GET https://proyecto-final-tt-node.vercel.app/api/productos** devolverá todos los productos de la base de datos.
- **GET https://proyecto-final-tt-node.vercel.app/api/productos/id** devolverá solo el producto de ***id*** correspondiente, en caso que no exista tal producto devolvera una respuesta señalando que no se encontro el producto.
- **POST https://proyecto-final-tt-node.vercel.app/api/productos/agregar** añadirá el producto pasado por el body de la solicitud.
- **PUT https://proyecto-final-tt-node.vercel.app/api/producto/id** actualizara el producto que coincida con la ***id***, reemplazandolo por el producto pasado por el body de la solicitud.
- **DELETE https://proyecto-final-tt-node.vercel.app/api/producto/id** eliminará de la lista de productos el producto de ***id*** correspondiente
