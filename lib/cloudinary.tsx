const cloudinary = require('cloudinary').v2;

const {
  CLOUDINARY_FOLDER,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_KEY,
  CLOUDINARY_SECRET,
} = process.env;

const cloudFolder = CLOUDINARY_FOLDER;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

const uploadImage = async (title: string, image: string) => {
  const cloudinaryOptions = {
    public_id: `${cloudFolder}/${title}`,
    unique_filename: false,
  };

  return await cloudinary.uploader
    .upload(image, cloudinaryOptions)
    .then((response) => response.url);
};

const getImage = (newImage) => {
  return cloudinary.url(newImage, { sign_url: true });
};

export { uploadImage, getImage };
