const express = require("express");
const PostsController = require("../controllers/postsController");
const authenticate = require("../middlewares/authentication");
const authorize = require("../middlewares/authorization");
const router = express.Router();

router.get("/", PostsController.getPost);
router.get("/:id", PostsController.getPostDetail);
router.post("/", authenticate, PostsController.addPost);
router.delete("/:id", authenticate, PostsController.deletePost);
router.put("/:id", authenticate, authorize, PostsController.editPost);

module.exports = router;
