const asyncHandler=(fn)=> {
    return function (req, res, next) {
    return Promise.resolve(fn(req, res, next)).catch(next);
    };
};

class ErrorResponse extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }

module.exports={asyncHandler,ErrorResponse} ;