"use strict";
const { Post } = require("../models");

const authorize = async (req, res, next) => {
  try {
    const { id } = req.author;
    console.log(id);
    const PostId = req.params.id;

    const post = await Post.findByPk(PostId);
    console.log(post.id, "==");

    if (post.AuthorId == id) {
      next();
    } else {
      throw { name: "Forbidden" };
    }
  } catch (err) {
    next(err);
  }
};

module.exports = authorize;
