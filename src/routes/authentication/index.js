const express = require("express")
const {createUser,deleteUser,getUser,getUsers,updateUser,userRoleUpByAdmin} =require("../../api/authentication/controllers")

const router = express.Router();

router.post('/createUser', createUser);
router.get('/getUsers', getUsers);
router.get('/getUser/:userEmail', getUser);
router.patch('/updateUser/:id',updateUser);
router.patch('/updateRole/:id',userRoleUpByAdmin);
router.delete('/deleteUser/:id',deleteUser);


module.exports = router;