const PropertyCollection = require("../../../models/productSchema");

const getUserLikeCount=async(req, res)=>{
    
    const userEmail = req.params.email;
    try{
        console.log(userEmail);

        const likeCount = await PropertyCollection.aggregate([
            {$unwind: "$likeBy"},
            {$match:{likeBy:userEmail}},
            {$group:{_id:null,totalLikes:{$sum:1}}}

        ]);

        const totalLikes= likeCount.length> 0 ? likeCount[0].totalLikes : 0;

        res.status(200).json({totalLikes});

    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }


};
module.exports = getUserLikeCount;