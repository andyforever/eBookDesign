$(document).ready(function (){
    
    // var info = {
        // ox: ,
        // oy: ,
        // oz: ,
        // ow: ,
        // oh: ,
        // src: 
    // }
    
    var ox = document.getElementById("ox");
    var oy = document.getElementById("oy");
    var oz = document.getElementById("oz");
    var oy = document.getElementById("oy");
    var oz = document.getElementById("oz");
    var target = "undefined";
    var locked = false;
    
    
    document.onmousedown = function(event) {
        if (target != "undefined") {
            target.style.border = "1px solid rgba(0,0,0,0.8)";
        };
        target = document.getElementById(event.target.id);
        target.style.border = "2px solid red";
        
    }
    
    document.onmousemove = function(event) {
        console.log(target);
        if(target == "undefined") {
            ox.innerText = event.pageX + "px";
            oy.innerText = event.pageY + "px";
        }
        //console.log(e.pageX);
    }
    
    document.onmouseup = function(event) {
        if(target.id != event.target.id) {
           target == "undefined";
           target.style.border = "1px solid rgba(0,0,0,0.8)";
        } else {
           console.log(target.id);
           ox.innerText = target.offsetLeft + "px";
           oy.innerText = target.offsetTop + "px";
           ow.innerText = target.offsetWidth + "px";
           oh.innerText = target.offsetHeight + "px"; 
        }
        
        // target = "undefined"; 
    }
});
