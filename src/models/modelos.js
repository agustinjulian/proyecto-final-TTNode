import {db} from "../data/data.js"
import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore"

export function obtenerProducto(id){
    return new Promise(async (res, rej) => {
        try{
            const docRef = doc(db, 'products', id)
            const docSnap = await getDoc(docRef)

            if(docSnap.exists()) {
                console.log('Document data: ', docSnap.data())
                res(docSnap.data())
            }else{
                console.log('No such document!')
                res()
            }
        }catch(error){
            console.log(error)
            rej(error)
        }
    })
    
}

export function obtenerProductos() {
    return new Promise(async (res, rej) => {
        try{
            const querySnapshot = await getDocs(collection(db, 'products'))
            const productos = [] 
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data())
                productos.push({...doc.data(), id: doc.id})
            })
            res(productos)
        }catch(error){
            console.log(error)
            rej(error)
        }
    })
    
}

export function agregarProducto(producto) {
    return new Promise(async (res, rej) => {
        try{
            const docRef = await addDoc(collection(db, 'products'), producto)
            console.log("Doc ID: ", docRef.id)
            res({...producto, id: docRef.id})
        }catch(error){
            console.log(error)
            rej(error)
        }
    })
}

export function actualizarProducto(id, producto){
    return new Promise(async (res, rej) => {
        try{
            await updateDoc(doc(db, 'products', id), producto)
            console.log('producto actualizado')
            res(producto)
        }catch(error){
            console.log(error)
            rej(error)
        }
    })
}

export function eliminarProducto(id) {
    return new Promise(async (res, rej) => {
        try{
            await deleteDoc(doc(db, 'products', id))
            console.log('Producto elminado')
            res()
        }catch(error){
            console.log(error)
            rej(error)
        }
    })
}