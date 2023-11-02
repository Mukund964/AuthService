const {User} = require('../models/index');

class UserRepository{
    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("at repo",error);
            throw{error};
        }
    }
}
module.exports = UserRepository;