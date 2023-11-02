const UserRepository = require('../Repository/userRepository');

class UserService{
    constructor(){
        this.repository = new UserRepository();
    }
    async create(data){
        try {
            const user = await this.repository.create(data);
            return user;
        } catch (error) {
            console.log("at Service",error);
            throw {error};
        }
    }
}
module.exports = UserService;