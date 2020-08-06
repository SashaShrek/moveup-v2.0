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
        $(".regPanel > p > button")[0].addEventListener("click", function () { return sender.Register(); });
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
            $(".inPanel").css(bl ? { "opacity": 1, "height": "200px" } :
                { "opacity": 0, "height": "0px" });
        }, 50);
        bl ? this.RegShow(false) : null;
    };
    Navigat.prototype.RegShow = function (bl) {
        $(".regPanel").css(bl ? { "display": "block" } : { "display": "none" });
        setTimeout(function () {
            $(".regPanel").css(bl ? { "opacity": 1, "height": "150px" } :
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
        let mail = $(".inPanel > p > #mail").val();
        let pass = $(".inPanel > p > #pass").val();
        if(mail == "" || pass == ""){
            $("#err").text("Заполните все поля");
            return;
        }
        let message = "ENTER+++++" + InCry(mail + '&' + pass);
        let socket = new WebSocket("ws://188.227.86.17:4496");
        socket.onopen = () => {
            socket.send(message);
        };
        socket.onmessage = event => {
            if(event.data == "False_"){
                $("#err").text("Пользователь не существует!");
            }else{
                localStorage.setItem("mlogin", mail);
                new Navigat().Go("hoster_block.html");
            }
        };
    };
    Sender.prototype.Register = function () {
        let name = $(".regPanel > p #name").val();
        let lastname = $(".regPanel > p > #lastname").val();
        let mail = $(".regPanel > p > #mail").val();
        let pass = $(".regPanel > p > #pass").val();
        let repass = $(".regPanel > p > #repass").val();
        let check = $("#check")[0];
        if(pass != repass) {
            $("#err").text("Пароли не совпадают!");
            return;
        }
        if(name != "" && lastname != "" && mail != "" && pass != "" && check.checked){
            let message = "REGISTER++" + InCry(name + '&' + lastname + '&' + mail + '&' + pass);
            let socket = new WebSocket("ws://188.227.86.17:4496");
            socket.onopen = () => {
                socket.send(message);
            };
            socket.onmessage = event => {
                if(event.data == "True_") {
                    localStorage.setItem("mlogin", mail);
                    new Navigat().Go("hoster_block.html");
                }else $("#err").text("Пользователь существует!");
            };
        }else{
            $("#err").text("Заполните все поля и прочтите политику конфиденциальности");
        }
    };
    return Sender;
}());
