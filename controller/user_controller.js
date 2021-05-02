const {User} = require('../models/tables')

class UserController {
    async createUser(req, res) {
        const {name} = req.body
        const user = await User.create({name})
        res.json(user)
    }
    async getUsers(req, res) {
        const users = await User.findAll()
        res.json(users)
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const user = await User.findOne({where: {id}})
        res.json(user)
    }
    async updateUser(req, res) {
        const {id, name} = req.body
        const new_user = await User.update({name: name}, {where: {id}})
        res.json(new_user)
    }
    async deleteUser(req, res) {
        const id = req.params.id
        const result = await User.destroy({where: {id}})
        res.json(result)
    }
}


module.exports = new UserController()