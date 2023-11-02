'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    Email: {
      type: DataTypes.STRING,
      allowNull:false,
        unique:true,
        validate:{
          isEmail: true
        }
    },
    Password: {
      type:DataTypes.STRING,
      allowNull:false
    }
  },
  {
    sequelize,
    modelName: 'User',
    hooks : {
      beforeCreate: async function(user) {
        const salt = await bcrypt.genSalt(10); //whatever number you want
        user.Password = await bcrypt.hash(user.Password, salt);
    },
    }
  });
  return User;
};