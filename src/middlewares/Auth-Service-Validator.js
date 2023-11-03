const ValidateAuthService = (req,res,next) =>{
    if(!req.body.Email || !req.body.Password) {
        return res.status(400).json({
            message: "Missing Adequate data",
            err : "Missing Parameters",
            data :{},
            status:false
        })
    }
    next();
}
module.exports = {
    ValidateAuthService
};