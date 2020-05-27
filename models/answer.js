'use strict';
module.exports = (sequelize, DataTypes) => {
    var Answer = sequelize.define('Answer', {
        idAnswer: {
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

        textAnswer : {
            allowNull : false,
            type : DataTypes.STRING
        },
        currentAnswer : {
            allowNull : false,
            type : DataTypes.INTEGER
        },
        idQuestion : {
            allowNull : true,
            type : DataTypes.INTEGER,
            references : {
                model : 'Questions',
                key : 'idQuestion'
                
            }
        }
    });
    return Answer;
}