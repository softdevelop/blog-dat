const router = require("express").Router();
const PostController = require("../controllers/post.controller");
const PostMiddleware = require("../middleware/post.middleware");
const requestValidation = require("../middleware/request-validation.middleware");

router.post(
    "/",
    PostMiddleware.bodyNewPostValidation,
    requestValidation,
    PostController.newPost
);

module.exports = router;