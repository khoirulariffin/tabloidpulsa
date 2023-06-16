const { Category, Post } = require("../models");

class CategoriesController {
  static async getCategories(req, res, next) {
    try {
      let categories = await Category.findAll();

      res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  }
  static async getCategoryDetail(req, res, next) {
    try {
      const { id } = req.params;
      let category = await Category.findOne({
        where: {
          id,
        },
        include: [
          {
            model: Post,
          },
        ],
      });

      if (!category) {
        throw { name: "NotFound" };
      }

      res.status(200).json(category);
    } catch (err) {
      next(err);
    }
  }
  static async addCategory(req, res, next) {
    try {
      const { name } = req.body;

      let category = await Category.create({
        name,
      });
      res.status(201).json({
        statusCode: 201,
        message: "New category added successfully",
        category,
      });
    } catch (err) {
      next(err);
    }
  }
  static async deleteCategory(req, res, next) {
    try {
      const { id } = req.params;

      const affectedRows = await Category.destroy({
        where: {
          id,
        },
      });

      if (affectedRows <= 0) {
        throw { name: "NotFound" };
      }

      res.status(200).json({
        statusCode: 200,
        message: `Category ${id} deleted successfully`,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CategoriesController;
