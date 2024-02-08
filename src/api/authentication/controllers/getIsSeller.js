const userCollection = require("../../../models/userSchema");


const getIsSeller = async (req, res) => {
    try {
        const userEmail = req.params.email;
        // Find users who are seller 
        const user = await userCollection.findOne({ userEmail: userEmail });
        let isSeller = false;
        if(user){
            isAdmin =user.userRole === "Seller";
        }
        res.status(200).json(isSeller);
    } catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = getIsSeller;