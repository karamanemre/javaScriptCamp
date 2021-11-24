import { users } from "../data/users.js";
import UserService from "./userService.js";

export default class EmployeeService {

    constructor(){
        this.userService = new UserService()
    }
    
    employeeList(){
        return this.userService.employees
    }

    getByEmployeeId(id){
        return this.userService.employees.find(u=>u.id == id)
    } 

}