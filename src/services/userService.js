import { users } from "../data/users.js"
import BaseValidator from "../helpers/validators/baseValidator.js";
import DataError from "../modals/dataError.js"
import CustomerService from "./customerService.js"
import EmployeeService from "./employeeService.js"
import ErrorService from "./errorService.js";

export default class UserService {

    constructor(){
        this.customerService = new CustomerService();
        this.employeeService = new EmployeeService();
        this.baseValidator = new BaseValidator();
        this.errorService = new ErrorService();
        
    }

    load(){
       let cstr = users.filter(c=> c.type == "customer");
       let empl = users.filter(e=> e.type == "employee");

       this.errors.push(new DataError("Wrong user type",...users.filter(e=>e.type!=="customer" && e.type!=="employee")));

       cstr.map(c=> (this.customerService.customerValidator.checkCustomerValidity,(c) && this.baseValidator.isNumberNan(c)) == false ? this.customers.push(c) : console.log("Doğrulama Başarısız"))
       empl.map(e=> (this.employeeService.employeeValidator.checkEmployeeValidityForErrors(e) || this.baseValidator.isNumberNan(e)) == false ? this.employees.push(e) : console.log("Doğrulama Başarısız")) 
    }

    add(user){
        user.type === "customer" ? this.customerService.customerValidator.checkCustomerValidity(user) == false ? (this.customerService.customers.push(user), this.loggerService.log(user)) : null : null
        user.type === "employee" ? this.employeeService.employeeValidator.checkEmployeeValidityForErrors(user) == false ? (this.employeeService.employees.push(user),this.loggerService.log(user)) : null : null
    }

}