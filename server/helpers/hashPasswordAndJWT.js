const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET;

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

const signToken = (payload) => {
  return jwt.sign(payload, secretKey);
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = {
  hashPassword,
  comparePassword,
  signToken,
  verifyToken,
};
