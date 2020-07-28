'use strict';

interface ILoader{
    Load(): void;
    Events(): void;
}

interface ISlider{
    Next?(val: HTMLElement): void;
    Slide(): void;
}

class Loader implements ILoader{
    Load(): void{
        this.Events();
    }
    Events(): void{
        //slider
            let slider: Slider = new Slider();
            let i: number = 0;
            let n: number = $(".Gallery > img").length;
            while(i < n){
                let elem: HTMLElement = $(".Gallery > img")[i];
                $(".Gallery > img")[i].addEventListener("click", () => slider.Next(elem));
                i++;
            }
            slider.Slide();
        //navigator
            let navigator: Navigat = new Navigat();
            let data: object = [
                "hoster_block.html",
                "help.html",
                "busket.html",
                "input.html"
            ];
            i = 0;
            while(i <= 3){
                let page: string = data[i];
                $("#root > div > header > div > button")[i].addEventListener("click", () => navigator.Go(page));
                i++;
            }
        }
}

class Slider implements ISlider{
    Next(val: HTMLElement): void{
        $(".imgsSlide > img").css({"opacity": 0.2});
        setTimeout(() => {
            ($(".imgsSlide > img")[0] as HTMLImageElement).src = (val as HTMLImageElement).src;
            $(".imgsSlide > img").css({"opacity": 1});
        }, 500);//400
    }
    Slide(): void{
        let n: number = $(".Gallery > img").length;
        let i: number = 1;
        
        setInterval(() => {
            let elem: HTMLElement = $(".Gallery > img")[i];
            $(".imgsSlide > img").css({"opacity": 0.2});
            setTimeout(() => {
                ($(".imgsSlide > img")[0] as HTMLImageElement).src = (elem as HTMLImageElement).src;
                $(".imgsSlide > img").css({"opacity": 1});
            }, 500);
            i = i == n - 1 ? 0 : i + 1;
        }, 5000);
    }
}

class Navigat{
    Go(page: string): void{
        document.location.href = page;
    }
}