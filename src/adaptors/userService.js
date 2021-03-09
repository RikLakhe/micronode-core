import axios from 'axios'

const user_module_url = process.env.PROJECT_USER_URL

export default class UserService{
    static async fetchAllUsers(){
        const response = await axios.get(`${user_module_url}/v1/users`)
        console.log('body', response.data.response)
        return  response.data.response;
    }
}