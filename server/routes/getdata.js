const router = require("express").Router();
const { student } = require("../models/user");
const bcrypt = require("bcrypt");
const { database } =require("../db");
// const { modol} = require("mongoose");

router.post("/",async (req,resp)=>{
    try {
        
        // database.student.find()
        // student.find({firstName:"chinmay"})
        // database.collection('student').find({}).toArray((err,result)=>{
        //     if(err) throw err;
        //     resp.send(result);
        // })
        student.find().then((result)=>{
            resp.send(result)
        }).catch((err)=>{
            console.log(err);
        })
        
    } catch (error) {
        console.log(error);
    }
})
module.exports=router;