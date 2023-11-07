import { signUp } from "../../Services/AuthService";
import { formatError } from "../../Services/AuthService";

export const SIGNUP_SUCCESS_ACTION = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR_ACTION = "SIGNUP_ERROR";

export function signupAction(firstName,lastName,emailId,password,phoneNumber){
    return (dispatch) => {
        signUp(firstName,lastName,emailId,password,phoneNumber).then(response => {
            console.log(response);
            dispatch(signupSuccess(response.data))
        }).catch((error) => {
                const message = formatError(error);
                dispatch(signupError(message));
            });

    }
}

export function signupSuccess(payload){
    return {
        type: SIGNUP_SUCCESS_ACTION,
        payload,
    }
}

const signupError = (message) => ({
    type: SIGNUP_ERROR_ACTION,
    payload: message,
});