'use strict';

interface ILoader{
    Load(): void;
    Events(type: string): void;
}
interface IPay {
    Pay(type: string): void;
    IsNull(t: string): boolean;
}

class Loader implements ILoader{
    Load(): void{
        let type: string = "";
        let adress: string = decodeURIComponent(location.search.substring(1, location.search.length));
        let adrArr: Array<string> = adress.split('&');
        ($(".headmdiv > img")[0] as HTMLImageElement).src = "src/Images/" + adrArr[1];
        switch(adrArr[0]){
            case "Интернет-магазин":
                $(".headmdiv > p").text("Интернет-магазин - это специализированный вид бизнеса, основанный на дистанционном обслуживании и дающий возможность продавцу и покупателю совершать сделки по покупке/продаже того или иного вида товаров посредством сети Интернет.Магазин виртуального типа, специализированный интерактивный web-сайт, рекламирующий товар или услугу, принимающий заказы на покупку, предлагающий пользователю выбор варианта расчета, способа получения заказа и осуществление оплаты on-line.");
                $("#price").text("Стоимость: от 30000р.");
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
                $(".headmdiv > p").text("Рекомендуем в случае: ребрендинг, новые сегменты целевой аудитории, изменение требований рынка");;
                $("#price").text("Стоимость: Договорная.");
                $("#modify").css("display", "block");
                type = "modify";
            break;
            case "Изменение структуры":
                $(".headmdiv > p").text("Рекомендуем в случае: расширение ассортимента товаров/услуг, для повышения удобства навигации пользователей, смена основных задач, выполняемых сайтом");;
                $("#price").text("Стоимость: Договорная.");
                $("#modify").css("display", "block");
                type = "modify";
            break;
            case "Обновление контента":
                $(".headmdiv > p").text("Рекомендуем в случае: ребрендинг, необходимости повышения эффективности продвижения сайта");;
                $("#price").text("Стоимость: Договорная.");
                $("#modify").css("display", "block");
                type = "modify";
            break;
            case "Расширение функционала":
                $(".headmdiv > p").text("Рекомендуем в случае: смены пользовательских требований, смена алгоритмов поисковых систем, наличие у конкурентов более удобных сервисов");;
                $("#price").text("Стоимость: Договорная.");
                $("#modify").css("display", "block");
                type = "modify";
            break;
            case "Приложения для Android/iOS":
                $(".headmdiv > p").text("Мобильные приложения позволят клиентам иметь более удобный доступ к вашим сервисам. Отпадает надобность в браузере и постоянному доступу к Интернету. Так же есть возможность реализовать новые и более производительные сервисы.");
                $("#price").text("Стоимость: Договорная.");
                $("#common").css("display", "block");
                type = "common";
            break;
            case "Прикладное программное обеспечение":
                $(".headmdiv > p").text("Прикладное программное обеспечение (ПО) предназначено для выполнения определенных задач и рассчитано на непосредственное взаимодействие с пользователем. Обычно используется, когда необходима максимальная производительность и необходимы тяжёлые рассчёты или задачи требуют удобной работы с программой.");
                $("#price").text("Стоимость: Договорная.");
                $("#common").css("display", "block");
                type = "common";
            break;
        }
        $("#titleMain").text(adrArr[0]);
        this.Events(type);
    }
    Events(type: string): void{
        //navigat
        let navigator: Navigat = new Navigat();
        let data: object = [
            "hoster_block.html",
            "help.html",
            "busket.html",
            "input.html"
        ];
        let i: number = 0;
        while(i <= 3){
            let page: string = data[i];
            $("#root > div > header > div > button")[i].addEventListener("click", () => navigator.Go(page));
            i++;
        }
        if(localStorage.getItem("mlogin") != null){
            $("header > div > #autho").css({"display": "none"});
            $("header > div > #exit").css("display", "block");
            $("header > div > #exit")[0].addEventListener("click", () => navigator.Exit());
        }else{
            $(".mainmdiv > p > button").css("display", "none");
            $(".mainmdiv > #msg").css("display", "block");
        }
        //pay
        let payer: Pay = new Pay();
        $(".mainmdiv > p > button")[0].addEventListener("click", () => payer.Pay(type));
    }
}

class Navigat{
    Go(page: string): void{
        document.location.href = page;
    }
    Exit(): void {
        localStorage.clear();
        location.reload();
    }
}

class Pay implements IPay {
    Pay(type: string): void {
        if(!this.IsNull(type)){
            $(".mainmdiv > #err").text("Заполните все поля!");
            document.getElementById("price").scrollIntoView();
            return;
        }
        var message: string;
        if(type == "common"){
            //let name_site, pages, ifPay, styles, contactInfo, login: string;
            let inputs = {
                name_site: "",
                pages: "",
                contactInfo: ""
            }
            $("#common > input").map((x: number, el: HTMLInputElement) => {
                inputs.name_site = x == 0 ? $(el).val().toString() : inputs.name_site;
                inputs.pages = x == 1 ? $(el).val().toString() : inputs.pages;
                inputs.contactInfo = x == 2 ? $(el).val().toString() : inputs.contactInfo;
            });
            let texts = {
                ifPay: "",
                styles: ""
            }
            $("#common > textarea").map((x: number, el: HTMLInputElement) => {
                texts.ifPay = x == 0 ? $(el).val().toString() : texts.ifPay;
                texts.styles = x == 1 ? $(el).val().toString() : texts.styles;
            });
            message = "ORDER+++++" + inputs.name_site + '&' + inputs.pages + '&' + texts.ifPay + '&' +  texts.styles + '&' + 
            inputs.contactInfo + '&' + $("#titleMain").text() + '&' + localStorage.getItem("mlogin");
        }else{
            let styles, info: string;
            styles = $("#modify > textarea").val();
            info = $("#modify > input").val().toString();
            message = "ORDERM++++" + styles + '&' + info + '&' + $("#titleMain").text() + '&' + localStorage.getItem("mlogin");
        }
        let socket = new WebSocket("ws://188.227.86.17:4496");
        socket.onopen = () => {
            socket.send(message);
        };
        socket.onmessage = event => {
            if(event.data == "True_") {
                new Navigat().Go("busket.html?True_");
            }
        };
    }
    IsNull(t: string): boolean {
        if(t == "common"){
            let n: number = $("#common > input").length;
            let str =  $("#common > input").map((x: number, el: HTMLInputElement) => {
                if($(el).val() == "") return false;
            });
            let i: number = 0;
            while(i < n){
                if(str[i] == false) return false;
                i++;
            }
            str = $("#common > textarea").map((x: number, el: HTMLInputElement) => {
                if($(el).val() == "") return false;
            });
            i = 0;
            while(i < n){
                if(str[i] == false) return false;
                i++;
            }
            return true;
        }else{
            return ($("#modify > textarea").val() == "" || $("#modify > input").val() == "") ? false : true;
        }
    }
}
