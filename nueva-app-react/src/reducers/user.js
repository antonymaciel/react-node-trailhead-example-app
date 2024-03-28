const LOGGED = 'LOGGED';

const initialState = {
  logged: false,
  user: null,
  img: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED:
      return {
        logged: true,
        user: action.payload.user,
        img: action.payload.img,
      };
    default:
      return state;
  }
};

export { userReducer as default };
