'use strict';

class LoadPage {
    OnLoad(){
        let fac = [
            "fac1.jpg", "fac2.jpg", "fac3.jpg", "fac4.jpg"
        ];
        let prec = [
            "prec1.jpg", "prec2.jpg", "prec3.jpg", "prec4.jpg"
        ];
        let law = [
            "law1.jpg", "law2.jpg", "law3.jpg", "law4.jpg", "law5.jpg", "law6.jpg", "law7.jpg"
        ];
        let moveup = [
            "moveup1.jpg", "moveup2.jpg", "moveup3.jpg", "moveup4.jpg", "moveup5.jpg", "moveup6.jpg"
        ];
        let movef = [
            "movef1.jpg", "movef2.jpg", "movef3.jpg", "movef4.jpg", "movef5.jpg"
        ];
        let task = [
            "task1.jpg", "task2.jpg", "task3.jpg", "task4.jpg", "task5.jpg"
        ];
        let hand = [
            "hand1.jpg", "hand2.jpg", "hand3.jpg", "hand4.jpg"
        ];
        let path = "src/Images/";
        let Nfac = fac.length;
        let i = 1;
        setInterval(function(){
            let elem = fac[i];
            $("#fac").css({"opacity": 0.2});
            setTimeout(function(){
                $("#fac")[0].src = path + elem;
                $("#fac").css({"opacity": 1});
            }, 500);
            i = i == Nfac - 1 ? 0 : i + 1;
        }, 5000);
        let Nprec = prec.length;
        let i1 = 1;
        setInterval(function(){
            let elem = prec[i1];
            $("#prec").css({"opacity": 0.2});
            setTimeout(function(){
                $("#prec")[0].src = path + elem;
                $("#prec").css({"opacity": 1});
            }, 500);
            i1 = i1 == Nprec - 1 ? 0 : i1 + 1;
        }, 5200);
        let Nlaw = law.length;
        let i2 = 1;
        setInterval(function(){
            let elem = law[i2];
            $("#law").css({"opacity": 0.2});
            setTimeout(function(){
                $("#law")[0].src = path + elem;
                $("#law").css({"opacity": 1});
            }, 500);
            i2 = i2 == Nlaw - 1 ? 0 : i2 + 1;
        }, 5400);
        let Nmoveup = moveup.length;
        let i3 = 1;
        setInterval(function(){
            let elem = moveup[i3];
            $("#moveup").css({"opacity": 0.2});
            setTimeout(function(){
                $("#moveup")[0].src = path + elem;
                $("#moveup").css({"opacity": 1});
            }, 500);
            i3 = i3 == Nmoveup - 1 ? 0 : i3 + 1;
        }, 5600);
        let Nmovef = movef.length;
        let i4 = 1;
        setInterval(function(){
            let elem = movef[i4];
            $("#movef").css({"opacity": 0.2});
            setTimeout(function(){
                $("#movef")[0].src = path + elem;
                $("#movef").css({"opacity": 1});
            }, 500);
            i4 = i4 == Nmovef - 1 ? 0 : i4 + 1;
        }, 5800);
        let Ntask = task.length;
        let i5 = 1;
        setInterval(function(){
            let elem = task[i5];
            $("#task").css({"opacity": 0.2});
            setTimeout(function(){
                $("#task")[0].src = path + elem;
                $("#task").css({"opacity": 1});
            }, 500);
            i5 = i5 == Ntask - 1 ? 0 : i5 + 1;
        }, 6000);
        let Nhand = hand.length;
        let i6 = 1;
        setInterval(function(){
            let elem = hand[i6];
            $("#hand").css({"opacity": 0.2});
            setTimeout(function(){
                $("#hand")[0].src = path + elem;
                $("#hand").css({"opacity": 1});
            }, 500);
            i6 = i6 == Nhand - 1 ? 0 : i6 + 1;
        }, 6200);
        let ev = new Event();
        //$("#fac")[0].addEventListener("click", () => ev.Zoom($("#fac")));
        var data = [
            "hoster_block.html",
            "help.html",
            "busket.html",
            "input.html",
            "Works.html"
        ];
        let j = 0;
        var _loop_2 = function () {
            var page = data[j];
            $("#root > div > header > div > button")[j].addEventListener("click", function () { return ev.Go(page); });
            j++;
        };
        while (j <= 4) {
            _loop_2();
        }
        if (localStorage.getItem("mlogin") != null) {
            $("header > div > #autho").css({ "display": "none" });
            $("header > div > #exit").css("display", "block");
            $("header > div > #exit")[0].addEventListener("click", function () { return navigator.Exit(); });
        }
    }
}

class Event {
    Zoom(el){
        el.css({"transform": "scale(2)"});
    }
    Go(page){
        document.location.href = page;
    }
}