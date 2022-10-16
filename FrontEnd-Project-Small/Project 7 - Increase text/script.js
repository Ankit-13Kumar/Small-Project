

function scrollDocument(){
    if(document.body.scrollTo>100 || document.documentElement.scrollTop>100)
    {
        document.getElementById("scrolltext").style.fontSize="200px";
        document.body.style.background="red";
    }
    else{
        document.getElementById("scrolltext").style.fontSize="100px";
        document.body.style.background="blue";
    }
}

//call function
window.onscroll=function(){
    scrollDocument();
}