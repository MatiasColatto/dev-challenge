const express = require('express');
const router = express.Router();

const utils = require('../utils/functions');
const homeController = require('../controllers/home.controller');


module.exports = app => {
    app.use('/', router); // Path to mount the router
};


router.get('/users', async(req,res)=>{
    const users = await express.user.findMany()
    res.json(users)
});

router.post('/users/post', async(req,res)=>{
    const{password,email} =req.body
    const result = await express.user.create({
        data: {
            password,email
        }
    })
    res.json(result)
});

router.put('/users/:id',async(req,res)=>{
    const {id} = req.params
    const{password,email} =req.body
    const user = await express.user.update({
        where: {id: Number(id)},
        data: {password,email}
    })
    res.json(user)
});

router.patch('/', homeController.get);

router.delete('/users/:id',async(req,res)=>{
    const {id} = req.params
    const user = await express.user.delete({
        where: {id: Number(id)},
    })
    res.json(user)
});