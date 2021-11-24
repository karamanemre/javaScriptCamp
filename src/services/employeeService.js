import { users } from "../data/users.js";
import UserService from "./userService.js";

export default class EmployeeService {

    constructor(){
        this.employees=[]
        this.userService = new UserService()
    }
    
    employeeList(){
        return this.employees
    }


}