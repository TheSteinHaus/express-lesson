import express from 'express';
import { HomeRouter } from './Routers/HomeRouter.js';
import { UserRouter } from './Routers/UserRouter.js';
import { PostRouter } from './Routers/PostRouter.js';
import { ActualRouter } from './Routers/ActualRouter.js';
import { SearchRouter } from './Routers/SearchRouter.js';

const app = express();
app.use(express.json());
// app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);

const PORT = '8000';

app.use('/', HomeRouter);
app.use('/user', UserRouter);
app.use('/post', PostRouter);
app.use('/actual', ActualRouter);
app.use('/search', SearchRouter);

export function FormatPost(post) {
    return `<body style="display: flex; flex-direction: column; align-items: center;"><div style="background-color: rgba(25, 220, 128, 0.3); padding: 50px; padding-left: 70px; margin: 10px; width: 700px; border-radius: 215px"><h1>${post.name}<h3>${post.nickname}</h3></h1> <i>${post.date}</i> <p style="font-size: 20px;">${post.text}</p> <p>${post.likes} лайков - ${post.comments} комментариев - ${post.retweets} ретвитов</p></div></body>`
}

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})