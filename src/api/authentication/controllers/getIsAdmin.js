const userCollection = require("../../../models/userSchema");


const getIsAdmin = async (req, res) => {
    try {
        let isAdmin = false;
        const userEmail = req.params.email;
        // Find users who are admins 
        const user = await userCollection.findOne({ userEmail: userEmail });
        
        if(user){
            isAdmin = user?.userRole === "Admin";
        }

     
        res.status(200).json(isAdmin);
    } catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = getIsAdmin;