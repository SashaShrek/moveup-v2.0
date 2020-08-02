'use strict';

interface ILoader{
    Load(): void;
    Events(): void;
}

interface INavigat{
    Go(page: string): void;
}

class Loader implements ILoader{
    Load(): void{
        this.Events();
    }
    Events(): void{
    //Navigat
        let navigat: Navigat = new Navigat();
        let data: Array<string> = [
            "hoster_block.html",
            "help.html",
            "busket.html",
            "input.html"
        ];
        let i: number = 0;
        let n: number = data.length;
        while(i < n){
            let page: string = data[i];
            $("#root > div > header > div > button")[i].addEventListener("click", () => navigat.Go(page));
            i++;
        }
        if(localStorage.getItem("mlogin") != null){
            $("header > div > #autho").css({"display": "none"});
            $("header > div > #exit").css("display", "block");
            $("header > div > #exit")[0].addEventListener("click", () => navigat.Exit());
        }
    }
}

class Navigat implements INavigat{
    Go(page: string): void{
        document.location.href = page;
    }
    Exit(): void {
        localStorage.clear();
        location.reload();
    }
}