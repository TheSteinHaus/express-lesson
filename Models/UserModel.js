import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    id: Number,
    name: String,
    nickname: String,
    description: String,
    registration: {
        year: Number,
        month: String,
        day: Number,
    }
})

export const Users = mongoose.model('Users', UserSchema);