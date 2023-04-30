// TODO: Import dependencies, including bcrypt and sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// TODO: Create a 'Blog' class that extends Model
class Blog extends Model { }

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contents: {
            type: DataTypes.STRING,
          },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },

    },

    {
        sequelize,
        freezeTableName: true,
        modelName: 'blog',
    }
);

// TODO: Export 'Blog'
module.exports = Blog;

