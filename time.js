"use strict"

    var beginTime = prompt("insert beginning number");
    var h1 = document.querySelector("h1");
    // var button = document.getElementById("btn");

    var i = beginTime;
    var count = setInterval(function(){
        i--;
        console.log(i);
        if (i <= 0) {
            clearInterval(count);
        };
    }, 1000);