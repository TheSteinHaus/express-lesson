import express from 'express';
import fs from 'fs';

export const UserRouter = express.Router();

//TODO: Возращать данные из какого-нибудь статичного JSON файла или простого JS объекта по ID пользователя и выводить на экран его никнейм.
UserRouter.get('/:id', (req, res) => {
    const users_json = fs.readFileSync('./JSON/users.json');
    const users = JSON.parse(users_json).filter((user) => user.id === req.params.id);
    
    res.send('<h1>User nickname = ' + users[0].nickname + '</h1>');
})
//TODO: Написать запрос на получение всех пользователей
UserRouter.get('/', (req, res) => {
    const users_json = fs.readFileSync('./JSON/users.json');

    const users = JSON.parse(users_json).map(user => {
        return `<div style="background-color: rgba(25, 220, 128, 0.3); padding: 30px; padding-left: 40px; margin: 10px; width: 450px; border-radius: 215px"><h1>${user.name}</h1><h3>${user.nickname}</h3><h2>${user.description}</h2><p>Дата регистрации: ${user.registration.day} * ${user.registration.month} * ${user.registration.year}</p></div>`;
    });

    let all_users = "";

    for (let user of users) {
        all_users += user;
    }

    res.send(all_users);
})