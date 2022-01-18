import express from 'express';
import { Actuals } from '../Models/ActualModel.js';

//TODO: Роут для актуального
export const ActualRouter = express.Router();

//TODO: Написать запрос на получение списка актуального
ActualRouter.get('/', (req, res) => {
    Actuals.find({}, (error, actuals) => {
        if (error) { res.status(404); res.send('Актуальные темы не найдены') }

        else {
            res.json(actuals)
        }
    })
})