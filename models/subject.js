'use strict';
module.exports = (sequelize, DataTypes) => {
    var Subject = sequelize.define('Subject', {
        idSubject: {
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
        subjectName : {
            allowNull : true,
            type : DataTypes.STRING
        },
        subjectUrl : {
            allowNull : true,
            type : DataTypes.STRING
        }
    });
    return Subject;
}