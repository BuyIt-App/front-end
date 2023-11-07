import axios from "axios";

export function signUp(firstName,lastName,emailId,password,phoneNumber){
    const data = {
        emailId: emailId,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
    }
    return axios.post("http://localhost:8081/customer/auth/sign_up", data)
}

export function formatError(errorResponse){
    return errorResponse.response.data;

}