const {DataTypes} = require('sequelize')
const database = require('../database/connect')


const User = database.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Post = database.define('posts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    content: {type: DataTypes.STRING, allowNull: false},
})

User.hasMany(Post)
Post.belongsTo(User)

module.exports = {
    User, 
    Post
}