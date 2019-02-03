"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var path_1 = __importDefault(require("path"));
var defaultNames = {
    filename: 'marech-config',
};
var defaultConfigs = function (input, output, compnt) {
    if (input === void 0) { input = 'src'; }
    if (output === void 0) { output = 'dist'; }
    if (compnt === void 0) { compnt = 'src/marech'; }
    var configs = {
        input: {
            path: input,
            files: '**/*.html',
        },
        components: {
            path: compnt,
        },
        output: {
            path: output,
        },
    };
    return configs;
};
var simpleConfig = function (confd) {
    var input = confd.input, output = confd.output, component = confd.component;
    return defaultConfigs(input, output, component);
};
var mergeConfigs = function (userConfigs) {
    var mergedConfigs = __assign({}, defaultConfigs, userConfigs);
    return mergedConfigs;
};
var resolveConfig = function (config, dir) {
    if (dir === void 0) { dir = './'; }
    var resolvedConfigs = JSON.parse(JSON.stringify(config));
    resolvedConfigs.components.path = path_1.default.join(path_1.default.resolve(dir), resolvedConfigs.components.path);
    resolvedConfigs.input.path = path_1.default.join(path_1.default.resolve(dir), (resolvedConfigs.input.path));
    resolvedConfigs.output.path = path_1.default.join(path_1.default.resolve(dir), resolvedConfigs.output.path);
    return resolvedConfigs;
};
module.exports = {
    defaultNames: defaultNames,
    defaultConfigs: defaultConfigs,
    simpleConfig: simpleConfig,
    mergeConfigs: mergeConfigs,
    resolveConfig: resolveConfig,
};
