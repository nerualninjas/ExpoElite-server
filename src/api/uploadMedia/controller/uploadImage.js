const cloudinary = require('cloudinary').v2;

const uploadImage = async (req, res) => {
    try {
      const imagePath = req.file.path;
      console.log(imagePath)
      
      const uploadResult = await cloudinary.uploader.upload(imagePath);
      res.json({ imageUrl: uploadResult.secure_url });
  
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
module.exports=uploadImage;