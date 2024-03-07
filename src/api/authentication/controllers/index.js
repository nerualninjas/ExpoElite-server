const createUser = require('./createUser');
const  createToken = require('./createToken');
const  getUsers = require('./getUsers');
const  getIsSeller = require('./getIsSeller');
const  getUser = require('./getUser');
const  deleteUser = require('./deleteUser');
const  getUsersByRole = require('./getUsersByRole');
const  getIsAdmin = require('./getIsAdmin');
const  getSellers = require('./getSellers');
const  getAIndiviUser = require('./getAIndiviUser');

const ApproveUserRoleChange=require('./ApproveUserRoleChange');
const  userRoleUpByAdmin = require('./userRoleChange');
const  updateUser = require('./updateUser');
const  updateMemberShip = require('./updateMemberShip');


module.exports ={createToken,updateMemberShip,createUser,getIsSeller, getSellers,getUsersByRole,getIsAdmin ,deleteUser,getUser, getUsers,updateUser,userRoleUpByAdmin,ApproveUserRoleChange,getAIndiviUser};

