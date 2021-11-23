"use strict";
exports.__esModule = true;
exports.main = void 0;
var header_1 = require("./header");
function modifyMapSize() {
    var page = $("windows").width();
    $('#svgMap').width(page);
    $('#svgMap').height(page);
}
function createPopOver(a) {
    var pop = (0, header_1.returnValue)(a);
    $(a.id).popover({
        html: true,
        title: "",
        content: pop
    });
    $(a.id).popover('show');
}
function hoveringEffectMap() {
    // Create overing opacity effect
    // Create lateral div-card
    var _this = this;
    for (var key in header_1.idList) {
        $(header_1.idList[key].id).hover(function () {
            createPopOver(_this);
            $(_this).css('opacity', '50%');
        }, function () {
            console.log("Ciao");
        });
    }
}
function main() {
    modifyMapSize();
}
exports.main = main;
