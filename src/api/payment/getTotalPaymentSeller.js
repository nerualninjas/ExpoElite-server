const PaymentCollection = require("../../models/paymentSchema");

const getTotalPaymentSeller = async (req, res) => {
    try {
        const sellerEmail = req.params.seller;

        const totalAmountResult = await PaymentCollection.aggregate([
            {
                $match: {
                    sellerEmail: sellerEmail,
                   
                },
            },
            {
                $group: {
                    _id: null,
                    totalAmount: { $sum: "$price" },
                },
            },
        ]);

        if (totalAmountResult.length > 0) {
            const totalAmount = totalAmountResult[0].totalAmount;
            console.log("Total Amount for seller:", totalAmount);
            res.send({ totalAmount });
        } else {
            console.log("No transactions found for the seller");
            res.send({ totalAmount: 0 });
        }
    } catch (error) {
        console.error("Error retrieving total amount:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = getTotalPaymentSeller;