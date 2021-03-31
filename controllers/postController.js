const Validator = require('fastest-validator');
const models = require('../models');

exports.index = (req, res) => {
    models.Post.findAll().then(result => {
        res.status(201).json(result);
    }).catch(error =>{
        res.status(500).json({
            message: "No Found Any Post",
            error: error
        });
    });
}

exports.save = (req, res) => {

    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
        userId: 1,
    }

    const schema = {
        title: {type:"string", optional: false, max: "100"},
        content: {type:"string", optional: false, max:"500"},
        categoryId: {type:"number", optional: false}
    }

    const v = new Validator();
    //from const post above
    const validationResponse = v.validate(post, schema);

    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation Failed!",
            errors: validationResponse
        });
    }

    models.Post.create(post).then(result => {
        res.status(201).json({
            message: "Post has been created!",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}


exports.show = (req, res) => {
    const id = req.params.id;
    
    models.Post.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "POST NOT FOUND!",
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}


exports.update = (req, res) => {
    const id = req.params.id;
    const updatePost = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id
    }

    const userId = 1;

    const schema = {
        title: {type:"string", optional: false, max: "100"},
        content: {type:"string", optional: false, max:"500"},
        categoryId: {type:"number", optional: false}
    }

    const v = new Validator();
    //from const post above
    const validationResponse = v.validate(updatePost, schema);

    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation Failed!",
            errors: validationResponse
        });
    }

    models.Post.update(updatePost, {where: {id:id, userId:userId}}).then(result => {
        res.status(200).json({
            message: "Updated Post Successfully",
            post: updatePost
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

exports.destroy = (req, res) => {
    const id = req.params.id;
    const userId = 1;

    models.Post.destroy({ where:{id:id, userId:userId}}).then(result => {
        res.status(200).json({
            message: "Delete Post Successfully"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });

}