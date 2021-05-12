import axios from 'axios'
import {customLog} from "../helper/log";

const user_module_url = process.env.PROJECT_USER_URL

export default class UserService{
    static async fetchAllUsers(){
        const response = await axios.get(`${user_module_url}/v1/users`)
        return  response.data.data;
    }

    static async createUser({name,email,password}){
        const response = await axios.post(`${user_module_url}/v1/users`,{name,email,password})
        return  response.data.data;
    }
}
