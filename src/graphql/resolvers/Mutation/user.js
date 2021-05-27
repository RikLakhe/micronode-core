import UserService from "../../../adaptors/userService";

export const createUser = async (obj, {name,email,password}) =>{
    return await UserService.createUser({name,email,password});
}

export const updateUser = async (obj, {id, name,email,password, active}) =>{
    return await UserService.updateUser({id, name,email,password, active});
}

export const deleteUser = async (obj, {id}) =>{
    return await UserService.deleteUser(id);
}
