import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    id: Number,
    name: String,
    nickname: String,
    text: String,
    date: String,
    likes: Number,
    comments: Number,
    retweets: Number,
})

export const Posts = mongoose.model('Posts', PostSchema);