const PropertyCollection = require("../../../models/productSchema");

const getAllProperty = async (req, res) => {
    const allProperty = await PropertyCollection.find();
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const lastIndex = (page) * limit

    const finalResults = {}
    finalResults.totalProperty = allProperty.length;
    finalResults.pageCount = Math.ceil(allProperty.length / limit);

    if (lastIndex < allProperty.length) {
        finalResults.next = {
            page: page + 1,
        }
    }
    if (startIndex > 0) {
        finalResults.prev = {
            page: page - 1,
        }
    }

    finalResults.result = allProperty.slice(startIndex, lastIndex);

    res.send(finalResults);
}

module.exports = getAllProperty;