import UserService from "#root/adaptors/userService";

const usersResolver = async () =>{
    return await UserService.fetchAllUsers();
}

export default usersResolver