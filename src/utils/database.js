import mongoose from "mongoose";

const URI = 'mongodb+srv://101086:iuON6Om4tbl8rtxO@cluster0.vr4ufas.mongodb.net/'

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set("strictQuery", false)
        global.mongoose = await mongoose.connect(URI)
        .then(()=>console.log('connected to mongodb'))
        .catch(e=>console.log(e));
    }
}

export default databaseConnection