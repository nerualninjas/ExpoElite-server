var jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req,res,next)=>{

    console.log("verify token gen",req.headers.authorization);
    if(!req.headers.authorization){
        return res.status(401).send({message: "unauthorized access by verify token"});
    }
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token);

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,decoded)=>{
        if(err){
            return res.status(401).send({message: "unauthorized access"});
        }
        req.decoded =decoded;
        next();
    });
}


module.exports = verifyToken;