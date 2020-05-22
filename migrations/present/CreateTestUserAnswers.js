'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('TestUserAnswers', {
            idTestUserAnswer: {
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

            idAttempt : {
                allowNull : true,
                type : Sequelize.INTEGER,
                references : {
                    model : {
                        tableName: 'Attempts',
                        schema: 'public'
                    },
                    key : 'idAttempt'
                }
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
            },
            idAnswer : {
                allowNull : true,
                type : Sequelize.INTEGER,
                references : {
                    model : {
                        tableName: 'Answers',
                        schema: 'public'
                    },
                    key : 'idAnswer'
                }
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('TestUserAnswers');
    }
}