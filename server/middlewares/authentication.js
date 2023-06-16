const { Author } = require("../models");

const { verifyToken } = require("../helpers/hashPasswordAndJWT");

const authenticate = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    if (!access_token) {
      throw { name: "InvalidToken" };
    }

    const verify = verifyToken(access_token);

    if (!verify) {
      throw { name: "InvalidToken" };
    }

    const userData = await Author.findByPk(verify.id);
    if (!userData) {
      throw { name: "InvalidToken" };
    }

    req.author = userData;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authenticate;
