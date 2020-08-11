'use strict';
var Loader = /** @class */ (function () {
    function Loader() {
    }
    Loader.prototype.Load = function () {
        this.Events();
    };
    Loader.prototype.Events = function () {
        //slider
        var slider = new Slider();
        var i = 0;
        var n = $(".Gallery > img").length;
        var _loop_1 = function () {
            var elem = $(".Gallery > img")[i];
            $(".Gallery > img")[i].addEventListener("click", function () { return slider.Next(elem); });
            i++;
        };
        while (i < n) {
            _loop_1();
        }
        slider.Slide();
        //navigator
        var navigator = new Navigat();
        var data = [
            "hoster_block.html",
            "help.html",
            "busket.html",
            "http://188.227.86.17/App/com.companyname.moveup.apk",
            "input.html"
        ];
        i = 0;
        var _loop_2 = function () {
            var page = data[i];
            $("#root > div > header > div > button")[i].addEventListener("click", function () { return navigator.Go(page); });
            i++;
        };
        while (i <= 4) {
            _loop_2();
        }
        if (localStorage.getItem("mlogin") != null) {
            $("header > div > #autho").css({ "display": "none" });
            $("header > div > #exit").css("display", "block");
            $("header > div > #exit")[0].addEventListener("click", function () { return navigator.Exit(); });
        }
        $("header > div > p")[0].addEventListener("click", function () { return navigator.Go("RedS.html"); });
        //order
        var nameDiv = [
            ".netShop",
            ".catalog",
            ".vizit",
            ".coop",
            ".program",
            ".app",
            ".updtDisgn",
            ".chngStruct",
            ".updtCont",
            ".addFunc"
        ];
        var pathImg = [
            "shop.jpg",
            "catalog.jpg",
            "vizit.jpg",
            "coop.jpg",
            "windows.jpg",
            "ai.png",
            "disign.jpg",
            "modify1.jpg",
            "conent.jpg",
            "modify2.jpg"
        ];
        i = 0;
        n = nameDiv.length;
        var _loop_3 = function () {
            var text = $(nameDiv[i] + " > p").text();
            var textImg = pathImg[i];
            $(nameDiv[i])[0].addEventListener("click", function () { return navigator.GoGet(text, textImg); });
            i++;
        };
        while (i < n) {
            _loop_3();
        }

        //IsPhone
        if (window.matchMedia("(max-device-width:480px) and (orientation: portrait)").matches){
            $("main > div").css("display", "none");
            $("header > div").css("display", "none");
            $("main > .msg").css("display", "block");
            $("header > meta").attr("content", "width=device-width, initial-scale=1");
        }
    };
    return Loader;
}());
var Slider = /** @class */ (function () {
    function Slider() {
    }
    Slider.prototype.Next = function (val) {
        $(".imgsSlide > img").css({ "opacity": 0.2 });
        setTimeout(function () {
            $(".imgsSlide > img")[0].src = val.src;
            $(".imgsSlide > img").css({ "opacity": 1 });
        }, 500); //400
    };
    Slider.prototype.Slide = function () {
        var n = $(".Gallery > img").length;
        var i = 1;
        setInterval(function () {
            var elem = $(".Gallery > img")[i];
            $(".imgsSlide > img").css({ "opacity": 0.2 });
            setTimeout(function () {
                $(".imgsSlide > img")[0].src = elem.src;
                $(".imgsSlide > img").css({ "opacity": 1 });
            }, 500);
            i = i == n - 1 ? 0 : i + 1;
        }, 5000);
    };
    return Slider;
}());
var Navigat = /** @class */ (function () {
    function Navigat() {
    }
    Navigat.prototype.Go = function (page) {
        document.location.href = page;
    };
    Navigat.prototype.GoGet = function (textMain, pImg) {
        var str = "order.html?" + textMain + '&' + pImg;
        document.location.href = str;
    };
    Navigat.prototype.Exit = function () {
        localStorage.clear();
        location.reload();
    };
    return Navigat;
}());
