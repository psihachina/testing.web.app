'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        idUser: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        createdAt : {
            allowNull : false,
            type : DataTypes.DATE
        },
        updatedAt : {
            allowNull : false,
            type : DataTypes.DATE
        },
        login : {
            allowNull : true,
            type : DataTypes.STRING
        },
        password : {
            allowNull : false,
            type : DataTypes.STRING
        },
        email : {
            allowNull : false,
            type : DataTypes.STRING
        },
        isAdmin : {
            allowNull : false,
            type : DataTypes.INTEGER
        }
    });
    return User;
}