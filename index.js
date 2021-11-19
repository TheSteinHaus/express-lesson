import express from 'express';

const app = express();

//Для чтения тела POST запроса
const urlencodedParser = express.urlencoded({extended: false});
const port = '8000';

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', urlencodedParser, (req, res) => {
    const name = req.body.name;
    const responseMessage = "Hello " + name + "!"
    res.send(responseMessage)
})

const userRouter = express.Router();
app.use('/user', userRouter);

//TODO: Возращать данные из какого-нибудь статичного JSON файла или простого JS объекта по ID пользователя и выводить на экран его никнейм.
userRouter.get('/:id', (req, res) => {
    res.send('User id = ' + req.params.id);
})

//TODO: Написать запрос на получение всех пользователей

//TODO: Написать роут для твиттов (напр. /post)
//TODO: Написать запрос для получения всех твиттов (пока можно хранить ввиде JSON файла или JS объекта)
//TODO: Написать запрос для получения твитта по его ID
//TODO: Написать POST запрос для отправки твитта (пока никуда записывать его не надо, нужно просто вернуть отправвленные данные назад)

//TODO: Роут для актуального
//TODO: Написать запрос на получение списка актуального

//TODO: Роут для поиска
//TODO: Написать запрос на поиск среди твиттов (просто по совпадению куска текста)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})