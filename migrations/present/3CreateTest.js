'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Tests', {
            idTest: {
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
            testName : {
                allowNull : true,
                type : Sequelize.STRING
            },
            idSubject : {
                allowNull : false,
                type : Sequelize.INTEGER,
                references : {
                    model : {
                        tableName: 'Subjects',
                        schema: 'public'
                    },
                    key : 'idSubject'
                }
            },
            testUrl : {
                allowNull : false,
                type : Sequelize.STRING
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Tests');
    }
}