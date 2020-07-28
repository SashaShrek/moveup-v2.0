'use strict';
var Loader = /** @class */ (function () {
    function Loader() {
    }
    Loader.prototype.Load = function () {
        this.Events();
    };
    Loader.prototype.Events = function () {
        //navigator
        var navigator = new Navigat();
        var data = [
            "hoster_block.html",
            "help.html",
            "busket.html",
            "input.html"
        ];
        var i = 0;
        var _loop_1 = function () {
            var page = data[i];
            $("#root > div > header > div > button")[i].addEventListener("click", function () { return navigator.Go(page); });
            i++;
        };
        while (i <= 3) {
            _loop_1();
        }
        $(".input")[0].addEventListener("click", function () { return navigator.InputShow(true); });
        $(".register")[0].addEventListener("click", function () { return navigator.RegShow(true); });
        var sender = new Sender();
        //let form: JQuery<HTMLElement> = $(".inPanel > form");
        $(".inPanel > p > button")[0].addEventListener("click", function () { return sender.Input(); });
    };
    return Loader;
}());
var Navigat = /** @class */ (function () {
    function Navigat() {
    }
    Navigat.prototype.Go = function (page) {
        document.location.href = page;
    };
    Navigat.prototype.InputShow = function (bl) {
        $(".inPanel").css(bl ? { "display": "block" } : { "display": "none" });
        setTimeout(function () {
            $(".inPanel").css(bl ? { "opacity": 1, "height": "100px" } :
                { "opacity": 0, "height": "0px" });
        }, 50);
        bl ? this.RegShow(false) : null;
    };
    Navigat.prototype.RegShow = function (bl) {
        $(".regPanel").css(bl ? { "display": "block" } : { "display": "none" });
        setTimeout(function () {
            $(".regPanel").css(bl ? { "opacity": 1, "height": "100px" } :
                { "opacity": 0, "height": "0px" });
        }, 50);
        bl ? this.InputShow(false) : null;
    };
    return Navigat;
}());
var Sender = /** @class */ (function () {
    function Sender() {
    }
    Sender.prototype.Input = function () {
    };
    Sender.prototype.Register = function () {
    };
    return Sender;
}());
