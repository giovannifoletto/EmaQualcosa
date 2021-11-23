var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
        this.index = 0;
    }
    Queue.prototype.updateQueue = function () {
        var c = "";
        for (var i = 0; i < this.index; ++i) {
            c += this.list[i];
        }
        return c;
    };
    Queue.prototype.push = function (a) {
        if (typeof (a) != typeof (" ")) {
            throw "Push error, no string given";
        }
        else {
            this.list.unshift(a);
            this.index++;
            if (this.index > Queue.MAX_VALUE) {
                this.list.pop();
                this.index--;
            }
            return "";
        }
    };
    // per modificare il numero di elementi nel carousello laterale modificare questa variabile
    Queue.MAX_VALUE = 6;
    return Queue;
}());
var Reg = /** @class */ (function () {
    // costruttore a partire da valore json
    function Reg(a) {
        this.id = a.id;
        this.name = a.name;
        this.linkDonatori = a.linkDonatori;
        this.linkAspiranti = a.linkAspiranti;
        this.info = a.info;
        this.divisione = a.divisione ? a.divisione : false;
        this.regionale = a.regionale ? a.regionale : false;
    }
    return Reg;
}());
var jsonData;
function readJSON() {
    var json = $.getJSON("/data/regioni.json", function (o) {
        jsonData.push(new Reg(o));
    });
    $("#test").html(jsonData.toString);
}
;
$(function () {
    readJSON();
});
