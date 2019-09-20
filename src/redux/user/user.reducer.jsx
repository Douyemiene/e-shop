import { userActionTypes } from "./user.types";
const INITIAL_STATE = {
  currentUser: null
};
//state gets assigned to the default parameter anytime it is not defined
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
export default userReducer;