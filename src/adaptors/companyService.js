import axios from 'axios'

const company_module_url = process.env.PROJECT_COMPANY_URL

export default class CompanyService{
    static async fetchAllCompany(){
        const response = await axios.get(`${company_module_url}/v1/company`)
        return  response.data.data;
    }

    static async fetchCompany(id){
        const response = await axios.get(`${company_module_url}/v1/company/`+id)
        return  response.data.data;
    }

    static async createCompany({code,email,name}){
        const response = await axios.post(`${company_module_url}/v1/company`,{code,email,name})
        return  response.data.data;
    }

    static async updateCompany({id,code,email,name,active}){
        const response = await axios.put(`${company_module_url}/v1/company/`+id,{code,email,name, active})
        return  response.data.data;
    }

    static async deleteCompany(id){
        const response = await axios.delete(`${company_module_url}/v1/company/`+id)
        return  response.data.data;
    }
}
