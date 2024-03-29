// const PropertyCollection = require("../../../models/productSchema");

// const updatePropertyStatusUnpublish = async (req, res) => {
//     return (
//         <div>

//         </div>
//     );
// };
// module.exports = updatePropertyStatusUnpublish;


const PropertyCollection = require("../../../models/productSchema");

const updatePropertyStatusUnpublish = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedProperty = await PropertyCollection.findByIdAndUpdate(id,
            { $set: { publishStatus: 'unpublish' } }, { new: true });

        if (!updatedProperty) {
            return res.status(404).json({ success: false, message: 'Property not found' });
        }

        res.status(200).json({ success: true, data: updatedProperty });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

module.exports = updatePropertyStatusUnpublish;
