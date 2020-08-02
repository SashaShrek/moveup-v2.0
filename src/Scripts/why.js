'use strict';
var Loader = /** @class */ (function () {
    function Loader() {
    }
    Loader.prototype.Load = function () {
        this.Events();
    };
    Loader.prototype.Events = function () {
        //Navigat
        var navigat = new Navigat();
        var data = [
            "hoster_block.html",
            "help.html",
            "busket.html",
            "input.html"
        ];
        var i = 0;
        var n = data.length;
        var _loop_1 = function () {
            var page = data[i];
            $("#root > div > header > div > button")[i].addEventListener("click", function () { return navigat.Go(page); });
            i++;
        };
        while (i < n) {
            _loop_1();
        }
        if (localStorage.getItem("mlogin") != null) {
            $("header > div > #autho").css({ "display": "none" });
            $("header > div > #exit").css("display", "block");
            $("header > div > #exit")[0].addEventListener("click", function () { return navigat.Exit(); });
        }
    };
    return Loader;
}());
var Navigat = /** @class */ (function () {
    function Navigat() {
    }
    Navigat.prototype.Go = function (page) {
        document.location.href = page;
    };
    Navigat.prototype.Exit = function () {
        localStorage.clear();
        location.reload();
    };
    return Navigat;
}());
