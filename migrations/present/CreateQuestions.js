'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Questions', {
            idQuestion: {
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
                type : Sequelize.DATE,  
            },

            textQuestion : {
                allowNull : false,
                type : Sequelize.STRING
            },
            idTest : {
                allowNull : false,
                type : Sequelize.INTEGER
            },
            severalAnswers : {
                allowNull : false,
                type : Sequelize.STRING
            },
            points : {
                allowNull : false,
                type : Sequelize.INTEGER
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Questions');
    }
}