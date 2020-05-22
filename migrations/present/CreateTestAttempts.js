'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Attempts', {
            idAttempt: {
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

            idUser : {
                allowNull : true,
                type : Sequelize.INTEGER,
                references : {
                    model : {
                        tableName: 'Users',
                        schema: 'public'
                    },
                    key : 'idUser'
                }
            },
            idTest : {
                allowNull : true,
                type : Sequelize.INTEGER,
                references : {
                    model : {
                        tableName: 'Tests',
                        schema: 'public'
                    },
                    key : 'idTest'
                }
            },
            DateStart : {
                allowNull : false,
                type : Sequelize.DATE
            },
            DateFinish : {
                allowNull : false,
                type : Sequelize.DATE
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('TestAttempts');
    }
}