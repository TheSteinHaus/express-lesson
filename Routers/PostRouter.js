import express from 'express';
import { Posts } from '../Models/PostsModel.js';

//Для чтения тела POST запроса
const urlencodedParser = express.urlencoded({ extended: false });

//TODO: Написать роут для твиттов (напр. /post)
export const PostRouter = express.Router();

const postStyle = '<body style="display: flex; flex-direction: column; align-items: center;"><div style="background-color: rgba(25, 220, 128, 0.3); padding: 50px; padding-left: 70px; margin: 10px; width: 700px; border-radius: 215px">'


//TODO: Написать запрос для получения всех твиттов (пока можно хранить ввиде JSON файла или JS объекта)
PostRouter.get('/', (req, res) => {
    Posts.find({}, (error, posts) => {
        if (error) { res.status(404); res.send("Посты не найдены") }

        else {
            res.json(posts)
            
        }
    })
})
//TODO: Написать запрос для получения твитта по его ID
PostRouter.get('/:id', (req, res) => {
    Posts.findOne({ id: req.params.id }, (error, post) => {
        if (error) { res.status(404); res.send('Пост не найден') }
        else { 
            if (post != null){
                res.json(post)
                return
            }
            res.status(400)
            res.send('Неправильный номер')
         }
    })
})
//TODO: Написать POST запрос для отправки твитта (пока никуда записывать его не надо, нужно просто вернуть отправвленные данные назад)
PostRouter.post('/', urlencodedParser, (req, res) => {
    const Post = Posts ({
        date: req.body.date,
        name: req.body.name,
        nickname: req.body.nickname,
        text: req.body.text
    })

    Post.save()
    res.json(Post)
})