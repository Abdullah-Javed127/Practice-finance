let inputRent=document.getElementById("input-rent-cal");
let enterBtn=document.getElementById("enter");
let div=document.getElementById("div1");

enterBtn.addEventListener("click",function()
{
    let list=[];
    let lists=[];
    let listItems=[];
    
    list[0]=inputRent.value /30; 
    list[1]=inputRent.value /4.29; 
    list[2]=inputRent.value;
    list[3]=inputRent.value*6;
    list[4]=inputRent.value*12;

    listItems=`${list[0]}<br>${list[1]}<br>${list[2]}<br>${list[3]}<br>${list[4]}`

    inputRent.value=null;
    div.innerHTML=listItems;
})