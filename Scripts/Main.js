'use strict';
class Loader{
    Load(){
        this.Events();
    }
    Events(){
    //slider
        let slider = new Slider();
        let i = 0;
        let n = $(".Gallery > img").length;
        while(i < n){
            let elem = $(".Gallery > img")[i];
            $(".Gallery > img")[i].addEventListener("click", () => slider.Next(elem));
            i++;
        }
        slider.Slide();
    //navigator
        let navigator = new Navigator();
        let data = [
            "help.html"
        ];
        i = 1;
        while(i <= 1){
            let page = data[i - 1];
            $("#root > div > header > div > button")[i].addEventListener("click", () => navigator.Go(page));
            i++;
        }
    }
}

class Slider{
    Next(val){
        $(".imgsSlide > img").css({"opacity": 0.2});
        setTimeout(() => {
            $(".imgsSlide > img")[0].src = val.src;
            $(".imgsSlide > img").css({"opacity": 1});
        }, 400);
    }
    Slide(){
        let n = $(".Gallery > img").length;
        let i = 1;
        
        setInterval(() => {
            let elem = $(".Gallery > img")[i];
            $(".imgsSlide > img").css({"opacity": 0.2});
            setTimeout(() => {
                $(".imgsSlide > img")[0].src = elem.src;
                $(".imgsSlide > img").css({"opacity": 1});
            }, 400);
            i = i == n - 1 ? 0 : i + 1;
        }, 5000)
    }
}

class Navigator{
    Go(page){
        document.location.href = page;
    }
}