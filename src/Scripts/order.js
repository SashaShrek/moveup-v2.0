'use strict';
var Loader = /** @class */ (function () {
    function Loader() {
    }
    Loader.prototype.Load = function () {
        var type = "";
        var adress = decodeURIComponent(location.search.substring(1, location.search.length));
        var adrArr = adress.split('&');
        $(".headmdiv > img")[0].src = "src/Images/" + adrArr[1];
        switch (adrArr[0]) {
            case "Интернет-магазин":
                $(".headmdiv > #opis").text("Интернет-магазин - это специализированный вид бизнеса, основанный на дистанционном обслуживании и дающий возможность продавцу и покупателю совершать сделки по покупке/продаже того или иного вида товаров посредством сети Интернет.Магазин виртуального типа, специализированный интерактивный web-сайт, рекламирующий товар или услугу, принимающий заказы на покупку, предлагающий пользователю выбор варианта расчета, способа получения заказа и осуществление оплаты on-line.");
                $("#price").text(" Стоимость: 30000р.");

                // $("#price").html((i, html) => {
                //     return html.replace(/30000р./g, "<s>30000р.</s>");
                // });
                //$("#newPrice").text("15000р.");

                $("#common").css("display", "block");
                type = "common";
                break;
            case "Каталог":
                $(".headmdiv > p").text("Сайт-каталог - сайт, который создается для увеличения количества продаж товаров и услуг за счет доступа к их полному описанию, иллюстрации, ценам.Рекламный сайт с постоянно обновляющейся информацией о товарах/услугах. Содержит прайс-листы, фотографии и описание продукции. Является удобным ресурсом для клиентов, которые территориально отдалены от компании и могут изучить продукцию на сайте, не проводя много времени в торговом зале. Покупка товаров/услуг осуществляется путем обращения покупателя в компанию по указанным на сайте контактам.");
                $("#price").text("Стоимость: от 25000р.");

                $("#common").css("display", "block");
                type = "common";
                break;
            case "Ваша визитка":
                $(".headmdiv > p").text("Сайт-визитка – сайт имиджевой рекламы, вызывающий позитивные эмоции и формирующий доверие клиента. Основная задача сайта-визитки познакомить клиента с компанией. Сайт содержит значительные объемы графики, анимации, Flash-технологий. В функционал входят возможности обратной связи.");
                $("#price").text("Стоимость: от 20000р.");

                $("#common").css("display", "block");
                type = "common";
                break;
            case "Корпоративное приложение":
                $(".headmdiv > p").text("Корпоративный сайт – это портал, необходимый элемент успешной работы любой компании. Он является полноценным представительством компании в Интернете и эффективным инструментом для привлечения и удержания новых клиентов. Ориентирован на существующих и потенциальных бизнес-партнеров, а также прессу. Многофункциональный инструмент, который помогает ускорить и усовершенствовать реализацию бизнес-процессов компании. Задачами корпоративного сайта являются повышение имиджа компании, конкурирование в Интернет-среде путем предоставления полной информации о компании, продукции компании, информации об акциях и скидках на продукцию компании, рекламы товаров/услуг, информирование о новостях компании и многое другое.");
                $("#price").text("Стоимость: от 35000р.");

                $("#common").css("display", "block");
                type = "common";
                break;
            case "Обновление дизайна":
                $(".headmdiv > p").text("Рекомендуем в случае: ребрендинг, новые сегменты целевой аудитории, изменение требований рынка");
                ;
                $("#price").text("Стоимость: Договорная.");

                $("#modify").css("display", "block");
                type = "modify";
                break;
            case "Изменение структуры":
                $(".headmdiv > p").text("Рекомендуем в случае: расширение ассортимента товаров/услуг, для повышения удобства навигации пользователей, смена основных задач");
                ;
                $("#price").text("Стоимость: Договорная.");

                $("#modify").css("display", "block");
                type = "modify";
                break;
            case "Обновление контента":
                $(".headmdiv > p").text("Рекомендуем в случае: ребрендинг, необходимости повышения эффективности продвижения продукта");
                ;
                $("#price").text("Стоимость: Договорная.");
                $("#newPrice").text(null);
                $("#modify").css("display", "block");
                type = "modify";
                break;
            case "Расширение функционала":
                $(".headmdiv > p").text("Рекомендуем в случае: смены пользовательских требований, смена алгоритмов поисковых систем, наличие у конкурентов более удобных сервисов");
                ;
                $("#price").text("Стоимость: Договорная.");
                $("#newPrice").text(null);
                $("#modify").css("display", "block");
                type = "modify";
                break;
            case "Приложения для Android/iOS":
                $(".headmdiv > p").text("Мобильное приложение – это специально разработанное под функциональные возможности гаджетов программное обеспечение (ПО). С помощью мобильного приложения пользователям предоставляется более удобный доступ к сервисам. При этом использование мобильного приложения возможно в фоновом режиме без браузера и доступа к Интернету.");
                $("#price").text("Стоимость: Договорная.");
                $("#newPrice").text(null);
                $("#common").css("display", "block");
                type = "common";
                break;
            case "Прикладное программное обеспечение":
                $(".headmdiv > p").text("Прикладное программное обеспечение - это ПО, созданное для автоматизации бизнес-процессов и предназначенное для непосредственного взаимодействие с пользователем. Обычно используется, когда необходима максимальная производительность и тяжёлые рассчёты, оптимизация процессов управления компанией, анализ экономической деятельности и пр.");
                $("#price").text("Стоимость: Договорная.");
                $("#newPrice").text(null);
                $("#common").css("display", "block");
                type = "common";
                break;
        }
        $("#titleMain").text(adrArr[0]);
        this.Events(type);
    };
    Loader.prototype.Events = function (type) {
        //navigat
        var navigator = new Navigat();
        var data = [
            "hoster_block.html",
            "help.html",
            "busket.html",
            "input.html",
            "Works.html"
        ];
        var i = 0;
        var _loop_1 = function () {
            var page = data[i];
            $("#root > div > header > div > button")[i].addEventListener("click", function () { return navigator.Go(page); });
            i++;
        };
        while (i <= 4) {
            _loop_1();
        }
        if (localStorage.getItem("mlogin") != null) {
            $("header > div > #autho").css({ "display": "none" });
            $("header > div > #exit").css("display", "block");
            $("header > div > #exit")[0].addEventListener("click", function () { return navigator.Exit(); });
        }
        else {
            $(".mainmdiv > p > button").css("display", "none");
            $(".mainmdiv > #msg").css("display", "block");
        }
        //pay
        var payer = new Pay();
        $(".mainmdiv > p > button")[0].addEventListener("click", function () { return payer.Pay(type); });
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
var Pay = /** @class */ (function () {
    function Pay() {
    }
    Pay.prototype.Pay = function (type) {
        if (!this.IsNull(type)) {
            $(".mainmdiv > #err").text("Заполните все поля!");
            document.getElementById("price").scrollIntoView();
            return;
        }
        var message;
        if (type == "common") {
            //let name_site, pages, ifPay, styles, contactInfo, login: string;
            var inputs_1 = {
                name_site: "",
                pages: "",
                contactInfo: ""
            };
            $("#common > input").map(function (x, el) {
                inputs_1.name_site = x == 0 ? $(el).val().toString() : inputs_1.name_site;
                inputs_1.pages = x == 1 ? $(el).val().toString() : inputs_1.pages;
                inputs_1.contactInfo = x == 2 ? $(el).val().toString() : inputs_1.contactInfo;
            });
            var texts_1 = {
                ifPay: "",
                styles: ""
            };
            $("#common > textarea").map(function (x, el) {
                texts_1.ifPay = x == 0 ? $(el).val().toString() : texts_1.ifPay;
                texts_1.styles = x == 1 ? $(el).val().toString() : texts_1.styles;
            });
            message = "ORDER+++++" + inputs_1.name_site + '&' + inputs_1.pages + '&' + texts_1.ifPay + '&' + texts_1.styles + '&' +
                inputs_1.contactInfo + '&' + $("#titleMain").text() + '&' + localStorage.getItem("mlogin");
        }
        else {
            var styles = void 0, info = void 0;
            styles = $("#modify > textarea").val();
            info = $("#modify > input").val().toString();
            message = "ORDERM++++" + styles + '&' + info + '&' + $("#titleMain").text() + '&' + localStorage.getItem("mlogin");
        }
        var socket = new WebSocket("ws://188.227.86.17:4496");
        socket.onopen = function () {
            socket.send(message);
        };
        socket.onmessage = function (event) {
            if (event.data == "True_") {
                new Navigat().Go("busket.html?True_");
            }
        };
    };
    Pay.prototype.IsNull = function (t) {
        if (t == "common") {
            var n = $("#common > input").length;
            var str = $("#common > input").map(function (x, el) {
                if ($(el).val() == "")
                    return false;
            });
            var i = 0;
            while (i < n) {
                if (str[i] == false)
                    return false;
                i++;
            }
            str = $("#common > textarea").map(function (x, el) {
                if ($(el).val() == "")
                    return false;
            });
            i = 0;
            while (i < n) {
                if (str[i] == false)
                    return false;
                i++;
            }
            return true;
        }
        else {
            return ($("#modify > textarea").val() == "" || $("#modify > input").val() == "") ? false : true;
        }
    };
    return Pay;
}());
