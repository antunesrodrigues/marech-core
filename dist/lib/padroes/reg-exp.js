"use strict";
var regExp = {
    marechTag: /<Marech@(([^](?!<))*)(\/>|><\/Marech>)/gi,
    marechTagAttr: /(?<=<Marech@).*(?=(\/>|><\/Marech>))/i,
    marechDef: /<Marech(([^](?!<))*)(\/>|><\/Marech>)/gi,
    marechDefOnlyArgs: /(?<=<Marech)[^]*(?=(\/>|><\/Marech>))/gi,
    attr: /(?:^|[ ])([a-z]+)=("|')/gi,
    flags: /(?:^|[ ]) @.+=("|').*\1/g,
};
module.exports = regExp;
