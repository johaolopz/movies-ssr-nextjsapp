import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        //Para requerir el titulo obligatoriamente
        require: [true, "Titulo requerido"]
    },
    plot: {
        type: String,
        require: [true, "Descripcion requerida"]
    }
})

//Para que lea el caché del modelo si ya ha sido consultado por primera vez
export default mongoose.models.Movie || mongoose.model('Movie', MovieSchema)