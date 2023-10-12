const express = require("express");
const db = require("../../utils/database")

const router = express.Router();


router.get("/presence_master",async (req,res,next)=>{
    let request = db.request();
    const result = await request.query("select * from presence_master");
    res.send({msg:"fetch user successfully", data:result.recordsets});
    // res.send("hello world")
})


module.exports = router
