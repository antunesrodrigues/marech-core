"use strict";
var sendError = function (message) {
    if (message === void 0) { message = ''; }
    throw new Error(message);
};
module.exports = sendError;
