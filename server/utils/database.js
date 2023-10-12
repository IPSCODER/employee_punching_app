require("dotenv").config();
const sql = require("mssql")

const config = {
    user:process.env.USER,
    password:process.env.PASSWORD,
    server:process.env.SERVER,
    database:process.env.DATABASE,
    options:{
        encrypt:false,
    },
};

 const db =sql.connect(config,function (err){
    if (err) throw err
    console.log("database connected");
});


module.exports = db