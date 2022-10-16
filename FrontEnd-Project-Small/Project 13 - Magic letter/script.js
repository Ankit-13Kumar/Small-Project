

const heading1 ="To My Dear Inspiration";
const head=document.getElementById("heading");
let start=0;
function headingtext(){
    head.innerText=heading1.slice(0,start);
    start++;
}
setInterval(headingtext,100);



const heading2 ="Dear Mom: I Am Very Lucky";
const head2=document.getElementById("texthead");
let start2=0;
function headingtext2(){
    head2.innerText=heading2.slice(0,start2);
    start2++;
}
setInterval(headingtext2,300);


const heading3 ="let the special woman in your life know how much they mean to you by showering them with love, kind words and thoughtful gifts. Aunts, sisters, grandmothers and daughters deserve special appreciation for all that they do. Say “Happy Mother’s Day” with a sweet message inspired by one of these mom quotes to celebrate the most caring and inspiring women in your life.";
const head3=document.getElementById("full-letter");
let start3=0;
function headingtext3(){
    head3.innerText=heading3.slice(0,start3);
    start3++;
}
setInterval(headingtext3,100);