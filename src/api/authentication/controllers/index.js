const createUser = require('./createUser');
const  getUsers = require('./getUsers');
const  getUser = require('./getUser');
const  updateUser = require('./updateUser');
const  userRoleUpByAdmin = require('./userRoleChange');
const  deleteUser = require('./deleteUser');


module.exports ={createUser, deleteUser,getUser, getUsers,updateUser,userRoleUpByAdmin};