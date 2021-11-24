import { users } from "../data/users.js";
import DataError from "../modals/dataError.js";
import ErrorService from "./errorService.js";
import UserService from "./userService.js";

export default class CustomerService {

    constructor(){
       this.userService = new UserService()
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