const LOAD_TRIALS = 'LOAD_TRIALS';
const ADD_TRIAL = 'ADD_TRIAL';
const EDIT_TRIAL = 'EDIT_TRIAL';

const initialState = []

const trailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRIALS:
      return action.payload;
    case ADD_TRIAL:
      return [ ...state,  action.payload ];
    case EDIT_TRIAL:
      const newState = [ ...state];
      newState[ state.length -1 ] = action.payload;
      return newState;
    default:
      return state;
  }
};

export { trailsReducer as default };
