import { Router } from 'express';
import githubAccess from '../config/githubAccess';

const githubRouter = Router();

interface Repo {
  language: string;
}

githubRouter.get('/user', async (request, response) => {
  try {
    const githubUser = await githubAccess.get('/user');
    return response.json(githubUser.data);
  } catch (err) {
    return response.json(err);
  }
});

githubRouter.get('/repos', async (request, response) => {
  try {
    const githubRepos = await githubAccess.get('/user/repos', {
      params: {
        visibility: 'public',
        affiliation: 'owner',
      },
    });
    console.log(
      githubRepos.data.map((repo: Repo) => {
        return repo.language;
      }),
    );
    return response.json(githubRepos.data);
  } catch (err) {
    return response.json(err);
  }
});

export default githubRouter;
