var jwt = require("jsonwebtoken");
const generateToken = require("../../../utils/generateToken")

const createToken = async (req,res,next)=>{
    const user = req.body;
    const token = generateToken(user);

    res.send({token});
}

module.exports = createToken;