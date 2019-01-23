"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findComponentFile = function (componentName, configs) {
    var file = componentName + ".html";
    if (configs.components.files) {
        configs.components.files.forEach(function (fl) {
            if (fl.id === componentName) {
                (file = fl.file);
            }
        });
    }
    return file;
};
exports.default = findComponentFile;
