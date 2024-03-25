const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req,res) => {
    const user = await User.findAll()
    return res.json(user)
})

const create = catchError(async (req,res) => {
    console.log(req.body);
    const result = await User.create(req.body)
    return res.json(result);
})

const getOne = catchError(async (req,res) => {
    const {id} = req.params;
    const result = await User.findByPk(id);
    return res.json(result);
})

const destroy = catchError(async (req,res) => {
    const {id} = req.params;
    const result = await User.destroy({where: {id}});
    if(!result) res.sendStatus(404);
    return res.send('user deleted').res.sendStatus(204);
})

const update = catchError(async(req,res) => {
    const {id} = req.params;
    const result = await User.findByPk(id);
    if(!result) return res.sendStatus(404);
    const {firstName} = req.body
    await result.update({firstName});
    return res.json(result);
})

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}