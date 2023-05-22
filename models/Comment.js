// TODO: Import dependencies, including bcrypt and sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// TODO: Create a 'Comment' class that extends Model
class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        blogPost_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blogPost',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'comment',
    }
);

// TODO: Export 'Comment'
module.exports = Comment;