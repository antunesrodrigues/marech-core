"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var attr_to_obj_1 = __importDefault(require("./attr-to-obj"));
var reg_exp_1 = __importDefault(require("../../padroes/reg-exp"));
var resolve_function_1 = __importDefault(require("../../functions/resolve-function"));
var execObj = function (text, propes, prepropes) {
    var finalComponent = text;
    var props = propes;
    var flags = {};
    var finalFlags = {
        indent: prepropes.indent || 0,
    };
    if (props[0] !== ' ') {
        props = " " + props;
    }
    var marechExp = reg_exp_1.default.flags;
    var mtch;
    while ((mtch = marechExp.exec(props))) {
        var matches = mtch[0].split(/(\n|[ ])@/g);
        if (matches) {
            matches = matches.filter(function (i) { return i.trim(); });
            matches = matches.map(function (i) { return i.replace(/=(?='|")/, ':'); });
        }
        flags = attr_to_obj_1.default(matches);
        if (flags.indent && finalFlags.indent !== '\t') {
            finalFlags.indent = flags.indent + finalFlags.indent;
        }
    }
    var tabs = '\t';
    if (finalFlags.indent !== '\t') {
        tabs = '';
        for (var i = 0; i < finalFlags.indent; i += 1) {
            tabs += ' ';
        }
    }
    finalComponent = finalComponent.replace(/(?:\n|^)/g, "\n" + tabs);
    finalComponent = tabs + finalComponent;
    var marechDefinition = '';
    var findMarechDefinition = finalComponent.match(reg_exp_1.default.marechDef);
    if (findMarechDefinition) {
        marechDefinition = findMarechDefinition[0];
    }
    var rjs = marechDefinition.match(/JS\(([^](?!(>)))*\)/g);
    if (rjs) {
        rjs.forEach(function (e) {
            marechDefinition = marechDefinition.replace(e, resolve_function_1.default(e));
        });
    }
    var findComponentArgs = marechDefinition.match(reg_exp_1.default.marechDefOnlyArgs);
    var defaultComponentArgs = '';
    if (findComponentArgs) {
        defaultComponentArgs = attr_to_obj_1.default(findComponentArgs[0]);
    }
    var args = attr_to_obj_1.default(props.replace(reg_exp_1.default.flags, ''));
    finalComponent = finalComponent.replace(marechDefinition, '').trim();
    return {
        args: args,
        defaultComponentArgs: defaultComponentArgs,
        flags: flags,
        marechComponent: finalComponent,
    };
};
module.exports = execObj;
