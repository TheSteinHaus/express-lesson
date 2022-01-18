import express from 'express';
import { Users } from '../Models/UserModel.js'

export const UserRouter = express.Router();

//TODO: Возращать данные из какого-нибудь статичного JSON файла или простого JS объекта по ID пользователя и выводить на экран его никнейм.
UserRouter.get('/:id', (req, res) => {
    Users.findOne({ id: req.params.id }, (error, user) => {
        if (error) { res.status(404); res.send('Пользователь не найден') }

        else { 
            if (user != null){
                res.json(user)
                return
            }
            res.status(400)
            res.send('Неправильный ID')
         }
    })
})
//TODO: Написать запрос на получение всех пользователей
UserRouter.get('/', (req, res) => {
    Users.find({}, (error, users) => {
        if (error) { res.status(404); res.send('Пользователи не найдены') }

        else {
            res.send(users)
        }
    })
})