import { Express } from 'express';
import { expRouter } from './exp.router';

export function useExpress(server: Express) {
    server.use('/express', expRouter);
}
