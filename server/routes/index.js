const express = require("express");
const router = express.Router();

const usersRoutes = require("./users");
const categoriesRoutes = require("./categories");
const tagRoutes = require("./tags");
const postsRoutes = require("./posts");
const errorHandler = require("../middlewares/errorHandlers");

router.use("/users", usersRoutes);
router.use("/categories", categoriesRoutes);
router.use("/tags", tagRoutes);
router.use("/posts", postsRoutes);

router.use(errorHandler);

module.exports = router;
