const { Post, Category, Author, Tag, sequelize } = require("../models");

class PoastController {
  static async getPost(req, res, next) {
    try {
      let posts = await Post.findAll();

      res.status(200).json(posts);
    } catch (err) {
      next(err);
    }
  }
  static async getPostDetail(req, res, next) {
    try {
      const { id } = req.params;
      let post = await Post.findOne({
        where: {
          id,
        },
        include: [
          {
            model: Category,
          },
          {
            model: Author,
          },
        ],
      });

      if (!post) {
        throw { name: "NotFound" };
      }

      res.status(200).json(post);
    } catch (err) {
      next(err);
    }
  }
  static async addPost(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { title, content, imgUrl, CategoryId, name } = req.body;
      const AuthorId = req.author.id;
      const post = await Post.create(
        {
          title,
          slug: title.toLowerCase().split(" ").join("-"),
          content,
          imgUrl,
          CategoryId,
          AuthorId,
        },
        { transaction: t }
      );
      const tag = await Tag.create(
        {
          PostId: post.id,
          name,
        },
        { transaction: t }
      );

      await t.commit();
      res.status(201).json({
        statusCode: 201,
        message: "Post created successfully",
        data: {
          post,
          tag,
        },
      });
    } catch (err) {
      await t.rollback();
      next(err);
    }
  }
  static async deletePost(req, res, next) {
    try {
      const { id } = req.params;

      const affectedRows = await Post.destroy({
        where: {
          id,
        },
      });

      if (affectedRows <= 0) {
        throw { name: "NotFound" };
      }

      res.status(200).json({
        statusCode: 200,
        message: `Post ${id} deleted successfully`,
      });
    } catch (err) {
      next(err);
    }
  }
  static async editPost(req, res, next) {
    try {
      const { title, content, imgUrl, CategoryId, name } = req.body;
      const AuthorId = req.author.id;
      const { id } = req.params;

      const post = await Post.update(
        {
          title,
          content,
          imgUrl,
          CategoryId,
        },
        {
          where: { id },
        }
      );

      if (post <= 0) {
        throw { name: "NotFound" };
      }

      await Tag.destroy({
        where: { PostId: id },
      });

      const newTag = await Tag.create({
        PostId: id,
        name,
      });

      const newPost = await Post.findByPk(id);

      res.status(200).json({
        newPost,
        newTag,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PoastController;
