const PropertyCollection = require("../../models/productSchema");

const getAllProperty = async (req, res) => {
    const allProperty = await PropertyCollection.find();
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const lastIndex = (page) * limit

    const results = {}
    results.totalProperty = allProperty.length;
    results.pageCount = Math.ceil(allProperty.length / limit);

    if (lastIndex < allProperty.length) {
        results.next = {
            page: page + 1,
        }
    }
    if (startIndex > 0) {
        results.prev = {
            page: page - 1,
        }
    }

    results.result = allProperty.slice(startIndex, lastIndex);

    res.send(results);
}

module.exports = getAllProperty;