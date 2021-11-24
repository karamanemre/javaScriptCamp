import ErrorService from "../../services/errorService.js";

export default class BaseValidator {

    constructor(){
        this.errorService = new ErrorService()
    }
    
    isNumberNan(user){
        let hasErrors = false
        fitr => Number.isNaN(Number.parseInt(user.age)) ? (hasErrors=true,this.errorService.errors.push(new DataError(`Validation problem ${user.age} is not a number`,user))):null
        return hasErrors;
    }

}