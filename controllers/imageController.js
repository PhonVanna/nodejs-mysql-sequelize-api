exports.upload = (req, res) => {
    if(req.file.filename){
        res.status(201).json({
            message: "Image Uploaded Successfully!",
            url: req.file.filename
        }); 
    }else{
        res.status(500).json({
            message: "Something Went Wrong!"
        }); 
    }
}