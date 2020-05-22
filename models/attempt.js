'use strict';
module.exports = (sequelize, DataTypes) => {
    var Attempt = sequelize.define('Attempt', {
        idAttempt: {
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

        idUser : {
            allowNull : true,
            type : DataTypes.INTEGER,
            references : {
                model : 'Users',
                key : 'idUser'
            }
        },
        idTest : {
            allowNull : true,
            type : DataTypes.INTEGER,
            references : {
                model : 'Tests',
                key : 'idTest'
            }
        },
        DateStart : {
            allowNull : false,
            type : DataTypes.DATE
        },
        DateFinish : {
            allowNull : false,
            type : DataTypes.DATE
        }
    });
    return Attempt;
}