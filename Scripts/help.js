class Loader{
    Load(){
        this.Events();
    }
    Events(){
    //navigator
        let navigator = new Navigator();
        let data = [
            "hoster_block.html"
        ];
        let i = 0;
        while(i <= 0){
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