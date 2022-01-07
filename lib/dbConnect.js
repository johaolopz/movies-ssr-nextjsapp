import mongoose from "mongoose"

const URI_MONGO = process.env.URI_MONGO

const conectarDB = async () => {
    try {
        await mongoose.connect(URI_MONGO)
        console.log("mongoDB conectado 🔌")
    } catch (error) {
        console.log(error)
        //ESTO SIRVE EN CASO DE ERROR DE CONEXION SALE DE LA EJECUCIÓN (SALE DEL NPM START)
        process.exit(1)
    }
}

export default conectarDB