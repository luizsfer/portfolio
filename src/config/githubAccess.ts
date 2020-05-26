import axios from 'axios';

const apiGithub = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json',
  headers: {
    Authorization: process.env.GITHUB_PERSONAL_TOKEN,
  },
});

export default apiGithub;
