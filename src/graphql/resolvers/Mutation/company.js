import CompanyService from "../../../adaptors/companyService";

export const createCompany = async (obj, {code,email,name}) =>{
    return await CompanyService.createCompany({code,email,name});
}

export const updateCompany = async (obj, {id, code,email,name, active}) =>{
    return await CompanyService.updateCompany({id, code,email,name, active});
}

export const deleteCompany = async (obj, {id}) =>{
    return await CompanyService.deleteCompany(id);
}
