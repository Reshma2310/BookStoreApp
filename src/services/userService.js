import axios from "axios";

export const login = (loginObj) => {
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login", loginObj)
    console.log("Login in process")
    return response
}

export const signup = (signupObject) => {
    let result = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration", signupObject)
    return result
    console.log("Signup in process")    
}