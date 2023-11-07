import { SIGNUP_SUCCESS_ACTION, SIGNUP_ERROR_ACTION } from "../AuthAction";

const initialState = {
    auth: {
      access_token: "",
      message: "",
      refresh_token: "",
      role: "",
    },
    errorMsg: "",
  };
  
export function AuthReducers(state = initialState, action){

    if(action.type === SIGNUP_SUCCESS_ACTION){
        return {
            ...state,
            auth: action.payload
        }
    }

    if(action.type === SIGNUP_ERROR_ACTION){
        return {
            ...state,
            error: action.payload
        }
    }

    return state;
}