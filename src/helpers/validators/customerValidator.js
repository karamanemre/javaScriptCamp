import CustomerService from "../../services/customerService.js";
import ErrorService from "../../services/errorService.js";
import BaseValidator from "./baseValidator.js";


export default class CustomerValidator extends BaseValidator {

    constructor(){
        super()
        this.errorService = new ErrorService()
    }

    checkCustomerValidity(user){

        let requiredFields = ["id", "firstName" ,"lastName" ,"age", "city"]
        let hasErrors = false

        requiredFields.map(p=> !user[p] ? (hasErrors=true,this.errorService.errors.push(new DataError(`Validation problem ${p} is required`,user))) : hasErrors=false);
        
        return hasErrors;
    }

}