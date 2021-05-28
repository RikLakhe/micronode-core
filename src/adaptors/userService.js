import axios from 'axios'

const user_module_url = process.env.PROJECT_USER_URL

export default class UserService{
    static async fetchAllUsers(){
        const response = await axios.get(`${user_module_url}/v1/users`)
        return  response.data.data;
    }

    static async fetchUser(id){
        const response = await axios.get(`${user_module_url}/v1/users/`+id)
        return  response.data.data;
    }

    static async createUser({name,email,password}){
        const response = await axios.post(`${user_module_url}/v1/users`,{name,email,password})
        return  response.data.data;
    }

    static async updateUser({id,name,email,password,active}){
        const response = await axios.put(`${user_module_url}/v1/users/`+id,{name,email,password, active})
        return  response.data.data;
    }

    static async deleteUser(id){
        const response = await axios.delete(`${user_module_url}/v1/users/`+id)
        return  response.data.data;
    }
}
