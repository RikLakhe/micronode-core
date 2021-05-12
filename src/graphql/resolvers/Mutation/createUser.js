import UserService from "../../../adaptors/userService";

const createUserResolver = async (obj, {name,email,password}) =>{
    return await UserService.createUser({name,email,password});
}

export default createUserResolver;
