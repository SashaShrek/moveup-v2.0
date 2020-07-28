class Loader{
    Load(){
        this.Events();
    }
    Events(){
        //navigator
        let navigator = new Navigator();
        let data = [
            "hoster_block.html",
            "help.html",
            "busket.html",
            "input.html"
        ];
        let i = 0;
        while(i <= 3){
            let page = data[i];
            $("#root > div > header > div > button")[i].addEventListener("click", () => navigator.Go(page));
            i++;
        }
    }
}

class Navigator{
    Go(page){
        document.location.href = page;
    }
}