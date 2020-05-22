'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('TestsMaterial', {
            id: {
                allowNull : false,
                primaryKey : true,
                type : Sequelize.INTEGER,
                defaultValue : Sequelize.UUIDV4
            },
            createdAt : {
                allowNull : true,
                type : Sequelize.DATE
            },
            updatedAt : {
                allowNull : false,
                type : Sequelize.DATE
            },
            username : {
                allowNull : true,
                type : Sequelize.STRING
            },
            email : {
                allowNull : false,
                type : Sequelize.STRING
            },
            testCategory : {
                allowNull : false,
                type : Sequelize.STRING
            },
            testNumber : {
                allowNull : false,
                type : Sequelize.INTEGER
            },
            testTitle : {
                allowNull : false,
                type : Sequelize.STRING
            },
            basicText : {
                allowNull : false,
                type : Sequelize.STRING
            },
            questionText : {
                allowNull : false,
                type : Sequelize.STRING
            },
            optionsCount: {
                allowNull : false,
                type : Sequelize.INTEGER
            },
            options: {
                allowNull : false,
                type : Sequelize.STRING
            },
            rightOption: {
                allowNull : false,
                type : Sequelize.INTEGER
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('TestsMaterial');
    }
}