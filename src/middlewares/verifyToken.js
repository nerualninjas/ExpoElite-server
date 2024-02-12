var jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req,res,next)=>{
    if(!req.headers.authrization){
        return res.status(401).send({message: "unauthorized access"});
    }
    const token = req.headers.authrization.split(" ")[1];
    console.log(token);

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,decoded)=>{
        if(err){
            return res.status(401).send({message: "unauthorized access"});
        }
        req.decoded =decoded;
        next();
    });
}


module.exports = verifyToken;