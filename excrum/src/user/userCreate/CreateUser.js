import Axios from 'axios';

const CreateUser = userInfo => {
  const url = `http://localhost:8000/users`;
  const body = {
    userID: userInfo.userID,
    name: userInfo.name,
    email: userInfo.email,
    password: userInfo.password
  };

  return Axios.post(url, body)
    .then(response => {
      if (response.data.message === 'Success') {
        return {
          Registered: true
        };
      } else {
        return {
          Registered: false
        };
      }
    })
    .catch(error => {
      return Promise.reject(
        new Error('fail to authenticate user: ', error.response)
      );
    });
};

export default CreateUser;
