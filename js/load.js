// import {Science2} from '/Science2';

var queryString = window.location.search;
console.log(queryString);
var urlParams = new URLSearchParams(queryString);
var page = urlParams.get('fname')
console.log(page);



// var c = window.location.search;

// console.log(c.valueOf());


//var a = "1.js";


function load(page) {
    var src = document.createElement("script");
    src.setAttribute("type","text/javascript");
    src.setAttribute("src","js/"+page);
    document.getElementsByTagName("head")[0].appendChild(src);

    
}
load(page);




