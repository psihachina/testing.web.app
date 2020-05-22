'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            idUser: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            createdAt : {
                allowNull : false,
                type : Sequelize.DATE
            },
            updatedAt : {
                allowNull : false,
                type : Sequelize.DATE
            },
            login : {
                allowNull : true,
                type : Sequelize.STRING
            },
            password : {
                allowNull : false,
                type : Sequelize.STRING
            },
            email : {
                allowNull : false,
                type : Sequelize.STRING
            },
            isAdmin : {
                allowNull : false,
                type : Sequelize.INTEGER
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
}