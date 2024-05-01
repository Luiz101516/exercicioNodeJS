import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    cpf: { type: String, required: true },
    rg: { type: String, required: true }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
