const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "Required":
      res.status(400).json({
        statusCode: 400,
        message: "Username and password is required",
      });
      break;
    case "InvalidToken":
      res.status(401).json({
        statusCode: 401,
        message: "Invalid Token, please login first",
      });
      break;
    case "NotFound":
      res.status(404).json({
        statusCode: 404,
        message: "Not found",
      });
      break;
    case "Invalid":
      res.status(401).json({
        statusCode: 401,
        message: "Invalid username or password",
      });
      break;
    case "Forbidden":
      res.status(403).json({
        statusCode: 403,
        message: err.name,
      });
      break;
    case "SequelizeUniqueConstraintError":
      const errorConstraints = err.errors.map((el) => el.message);
      res.status(400).json({
        statusCode: 400,
        error: {
          message: errorConstraints,
        },
      });
      break;
    case "SequelizeValidationError":
      const errorValidations = err.errors.map((el) => el.message);
      res.status(400).json({
        statusCode: 400,
        error: {
          message: errorValidations,
        },
      });
      break;
    default:
      res.status(500).json({
        statusCode: 500,
        error: {
          message: "Internal Server Error",
        },
      });
  }
};

module.exports = errorHandler;
