let inputFloor=document.getElementById("input-floor");
let saveBtn=document.getElementById("save-button1");
let list=document.getElementById("list");
let EnterBtn="";
let save=[];


saveBtn.addEventListener("click",function()
    {
        for(let x=0;x<inputFloor.value;x++)
        {
            save+=`<input><br>`
        }
        EnterBtn=`<button onclick="button()">save</button>`

        list.innerHTML=save+EnterBtn;
    }
)
