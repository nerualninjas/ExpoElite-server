const cloudinary = require('cloudinary').v2;

          
cloudinary.config({ 
  cloud_name: 'deqkxg249', 
  api_key: '291618369758335', 
  api_secret: '6n-UyPBSm9AEMCJ_9vA5XOqJ1Ak' 
});

const uploadImage = async (req, res) => {
    try {
      // Assuming you have the image path from flatterflow in the request
      const imagePath = req.file.path;
      console.log(imagePath)
  
      // Upload the image to Cloudinary
      const uploadResult = await cloudinary.uploader.upload(imagePath);
      res.json({ imageUrl: uploadResult.secure_url });
  
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
module.exports=uploadImage;