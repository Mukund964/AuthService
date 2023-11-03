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

const signIn = async(req,res) =>{
    try {
        const response = await userService.signIn(req.body.Email,req.body.Password);
        return res.status(400).json({
            message : "Succesfully signed In",
            err : {},
            data : response,
            success : true
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

const isAuthenticated = async (req,res)=>{
    try {
        const Token = req.headers['x-access-token'];
        const user = await userService.isAuthenticated(Token);
        return res.status(200).json({
            data : user,
            status : true,
            message : "User is Authenticated",
            err: {}
        });
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
    create,
    signIn,
    isAuthenticated
}