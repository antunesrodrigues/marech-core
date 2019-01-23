"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var lib_1 = __importDefault(require("../lib"));
var marechal_core_1 = __importDefault(require("./marechal-core"));
var marechalByData = function (originalData, configs) {
    var finalData = originalData;
    var marechExp = lib_1.default.padroes.regExp.marechTag;
    while (finalData.match(marechExp)) {
        var match = void 0;
        while ((match = marechExp.exec(finalData))) {
            match[0] = match[0].replace(/(\r|\t|\n| {2,})/g, ' ');
            var beforeTag = lib_1.default.marechHelpers.beforeAndAfterMatch.before(finalData, match);
            var beforeAndTag = beforeTag + match[0];
            var afterTag = lib_1.default.marechHelpers.beforeAndAfterMatch.after(finalData, match);
            var name_1 = lib_1.default.marechHelpers.nameOrProps('name', match[0]);
            var props = lib_1.default.marechHelpers.nameOrProps('props', match[0]);
            var preProps = lib_1.default.marechHelpers.uxMarech(match[0], beforeAndTag);
            var componentFile = lib_1.default.marechHelpers.findComponentName(name_1, configs);
            var componentPath = path_1.default.join(configs.components.path, componentFile);
            var originalMarechComponent = lib_1.default.disk.file.readFile(componentPath);
            var splitedItens = lib_1.default.marechHelpers.execObj(originalMarechComponent, props, preProps);
            var marechComponent = splitedItens.marechComponent, args = splitedItens.args, defaultComponentArgs = splitedItens.defaultComponentArgs;
            var mareched = marechal_core_1.default(marechComponent, args, defaultComponentArgs);
            finalData = beforeTag + mareched + afterTag;
        }
    }
    finalData = finalData.replace(/\n {3,}\n/g, '\n');
    return finalData;
};
exports.default = marechalByData;
