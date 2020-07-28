interface ILoader{
    Load(): void;
    Events(): void;
}

class Loader{
    Load(): void{
        this.Events();
    }
    Events(): void{
    //navigator
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
    }
}

class Navigat{
    Go(page: string): void{
        document.location.href = page;
    }
}