var clicks = 0;
    function myFunction() {

        clicks += 1;
        document.getElementById("demo").innerHTML = clicks;
    }

let quotes=[];

function GetQuotes(){
    return fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data=>{
        quotes=data;

        Change();
    })
}

function Change(){
    let count= quotes.length;
    let rndNumb=Math.floor(Math.random()*count);

    document.getElementById('text').innerText=quotes[rndNumb].text;
    document.getElementById('author').innerText="-"+quotes[rndNumb].author;

}
GetQuotes();
