const PropertyCollection = require("../../models/productSchema");
const RentDataCollection = require("../../models/rentDataSchema");

const storeRentData = async (req, res) => {
    const { propertyId, buyerId, amout, duration } = req.query;
    const todayDate = new Date().toISOString().substring(0, 10);
    const currentDate = new Date();
    let durationEndDate = "";
    const oneMonthLater = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()).toISOString().substring(0, 10);
    const sixMonthsLater = new Date(currentDate.getFullYear(), currentDate.getMonth() + 6, currentDate.getDate()).toISOString().substring(0, 10);
    const oneYearLater = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate()).toISOString().substring(0, 10);

    if(duration == "1-month"){
        durationEndDate = oneMonthLater;
    }
    else if(duration == "6-month"){
        durationEndDate = sixMonthsLater;
    }
    else if(duration == "1-year"){
        durationEndDate = oneYearLater;
    }

    const update = await PropertyCollection.updateOne(
        { _id: new Object(propertyId) },
        { $set: { publishStatus: "unpublish" } }
    );

    const data = {
        propertyId: propertyId,
        buyerId: buyerId,
        amout: amout,
        duration: duration,
        startingDate: todayDate,
        endingDate: durationEndDate,
    }
    const create = RentDataCollection.create(data);
    res.send(data);
};

module.exports = storeRentData;