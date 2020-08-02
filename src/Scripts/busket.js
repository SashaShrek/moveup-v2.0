class Loader{
    Load(){
        this.Events();
        new Data().GetData();
        if(location.search == null || location.search == ""){
            document.getElementsByClassName("message")[0].style.display = "none";
        }
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
        if(localStorage.getItem("mlogin") != null){
            $("header > div > #autho").css({"display": "none"});
            $("header > div > #exit").css("display", "block");
            $("header > div > #exit")[0].addEventListener("click", () => navigator.Exit());
        }
    }
}

class Navigator{
    Go(page){
        document.location.href = page;
    }
    Exit() {
        localStorage.clear();
        location.reload();
    }
}

class Data {
    GetData() {
        let txt = "GETDATA+++" + InCry(localStorage.getItem("mlogin"));
        let socket = new WebSocket("ws://188.227.86.17:4496");
        socket.onopen = function(){
            socket.send(txt);
        };
        socket.onmessage = event => {
            if(event.data != "False_") {
                let onepart = event.data.split('/')[0];
                let o = event.data.lastIndexOf('/');
                o += 1;
                let twopart = event.data.substr(o, event.data.length);
                let table = document.getElementById("table");
                let j = 1;
                let data = "";
                let kl = 0;
                table.insertRow(j);

                data = onepart.split('&');
                let data1 = twopart.split('&');
                while(j <= data.length){
                    let new_row = table.insertRow(j);
                    let new_cell = new_row.insertCell(0);
                    let new_text = document.createTextNode(data[j - 1]);
                    new_cell.appendChild(new_text);
                    table.rows[j].cells[0].style.cursor = "pointer";

                    new_cell = new_row.insertCell(1);
                    new_text = document.createTextNode(data1[j - 1]);
                    new_cell.appendChild(new_text);
                    j++;
                }
            }
        };
    }
}