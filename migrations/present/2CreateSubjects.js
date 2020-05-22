'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Subjects', {
            idSubject: {
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
            subjectName : {
                allowNull : true,
                type : Sequelize.STRING
            },
            subjectUrl : {
                allowNull : true,
                type : Sequelize.STRING
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Subjects');
    }
}