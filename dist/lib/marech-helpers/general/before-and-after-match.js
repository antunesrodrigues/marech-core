"use strict";
var matchFunctions = {
    before: function (text, match) {
        return text.slice(0, match.index);
    },
    after: function (text, match) {
        return text.slice(match.index + match[0].length);
    },
};
module.exports = matchFunctions;
