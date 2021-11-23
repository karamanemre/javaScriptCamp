import UserService from "./userService.js";

export default class ErrorService {

    constructor(){
        this.errors=[]
    }

    errorList(){
        return this.errors;
    }
    
}