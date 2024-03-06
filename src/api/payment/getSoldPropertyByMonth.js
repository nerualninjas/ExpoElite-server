const PaymentCollection = require("../../models/paymentSchema");



const getSoldPropertyByMonth = async (req, res) => {
    
    try {
        const sellerEmail = req.params.sellerEmail;
        
        const result = await PaymentCollection.aggregate([
          {
            $match: {
              sellerEmail: sellerEmail,
              purchaseDate: { $exists: true }
            }
          },
          {
            $project: {
              monthYear: {
                $dateToString: {
                  format: "%m-%Y",
                  date: { $dateFromString: { dateString: "$purchaseDate" } }
                }
              }
            }
          },
          {
            $group: {
              _id: "$monthYear",
              count: { $sum: 1 }
            }
          },
          {
            $project: {
              _id: 0,
              monthYear: "$_id",
              count: 1
            }
          },
          {
            $sort: {
              monthYear: 1
            }
          }
          ]);
      
          res.json(result);
        
       
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = getSoldPropertyByMonth;