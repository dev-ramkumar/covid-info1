
     export default function XhttpGet(url,dataIn){
        var data = dataIn || "" 
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var data=JSON.parse(this.responseText)
               return data;
                console.log(data.Global)
            }
        };
        xhttp.open("GET", url, true);
        xhttp.withCredentials = false;
        xhttp.send(data);
    }
