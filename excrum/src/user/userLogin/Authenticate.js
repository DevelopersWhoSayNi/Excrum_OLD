import Axios from 'axios';

const Authenticate = (username, password) => {
  const url = `http://localhost:8000/users`;
  // const body = {
  //   username: username,
  //   password: password
  // };

  return Axios.get(url)
    .then(() => {
      return {
        Authenticated: true
      };
    })
    .catch(error => {
      return Promise.reject(
        new Error('fail to authenticate user: ', error.response)
      );
    });
};

export default Authenticate;
