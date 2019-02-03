"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var lib_1 = __importDefault(require("../lib"));
var marechalCore = function (componentHtml, args, defaultArgs) {
    if (defaultArgs === void 0) { defaultArgs = {}; }
    var finalComponent = componentHtml;
    var directives = finalComponent.match(/{( *).+( *)}/g);
    if (directives) {
        for (var i = 0; i < directives.length; i += 1) {
            var directive = directives[i];
            var directiveName = directive.replace(/{|}/g, '');
            var argsDirective = args[directiveName];
            var defaultDirective = defaultArgs[directiveName];
            var replace = argsDirective || defaultDirective || '';
            finalComponent = finalComponent.replace(new RegExp("" + directive, 'g'), replace);
        }
    }
    var rjs = finalComponent.match(/JS\(([^](?!(>)))*\)/g);
    if (rjs) {
        rjs.forEach(function (e) {
            finalComponent = finalComponent.replace(e, lib_1.default.functions.resolveFunction(e));
        });
    }
    finalComponent = finalComponent.replace(lib_1.default.padroes.regExp.marechDef, '').trimLeft();
    return finalComponent;
};
module.exports = marechalCore;
