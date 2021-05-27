import UserService from "#root/adaptors/userService";

export const users = async () =>{
    return await UserService.fetchAllUsers();
}

export const findUser = async (obj, {id}) =>{
    return await UserService.fetchUser(id);
}