import companyService from "#root/adaptors/companyService";

export const company = async () =>{
    return await companyService.fetchAllCompany();
}

export const findCompany = async (obj, {id}) =>{
    return await companyService.fetchCompany(id);
}