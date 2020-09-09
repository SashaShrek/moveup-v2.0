class Loader{
    Load(){
        if(location.search == null || location.search == ""){
            document.getElementsByClassName("message")[0].style.display = "none";
        }
        this.Events();
        new Data().GetData();
    }
    Events(){
        //navigator
        let navigator = new Navigator();
        var data = [
            "hoster_block.html",
            "help.html",
            "busket.html",
            "input.html",
            "Works.html"
        ];
        let i = 0;
        while(i <= 4){
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
        let txt = "GETDATA+++" + localStorage.getItem("mlogin");
        let socket = new WebSocket("ws://188.227.86.17:4496");
        socket.onopen = function(){
            socket.send(txt);
        };
        socket.onmessage = event => {
            if(event.data != "False_") {
                let arr = event.data.split('+');
                let onepart = arr[0];
                //alert(onepart)
                let twopart = arr[1];
                //alert(twopart)
                let table = document.getElementById("table");
                //table.insertRow(j);
                let data = onepart.split('&');
                let data1 = twopart.split('&');
                let j = 0;
                let n = data.length - 1;
                while(j < n){
                    let row = table.insertRow(j + 1);
                    let cell = row.insertCell(0);
                    let text = document.createTextNode(data[j]);
                    cell.appendChild(text);
                    cell = row.insertCell(1);
                    text = document.createTextNode(data1[j]);
                    cell.appendChild(text);
                    j++;
                }
                //data = onepart.split('&');
                //let data1 = twopart.split('&');
                // while(j <= data.length){
                //     let new_row = table.insertRow(j);
                //     let new_cell = new_row.insertCell(0);
                //     let new_text = document.createTextNode(data[j - 1]);
                //     new_cell.appendChild(new_text);
                //     table.rows[j].cells[0].style.cursor = "pointer";

                //     new_cell = new_row.insertCell(1);
                //     new_text = document.createTextNode(data1[j - 1]);
                //     new_cell.appendChild(new_text);
                //     j++;
                // }
            }
        };
    }
}