const multer = require('multer');
const path = require('path');

const storage  = multer.diskStorage({
    destination:"./",
    filename:(res,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`);
    },
})

const fileFilter =(req,file,cb)=>{
    const allowedTypes =["image/jpeg","image/jpg","image/png"];
    if(allowedTypes.includes(file.mimetype)){
        cb(null,true);
    }else{
        cb(new Error("Only image allowed"));
    }
}

//multer instacne for file size
const upload = multer({
    storage,
    limits:{fileSize:2*1024*1024}, //2 mb
    fileFilter
})
module.exports=upload;