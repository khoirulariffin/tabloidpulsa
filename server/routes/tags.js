const express = require("express");
const TagsController = require("../controllers/tagsController");
const router = express.Router();

router.get("/", TagsController.getTags);
router.get("/:id", TagsController.getTagDetail);
router.post("/", TagsController.addTag);
router.delete("/:id", TagsController.deleteTag);

module.exports = router;
