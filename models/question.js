'use strict';
module.exports = (sequelize, DataTypes) => {
    var Question = sequelize.define('Question', {
        idQuestion: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },

        textQuestion: {
            allowNull: false,
            type: DataTypes.STRING
        },
        idTest: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        severalAnswers: {
            allowNull: false,
            type: DataTypes.STRING
        },
        points: {
            allowNull: false,
            type: DataTypes.INTEGER
        }
    });
return Question;
}