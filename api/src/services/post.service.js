const PostModel = require("../models/post.model");

const PostService = {};

PostService.findByField = async (payload) => {
    return await PostModel.find(payload);
};

PostService.isExist = async (id) => {
    return await PostModel.exists({ _id: id });
};

PostService.newPost = async (payload) => {
    const post = new PostModel(payload);
    return await post.save();
};

module.exports = PostService;