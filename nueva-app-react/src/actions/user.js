const API_URL = 'http://localhost:3001'
const LOGGED = 'LOGGED';


const loginAction = (user) => ({
  type: LOGGED,
  payload: user,
});


export const login = (user, pass) => (dispatch) => {
  const endpoint = "login";
  const url = `${API_URL}/${endpoint}`;
  const requestData = {
    method: 'post',
    body: { user, pass },
  };
  fetch(url, requestData)
  .then(response => {
      return response.json();
    }).then(user => {
      dispatch(loginAction(user))
  }).catch((err) => {
      console.log(err);
  });
};
