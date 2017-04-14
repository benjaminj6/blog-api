"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvdXRpbHMvZXJyb3JHZW5lcmF0b3IuanMiXSwibmFtZXMiOlsic3RhdHVzIiwibWVzc2FnZSIsImVyciIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsQ0FBQ0EsTUFBRCxFQUFTQyxPQUFULEtBQXFCO0FBQ2xDLFFBQU1DLE1BQU0sSUFBSUMsS0FBSixFQUFaO0FBQ0FELE1BQUlGLE1BQUosR0FBYUEsTUFBYjtBQUNBRSxNQUFJRCxPQUFKLEdBQWNBLE9BQWQ7QUFDQSxTQUFPQyxHQUFQO0FBQ0QsQyIsImZpbGUiOiJlcnJvckdlbmVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChzdGF0dXMsIG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgZXJyID0gbmV3IEVycm9yKClcbiAgZXJyLnN0YXR1cyA9IHN0YXR1c1xuICBlcnIubWVzc2FnZSA9IG1lc3NhZ2VcbiAgcmV0dXJuIGVyclxufVxuIl19