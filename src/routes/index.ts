import { Router } from 'express';
import githubRouter from './github.routes';

const routes = Router();

routes.use('/github', githubRouter);

export default routes;
