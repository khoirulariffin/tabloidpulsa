"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Author, {
        foreignKey: "AuthorId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Post.belongsTo(models.Category, {
        foreignKey: "CategoryId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      content: DataTypes.TEXT,
      imgUrl: DataTypes.STRING,
      CategoryId: DataTypes.INTEGER,
      AuthorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
