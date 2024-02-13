const express = require("express")
const {createUser,getIsSeller, getSellers, getIsAdmin,getUsersByRole,deleteUser,getUser,getUsers,updateUser,userRoleUpByAdmin,ApproveUserRoleChange} =require("../../api/authentication/controllers");



const router = express.Router();

router.post('/createUser', createUser);
router.get('/getUsers', getUsers);
router.get('/getUser/:userEmail', getUser);
router.patch('/updateUser/:id',updateUser);
router.patch('/updateRole/:id',userRoleUpByAdmin);
router.patch('/approveRole/:id',ApproveUserRoleChange);
router.delete('/deleteUser/:id',deleteUser);
router.get('/getUsersByRole',getUsersByRole);
router.get('/getIsAdmin/:email',getIsAdmin);
router.get('/getIsSeller/:email',getIsSeller);
router.get('/getSellers', getSellers);


module.exports = router;