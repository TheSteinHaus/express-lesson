import express from 'express';
import fs from 'fs';
import { FormatPost } from '../index.js';

//Для чтения тела POST запроса
const urlencodedParser = express.urlencoded({ extended: false });

//TODO: Написать роут для твиттов (напр. /post)
export const PostRouter = express.Router();

//TODO: Написать запрос для получения всех твиттов (пока можно хранить ввиде JSON файла или JS объекта)
PostRouter.get('/', (req, res) => {
    const posts_json = fs.readFileSync('./JSON/posts.json');
    const posts = JSON.parse(posts_json).map(FormatPost);
    let all_posts = "";

    for (let post of posts) {
        all_posts += post;
    }
    
    res.send(all_posts);
})
//TODO: Написать запрос для получения твитта по его ID
PostRouter.get('/:id', (req, res) => {
    const posts_json = fs.readFileSync('./JSON/posts.json');
    const posts = JSON.parse(posts_json).filter((post) => post.id === req.params.id);

    res.send(FormatPost(posts[0]));
})
//TODO: Написать POST запрос для отправки твитта (пока никуда записывать его не надо, нужно просто вернуть отправвленные данные назад)
PostRouter.post('/', urlencodedParser, (req, res) => {
    const name = req.body.name;
    const responseMessage = "Post " + name + "!";
    
    res.send(responseMessage);
})