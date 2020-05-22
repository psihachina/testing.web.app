'use strict';
module.exports = (sequelize, DataTypes) => {
    var TestUserAnswer = sequelize.define('TestUserAnswer', {
        idTestUserAnswer: {
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
            type : DataTypes.DATE,  
        },

        idAttempt : {
            allowNull : true,
            type : DataTypes.INTEGER,
            references : {
                model : 'Attempts',
                key : 'idAttempt'
            }
        },
        idQuestion : {
            allowNull : true,
            type : DataTypes.INTEGER,
            references : {
                model : 'Questions',
                key : 'idQuestion'
            }
        },
        idAnswer : {
            allowNull : true,
            type : DataTypes.INTEGER,
            references : {
                model : 'Answers',
                key : 'idAnswer'
            }
        }
    });
    return TestUserAnswer;
}