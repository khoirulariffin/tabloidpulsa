"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tag.belongsTo(models.Post, {
        foreignKey: "PostId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Tag.init(
    {
      PostId: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tag",
    }
  );
  return Tag;
};
