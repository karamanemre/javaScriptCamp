import { users } from "../data/users.js"
import DataError from "../modals/dataError.js"
import CustomerService from "./customerService.js"
import EmployeeService from "./employeeService.js"

export default class UserService {

    constructor(loggerService){
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

   
    load(){
       let cstr = users.filter(c=> c.type == "customer");
       let empl = users.filter(e=> e.type == "employee");
       this.errors.push(new DataError("Wrong user type",...users.filter(e=>e.type!=="customer" && e.type!=="employee")));
       
       cstr.map(c=> (this.checkCustomerValidity(c) && this.isNumberNan(c)) == false ? this.customers.push(c) : console.log("Doğrulama Başarısız"))
       empl.map(e=> (this.checkEmployeeValidityForErrors(e) || this.isNumberNan(e)) == false ? this.employees.push(e) : console.log("Doğrulama Başarısız"))
    }

    checkCustomerValidity(user){

        let requiredFields = ["id", "firstName" ,"lastName" ,"age", "city"]
        let hasErrors = false

        requiredFields.map(p=> !user[p] ? (hasErrors=true,this.errors.push(new DataError(`Validation problem ${p} is required`,user))) : hasErrors=false);
        
        return hasErrors;
    }

    checkEmployeeValidityForErrors(user){

        let requiredFields = ["id", "firstName" ,"lastName" ,"age", "city","salary"]
        let hasErrors = false

        requiredFields.map(p=> !user[p] ? (hasErrors=true,this.errors.push(new DataError(`Validation problem ${p} is required`,user))) : hasErrors=false);

        return hasErrors;
    }

    isNumberNan(user){

        let hasErrors = false

        if (Number.isNaN(Number.parseInt(user.age))) {
            hasErrors=true
            this.errors.push(new DataError(`Validation problem ${user.age} is not a number`,user))
        }

        return hasErrors;
    }


    add(user){
        user.type === "customer" ? this.checkCustomerValidity(user) == false ? (this.customers.push(user), this.loggerService.log(user)) : null : null
        user.type === "employee" ? this.checkEmployeeValidityForErrors(user) == false ? (this.employees.push(user),this.loggerService.log(user)) : null : null
    }

   

}