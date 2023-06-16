const { comparePassword, signToken } = require("../helpers/hashPasswordAndJWT");
const { Author } = require("../models");

class UsersController {
  static async register(request, response, next) {
    try {
      const { username, name, password } = request.body;

      if (!username || !password) {
        throw { name: "Required" };
      }

      const author = await Author.create({ username, name, password });
      response.status(201).json({
        statusCode: 201,
        message: "Author Created",
        user: {
          id: author.id,
          username: author.username,
          name: author.name,
        },
      });
    } catch (err) {
      next(err);
    }
  }
  static async login(request, response, next) {
    try {
      const { username, name, password } = request.body;

      if (!username || !password) {
        throw { name: "Required" };
      }

      const findData = await Author.findOne({
        where: { username },
      });

      if (!findData) {
        throw { name: "NotFound" };
      }

      const validatePassword = comparePassword(password, findData.password);

      if (!validatePassword) {
        throw { name: "Invalid" };
      }

      const access_token = signToken({
        id: findData.id,
        username: findData.username,
        name: findData.name,
      });

      const author = response.status(200).json({
        statusCode: 200,
        message: "Login Success",
        access_token,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UsersController;
