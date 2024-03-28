const API_URL = 'http://localhost:3001'
const LOAD_OPTIONS = 'LOAD_OPTIONS';


const loadOptions = (options) => ({
  type: LOAD_OPTIONS,
  payload: options,
});


export const fetchOptions = () => (dispatch) => {
  const endpoint = "options";
  const url = `${API_URL}/${endpoint}`;
  fetch(url)
  .then(response => {
      return response.json();
    }).then(options => {
      dispatch(loadOptions(options))
  }).catch((err) => {
      console.log(err);
  });
};
