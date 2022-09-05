let inputFloor=document.getElementById("input-floors");
let inputRent=document.getElementById("input-rent");
let saveBtn=document.getElementById("save");
let list=document.getElementById("list");
let sum;
let save=[];//array

saveBtn.addEventListener("click",function()
{
    render();
})

function render()
{
    let button="";
    for(let x=1;x<=inputFloor.value;x++)
    {
        save+=`<input id=inputJS placeholder=Rent${x}><br>` //id here links to CSS
    }
    button=`<button onclick="total()">save</button>`; //onclick links to total function
    list.innerHTML=save+button;
}

let inputForRent=document.getElementById("list");
let save2Btn=document.getElementById("list");

save2Btn.innerHTML=button;//*

save2Btn.addEventListener("click",function()
{
    total();
})

function total()//issue is here
{
    for(let x=0;x<save.length;x++)
    {
        sum=save[x]+sum;
    }
    alert(sum);
}