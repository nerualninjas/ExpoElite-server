// const PropertyCollection = require("../../../models/productSchema");

// const updatePropertyStatusPublish = async (req, res) => {
//     return (
//         <div>

//         </div>
//     );
// };
// module.exports = updatePropertyStatusPublish;



const PropertyCollection = require("../../../models/productSchema");

const updatePropertyStatusPublish = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedProperty = await PropertyCollection.findByIdAndUpdate(id,
            { $set: { publishStatus: 'publish' } }, { new: true });


        if (!updatedProperty) {
            return res.status(404).json({ success: false, message: 'Property not found' });
        }

        res.status(200).json({ success: true, data: updatedProperty });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

module.exports = updatePropertyStatusPublish;

