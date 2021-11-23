import { BaseLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../modals/user.js"
import UserService from "../services/userService.js"
import Customer from "../modals/customer.js"
import Employee from "../modals/employee.js"
import CustomerService from "../services/customerService.js"
import EmployeeService from "../services/employeeService.js"
import ErrorService from "../services/errorService.js"

let logger1 = new MongoLogger()
let userService = new UserService(logger1)
let customerService = new CustomerService()
let employeeService = new EmployeeService()
let errorService = new ErrorService()

userService.load();
let customer1 = new Customer(1,"Engin","Demirog","Ankara",36,"7777")


//console.log(customerService.getAll())


//userService.add(customer1)

//console.log(userService.getByEmployeeId(3))
//console.log(userService.getByCustomerId(1))

console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)

