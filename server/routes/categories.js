const express = require("express");
const CategoriesController = require("../controllers/categoriesController");
const router = express.Router();

router.get("/", CategoriesController.getCategories);
router.get("/:id", CategoriesController.getCategoryDetail);
router.post("/", CategoriesController.addCategory);
router.delete("/:id", CategoriesController.deleteCategory);

module.exports = router;
