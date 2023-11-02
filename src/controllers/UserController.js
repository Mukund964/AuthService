const UserService = require('../Services/UserService');
const {successCodes} = require('../utils/errorCodes');

const userService = new UserService();

const create = async (req,res) =>{
    try {
        console.log(req.body);
        const user = await userService.create(req.body);
        res.status(successCodes.CREATED).json({
            data : user,
            message: "user created successfully",
            success : true,
            err : {}
        })
    } catch (error) {
        console.log("at controller",error);
        res.status(500).json({
            data : {},
            message: "not created succesfully",
            success : false,
            err : {error}
        })
    }
}

module.exports = {
    create
}