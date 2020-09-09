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
            "input.html",
            "Works.html"
        ];
        let i = 0;
        var _loop_2 = function () {
            var page = data[i];
            $("#root > div > header > div > button")[i].addEventListener("click", function () { return navigator.Go(page); });
            i++;
        };
        while (i <= 4) {
            _loop_2();
        }
        $(".mdiv > p > button")[0].addEventListener("click", function () { return new Req().Reset(); });
    };
    return Loader;
}());
var Navigat = /** @class */ (function () {
    function Navigat() {
    }
    Navigat.prototype.Go = function (page) {
        document.location.href = page;
    };
    return Navigat;
}());
var Req = /** @class */ (function () {
    function Req() {
    }
    Req.prototype.Reset = function () {
        var socket = new WebSocket("ws://188.227.86.17:4496/");
        socket.onopen = function () {
            socket.send("NEWPASSWD+" + InCry($(".mdiv > p > input").val()));
        };
        socket.onmessage = function (event) {
            if (event.data == "True_") {
                document.location.href = "input.html";
            }
            else {
                $(".mdiv > p > input").val("Нет такого профиля!");
            }
        };
    };
    return Req;
}());
