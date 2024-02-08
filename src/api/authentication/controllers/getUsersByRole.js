const userCollection = require("../../../models/userSchema");


const getUsersByRole = async (req, res) => {
    try {
        // Find users who are admins or sellers
        const users = await userCollection.find({ $or: [{ userRole: "Admin" }, { userRole: "Seller" }] });
        
        res.status(200).json(users);
    } catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = getUsersByRole;