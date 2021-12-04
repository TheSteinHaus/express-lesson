import express from 'express';
import fs from 'fs';
import { FormatPost } from '../index.js';


//TODO: Роут для поиска
export const SearchRouter = express.Router();

//TODO: Написать запрос на поиск среди твиттов (просто по совпадению куска текста)
SearchRouter.get('/:text', (req, res) => {
    const posts_json = fs.readFileSync('./JSON/posts.json');
    const posts = JSON.parse(posts_json).filter((post) => post.text.includes(req.params.text)).map(FormatPost);

    if (posts.length === 0) {
        res.send("<h2>Не найдено совпадений</h2>");
    }
    else 
    {
        let all_posts = "";

        for (let post of posts) {
            all_posts += post;
        }
        
        res.send(all_posts);
    }

})