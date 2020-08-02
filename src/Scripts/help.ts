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
        if(localStorage.getItem("mlogin") != null){
            $("header > div > #autho").css({"display": "none"});
            $("header > div > #exit").css("display", "block");
            $("header > div > #exit")[0].addEventListener("click", () => navigator.Exit());
        }
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