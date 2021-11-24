import { users } from "../data/users.js";
import CustomerValidator from "../helpers/validators/customerValidator.js";
import DataError from "../modals/dataError.js";
import ErrorService from "./errorService.js";
import UserService from "./userService.js";

export default class CustomerService {

    constructor(){
        this.customers = []
        this.errorService = new ErrorService()
        this.userService = new UserService()
        this.customerValidator = new CustomerValidator()
    }

   
    load(){
        let cstr = users.filter(c=> c.type == "customer")
        this.errorService.errors.push(new DataError("Wrong user type",...users.filter(e=>e.type!=="customer" && e.type!=="employee")));
        cstr.map(c=> (this.customerValidator.checkCustomerValidity(c) && this.userService.isNumberNan(c) ) == false ? this.customers.push(c) : null)
     }
   
    getByCustomerId(id){
        return this.userService.customers.filter(p=>p.id==id);
    } 

    getAll(){
        return this.userService.customers
    }

    getCustomersSorted(){
        return this.userService.customers.sort((customer1,customer2)=>{
            
            if (customer1.firstName>customer2.firstName) {
                return -1;
            }
            else if(customer1.firstName===customer2.firstName){
                return 0;
            }
            else{
                return 1;
            }
        })
    }

}