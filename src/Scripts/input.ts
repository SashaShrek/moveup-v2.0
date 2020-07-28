'use strict';

interface ILoader{
    Load(): void;
    Events(): void;
}
interface INavigat{
    Go(page: string): void;
    InputShow(bl: boolean): void;
    RegShow(bl: boolean): void;
}
interface ISender{
    Input(): void;
    Register(): void;
}


class Loader implements ILoader{
    Load(): void{
        this.Events();
    }
    Events(): void{
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
        $(".input")[0].addEventListener("click", () => navigator.InputShow(true));
        $(".register")[0].addEventListener("click", () => navigator.RegShow(true));
        let sender: Sender = new Sender();
        //let form: JQuery<HTMLElement> = $(".inPanel > form");
        $(".inPanel > p > button")[0].addEventListener("click", () => sender.Input())
    }
}

class Navigat implements INavigat{
    Go(page: string): void{
        document.location.href = page;
    }
    InputShow(bl: boolean): void{
        $(".inPanel").css(bl ? {"display": "block"} : {"display": "none"});
        setTimeout(() => {
            $(".inPanel").css(bl ? {"opacity": 1, "height": "100px"} : 
            {"opacity": 0, "height": "0px"});
        }, 50);
        bl ? this.RegShow(false) : null;
    }
    RegShow(bl: boolean): void{
        $(".regPanel").css(bl ? {"display": "block"} : {"display": "none"});
        setTimeout(() => {
            $(".regPanel").css(bl ? {"opacity": 1, "height": "100px"} : 
            {"opacity": 0, "height": "0px"});
        }, 50);
        bl ? this.InputShow(false) : null
    }
}

class Sender implements ISender{
    Input(): void{
        
    }
    Register(): void{

    }
}