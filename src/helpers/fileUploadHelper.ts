import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dvpqyttxx',
  api_key: '164652291435483',
  api_secret: 'xt35Sj5QIwvl5pFNMM1C5iOsl8s'
});

const uploadToCloudinary = async () => {
  cloudinary.uploader.upload(
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    { public_id: 'olympic_flag' },
    function (error, result) {
      console.log(result);
    }
  );
};

export const FileUploadHelper ={
    uploadToCloudinary
}