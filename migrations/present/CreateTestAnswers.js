'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Answers', {
            idAnswer: {
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

            textAnswer : {
                allowNull : false,
                type : Sequelize.STRING
            },
            currentAnswer : {
                allowNull : false,
                type : Sequelize.INTEGER
            },
            idQuestion : {
                allowNull : true,
                type : Sequelize.INTEGER,
                references : {
                    model : {
                        tableName: 'Questions',
                        schema: 'public'
                    },
                    key : 'idQuestion'
                }
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Answers');
    }
}