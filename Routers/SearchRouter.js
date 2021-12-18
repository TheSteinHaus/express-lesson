import express from 'express';
import { Posts } from '../Models/PostsModel.js';


//TODO: Роут для поиска
export const SearchRouter = express.Router();

const postStyle = '<body style="display: flex; flex-direction: column; align-items: center;"><div style="background-color: rgba(25, 220, 128, 0.3); padding: 50px; padding-left: 70px; margin: 10px; width: 700px; border-radius: 215px">'

//TODO: Написать запрос на поиск среди твиттов (просто по совпадению куска текста)
SearchRouter.get('/', (req, res) => {
    Posts.find({}, (error, posts) => {
        if (error) { res.send('Посты не найдены') }

        else {
            const postsArray = posts.filter((post) => post.text.includes(req.query.text)).map((post) => {
                const text = postStyle + `<h1>${post.name}<h3>${post.nickname}</h3></h1> <i>${post.date}</i> <p style="font-size: 20px;">${post.text}</p> <p>${post.likes} лайков - ${post.comments} комментариев - ${post.retweets} ретвитов</p></div></body>`
                return text
            })

            if (postsArray.length === 0) { res.send('Посты не найдены') }

            else {
                let allPosts = ''
                for (let post of postsArray) {
                    allPosts += post
                }

                res.send(allPosts)
            }
        }
    })
})