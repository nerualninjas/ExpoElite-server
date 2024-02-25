

// commentLogs
// Array (1)

// 0
// Object
// commentBy
// " "
// comment
// " "
// commentDate
// " "
// commentTime
// " "

const PropertyCollection = require("../../../models/productSchema");

const getUserCommentCount = async (req, res) => {
    
    try {
        const userEmail = req.params.email;

        const commentCount = await PropertyCollection.aggregate([
            // Unwinding the "commentLogs" array to create a separate document for each comment
            { $unwind: "$commentLogs" },

            // Matching documents where the "commentLogs.commentBy" field matches the user's email
            { $match: { "commentLogs.commentBy": userEmail } },

            // Grouping the matched documents to calculate the total number of comments
            { $group: { _id: null, totalComments: { $sum: 1 } } }
        ]);

        const totalComments = commentCount.length > 0 ? commentCount[0].totalComments : 0;

        res.status(200).json({ totalComments });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = getUserCommentCount;