const express = require("express")

const {createToken,updateMemberShip,createUser,getIsSeller, getSellers, getIsAdmin,getUsersByRole,deleteUser,getUser,getUsers,updateUser,userRoleUpByAdmin,ApproveUserRoleChange, getAIndiviUser} =require("../../api/authentication/controllers");
const verifyToken = require("../../middlewares/verifyToken");



const router = express.Router();

router.post('/createUser', createUser);
router.post('/jwt', createToken);
router.get('/getUsers', verifyToken, getUsers);
router.get('/getUser/:userEmail',verifyToken, getUser);
router.get('/getAnUser/:userEmail', getAIndiviUser);
router.get('/getUsersByRole',getUsersByRole);
router.get('/getIsAdmin/:email',verifyToken,getIsAdmin);
router.get('/getIsSeller/:email',getIsSeller);
router.get('/getSellers', getSellers);
router.patch('/updateUser/:id',updateUser);
router.patch('/updateRole/:id',userRoleUpByAdmin);
router.patch('/approveRole/:id',ApproveUserRoleChange);
router.patch("/updateMemberShip/:email",  updateMemberShip);
router.delete('/deleteUser/:id',deleteUser);




module.exports = router;