"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var verify_file_1 = __importDefault(require("./verify-file"));
var read_file_1 = __importDefault(require("./read-file"));
var require_file_1 = __importDefault(require("./require-file"));
var create_file_1 = __importDefault(require("./create-file"));
module.exports = {
    verifyFile: verify_file_1.default,
    readFile: read_file_1.default,
    requireFile: require_file_1.default,
    createFile: create_file_1.default,
};
