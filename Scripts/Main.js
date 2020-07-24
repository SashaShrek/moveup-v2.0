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
            "input.html"
        ];
        i = 0;
        var _loop_2 = function () {
            var page = data[i];
            $("#root > div > header > div > button")[i].addEventListener("click", function () { return navigator.Go(page); });
            i++;
        };
        while (i <= 3) {
            _loop_2();
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
    return Navigat;
}());
