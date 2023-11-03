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
    async getById(userId){
        try {
            const user = await User.findByPk(userId,{
                attributes : ['Email','id']
            });
            return user;
        } catch (error) {
            console.log("at repo",error);
            throw{error};
        }
    }
    async getByEmail(userEmail){
        try {
            const user = await User.findOne({
                where:{
                    Email : userEmail
                }
            });
            return user;
        } catch (error) {
            console.log("at repo",error);
            throw{error};
        }
    }
}
module.exports = UserRepository;