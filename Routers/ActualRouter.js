import express from 'express';
import fs from 'fs';

//TODO: Роут для актуального
export const ActualRouter = express.Router();

//TODO: Написать запрос на получение списка актуального
ActualRouter.get('/', (req, res) => {
    const actual_json = fs.readFileSync('./JSON/actual.json');

    const actuals = JSON.parse(actual_json).map((actual) => {
        return `<div style="background-color: rgba(25, 220, 128, 0.3); padding: 30px; padding-left: 40px; margin: 10px; width: 150px; border-radius: 215px"><i>${actual.theme}</i> <h2>${actual.title}</h2> <p>${actual.tweets} твитов  <br> ${actual.comments} комментариев</p></div>`;
    });

    let all_actuals = "";

    for (let actual of actuals) {
        all_actuals += actual;
    }
    
    // res.render('hello.html');
    res.send(all_actuals);
})