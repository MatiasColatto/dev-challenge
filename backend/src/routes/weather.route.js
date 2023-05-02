const express = require('express');
const router = express.Router();

const utils = require('../utils/functions');
const homeController = require('../controllers/home.controller');


module.exports = app => {
    app.use('/', router); 
};


router.get('/weathers', async(req,res)=>{
    const weather = await express.weather.findMany()
    res.json(weather)
});

router.post('/weathers/post', async(req,res)=>{
    const{icon, temperature, city, country } =req.body
    const result = await express.weather.create({
        data: {
            icon, temperature, city, country
        }
    })
    res.json(result)
});

router.put('/weathers/:userId',async(req,res)=>{
    const {userId} = req.params
    const{icon, temperature, city, country} =req.body
    const weather = await express.weather.update({
        where: {userId: Number(userId)},
        data: {icon, temperature, city, country}
    })
    res.json(weather)
});


router.delete('/weathers/:userId',async(req,res)=>{
    const {userId} = req.params
    const weather = await express.weather.update({
        where: {userId: Number(userId)},
    })
    res.json(weather)
});