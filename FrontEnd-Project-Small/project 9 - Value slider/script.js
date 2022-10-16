

var slider=document.getElementById("rangevalue");
var btn=document.getElementById("Result");
btn.innerHTML=slider.value;
slider.oninput=function(){
    btn.innerHTML=slider.value; 
}