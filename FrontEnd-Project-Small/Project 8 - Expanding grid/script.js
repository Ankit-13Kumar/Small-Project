

function boxContainer(name){
    var x;
    x=document.getElementsByClassName("container");
    for(var i=0; i<x.length;i++){
        x[i].style.display="none";
    }
document.getElementById(name).style.display="block";
}