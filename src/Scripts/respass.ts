'use strict';
//import InCry from "./InCry";
interface ILoader {
    Load(): void;
    Events(): void;
}

class Loader implements ILoader {
    Load(): void {
        this.Events();
    }
    Events(): void {
    //navigator
        let navigator: Navigat = new Navigat();
        let data: Array<string> = [
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
        $(".mdiv > p > button")[0].addEventListener("click", () => new Req().Reset());
    }
}

class Navigat{
    Go(page: string): void{
        document.location.href = page;
    }
}

class Req {
    Reset(): void {
        let socket: WebSocket = new WebSocket("ws://188.227.86.17:4496/");
        socket.onopen = function(){
          //socket.send("NEWPASSWD+" + InCry($(".mdiv > p > input").val()));
        };
        socket.onmessage = function(event){
          if(event.data == "True_"){
            document.location.href = "input.html";
          }else{
            $(".mdiv > p > input").val("Нет такого профиля!");
          }
        };
    }
}