"use strict";
const { hashPassword } = require("../helpers/hashPasswordAndJWT");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Author.hasMany(models.Post, { foreignKey: "AuthorId" });
    }
  }
  Author.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Username is required",
          },
          notEmpty: {
            msg: "Username is required",
          },
        },
      },
      name: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password is required",
          },
          notEmpty: {
            msg: "Password is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Author",
      hooks: {
        beforeCreate: (user, options) => {
          user.password = hashPassword(user.password);
        },
      },
    }
  );
  return Author;
};
