const UserRepository = require('../Repository/userRepository');
const JWT = require('jsonwebtoken');
const {JWT_KEY} = require('../config/serverConfig');
const bcrypt = require('bcrypt');

class UserService{
    constructor(){
        this.repository = new UserRepository();
    }
    #createToken(user){
        try {
            const Token = JWT.sign(user,JWT_KEY,{expiresIn : '1d'});
            return Token;
        } catch (error) {
            console.log("Error in token Creation");
            throw error;
        }
    }

    verifyToken(Token){
        try {
            const response = JWT.verify(Token,JWT_KEY);
            return response;
        } catch (error) {
            console.log("Error in token validation");
            throw error;
        }
            
    }

    #comparePassword(userInputPlainPassword,hashedPassword){
        try {
            return bcrypt.compareSync(userInputPlainPassword,hashedPassword);
        } catch (error) {
            console.log("Something went wrong in comparing password");
            throw error;
        }

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

    async signIn(email,plainPassword){
        try {
            const user = await this.repository.getByEmail(email);
            const passwordMatch = this.#comparePassword(plainPassword,user.Password);
            if(!passwordMatch) {
                console.log("Password didn't match");
                throw {error : "Invalid Match"};
            }

            const newJwt = this.#createToken({Email : user.Email,id : user.id});
            return newJwt;
        } catch (error) {
            console.log("error at service",error);
            throw error;
        }
    }
    
    async isAuthenticated(Token){
        try {
            const response = this.verifyToken(Token);
            if(!response){
                throw {error : "invalid Token"};
            }
            const user = await this.repository.getById(response.id);
            if(!user){
                throw {error : "user doesn't Exits with this token"};
            }
            return user.id;
        } catch (error) {
            console.log("error at service",error);
            throw error;
        }
    }
}
module.exports = UserService;