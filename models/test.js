'use strict';
module.exports = (sequelize, DataTypes) => {
    var Test = sequelize.define('Test', {
        idTest: {
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
            type : DataTypes.DATE
        },
        testName : {
            allowNull : true,
            type : DataTypes.STRING
        },
        idSubject : {
            allowNull : false,
            type : DataTypes.INTEGER,
            references : {
                model :  'Subjects',
                key : 'idSubject'
            }
        },
        testUrl : {
            allowNull : false,
            type : DataTypes.STRING
        }
    });
    return Test;
}