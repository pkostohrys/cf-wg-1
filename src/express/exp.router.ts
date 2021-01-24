import { Router } from 'express';

const expRouter = Router();

expRouter.get('/test', (req, res) => res.send('ok'));

export { expRouter };
