const createUser = require('./createUser');
const  getUsers = require('./getUsers');
const  getUser = require('./getUser');
const  updateUser = require('./updateUser');
const  userRoleUpByAdmin = require('./userRoleChange');
const  deleteUser = require('./deleteUser');
const  getUsersByRole = require('./getUsersByRole');
const  getIsAdmin = require('./getIsAdmin');
const  getSellers = require('./getSellers');
const  getIsSeller = require('./getIsSeller');


module.exports ={createUser,getIsSeller, getSellers,getUsersByRole,getIsAdmin ,deleteUser,getUser, getUsers,updateUser,userRoleUpByAdmin};