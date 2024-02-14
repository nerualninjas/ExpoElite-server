const express = require("express")

const {createToken,createUser,getIsSeller, getSellers, getIsAdmin,getUsersByRole,deleteUser,getUser,getUsers,updateUser,userRoleUpByAdmin,ApproveUserRoleChange} =require("../../api/authentication/controllers");
const verifyToken = require("../../middlewares/verifyToken");



const router = express.Router();

router.post('/createUser', createUser);
router.get('/getUsers', verifyToken, getUsers);
router.get('/getUser/:userEmail',verifyToken, getUser);
router.patch('/updateUser/:id',updateUser);
router.patch('/updateRole/:id',userRoleUpByAdmin);
router.patch('/approveRole/:id',ApproveUserRoleChange);
router.delete('/deleteUser/:id',deleteUser);
router.get('/getUsersByRole',getUsersByRole);
router.get('/getIsAdmin/:email',verifyToken,getIsAdmin);
router.get('/getIsSeller/:email',getIsSeller);
router.get('/getSellers', getSellers);
router.post('/jwt', createToken);


module.exports = router;