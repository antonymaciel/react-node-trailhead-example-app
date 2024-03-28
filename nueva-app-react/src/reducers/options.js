const LOAD_OPTIONS = 'LOAD_OPTIONS';

const initialState = []

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_OPTIONS:
      return action.payload;
    default:
      return state;
  }
};


export { optionsReducer as default };
