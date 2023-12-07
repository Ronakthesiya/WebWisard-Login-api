const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const users = require('./loginSchema')

const DB = 'mongodb+srv://Ronak:GMAMR@cluster0.jxxzuw1.mongodb.net/first?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useNewUrlParser : true,
}).then(()=>{
    console.log('Connectoin Succ');
    
    const app = express();

    app.use(express.json());
    app.use(bodyParser.urlencoded({extended:false}))

    app.get('/',async(req,res)=>{
        const user = await users.find();
        console.log("get");
        res.send(user);
    })

    app.post('/',async(req,res)=>{
        const user = new users({
            userName : req.body.userName,
            userPassword : req.body.userPassword
        });
        await user.save();
        res.send(user);
    })

    app.listen(3000,()=>{
        console.log("server Started");
    });
}).catch((err)=>console.log('Not connect'));

