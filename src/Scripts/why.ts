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
    }
}

class Navigat implements INavigat{
    Go(page: string): void{
        document.location.href = page;
    }
}