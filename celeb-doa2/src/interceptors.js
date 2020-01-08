import axios from 'axios';

axios.defaults.baseURL = `https://celeb-death-game.herokuapp.com/api`;

axios.interceptors.request.use(req => {
  const token = localStorage.getItem('token');

  if (token) {
    req.headers.authorization = token;
  }

  return req;
});

axios.interceptors.response.use(
  res => {
    if (res.data && res.data.token) {
      localStorage.setItem('token', res.data.token);
    }

    return res;
  },
  err => err
);
