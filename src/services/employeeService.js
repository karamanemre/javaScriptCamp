import { users } from "../data/users.js";
import EmployeeValidator from "../helpers/validators/employeeValidator";
import UserService from "./userService.js";

export default class EmployeeService {

    constructor(){
        this.employees=[]
        this.userService = new UserService()
        this.employeeValidator = new EmployeeValidator()
    }
    
    employeeList(){
        return this.employees
    }


}