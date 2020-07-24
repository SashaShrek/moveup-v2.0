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
        $(".input")[0].addEventListener("click", () => navigator.InputShow());
        let sender = new Sender();
        let form = $(".inPanel > form");
        $(".inPanel > p > button")[0].addEventListener("click", () => sender.Input(form))
    }
}

class Navigator{
    Go(page){
        document.location.href = page;
    }
    InputShow(){
        $(".inPanel").css({"display": "block"});
        setTimeout(() => {
            $(".inPanel").css({"opacity": 1, "height": "100px" });
        }, 50);
    }
}

class Sender{
    Input(form){
        form = form.serialize();
        $.ajax({
            type: "POST",
            url: "ex.php",
            data: form,
            cache: false,
            dataType: 'application/x-www-form-urlencoded',
            success: function(data) {
                alert("sdsdsd")
            }
        });
    }
    Register(){

    }
}