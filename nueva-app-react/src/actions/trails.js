const API_URL = 'http://localhost:3001'
const LOAD_TRIALS = 'LOAD_TRIALS';
const ADD_TRIAL = 'ADD_TRIAL';
const EDIT_TRIAL = 'EDIT_TRIAL';


const loadTrials = (trials) => ({
  type: LOAD_TRIALS,
  payload: trials,
});


const addTrials = (newTrail) => ({
  type: ADD_TRIAL,
  payload: newTrail,
});

const editTrailAction = (trail) => ({
  type: EDIT_TRIAL,
  payload: trail,
});

export const fetchTrails = () => (dispatch) => {
  const endpoint = "trails";
  const url = `${API_URL}/${endpoint}`;
  fetch(url)
  .then(response => {
      return response.json();
    }).then(trails => {
      dispatch(loadTrials(trails))
  }).catch((err) => {
      console.log(err);
  });
};

export const addTrail = newTrail => (dispatch) => {
  dispatch(addTrials(newTrail))
}

export const editTrail = trail => (dispatch) => {
  dispatch(editTrailAction(trail))
}
